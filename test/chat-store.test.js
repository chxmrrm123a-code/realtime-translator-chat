import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { createChatStore } from "../chat-store.js";

function fixture() {
  const directory = mkdtempSync(path.join(os.tmpdir(), "trio-chat-store-"));
  const databasePath = path.join(directory, "chat.sqlite");
  return {
    databasePath,
    cleanup() {
      rmSync(directory, { recursive: true, force: true });
    }
  };
}

test("persists rooms, messages and translated text across restarts", () => {
  const files = fixture();
  try {
    let store = createChatStore(files.databasePath);
    const room = {
      code: "KOREA-VIETNAM",
      createdAt: 1_700_000_000_000,
      lastActive: 1_700_000_100_000,
      ownerId: "owner-1",
      title: "한국·베트남 협업방",
      expiresAt: 0
    };
    const message = {
      id: "message-1",
      room: room.code,
      senderId: "owner-1",
      senderName: "Kim",
      sourceLanguage: "ko",
      sourceLanguageName: "한국어",
      text: "내일 오전에 회의를 시작하겠습니다.",
      replyTo: null,
      readBy: {
        "member-1": {
          id: "member-1",
          name: "Minh",
          language: "vi",
          readAt: "2026-07-17T01:00:00.000Z"
        }
      },
      reactions: {},
      recalledAt: "",
      createdAt: "2026-07-17T00:00:00.000Z",
      translationGuide: "정중한 업무 말투"
    };

    store.saveRoom(room);
    store.saveMessage(message);
    store.saveTranslation(message.id, "vi", {
      text: "Chúng ta sẽ bắt đầu cuộc họp vào sáng mai.",
      provider: "openai",
      error: null
    });
    store.close();

    store = createChatStore(files.databasePath);
    const loaded = store.loadRoom(room.code, 1000);
    assert.equal(loaded.title, room.title);
    assert.equal(loaded.history.length, 1);
    assert.equal(loaded.history[0].text, message.text);
    assert.equal(loaded.history[0].translationGuide, message.translationGuide);
    assert.equal(loaded.history[0].readBy["member-1"].name, "Minh");
    assert.deepEqual(store.loadTranslation(message.id, "vi"), {
      text: "Chúng ta sẽ bắt đầu cuộc họp vào sáng mai.",
      provider: "openai",
      error: null
    });
    assert.deepEqual(store.stats(), { rooms: 1, messages: 1 });
    store.close();
  } finally {
    files.cleanup();
  }
});

test("deleting an expired room also deletes its messages and translations", () => {
  const files = fixture();
  try {
    const store = createChatStore(files.databasePath);
    const room = {
      code: "EXPIRED",
      createdAt: 1,
      lastActive: 2,
      ownerId: "owner",
      title: "",
      expiresAt: 3
    };
    const message = {
      id: "expired-message",
      room: room.code,
      senderId: "owner",
      senderName: "Owner",
      sourceLanguage: "en",
      sourceLanguageName: "English",
      text: "Expired",
      replyTo: null,
      readBy: {},
      reactions: {},
      recalledAt: "",
      createdAt: "2026-07-17T00:00:00.000Z",
      translationGuide: ""
    };
    store.saveRoom(room);
    store.saveMessage(message);
    store.saveTranslation(message.id, "ko", {
      text: "만료됨",
      provider: "openai",
      error: null
    });

    store.deleteRoom(room.code);
    assert.equal(store.loadRoom(room.code, 1000), null);
    assert.equal(store.loadTranslation(message.id, "ko"), null);
    assert.deepEqual(store.stats(), { rooms: 0, messages: 0 });
    store.close();
  } finally {
    files.cleanup();
  }
});
