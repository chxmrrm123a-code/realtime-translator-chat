import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { randomBytes } from "node:crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "public");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "0.0.0.0";
const roomCapacity = Number(process.env.ROOM_CAPACITY || 2);

const languages = {
  ko: "Korean",
  en: "English",
  ja: "Japanese",
  zh: "Chinese",
  vi: "Vietnamese"
};

const localNames = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "中文",
  vi: "Tiếng Việt"
};

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml"
};

const rooms = new Map();

function getRoom(roomCode) {
  const normalized = normalizeRoom(roomCode);
  if (!rooms.has(normalized)) {
    rooms.set(normalized, {
      code: normalized,
      createdAt: Date.now(),
      lastActive: Date.now(),
      clients: new Map(),
      history: []
    });
  }
  const room = rooms.get(normalized);
  room.lastActive = Date.now();
  return room;
}

function normalizeRoom(value) {
  const clean = String(value || "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9-]/g, "")
    .slice(0, 24);
  return clean || randomRoomCode();
}

function randomRoomCode() {
  return randomBytes(3).toString("hex").toUpperCase();
}

function normalizeLanguage(value) {
  return Object.hasOwn(languages, value) ? value : "ko";
}

function normalizeName(value) {
  const clean = String(value || "").trim().replace(/\s+/g, " ").slice(0, 24);
  return clean || "Guest";
}

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(body)
  });
  res.end(body);
}

function sendSse(client, event, payload) {
  if (client.closed) return;
  client.res.write(`event: ${event}\n`);
  client.res.write(`data: ${JSON.stringify(payload)}\n\n`);
}

function broadcastPresence(room) {
  const members = [...room.clients.values()].map((client) => ({
    id: client.id,
    name: client.name,
    language: client.language,
    languageName: localNames[client.language]
  }));

  for (const client of room.clients.values()) {
    sendSse(client, "presence", { room: room.code, members });
  }
}

async function readRequestBody(req, limit = 32_000) {
  let body = "";
  for await (const chunk of req) {
    body += chunk;
    if (Buffer.byteLength(body) > limit) {
      throw new Error("Request body is too large.");
    }
  }
  return body ? JSON.parse(body) : {};
}

async function handleEvents(req, res, url) {
  const room = getRoom(url.searchParams.get("room"));
  const id = String(url.searchParams.get("client") || randomBytes(8).toString("hex")).slice(0, 64);
  const name = normalizeName(url.searchParams.get("name"));
  const language = normalizeLanguage(url.searchParams.get("language"));

  res.writeHead(200, {
    "content-type": "text/event-stream; charset=utf-8",
    "cache-control": "no-cache, no-transform",
    connection: "keep-alive",
    "x-accel-buffering": "no"
  });
  res.write("\n");

  const previous = room.clients.get(id);
  if (previous) {
    previous.closed = true;
    clearInterval(previous.ping);
    previous.res.end();
  }

  if (!previous && room.clients.size >= roomCapacity) {
    sendSse({ res, closed: false }, "roomFull", {
      room: room.code,
      limit: roomCapacity
    });
    res.end();
    return;
  }

  const client = {
    id,
    name,
    language,
    res,
    closed: false,
    ping: setInterval(() => sendSse(client, "ping", { at: Date.now() }), 25_000)
  };

  room.clients.set(id, client);
  sendSse(client, "connected", {
    room: room.code,
    client: { id, name, language, languageName: localNames[language] },
    aiEnabled: Boolean(process.env.OPENAI_API_KEY)
  });
  broadcastPresence(room);
  deliverHistoryToClient(room, client).catch((error) => {
    console.error("History delivery failed:", error);
  });

  req.on("close", () => {
    client.closed = true;
    clearInterval(client.ping);
    if (room.clients.get(id) === client) {
      room.clients.delete(id);
      broadcastPresence(room);
    }
  });
}

