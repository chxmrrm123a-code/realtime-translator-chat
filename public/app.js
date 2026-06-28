const languages = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "中文",
  vi: "Tiếng Việt"
};

const els = {
  connectionStatus: document.querySelector("#connectionStatus"),
  joinPanel: document.querySelector("#joinPanel"),
  chatPanel: document.querySelector("#chatPanel"),
  roomInput: document.querySelector("#roomInput"),
  nameInput: document.querySelector("#nameInput"),
  languageInput: document.querySelector("#languageInput"),
  joinButton: document.querySelector("#joinButton"),
  newRoomButton: document.querySelector("#newRoomButton"),
  roomCodeDisplay: document.querySelector("#roomCodeDisplay"),
  memberCount: document.querySelector("#memberCount"),
  copyLinkButton: document.querySelector("#copyLinkButton"),
  leaveRoomButton: document.querySelector("#leaveRoomButton"),
  memberRow: document.querySelector("#memberRow"),
  messages: document.querySelector("#messages"),
  messageForm: document.querySelector("#messageForm"),
  messageInput: document.querySelector("#messageInput"),
  sendButton: document.querySelector("#sendButton")
};

const state = {
  room: roomFromPath() || localStorage.getItem("translator.room") || randomRoom(),
  name: localStorage.getItem("translator.name") || "",
  language: localStorage.getItem("translator.language") || "ko",
  clientId: crypto.randomUUID(),
  eventSource: null,
  aiEnabled: false
};

els.roomInput.value = state.room;
els.nameInput.value = state.name;
els.languageInput.value = state.language;

els.joinButton.addEventListener("click", joinRoom);
els.newRoomButton.addEventListener("click", () => {
  els.roomInput.value = randomRoom();
  els.roomInput.focus();
});
els.copyLinkButton.addEventListener("click", copyRoomLink);
els.leaveRoomButton.addEventListener("click", leaveRoom);
els.messageForm.addEventListener("submit", sendMessage);
els.messageInput.addEventListener("input", resizeComposer);
els.messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    els.messageForm.requestSubmit();
  }
});

if (roomFromPath()) {
  els.roomInput.value = roomFromPath();
}

function joinRoom() {
  state.room = normalizeRoom(els.roomInput.value);
  state.name = normalizeName(els.nameInput.value);
  state.language = els.languageInput.value;

  localStorage.setItem("translator.room", state.room);
  localStorage.setItem("translator.name", state.name);
  localStorage.setItem("translator.language", state.language);

  els.roomInput.value = state.room;
  els.nameInput.value = state.name;
  els.roomCodeDisplay.textContent = state.room;
  els.messages.replaceChildren();
  els.messageInput.disabled = false;
  els.sendButton.disabled = false;
  els.joinPanel.hidden = true;
  els.chatPanel.hidden = false;
  history.replaceState(null, "", `/room/${encodeURIComponent(state.room)}`);
  connectEvents();
  els.messageInput.focus();
}

function connectEvents() {
  if (state.eventSource) state.eventSource.close();

  setStatus("연결 중", "");
  const params = new URLSearchParams({
    room: state.room,
    client: state.clientId,
    name: state.name,
    language: state.language
  });
  state.eventSource = new EventSource(`/events?${params}`);

  state.eventSource.addEventListener("connected", (event) => {
    const payload = JSON.parse(event.data);
    state.aiEnabled = payload.aiEnabled;
    setStatus(state.aiEnabled ? "AI 연결" : "데모 모드", state.aiEnabled ? "online" : "demo");
  });

  state.eventSource.addEventListener("presence", (event) => {
    const payload = JSON.parse(event.data);
    renderMembers(payload.members || []);
  });

  state.eventSource.addEventListener("roomFull", (event) => {
    const payload = JSON.parse(event.data);
    state.eventSource.close();
    state.eventSource = null;
    els.messageInput.disabled = true;
    els.sendButton.disabled = true;
    els.memberCount.textContent = `${payload.limit}\uBA85 \uB9C8\uAC10`;
    setStatus("\uBC29\uC774 \uAC00\uB4DD \uCC3C\uC5B4\uC694", "demo");
    renderSystemMessage(
      "\uC774 \uBC29\uC740 1:1 \uC804\uC6A9\uC774\uB77C \uC774\uBBF8 2\uBA85\uC774 \uC785\uC7A5\uD588\uC2B5\uB2C8\uB2E4. \uC0C8 \uBC29\uC744 \uB9CC\uB4E4\uAC70\uB098 \uB2E4\uB978 \uBC29 \uCF54\uB4DC\uB85C \uC785\uC7A5\uD558\uC138\uC694."
    );
  });

  state.eventSource.addEventListener("message", (event) => {
    const payload = JSON.parse(event.data);
    renderMessage(payload);
  });

  state.eventSource.onerror = () => {
    setStatus("재연결", "");
  };
}

