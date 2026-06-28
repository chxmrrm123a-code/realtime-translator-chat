const languages = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "中文",
  vi: "Tiếng Việt"
};

const uiText = {
  ko: {
    pageTitle: "AI 통역 채팅",
    headerTitle: "실시간 통역방",
    waiting: "대기",
    roomCode: "방 코드",
    nickname: "닉네임",
    chatLanguage: "내 언어",
    interfaceLanguage: "화면 언어",
    join: "입장",
    newRoom: "새 방 코드",
    chatRoom: "채팅방",
    room: "방",
    copyLink: "방 링크 복사",
    leaveRoom: "방 나가기",
    messagePlaceholder: "메시지 입력",
    send: "전송",
    connecting: "연결 중",
    aiConnected: "AI 연결",
    demoMode: "데모 모드",
    reconnecting: "재연결",
    sendFailed: "전송 실패",
    copied: "복사됨",
    copyFailed: "복사 실패",
    original: "원문",
    demo: "데모",
    members: (count) => `${count}명`,
    roomFullCount: (limit) => `${limit}명 마감`,
    roomFullStatus: "방이 가득 찼어요",
    roomFullMessage:
      "이 방은 1:1 전용이라 이미 2명이 입장했습니다. 새 방을 만들거나 다른 방 코드로 입장하세요."
  },
  en: {
    pageTitle: "AI Interpreter Chat",
    headerTitle: "Realtime interpreter room",
    waiting: "Waiting",
    roomCode: "Room code",
    nickname: "Nickname",
    chatLanguage: "My language",
    interfaceLanguage: "Site language",
    join: "Join",
    newRoom: "New room code",
    chatRoom: "Chat room",
    room: "Room",
    copyLink: "Copy room link",
    leaveRoom: "Leave room",
    messagePlaceholder: "Type a message",
    send: "Send",
    connecting: "Connecting",
    aiConnected: "AI connected",
    demoMode: "Demo mode",
    reconnecting: "Reconnecting",
    sendFailed: "Send failed",
    copied: "Copied",
    copyFailed: "Copy failed",
    original: "Original",
    demo: "Demo",
    members: (count) => `${count} ${count === 1 ? "member" : "members"}`,
    roomFullCount: (limit) => `Full (${limit})`,
    roomFullStatus: "Room is full",
    roomFullMessage:
      "This room is limited to 1:1 chat and already has 2 people. Create a new room or join with another room code."
  },
  ja: {
    pageTitle: "AI通訳チャット",
    headerTitle: "リアルタイム通訳ルーム",
    waiting: "待機",
    roomCode: "ルームコード",
    nickname: "ニックネーム",
    chatLanguage: "自分の言語",
    interfaceLanguage: "画面の言語",
    join: "入室",
    newRoom: "新しいルームコード",
    chatRoom: "チャットルーム",
    room: "ルーム",
    copyLink: "ルームリンクをコピー",
    leaveRoom: "ルームを退出",
    messagePlaceholder: "メッセージを入力",
    send: "送信",
    connecting: "接続中",
    aiConnected: "AI接続",
    demoMode: "デモモード",
    reconnecting: "再接続",
    sendFailed: "送信失敗",
    copied: "コピーしました",
    copyFailed: "コピー失敗",
    original: "原文",
    demo: "デモ",
    members: (count) => `${count}人`,
    roomFullCount: (limit) => `${limit}人で満員`,
    roomFullStatus: "ルームが満員です",
    roomFullMessage:
      "このルームは1対1専用のため、すでに2人が入室しています。新しいルームを作るか、別のルームコードで入室してください。"
  },
  zh: {
    pageTitle: "AI 翻译聊天",
    headerTitle: "实时翻译房间",
    waiting: "等待",
    roomCode: "房间代码",
    nickname: "昵称",
    chatLanguage: "我的语言",
    interfaceLanguage: "界面语言",
    join: "进入",
    newRoom: "新房间代码",
    chatRoom: "聊天房间",
    room: "房间",
    copyLink: "复制房间链接",
    leaveRoom: "离开房间",
    messagePlaceholder: "输入消息",
    send: "发送",
    connecting: "连接中",
    aiConnected: "AI 已连接",
    demoMode: "演示模式",
    reconnecting: "重新连接",
    sendFailed: "发送失败",
    copied: "已复制",
    copyFailed: "复制失败",
    original: "原文",
    demo: "演示",
    members: (count) => `${count}人`,
    roomFullCount: (limit) => `${limit}人已满`,
    roomFullStatus: "房间已满",
    roomFullMessage:
      "此房间为 1 对 1 专用，已有 2 人进入。请创建新房间或使用其他房间代码进入。"
  },
  vi: {
    pageTitle: "Chat phiên dịch AI",
    headerTitle: "Phòng phiên dịch trực tiếp",
    waiting: "Chờ",
    roomCode: "Mã phòng",
    nickname: "Biệt danh",
    chatLanguage: "Ngôn ngữ của tôi",
    interfaceLanguage: "Ngôn ngữ giao diện",
    join: "Vào phòng",
    newRoom: "Mã phòng mới",
    chatRoom: "Phòng chat",
    room: "Phòng",
    copyLink: "Sao chép liên kết phòng",
    leaveRoom: "Rời phòng",
    messagePlaceholder: "Nhập tin nhắn",
    send: "Gửi",
    connecting: "Đang kết nối",
    aiConnected: "Đã kết nối AI",
    demoMode: "Chế độ demo",
    reconnecting: "Đang kết nối lại",
    sendFailed: "Gửi thất bại",
    copied: "Đã sao chép",
    copyFailed: "Sao chép thất bại",
    original: "Nguyên văn",
    demo: "Demo",
    members: (count) => `${count} người`,
    roomFullCount: (limit) => `Đầy ${limit} người`,
    roomFullStatus: "Phòng đã đầy",
    roomFullMessage:
      "Phòng này dành riêng cho 1:1 nên đã có 2 người tham gia. Hãy tạo phòng mới hoặc vào bằng mã phòng khác."
  }
};

