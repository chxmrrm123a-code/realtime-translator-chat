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
    interfaceLanguage: "Language",
    translationGuide: "번역 지시사항",
    translationGuidePlaceholder: "예: 나는 anh, 상대는 em으로 번역",
    join: "입장",
    newRoom: "새 방 코드",
    chatRoom: "채팅방",
    room: "방",
    copyLink: "초대 링크 복사",
    leaveRoom: "방 나가기",
    messagePlaceholder: "메시지 입력",
    send: "전송",
    connecting: "연결 중",
    aiConnected: "AI 연결",
    demoMode: "데모 모드",
    reconnecting: "재연결",
    sendFailed: "전송 실패",
    copied: "초대 링크 복사됨",
    copyFailed: "복사 실패",
    original: "원문",
    shownToPartner: (language) => `상대 화면 (${language})`,
    notificationsOn: "알림 켜기",
    notificationsOff: "알림 끄기",
    notificationsEnabled: "알림 켜짐",
    notificationsDisabled: "알림 꺼짐",
    notificationsDenied: "알림 차단됨",
    notificationsUnsupported: "알림 미지원",
    notificationsFailed: "알림 실패",
    demo: "데모",
    members: (count) => `${count}명`,
    roomFullCount: (limit) => `${limit}명 마감`,
    roomFullStatus: "방이 가득 찼어요",
    roomFullMessage: "방 정원이 찼습니다. 새 방을 만들거나 다른 방 코드로 입장하세요."
  },
  en: {
    pageTitle: "AI Interpreter Chat",
    headerTitle: "Realtime interpreter room",
    waiting: "Waiting",
    roomCode: "Room code",
    nickname: "Nickname",
    chatLanguage: "My language",
    interfaceLanguage: "Language",
    translationGuide: "Translation instructions",
    translationGuidePlaceholder: "Example: Use anh for me and em for the other person",
    join: "Join",
    newRoom: "New room code",
    chatRoom: "Chat room",
    room: "Room",
    copyLink: "Copy invite link",
    leaveRoom: "Leave room",
    messagePlaceholder: "Type a message",
    send: "Send",
    connecting: "Connecting",
    aiConnected: "AI connected",
    demoMode: "Demo mode",
    reconnecting: "Reconnecting",
    sendFailed: "Send failed",
    copied: "Invite link copied",
    copyFailed: "Copy failed",
    original: "Original",
    shownToPartner: (language) => `Shown to partner (${language})`,
    notificationsOn: "Turn notifications on",
    notificationsOff: "Turn notifications off",
    notificationsEnabled: "Notifications on",
    notificationsDisabled: "Notifications off",
    notificationsDenied: "Notifications blocked",
    notificationsUnsupported: "Notifications unsupported",
    notificationsFailed: "Notifications failed",
    demo: "Demo",
    members: (count) => `${count} ${count === 1 ? "member" : "members"}`,
    roomFullCount: (limit) => `Full (${limit})`,
    roomFullStatus: "Room is full",
    roomFullMessage: "This room is full. Create a new room or join with another room code."
  },
  ja: {
    pageTitle: "AI通訳チャット",
    headerTitle: "リアルタイム通訳ルーム",
    waiting: "待機",
    roomCode: "ルームコード",
    nickname: "ニックネーム",
    chatLanguage: "自分の言語",
    interfaceLanguage: "Language",
    translationGuide: "翻訳指示",
    translationGuidePlaceholder: "例: 私は anh、相手は em として訳す",
    join: "入室",
    newRoom: "新しいルームコード",
    chatRoom: "チャットルーム",
    room: "ルーム",
    copyLink: "招待リンクをコピー",
    leaveRoom: "ルームを退出",
    messagePlaceholder: "メッセージを入力",
    send: "送信",
    connecting: "接続中",
    aiConnected: "AI接続",
    demoMode: "デモモード",
    reconnecting: "再接続",
    sendFailed: "送信失敗",
    copied: "招待リンクをコピーしました",
    copyFailed: "コピー失敗",
    original: "原文",
    shownToPartner: (language) => `相手の表示 (${language})`,
    notificationsOn: "通知をオン",
    notificationsOff: "通知をオフ",
    notificationsEnabled: "通知オン",
    notificationsDisabled: "通知オフ",
    notificationsDenied: "通知がブロックされています",
    notificationsUnsupported: "通知非対応",
    notificationsFailed: "通知失敗",
    demo: "デモ",
    members: (count) => `${count}人`,
    roomFullCount: (limit) => `${limit}人で満員`,
    roomFullStatus: "ルームが満員です",
    roomFullMessage: "このルームは満員です。新しいルームを作るか、別のルームコードで入室してください。"
  },
  zh: {
    pageTitle: "AI 翻译聊天",
    headerTitle: "实时翻译房间",
    waiting: "等待",
    roomCode: "房间代码",
    nickname: "昵称",
    chatLanguage: "我的语言",
    interfaceLanguage: "Language",
    translationGuide: "翻译指示",
    translationGuidePlaceholder: "例：把我译成 anh，对方译成 em",
    join: "进入",
    newRoom: "新房间代码",
    chatRoom: "聊天房间",
    room: "房间",
    copyLink: "复制邀请链接",
    leaveRoom: "离开房间",
    messagePlaceholder: "输入消息",
    send: "发送",
    connecting: "连接中",
    aiConnected: "AI 已连接",
    demoMode: "演示模式",
    reconnecting: "重新连接",
    sendFailed: "发送失败",
    copied: "邀请链接已复制",
    copyFailed: "复制失败",
    original: "原文",
    shownToPartner: (language) => `对方看到的翻译（${language}）`,
    notificationsOn: "开启通知",
    notificationsOff: "关闭通知",
    notificationsEnabled: "通知已开启",
    notificationsDisabled: "通知已关闭",
    notificationsDenied: "通知已被阻止",
    notificationsUnsupported: "不支持通知",
    notificationsFailed: "通知失败",
    demo: "演示",
    members: (count) => `${count}人`,
    roomFullCount: (limit) => `${limit}人已满`,
    roomFullStatus: "房间已满",
    roomFullMessage: "房间已满。请创建新房间或使用其他房间代码进入。"
  },
  vi: {
    pageTitle: "Chat phiên dịch AI",
    headerTitle: "Phòng phiên dịch trực tiếp",
    waiting: "Chờ",
    roomCode: "Mã phòng",
    nickname: "Biệt danh",
    chatLanguage: "Ngôn ngữ của tôi",
    interfaceLanguage: "Language",
    translationGuide: "Hướng dẫn dịch",
    translationGuidePlaceholder: "Ví dụ: Dịch tôi là anh, đối phương là em",
    join: "Vào phòng",
    newRoom: "Mã phòng mới",
    chatRoom: "Phòng chat",
    room: "Phòng",
    copyLink: "Sao chép liên kết mời",
    leaveRoom: "Rời phòng",
    messagePlaceholder: "Nhập tin nhắn",
    send: "Gửi",
    connecting: "Đang kết nối",
    aiConnected: "Đã kết nối AI",
    demoMode: "Chế độ demo",
    reconnecting: "Đang kết nối lại",
    sendFailed: "Gửi thất bại",
    copied: "Đã sao chép liên kết mời",
    copyFailed: "Sao chép thất bại",
    original: "Nguyên văn",
    shownToPartner: (language) => `Bản dịch phía đối phương (${language})`,
    notificationsOn: "Bật thông báo",
    notificationsOff: "Tắt thông báo",
    notificationsEnabled: "Đã bật thông báo",
    notificationsDisabled: "Đã tắt thông báo",
    notificationsDenied: "Thông báo bị chặn",
    notificationsUnsupported: "Không hỗ trợ thông báo",
    notificationsFailed: "Thông báo thất bại",
    demo: "Demo",
    members: (count) => `${count} người`,
    roomFullCount: (limit) => `Đầy ${limit} người`,
    roomFullStatus: "Phòng đã đầy",
    roomFullMessage: "Phòng đã đầy. Hãy tạo phòng mới hoặc vào bằng mã phòng khác."
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
  translationGuideInput: document.querySelector("#translationGuideInput"),
  joinButton: document.querySelector("#joinButton"),
  newRoomButton: document.querySelector("#newRoomButton"),
  roomCodeDisplay: document.querySelector("#roomCodeDisplay"),
  memberCount: document.querySelector("#memberCount"),
  notificationButton: document.querySelector("#notificationButton"),
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
  translationGuide: localStorage.getItem("translator.translationGuide") || "",
  clientId: crypto.randomUUID(),
  eventSource: null,
  aiEnabled: false,
  notificationSupported: false,
  notificationsEnabled: false,
  memberCount: 0,
  statusKey: "waiting",
  statusClass: "",
  roomFullLimit: null
};