function leaveRoom() {
  if (state.eventSource) {
    state.eventSource.close();
    state.eventSource = null;
  }

  els.messageInput.value = "";
  resizeComposer();
  els.messageInput.disabled = false;
  els.sendButton.disabled = false;
  els.messages.replaceChildren();
  els.memberRow.replaceChildren();
  els.memberCount.textContent = "0\uBA85";
  els.chatPanel.hidden = true;
  els.joinPanel.hidden = false;
  history.replaceState(null, "", "/");
  setStatus("\uB300\uAE30", "");
  els.roomInput.value = state.room;
  els.nameInput.value = state.name;
  els.languageInput.value = state.language;
  els.roomInput.focus();
}

async function sendMessage(event) {
  event.preventDefault();
  const text = els.messageInput.value.trim();
  if (!text) return;

  els.sendButton.disabled = true;
  try {
    const response = await fetch("/api/message", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        room: state.room,
        senderId: state.clientId,
        senderName: state.name,
        language: state.language,
        text
      })
    });
    if (!response.ok) throw new Error("Message failed");
    els.messageInput.value = "";
    resizeComposer();
  } catch {
    setStatus("전송 실패", "demo");
  } finally {
    els.sendButton.disabled = false;
    els.messageInput.focus();
  }
}

function renderMembers(members) {
  els.memberCount.textContent = `${members.length}명`;
  els.memberRow.replaceChildren(
    ...members.map((member) => {
      const chip = document.createElement("span");
      chip.className = "member-chip";
      const dot = document.createElement("span");
      dot.className = "member-dot";
      const text = document.createElement("span");
      text.textContent = `${member.name} · ${languages[member.language] || member.languageName}`;
      chip.append(dot, text);
      return chip;
    })
  );
}

function renderMessage(message) {
  const item = document.createElement("li");
  item.className = `message${message.senderId === state.clientId ? " mine" : ""}`;

  const meta = document.createElement("div");
  meta.className = "message-meta";

  const sender = document.createElement("span");
  sender.textContent = `${message.senderName} · ${languages[message.sourceLanguage]}`;

  const provider = document.createElement("span");
  provider.className = `provider${message.translationProvider === "demo" ? " demo" : ""}`;
  provider.textContent = providerLabel(message.translationProvider);

  const translated = document.createElement("p");
  translated.className = "message-text";
  translated.textContent = message.translatedText;

  meta.append(sender, provider);
  item.append(meta, translated);

  if (message.originalVisible) {
    const original = document.createElement("p");
    original.className = "message-original";
    original.textContent = message.text;
    item.append(original);
  }

  els.messages.append(item);
  item.scrollIntoView({ block: "end", behavior: "smooth" });
}

function renderSystemMessage(text) {
  const item = document.createElement("li");
  item.className = "message";
  const messageText = document.createElement("p");
  messageText.className = "message-text";
  messageText.textContent = text;
  item.append(messageText);
  els.messages.append(item);
  item.scrollIntoView({ block: "end", behavior: "smooth" });
}

async function copyRoomLink() {
  const url = `${location.origin}/room/${encodeURIComponent(state.room)}`;
  try {
    await navigator.clipboard.writeText(url);
    setStatus("복사됨", state.aiEnabled ? "online" : "demo");
    window.setTimeout(() => {
      setStatus(state.aiEnabled ? "AI 연결" : "데모 모드", state.aiEnabled ? "online" : "demo");
    }, 1400);
  } catch {
    setStatus("복사 실패", "demo");
  }
}

function resizeComposer() {
  els.messageInput.style.height = "auto";
  els.messageInput.style.height = `${els.messageInput.scrollHeight}px`;
}

function setStatus(text, className) {
  els.connectionStatus.textContent = text;
  els.connectionStatus.className = `status-pill${className ? ` ${className}` : ""}`;
}

function providerLabel(provider) {
  if (provider === "openai") return "AI";
  if (provider === "original") return "원문";
  return "데모";
}

function normalizeRoom(value) {
  return (
    String(value || "")
      .trim()
      .toUpperCase()
      .replace(/[^A-Z0-9-]/g, "")
      .slice(0, 24) || randomRoom()
  );
}

function normalizeName(value) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, 24) || "Guest";
}

function randomRoom() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let index = 0; index < 6; index += 1) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return code;
}

function roomFromPath() {
  const match = location.pathname.match(/^\/room\/([^/]+)$/);
  return match ? normalizeRoom(decodeURIComponent(match[1])) : "";
}