const els = {
  connectionStatus: document.querySelector("#connectionStatus"),
  joinPanel: document.querySelector("#joinPanel"),
  chatPanel: document.querySelector("#chatPanel"),
  roomInput: document.querySelector("#roomInput"),
  nameInput: document.querySelector("#nameInput"),
  languageInput: document.querySelector("#languageInput"),
  uiLanguageInput: document.querySelector("#uiLanguageInput"),
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
  uiLanguage: normalizeUiLanguage(localStorage.getItem("translator.uiLanguage") || detectUiLanguage()),
  clientId: crypto.randomUUID(),
  eventSource: null,
  aiEnabled: false,
  memberCount: 0,
  statusKey: "waiting",
  statusClass: "",
  roomFullLimit: null
};

els.roomInput.value = state.room;
els.nameInput.value = state.name;
els.languageInput.value = state.language;
els.uiLanguageInput.value = state.uiLanguage;

els.joinButton.addEventListener("click", joinRoom);
els.newRoomButton.addEventListener("click", () => {
  els.roomInput.value = randomRoom();
  els.roomInput.focus();
});
els.copyLinkButton.addEventListener("click", copyRoomLink);
els.leaveRoomButton.addEventListener("click", leaveRoom);
els.uiLanguageInput.addEventListener("change", () => {
  state.uiLanguage = normalizeUiLanguage(els.uiLanguageInput.value);
  localStorage.setItem("translator.uiLanguage", state.uiLanguage);
  applyUiLanguage();
});
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

applyUiLanguage();

function joinRoom() {
  state.room = normalizeRoom(els.roomInput.value);
  state.name = normalizeName(els.nameInput.value);
  state.language = els.languageInput.value;
  state.roomFullLimit = null;

  localStorage.setItem("translator.room", state.room);
  localStorage.setItem("translator.name", state.name);
  localStorage.setItem("translator.language", state.language);

  els.roomInput.value = state.room;
  els.nameInput.value = state.name;
  els.roomCodeDisplay.textContent = state.room;
  els.messages.replaceChildren();
  els.messageInput.disabled = false;
  els.sendButton.disabled = false;
  state.memberCount = 0;
  updateMemberCount();
  els.joinPanel.hidden = true;
  els.chatPanel.hidden = false;
  history.replaceState(null, "", `/room/${encodeURIComponent(state.room)}`);
  connectEvents();
  els.messageInput.focus();
}

