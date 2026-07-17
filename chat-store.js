import { mkdirSync } from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

function parseJson(value, fallback) {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function serializeMessage(row) {
  const message = {
    id: row.id,
    room: row.room_code,
    senderId: row.sender_id,
    senderName: row.sender_name,
    sourceLanguage: row.source_language,
    sourceLanguageName: row.source_language_name,
    text: row.text,
    replyTo: parseJson(row.reply_to_json, null),
    readBy: parseJson(row.read_by_json, {}),
    reactions: parseJson(row.reactions_json, {}),
    recalledAt: row.recalled_at || "",
    createdAt: row.created_at
  };
  Object.defineProperty(message, "translationGuide", {
    value: row.translation_guide || "",
    enumerable: false,
    writable: true
  });
  return message;
}

export function createChatStore(databasePath) {
  const resolvedPath = path.resolve(databasePath);
  mkdirSync(path.dirname(resolvedPath), { recursive: true });

  const db = new DatabaseSync(resolvedPath);
  db.exec(`
    PRAGMA journal_mode = WAL;
    PRAGMA foreign_keys = ON;
    PRAGMA busy_timeout = 5000;

    CREATE TABLE IF NOT EXISTS rooms (
      code TEXT PRIMARY KEY,
      created_at INTEGER NOT NULL,
      last_active INTEGER NOT NULL,
      owner_id TEXT NOT NULL DEFAULT '',
      title TEXT NOT NULL DEFAULT '',
      expires_at INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS messages (
      id TEXT PRIMARY KEY,
      room_code TEXT NOT NULL REFERENCES rooms(code) ON DELETE CASCADE,
      sender_id TEXT NOT NULL,
      sender_name TEXT NOT NULL,
      source_language TEXT NOT NULL,
      source_language_name TEXT NOT NULL,
      text TEXT NOT NULL,
      reply_to_json TEXT,
      read_by_json TEXT NOT NULL DEFAULT '{}',
      reactions_json TEXT NOT NULL DEFAULT '{}',
      recalled_at TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL,
      translation_guide TEXT NOT NULL DEFAULT ''
    );

    CREATE INDEX IF NOT EXISTS messages_room_created_idx
      ON messages(room_code, created_at DESC);

    CREATE TABLE IF NOT EXISTS translations (
      message_id TEXT NOT NULL REFERENCES messages(id) ON DELETE CASCADE,
      target_language TEXT NOT NULL,
      translated_text TEXT NOT NULL,
      provider TEXT NOT NULL,
      error TEXT,
      updated_at TEXT NOT NULL,
      PRIMARY KEY (message_id, target_language)
    );
  `);

  const selectRoom = db.prepare(`
    SELECT code, created_at, last_active, owner_id, title, expires_at
    FROM rooms WHERE code = ?
  `);
  const selectMessages = db.prepare(`
    SELECT * FROM (
      SELECT * FROM messages
      WHERE room_code = ?
      ORDER BY created_at DESC
      LIMIT ?
    ) ORDER BY created_at ASC
  `);
  const upsertRoom = db.prepare(`
    INSERT INTO rooms (code, created_at, last_active, owner_id, title, expires_at)
    VALUES (?, ?, ?, ?, ?, ?)
    ON CONFLICT(code) DO UPDATE SET
      last_active = excluded.last_active,
      owner_id = excluded.owner_id,
      title = excluded.title,
      expires_at = excluded.expires_at
  `);
  const upsertMessage = db.prepare(`
    INSERT INTO messages (
      id, room_code, sender_id, sender_name, source_language,
      source_language_name, text, reply_to_json, read_by_json,
      reactions_json, recalled_at, created_at, translation_guide
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      text = excluded.text,
      reply_to_json = excluded.reply_to_json,
      read_by_json = excluded.read_by_json,
      reactions_json = excluded.reactions_json,
      recalled_at = excluded.recalled_at,
      translation_guide = excluded.translation_guide
  `);
  const selectTranslation = db.prepare(`
    SELECT translated_text, provider, error
    FROM translations
    WHERE message_id = ? AND target_language = ?
  `);
  const upsertTranslation = db.prepare(`
    INSERT INTO translations (
      message_id, target_language, translated_text, provider, error, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?)
    ON CONFLICT(message_id, target_language) DO UPDATE SET
      translated_text = excluded.translated_text,
      provider = excluded.provider,
      error = excluded.error,
      updated_at = excluded.updated_at
  `);
  const deleteTranslationsForMessage = db.prepare(
    "DELETE FROM translations WHERE message_id = ?"
  );
  const deleteRoom = db.prepare("DELETE FROM rooms WHERE code = ?");
  const countRooms = db.prepare("SELECT COUNT(*) AS count FROM rooms");
  const countMessages = db.prepare("SELECT COUNT(*) AS count FROM messages");

  return {
    path: resolvedPath,

    loadRoom(code, historyLimit) {
      const row = selectRoom.get(code);
      if (!row) return null;
      return {
        code: row.code,
        createdAt: row.created_at,
        lastActive: row.last_active,
        ownerId: row.owner_id || "",
        title: row.title || "",
        expiresAt: row.expires_at || 0,
        history: selectMessages.all(code, historyLimit).map(serializeMessage)
      };
    },

    saveRoom(room) {
      upsertRoom.run(
        room.code,
        room.createdAt,
        room.lastActive,
        room.ownerId || "",
        room.title || "",
        room.expiresAt || 0
      );
    },

    saveMessage(message) {
      upsertMessage.run(
        message.id,
        message.room,
        message.senderId,
        message.senderName,
        message.sourceLanguage,
        message.sourceLanguageName,
        message.text,
        message.replyTo ? JSON.stringify(message.replyTo) : null,
        JSON.stringify(message.readBy || {}),
        JSON.stringify(message.reactions || {}),
        message.recalledAt || "",
        message.createdAt,
        message.translationGuide || ""
      );
    },

    loadTranslation(messageId, targetLanguage) {
      const row = selectTranslation.get(messageId, targetLanguage);
      if (!row) return null;
      return {
        text: row.translated_text,
        provider: row.provider,
        error: row.error || null
      };
    },

    saveTranslation(messageId, targetLanguage, translation) {
      upsertTranslation.run(
        messageId,
        targetLanguage,
        String(translation.text || ""),
        String(translation.provider || ""),
        translation.error ? String(translation.error) : null,
        new Date().toISOString()
      );
    },

    deleteTranslations(messageId) {
      deleteTranslationsForMessage.run(messageId);
    },

    deleteRoom(code) {
      deleteRoom.run(code);
    },

    stats() {
      return {
        rooms: Number(countRooms.get().count || 0),
        messages: Number(countMessages.get().count || 0)
      };
    },

    close() {
      db.close();
    }
  };
}