async function deliverHistoryToClient(room, client) {
  const clients = [...room.clients.values()];
  for (const message of room.history) {
    if (client.closed) break;

    const messageIndex = room.history.findIndex((item) => item.id === message.id);
    const context =
      messageIndex > 0 ? room.history.slice(Math.max(0, messageIndex - 10), messageIndex) : [];
    const translateFor = createTranslatorForMessage(message, context);
    const translation = await translateFor(client.language);
    const peerTranslations = await getPeerTranslationsForClient(clients, client, message, translateFor);

    sendSse(client, "message", {
      ...message,
      targetLanguage: client.language,
      targetLanguageName: localNames[client.language],
      translatedText: translation.text,
      translationProvider: translation.provider,
      translationError: translation.error || null,
      originalVisible: client.language !== message.sourceLanguage,
      peerTranslations
    });
  }
}

async function handleMessage(req, res) {
  let payload;
  try {
    payload = await readRequestBody(req);
  } catch {
    sendJson(res, 400, { ok: false, error: "Invalid message payload." });
    return;
  }

  const room = getRoom(payload.room);
  const text = String(payload.text || "").trim().slice(0, 2_000);
  if (!text) {
    sendJson(res, 422, { ok: false, error: "Message is empty." });
    return;
  }

  const sourceLanguage = normalizeLanguage(payload.language);
  const message = {
    id: randomBytes(10).toString("hex"),
    room: room.code,
    senderId: String(payload.senderId || "").slice(0, 64),
    senderName: normalizeName(payload.senderName),
    sourceLanguage,
    sourceLanguageName: localNames[sourceLanguage],
    text,
    createdAt: new Date().toISOString()
  };

  const context = room.history.slice(-10);
  room.history.push(message);
  if (room.history.length > 40) room.history.splice(0, room.history.length - 40);

  deliverMessage(room, message, context).catch((error) => {
    console.error("Message delivery failed:", error);
  });

  sendJson(res, 202, { ok: true, id: message.id });
}

async function deliverMessage(room, message, context) {
  const clients = [...room.clients.values()];
  const translateFor = createTranslatorForMessage(message, context);

  await Promise.all(
    clients.map(async (client) => {
      const translation = await translateFor(client.language);
      const peerTranslations = await getPeerTranslationsForClient(clients, client, message, translateFor);

      sendSse(client, "message", {
        ...message,
        targetLanguage: client.language,
        targetLanguageName: localNames[client.language],
        translatedText: translation.text,
        translationProvider: translation.provider,
        translationError: translation.error || null,
        originalVisible: client.language !== message.sourceLanguage,
        peerTranslations
      });
    })
  );
}

function createTranslatorForMessage(message, context) {
  const translations = new Map();
  return (targetLanguage) => {
    if (!translations.has(targetLanguage)) {
      translations.set(
        targetLanguage,
        translateMessage({
          text: message.text,
          sourceLanguage: message.sourceLanguage,
          targetLanguage,
          context
        })
      );
    }
    return translations.get(targetLanguage);
  };
}

async function getPeerTranslationsForClient(clients, client, message, translateFor) {
  if (client.id !== message.senderId) return [];

  const targetLanguages = [
    ...new Set(
      clients
        .filter((peer) => peer.id !== client.id)
        .map((peer) => peer.language)
        .filter((language) => language !== message.sourceLanguage)
    )
  ];

  return Promise.all(
    targetLanguages.map(async (targetLanguage) => {
      const translation = await translateFor(targetLanguage);
      return {
        targetLanguage,
        targetLanguageName: localNames[targetLanguage],
        translatedText: translation.text,
        translationProvider: translation.provider,
        translationError: translation.error || null
      };
    })
  );
}

async function translateMessage({ text, sourceLanguage, targetLanguage, context }) {
  if (sourceLanguage === targetLanguage) {
    return { text, provider: "original" };
  }

  if (!process.env.OPENAI_API_KEY) {
    return { text: demoTranslate(text, targetLanguage), provider: "demo" };
  }

  try {
    const translated = await translateWithOpenAI({
      text,
      sourceLanguage,
      targetLanguage,
      context
    });
    return { text: translated, provider: "openai" };
  } catch (error) {
    console.error("AI translation failed:", error);
    return {
      text: demoTranslate(text, targetLanguage),
      provider: "demo",
      error: "AI translation failed; demo translation shown."
    };
  }
}

