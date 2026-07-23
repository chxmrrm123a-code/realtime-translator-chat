import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { mkdtempSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const projectDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function startServer({ databasePath, port }) {
  return spawn(process.execPath, ["server.js"], {
    cwd: projectDir,
    env: {
      ...process.env,
      HOST: "127.0.0.1",
      PORT: String(port),
      CHAT_DATABASE_PATH: databasePath,
      ROOM_HISTORY_LIMIT: "1000",
      OPENAI_API_KEY: "",
      ANTHROPIC_API_KEY: ""
    },
    stdio: ["ignore", "pipe", "pipe"]
  });
}

async function waitForHealth(baseUrl, child) {
  let lastError;
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (child.exitCode !== null) {
      const stderr = await streamText(child.stderr);
      throw new Error(`Server exited before health check: ${stderr}`);
    }
    try {
      const response = await fetch(`${baseUrl}/healthz`);
      if (response.ok) return response.json();
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  throw lastError || new Error("Server did not become healthy.");
}

async function streamText(stream) {
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

async function stopServer(child) {
  if (child.exitCode !== null) return;
  child.kill("SIGTERM");
  await Promise.race([
    once(child, "exit"),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Server did not stop.")), 5_000)
    )
  ]);
}

async function postJson(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });
  const body = await response.json();
  assert.equal(response.ok, true, JSON.stringify(body));
  return body;
}

async function readFirstMessageEvent(url) {
  const controller = new AbortController();
  const response = await fetch(url, { signal: controller.signal });
  assert.equal(response.ok, true);
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let pending = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) throw new Error("SSE stream ended before message history arrived.");
      pending += decoder.decode(value, { stream: true });
      const blocks = pending.split("\n\n");
      pending = blocks.pop() || "";
      for (const block of blocks) {
        if (!block.includes("event: message")) continue;
        const data = block
          .split("\n")
          .find((line) => line.startsWith("data: "))
          ?.slice(6);
        if (data) return JSON.parse(data);
      }
    }
  } finally {
    controller.abort();
  }
}

test("chat history returns after the server restarts", async () => {
  const directory = mkdtempSync(path.join(os.tmpdir(), "trio-server-store-"));
  const databasePath = path.join(directory, "chat.sqlite");
  const port = 43_000 + (process.pid % 1_000);
  const baseUrl = `http://127.0.0.1:${port}`;
  let child;

  try {
    child = startServer({ databasePath, port });
    const initialHealth = await waitForHealth(baseUrl, child);
    assert.equal(initialHealth.trioTranslateApi, true);

    const compatibilityResponse = await fetch(`${baseUrl}/api/translate`);
    assert.equal(compatibilityResponse.status, 200);
    assert.deepEqual(await compatibilityResponse.json(), {
      configured: false,
      accessRequired: false,
      provider: "",
      model: ""
    });

    await postJson(`${baseUrl}/api/room/join`, {
      room: "PILOT-ROOM",
      clientId: "korea-user"
    });
    const sent = await postJson(`${baseUrl}/api/message`, {
      room: "PILOT-ROOM",
      senderId: "korea-user",
      senderName: "Korea",
      language: "ko",
      text: "서버를 다시 시작해도 이 기록이 보여야 합니다.",
      translationGuide: "정중한 업무 말투"
    });
    assert.ok(sent.id);
    await stopServer(child);

    child = startServer({ databasePath, port });
    const health = await waitForHealth(baseUrl, child);
    assert.equal(health.persistenceEnabled, true);
    assert.equal(health.storedMessages, 1);

    const restored = await readFirstMessageEvent(
      `${baseUrl}/events?room=PILOT-ROOM&client=vietnam-user&name=Vietnam&language=vi`
    );
    assert.equal(restored.id, sent.id);
    assert.equal(restored.text, "서버를 다시 시작해도 이 기록이 보여야 합니다.");
    assert.ok(restored.translatedText);
  } finally {
    if (child) await stopServer(child).catch(() => child.kill());
    rmSync(directory, { recursive: true, force: true });
  }
});