els.roomInput.value = state.room;
els.nameInput.value = state.name;
els.languageInput.value = state.language;
els.uiLanguageInput.value = state.uiLanguage;
els.translationGuideInput.value = state.translationGuide;

els.joinButton.addEventListener("click", joinRoom);
els.newRoomButton.addEventListener("click", () => {
  els.roomInput.value = randomRoom();
  els.roomInput.focus();
});
els.copyLinkButton.addEventListener("click", copyRoomLink);
els.leaveRoomButton.addEventListener("click", leaveRoom);
els.notificationButton.addEventListener("click", toggleNotifications);
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
initializeNotifications();

async function joinRoom() {
  state.room = normalizeRoom(els.roomInput.value);
  state.name = normalizeName(els.nameInput.value);
  state.language = els.languageInput.value;
  state.translationGuide = normalizeTranslationGuide(els.translationGuideInput.value);
  state.roomFullLimit = null;

  localStorage.setItem("translator.room", state.room);
  localStorage.setItem("translator.name", state.name);
  localStorage.setItem("translator.language", state.language);
  localStorage.setItem("translator.translationGuide", state.translationGuide);

  els.roomInput.value = state.room;
  els.nameInput.value = state.name;
  els.translationGuideInput.value = state.translationGuide;
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
  syncPushSubscriptionIfAllowed().catch(() => {
    updateNotificationButton();
  });
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
  unregisterPushSubscriptionFromServer().catch(() => {});
  state.notificationsEnabled = false;
  updateNotificationButton();

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
  els.translationGuideInput.value = state.translationGuide;
  els.roomInput.focus();
}