function connectEvents() {
  if (state.eventSource) state.eventSource.close();

  setStatusKey("connecting", "");
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
    setStatusKey(state.aiEnabled ? "aiConnected" : "demoMode", state.aiEnabled ? "online" : "demo");
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
    state.roomFullLimit = payload.limit;
    updateMemberCount();
    setStatusKey("roomFullStatus", "demo");
    renderSystemMessage(t("roomFullMessage"));
  });

  state.eventSource.addEventListener("message", (event) => {
    const payload = JSON.parse(event.data);
    renderMessage(payload);
  });

  state.eventSource.onerror = () => {
    setStatusKey("reconnecting", "");
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
  state.memberCount = 0;
  state.roomFullLimit = null;
  updateMemberCount();
  els.chatPanel.hidden = true;
  els.joinPanel.hidden = false;
  history.replaceState(null, "", "/");
  setStatusKey("waiting", "");
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
    setStatusKey("sendFailed", "demo");
  } finally {
    els.sendButton.disabled = false;
    els.messageInput.focus();
  }
}

function renderMembers(members) {
  state.memberCount = members.length;
  state.roomFullLimit = null;
  updateMemberCount();
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
    setStatusKey("copied", state.aiEnabled ? "online" : "demo");
    window.setTimeout(() => {
      setStatusKey(state.aiEnabled ? "aiConnected" : "demoMode", state.aiEnabled ? "online" : "demo");
    }, 1400);
  } catch {
    setStatusKey("copyFailed", "demo");
  }
}

function applyUiLanguage() {
  document.documentElement.lang = state.uiLanguage;
  document.title = t("pageTitle");
  document.querySelector(".topbar h1").textContent = t("headerTitle");

  setLabelText(els.roomInput, "roomCode");
  setLabelText(els.nameInput, "nickname");
  setLabelText(els.languageInput, "chatLanguage");
  setLabelText(els.uiLanguageInput, "interfaceLanguage");

  els.joinButton.textContent = t("join");
  setButtonLabel(els.newRoomButton, t("newRoom"));
  setButtonLabel(els.copyLinkButton, t("copyLink"));
  setButtonLabel(els.leaveRoomButton, t("leaveRoom"));
  setButtonLabel(els.sendButton, t("send"));
  els.messageInput.placeholder = t("messagePlaceholder");
  els.joinPanel.setAttribute("aria-label", t("join"));
  els.chatPanel.setAttribute("aria-label", t("chatRoom"));
  document.querySelector(".room-label").textContent = t("room");

  updateMemberCount();
  refreshStatus();
}

function setLabelText(input, key) {
  const label = input.closest("label");
  const labelText = label?.querySelector("span");
  if (labelText) labelText.textContent = t(key);
}

function setButtonLabel(button, label) {
  button.title = label;
  button.setAttribute("aria-label", label);
}

function updateMemberCount() {
  els.memberCount.textContent =
    state.roomFullLimit == null ? t("members", state.memberCount) : t("roomFullCount", state.roomFullLimit);
}

function setStatusKey(key, className) {
  state.statusKey = key;
  state.statusClass = className;
  refreshStatus();
}

function refreshStatus() {
  setStatus(t(state.statusKey), state.statusClass);
}

function t(key, ...args) {
  const dictionary = uiText[state.uiLanguage] || uiText.ko;
  const value = dictionary[key] || uiText.en[key] || key;
  return typeof value === "function" ? value(...args) : value;
}

function normalizeUiLanguage(value) {
  return Object.hasOwn(uiText, value) ? value : "ko";
}

function detectUiLanguage() {
  const browserLanguage = (navigator.language || "").toLowerCase();
  if (browserLanguage.startsWith("ko")) return "ko";
  if (browserLanguage.startsWith("ja")) return "ja";
  if (browserLanguage.startsWith("zh")) return "zh";
  if (browserLanguage.startsWith("vi")) return "vi";
  return "en";
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
  if (provider === "original") return t("original");
  return t("demo");
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
