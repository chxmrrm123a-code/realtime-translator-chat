self.addEventListener("push", (event) => {
  event.waitUntil(showPendingNotification());
});

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