function initializeNotifications() {
  state.notificationSupported =
    window.isSecureContext &&
    "Notification" in window &&
    "serviceWorker" in navigator &&
    "PushManager" in window;
  updateNotificationButton();
  syncPushSubscriptionIfAllowed().catch(() => {
    updateNotificationButton();
  });
}

async function toggleNotifications() {
  if (!state.notificationSupported) {
    setStatusKey("notificationsUnsupported", "demo");
    return;
  }

  if (state.notificationsEnabled) {
    await disablePushNotifications();
    return;
  }

  await enablePushNotifications();
}

async function enablePushNotifications() {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      state.notificationsEnabled = false;
      updateNotificationButton();
      setStatusKey("notificationsDenied", "demo");
      return;
    }

    const registration = await getServiceWorkerRegistration();
    const configResponse = await fetch("/api/push/config");
    const config = await configResponse.json();
    if (!config.supported || !config.publicKey) throw new Error("Push is not configured.");

    let subscription = await registration.pushManager.getSubscription();
    if (!subscription) {
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(config.publicKey)
      });
    }

    await savePushSubscription(subscription);
    state.notificationsEnabled = true;
    updateNotificationButton();
    setStatusKey("notificationsEnabled", "online");
  } catch (error) {
    console.error("Notification enable failed:", error);
    state.notificationsEnabled = false;
    updateNotificationButton();
    setStatusKey("notificationsFailed", "demo");
  }
}

