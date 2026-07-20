self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(APP_SHELL_CACHE);
      const responses = await Promise.all(
        APP_SHELL_FILES.map((url) => fetch(url, { cache: "reload" }))
      );
      for (let index = 0; index < APP_SHELL_FILES.length; index += 1) {
        const response = responses[index];
        if (!response.ok) throw new Error(`Unable to cache ${APP_SHELL_FILES[index]}`);
        await cache.put(APP_SHELL_FILES[index], response);
      }
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names
          .filter((name) => name.startsWith("trio-app-shell-") && name !== APP_SHELL_CACHE)
          .map((name) => caches.delete(name))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/")) return;

  if (request.mode === "navigate") {
    event.respondWith(
      caches.match("/").then((cached) => cached || fetch(request))
    );
    event.waitUntil(
      fetch("/", { cache: "no-store" })
        .then(async (response) => {
          if (!response.ok) return;
          const cache = await caches.open(APP_SHELL_CACHE);
          await cache.put("/", response.clone());
          await cache.put("/index.html", response);
        })
        .catch(() => {})
    );
    return;
  }

  if (APP_SHELL_FILES.includes(url.pathname)) {
    event.respondWith(
      fetch(request, { cache: "no-store" })
        .then(async (response) => {
          if (response.ok) {
            const cache = await caches.open(APP_SHELL_CACHE);
            await cache.put(request, response.clone());
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
  }
});

self.addEventListener("push", (event) => {
  event.waitUntil(showPendingNotification());
});

const APP_SHELL_CACHE = "trio-app-shell-v7";
const APP_SHELL_FILES = ["/", "/index.html", "/styles.css", "/app.js", "/manifest.webmanifest"];

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || "/";

  event.waitUntil(
    (async () => {
      const allClients = await clients.matchAll({ type: "window", includeUncontrolled: true });
      for (const client of allClients) {
        if (client.url.includes(targetUrl) && "focus" in client) {
          return client.focus();
        }
      }
      return clients.openWindow(targetUrl);
    })()
  );
});

async function showPendingNotification() {
  const subscription = await self.registration.pushManager.getSubscription();
  if (!subscription?.endpoint) return;

  const response = await fetch("/api/push/pending", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ endpoint: subscription.endpoint })
  });
  if (!response.ok) return;

  const payload = await response.json();
  const notification = payload.notification;
  if (!notification) return;

  const roomUrl = notification.url || "/";
  const visibleClients = await clients.matchAll({ type: "window", includeUncontrolled: true });
  const roomIsVisible = visibleClients.some(
    (client) => client.url.includes(roomUrl) && client.visibilityState === "visible"
  );
  if (roomIsVisible) return;

  await self.registration.showNotification(notification.title || "AI Interpreter Chat", {
    body: notification.body || "",
    tag: notification.tag || "translator-chat",
    data: { url: roomUrl },
    renotify: false
  });
}