async function translateWithOpenAI({ text, sourceLanguage, targetLanguage, context }) {
  const model = getTranslationModel();
  const recentContext = context
    .map((item) => `${languages[item.sourceLanguage]} ${item.senderName}: ${item.text}`)
    .join("\n");
  const prompt = [
    `Source language: ${languages[sourceLanguage]}.`,
    `Target language: ${languages[targetLanguage]}.`,
    "Translate only the exact text inside <message_to_translate> into the target language.",
    "Use recent context only to understand tone, pronouns, names, and slang. Do not translate, answer, continue, or summarize the context.",
    "Preserve names, handles, links, code, numbers, line breaks, emojis, slang intensity, politeness level, and profanity intensity.",
    "Return only the translated message. If the message is already in the target language, return it unchanged.",
    "",
    "<recent_context_do_not_translate>",
    recentContext || "No previous messages.",
    "</recent_context_do_not_translate>",
    "",
    "<message_to_translate>",
    text,
    "</message_to_translate>"
  ].join("\n");

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "system",
          content: "You are a precise real-time chat translation engine."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI API ${response.status}: ${errorText.slice(0, 500)}`);
  }

  const data = await response.json();
  const outputText = extractResponseText(data).trim();
  if (!outputText) throw new Error("Empty AI translation response.");
  return outputText.slice(0, 4_000);
}

function getTranslationModel() {
  const model = String(process.env.OPENAI_TRANSLATION_MODEL || "").trim();
  if (!model || /audio|transcribe|transcription|tts|whisper/i.test(model)) {
    return "gpt-4.1-mini";
  }
  return model;
}

function extractResponseText(data) {
  if (typeof data.output_text === "string") return data.output_text;

  const chunks = [];
  for (const output of data.output || []) {
    for (const content of output.content || []) {
      if (typeof content.text === "string") chunks.push(content.text);
    }
  }
  return chunks.join("\n");
}

function demoTranslate(text, targetLanguage) {
  const prefix = {
    ko: "데모 번역",
    en: "Demo translation",
    ja: "デモ翻訳",
    zh: "演示翻译",
    vi: "Bản dịch demo"
  }[targetLanguage];
  return `${prefix}: ${text}`;
}

async function serveStatic(req, res, url) {
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/" || pathname.startsWith("/room/")) pathname = "/index.html";

  const filePath = path.normalize(path.join(publicDir, pathname));
  if (!filePath.startsWith(publicDir)) {
    sendJson(res, 403, { ok: false, error: "Forbidden." });
    return;
  }

  try {
    const body = await readFile(filePath);
    const ext = path.extname(filePath);
    const noCache = new Set([".html", ".css", ".js"]);
    res.writeHead(200, {
      "content-type": mimeTypes[ext] || "application/octet-stream",
      "cache-control": noCache.has(ext) ? "no-cache" : "public, max-age=3600"
    });
    res.end(body);
  } catch {
    sendJson(res, 404, { ok: false, error: "Not found." });
  }
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (req.method === "GET" && url.pathname === "/events") {
    await handleEvents(req, res, url);
    return;
  }

  if (req.method === "GET" && url.pathname === "/healthz") {
    sendJson(res, 200, {
      ok: true,
      rooms: rooms.size,
      roomCapacity,
      aiEnabled: Boolean(process.env.OPENAI_API_KEY)
    });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/message") {
    await handleMessage(req, res);
    return;
  }

  if (req.method === "GET") {
    await serveStatic(req, res, url);
    return;
  }

  sendJson(res, 405, { ok: false, error: "Method not allowed." });
});

server.listen(port, host, () => {
  console.log(`Realtime translator chat is running at http://localhost:${port}`);
});

setInterval(() => {
  const now = Date.now();
  for (const [code, room] of rooms) {
    if (room.clients.size === 0 && now - room.lastActive > 60 * 60 * 1000) {
      rooms.delete(code);
    }
  }
}, 10 * 60 * 1000).unref();