async function disablePushNotifications() {
  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    await unregisterPushSubscriptionFromServer(subscription);
    if (subscription) await subscription.unsubscribe();
    state.notificationsEnabled = false;
    updateNotificationButton();
    setStatusKey("notificationsDisabled", "");
  } catch (error) {
    console.error("Notification disable failed:", error);
    setStatusKey("notificationsFailed", "demo");
  }
}

async function syncPushSubscriptionIfAllowed() {
  if (!state.notificationSupported || Notification.permission !== "granted" || els.chatPanel.hidden) {
    state.notificationsEnabled = false;
    updateNotificationButton();
    return;
  }

  const registration = await getServiceWorkerRegistration();
  const subscription = await registration.pushManager.getSubscription();
  if (!subscription) {
    state.notificationsEnabled = false;
    updateNotificationButton();
    return;
  }

  await savePushSubscription(subscription);
  state.notificationsEnabled = true;
  updateNotificationButton();
}

async function getServiceWorkerRegistration() {
  const existing = await navigator.serviceWorker.getRegistration("/");
  if (existing) return existing;
  await navigator.serviceWorker.register("/sw.js", { scope: "/" });
  return navigator.serviceWorker.ready;
}

async function savePushSubscription(subscription) {
  const response = await fetch("/api/push/subscribe", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      room: state.room,
      clientId: state.clientId,
      name: state.name,
      language: state.language,
      subscription: subscription.toJSON()
    })
  });
  if (!response.ok) throw new Error("Push subscription failed.");
}

async function unregisterPushSubscriptionFromServer(subscription) {
  let endpoint = subscription?.endpoint;
  if (!endpoint && state.notificationSupported && "serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.getRegistration("/");
    const currentSubscription = await registration?.pushManager.getSubscription();
    endpoint = currentSubscription?.endpoint;
  }
  if (!endpoint) return;

  await fetch("/api/push/unsubscribe", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ endpoint })
  });
}

function updateNotificationButton() {
  els.notificationButton.hidden = !state.notificationSupported;
  if (!state.notificationSupported) return;
  els.notificationButton.classList.toggle("active", state.notificationsEnabled);
  setButtonLabel(els.notificationButton, t(state.notificationsEnabled ? "notificationsOff" : "notificationsOn"));
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
        translationGuide: state.translationGuide,
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

  if (message.senderId === state.clientId && Array.isArray(message.peerTranslations)) {
    const peerTranslations = message.peerTranslations.filter((translation) => translation?.translatedText);
    if (peerTranslations.length > 0) {
      const peerBox = document.createElement("div");
      peerBox.className = "message-peer-box";

      for (const translation of peerTranslations) {
        const languageName = languages[translation.targetLanguage] || translation.targetLanguageName;
        const label = document.createElement("div");
        label.className = "message-peer-label";
        label.textContent = `${t("shownToPartner", languageName)} · ${providerLabel(
          translation.translationProvider
        )}`;

        const text = document.createElement("p");
        text.className = "message-peer-text";
        text.textContent = translation.translatedText;

        peerBox.append(label, text);
      }

      item.append(peerBox);
    }
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
  setLabelText(els.translationGuideInput, "translationGuide");

  els.joinButton.textContent = t("join");
  setButtonLabel(els.newRoomButton, t("newRoom"));
  updateNotificationButton();
  setButtonLabel(els.copyLinkButton, t("copyLink"));
  setButtonLabel(els.leaveRoomButton, t("leaveRoom"));
  setButtonLabel(els.sendButton, t("send"));
  els.messageInput.placeholder = t("messagePlaceholder");
  els.translationGuideInput.placeholder = t("translationGuidePlaceholder");
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

function normalizeTranslationGuide(value) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, 500);
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

function urlBase64ToUint8Array(value) {
  const padding = "=".repeat((4 - (value.length % 4)) % 4);
  const base64 = (value + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  const output = new Uint8Array(raw.length);
  for (let index = 0; index < raw.length; index += 1) {
    output[index] = raw.charCodeAt(index);
  }
  return output;
}
