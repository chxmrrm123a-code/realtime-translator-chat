const languages = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "中文",
  vi: "Tiếng Việt"
};

const tonePresetIds = ["casual", "business", "polite", "friendly", "close"];
const reactionOptions = [
  { id: "like", emoji: "👍" },
  { id: "laugh", emoji: "😂" },
  { id: "cry", emoji: "😢" },
  { id: "wow", emoji: "😮" },
  { id: "heart", emoji: "❤️" }
];

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
    translationGuidePlaceholder: "예: 나는 anh, 상대는 em / 존댓말 / 회사 업무 말투",
    translationRules: "번역 규칙",
    presetTitle: "말투 프리셋",
    glossary: "용어집",
    glossaryPlaceholder: "예: 법인장 = General Director / 출하 = shipment",
    addRule: "규칙 추가",
    deleteRule: "규칙 삭제",
    applyRules: "규칙 적용",
    collapseRules: "규칙 접기",
    rulePlaceholder: "규칙 입력",
    ruleEmpty: "규칙을 추가하면 다음 메시지부터 적용돼요.",
    rulesActive: (count) => `${count}개 적용 중`,
    rulesAndGlossaryActive: (count) => `규칙 ${count}개 + 용어집 적용 중`,
    glossaryActive: "용어집 적용 중",
    rulesNone: "적용된 규칙 없음",
    rulesApplied: "규칙 적용됨",
    languageMismatch: "언어 확인",
    languageMismatchDetail: (detected, selected) =>
      `입력은 ${detected}처럼 보여요. 내 언어는 ${selected}입니다. 수정하거나 다시 전송하면 그대로 보냅니다.`,
    joinGlossary: "용어집",
    guideIntroTitle: "번역을 내 상황에 맞출 수 있어요",
    guideIntroInstructions: "번역 지시사항에는 말투, 호칭, 관계를 적어두세요.",
    guideIntroGlossary: "용어집에는 회사명, 직책, 자주 쓰는 업무 단어를 고정해두세요.",
    guideIntroPreview: "방 안에서는 보내기 전 상대 화면 미리보기도 확인할 수 있어요.",
    translationOptions: "번역 옵션",
    translationOptionsActive: "번역 옵션 적용 중",
    sentenceTranslator: "문장 번역기",
    sentenceTranslatorHint: "원하는 언어로 한 문장만 빠르게 번역",
    sentenceTranslatorSubtitle: "원하는 언어 하나를 골라 빠르게 번역해요.",
    sentenceSourceLanguage: "원문 언어",
    sentenceTargetLanguage: "번역할 언어",
    sentenceAutoDetect: "자동 감지",
    sentenceText: "문장",
    sentenceTextPlaceholder: "번역할 문장을 입력하세요.",
    sentenceGuide: "번역 규칙",
    sentenceGuidePlaceholder: "예: 자연스럽게 / 회사 말투 / 나는 anh, 상대는 em",
    translateSentence: "번역하기",
    sentenceResult: "번역 결과",
    sentenceCopy: "결과 복사",
    sentenceTranslating: "번역 중...",
    sentenceEmpty: "번역할 문장을 입력하세요.",
    sentenceTranslateFailed: "문장 번역 실패",
    sentenceCopied: "번역 결과 복사됨",
    close: "닫기",
    roomSettings: "방 설정",
    roomName: "방 이름",
    roomNamePlaceholder: "예: 베트남 법인 업무방",
    inviteExpiry: "초대 링크 만료",
    expiryNever: "만료 없음",
    expiry1h: "1시간",
    expiry24h: "24시간",
    expiry7d: "7일",
    saveRoomSettings: "방 설정 저장",
    closeRoomSettings: "설정 접기",
    settingsSaved: "방 설정 저장됨",
    settingsOwnerOnly: "방을 만든 사람만 설정을 바꿀 수 있어요.",
    roomExpired: "초대 링크가 만료됐어요.",
    peerWaiting: "상대방을 기다리는 중",
    peerOnlineOne: "상대방 접속 중",
    peerOnlineMany: (count) => `${count}명 접속 중`,
    typingOne: (name) => `${name} 입력 중...`,
    typingMany: (count) => `${count}명 입력 중...`,
    previewTranslation: "상대 화면 미리보기",
    previewButton: "상대 화면 미리보기",
    previewLoading: "번역 미리보기 중...",
    previewNoPeer: "상대방이 들어오면 미리보기를 만들 수 있어요.",
    previewFailed: "미리보기 실패",
    previewClear: "미리보기 닫기",
    retranslate: "다시 번역",
    retranslateNatural: "자연스럽게",
    retranslatePolite: "정중하게",
    retranslateBusiness: "회사 말투",
    retranslateLoading: "다시 번역 중",
    retranslateFailed: "다시 번역 실패",
    tonePresets: [
      { id: "casual", label: "일상", rule: "일상 대화처럼 자연스럽고 짧게 번역" },
      { id: "business", label: "회사", rule: "회사 업무 대화처럼 명확하고 실무적인 말투로 번역" },
      { id: "polite", label: "정중", rule: "정중하고 예의 있는 말투로 번역" },
      { id: "friendly", label: "친근", rule: "너무 딱딱하지 않게 친근하고 따뜻한 말투로 번역" },
      { id: "close", label: "연인", rule: "가까운 사이에 어울리게 다정하고 자연스러운 말투로 번역" }
    ],
    helpStepRoom: "새 방 코드를 만들거나 초대 링크로 들어오세요.",
    helpStepSettings: "내 언어를 정한 뒤 입장하세요.",
    helpStepChat: "내가 보낸 말은 상대 언어로, 상대 말은 내 언어로 보여요.",
    helpStepRulesIcon: "채팅방 오른쪽 조절 아이콘은 번역 규칙과 용어집을 바꾸는 버튼이에요.",
    replyToMessage: "이 문장에 답장",
    replyingTo: (name) => `${name}에게 답장`,
    cancelReply: "답장 취소",
    sentStatus: "전송됨",
    readCountStatus: (count) => `${count}명 읽음`,
    allReadStatus: "모두 읽음",
    recallMessage: "회수",
    recallFailed: "회수 실패",
    recallExpired: "회수 가능 시간이 지났어요.",
    messageRecalled: "메시지가 회수되었습니다",
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
    translationGuidePlaceholder: "Example: anh for me, em for them / polite / business tone",
    translationRules: "Translation rules",
    presetTitle: "Tone presets",
    glossary: "Glossary",
    glossaryPlaceholder: "Example: director = General Director / shipment = shipment",
    addRule: "Add rule",
    deleteRule: "Delete rule",
    applyRules: "Apply rules",
    collapseRules: "Collapse rules",
    rulePlaceholder: "Type a rule",
    ruleEmpty: "Add rules to apply them from your next message.",
    rulesActive: (count) => `${count} ${count === 1 ? "rule" : "rules"} active`,
    rulesAndGlossaryActive: (count) => `${count} ${count === 1 ? "rule" : "rules"} + glossary active`,
    glossaryActive: "Glossary active",
    rulesNone: "No active rules",
    rulesApplied: "Rules applied",
    languageMismatch: "Check language",
    languageMismatchDetail: (detected, selected) =>
      `This looks like ${detected}. Your language is set to ${selected}. Edit it, or send again to continue.`,
    joinGlossary: "Glossary",
    guideIntroTitle: "Tune translation to your situation",
    guideIntroInstructions: "Use instructions for tone, pronouns, relationship, and address terms.",
    guideIntroGlossary: "Use the glossary for company names, roles, and repeated work terms.",
    guideIntroPreview: "Inside a room, preview how your message will look to the other side.",
    translationOptions: "Translation options",
    translationOptionsActive: "Translation options active",
    sentenceTranslator: "Sentence translator",
    sentenceTranslatorHint: "Quickly translate one sentence into the language you choose",
    sentenceTranslatorSubtitle: "Choose one target language and translate quickly.",
    sentenceSourceLanguage: "Source language",
    sentenceTargetLanguage: "Target language",
    sentenceAutoDetect: "Auto detect",
    sentenceText: "Sentence",
    sentenceTextPlaceholder: "Type the sentence to translate.",
    sentenceGuide: "Translation rules",
    sentenceGuidePlaceholder: "Example: natural / business tone / use anh for me and em for them",
    translateSentence: "Translate",
    sentenceResult: "Translation result",
    sentenceCopy: "Copy result",
    sentenceTranslating: "Translating...",
    sentenceEmpty: "Type a sentence to translate.",
    sentenceTranslateFailed: "Sentence translation failed",
    sentenceCopied: "Translation copied",
    close: "Close",
    roomSettings: "Room settings",
    roomName: "Room name",
    roomNamePlaceholder: "Example: Vietnam office chat",
    inviteExpiry: "Invite link expiry",
    expiryNever: "No expiry",
    expiry1h: "1 hour",
    expiry24h: "24 hours",
    expiry7d: "7 days",
    saveRoomSettings: "Save room settings",
    closeRoomSettings: "Collapse settings",
    settingsSaved: "Room settings saved",
    settingsOwnerOnly: "Only the room creator can change settings.",
    roomExpired: "This invite link has expired.",
    peerWaiting: "Waiting for the other side",
    peerOnlineOne: "Other side online",
    peerOnlineMany: (count) => `${count} people online`,
    typingOne: (name) => `${name} is typing...`,
    typingMany: (count) => `${count} people are typing...`,
    previewTranslation: "Other side preview",
    previewButton: "Preview other side",
    previewLoading: "Previewing translation...",
    previewNoPeer: "A preview is available after someone else joins.",
    previewFailed: "Preview failed",
    previewClear: "Close preview",
    retranslate: "Retranslate",
    retranslateNatural: "Natural",
    retranslatePolite: "Polite",
    retranslateBusiness: "Business tone",
    retranslateLoading: "Retranslating",
    retranslateFailed: "Retranslation failed",
    tonePresets: [
      { id: "casual", label: "Casual", rule: "Translate in a natural everyday chat tone. Keep it clear and concise." },
      { id: "business", label: "Business", rule: "Translate in a clear, professional workplace tone." },
      { id: "polite", label: "Polite", rule: "Translate in a polite and respectful tone." },
      { id: "friendly", label: "Friendly", rule: "Translate in a friendly, warm tone without sounding too formal." },
      { id: "close", label: "Close", rule: "Translate in an affectionate tone suitable for a close partner, naturally and not exaggerated." }
    ],
    helpStepRoom: "Create a new room code or open an invite link.",
    helpStepSettings: "Choose your language before joining.",
    helpStepChat: "Your messages show in their language, and theirs show in yours.",
    helpStepRulesIcon: "The sliders icon on the right opens translation rules and glossary.",
    replyToMessage: "Reply to this message",
    replyingTo: (name) => `Replying to ${name}`,
    cancelReply: "Cancel reply",
    sentStatus: "Sent",
    readCountStatus: (count) => `${count} read`,
    allReadStatus: "Read by all",
    recallMessage: "Recall",
    recallFailed: "Recall failed",
    recallExpired: "Recall time has passed.",
    messageRecalled: "Message was recalled",
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
    translationGuidePlaceholder: "例: 私は anh、相手は em / 丁寧語 / ビジネス口調",
    translationRules: "翻訳ルール",
    presetTitle: "口調プリセット",
    glossary: "用語集",
    glossaryPlaceholder: "例: 法人長 = General Director / 出荷 = shipment",
    addRule: "ルールを追加",
    deleteRule: "ルールを削除",
    applyRules: "ルールを適用",
    collapseRules: "ルールを閉じる",
    rulePlaceholder: "ルールを入力",
    ruleEmpty: "ルールを追加すると次のメッセージから適用されます。",
    rulesActive: (count) => `${count}件適用中`,
    rulesAndGlossaryActive: (count) => `${count}件 + 用語集を適用中`,
    glossaryActive: "用語集を適用中",
    rulesNone: "適用中のルールなし",
    rulesApplied: "ルールを適用しました",
    languageMismatch: "言語を確認",
    languageMismatchDetail: (detected, selected) =>
      `入力は${detected}のように見えます。自分の言語は${selected}です。修正するか、もう一度送信するとそのまま送れます。`,
    joinGlossary: "用語集",
    guideIntroTitle: "翻訳を状況に合わせられます",
    guideIntroInstructions: "翻訳指示には口調、呼び方、関係性を書いてください。",
    guideIntroGlossary: "用語集には会社名、役職、よく使う業務用語を固定できます。",
    guideIntroPreview: "ルーム内では送信前に相手側の表示を確認できます。",
    translationOptions: "翻訳オプション",
    translationOptionsActive: "翻訳オプション適用中",
    sentenceTranslator: "文章翻訳",
    sentenceTranslatorHint: "選んだ言語へ一文だけすばやく翻訳",
    sentenceTranslatorSubtitle: "翻訳先を1つ選んで、すばやく翻訳できます。",
    sentenceSourceLanguage: "元の言語",
    sentenceTargetLanguage: "翻訳先の言語",
    sentenceAutoDetect: "自動検出",
    sentenceText: "文章",
    sentenceTextPlaceholder: "翻訳する文章を入力してください。",
    sentenceGuide: "翻訳ルール",
    sentenceGuidePlaceholder: "例: 自然に / 仕事口調 / 私は anh、相手は em",
    translateSentence: "翻訳する",
    sentenceResult: "翻訳結果",
    sentenceCopy: "結果をコピー",
    sentenceTranslating: "翻訳中...",
    sentenceEmpty: "翻訳する文章を入力してください。",
    sentenceTranslateFailed: "文章翻訳に失敗しました",
    sentenceCopied: "翻訳結果をコピーしました",
    close: "閉じる",
    roomSettings: "ルーム設定",
    roomName: "ルーム名",
    roomNamePlaceholder: "例: ベトナム法人業務ルーム",
    inviteExpiry: "招待リンク期限",
    expiryNever: "期限なし",
    expiry1h: "1時間",
    expiry24h: "24時間",
    expiry7d: "7日",
    saveRoomSettings: "設定を保存",
    closeRoomSettings: "設定を閉じる",
    settingsSaved: "ルーム設定を保存しました",
    settingsOwnerOnly: "ルーム作成者だけが設定を変更できます。",
    roomExpired: "招待リンクの期限が切れました。",
    peerWaiting: "相手の参加を待っています",
    peerOnlineOne: "相手がオンライン",
    peerOnlineMany: (count) => `${count}人がオンライン`,
    typingOne: (name) => `${name}が入力中...`,
    typingMany: (count) => `${count}人が入力中...`,
    previewTranslation: "相手側プレビュー",
    previewButton: "相手側をプレビュー",
    previewLoading: "翻訳をプレビュー中...",
    previewNoPeer: "相手が入室するとプレビューできます。",
    previewFailed: "プレビュー失敗",
    previewClear: "プレビューを閉じる",
    retranslate: "再翻訳",
    retranslateNatural: "自然に",
    retranslatePolite: "丁寧に",
    retranslateBusiness: "仕事口調",
    retranslateLoading: "再翻訳中",
    retranslateFailed: "再翻訳失敗",
    tonePresets: [
      { id: "casual", label: "日常", rule: "日常会話のように自然で短めに翻訳" },
      { id: "business", label: "仕事", rule: "職場の会話のように明確で実務的な口調で翻訳" },
      { id: "polite", label: "丁寧", rule: "丁寧で礼儀正しい口調で翻訳" },
      { id: "friendly", label: "親しみ", rule: "硬すぎず親しみやすく温かい口調で翻訳" },
      { id: "close", label: "親密", rule: "近い関係に合うように優しく自然な口調で翻訳" }
    ],
    helpStepRoom: "新しいルームコードを作るか、招待リンクから入ります。",
    helpStepSettings: "自分の言語を選んでから入室します。",
    helpStepChat: "自分の発言は相手の言語で、相手の発言は自分の言語で表示されます。",
    helpStepRulesIcon: "右側のスライダーアイコンで翻訳ルールと用語集を設定できます。",
    replyToMessage: "この文に返信",
    replyingTo: (name) => `${name}に返信`,
    cancelReply: "返信を取消",
    sentStatus: "送信済み",
    readCountStatus: (count) => `${count}人既読`,
    allReadStatus: "全員既読",
    recallMessage: "取消",
    recallFailed: "取消失敗",
    recallExpired: "取消できる時間を過ぎました。",
    messageRecalled: "メッセージが取り消されました",
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
    translationGuidePlaceholder: "例：我用 anh，对方用 em / 礼貌语气 / 商务语气",
    translationRules: "翻译规则",
    presetTitle: "语气预设",
    glossary: "术语表",
    glossaryPlaceholder: "例：法人长 = General Director / 出货 = shipment",
    addRule: "添加规则",
    deleteRule: "删除规则",
    applyRules: "应用规则",
    collapseRules: "收起规则",
    rulePlaceholder: "输入规则",
    ruleEmpty: "添加规则后，将从下一条消息开始应用。",
    rulesActive: (count) => `${count}条规则已启用`,
    rulesAndGlossaryActive: (count) => `${count}条规则 + 术语表已启用`,
    glossaryActive: "术语表已启用",
    rulesNone: "没有启用的规则",
    rulesApplied: "规则已应用",
    languageMismatch: "检查语言",
    languageMismatchDetail: (detected, selected) =>
      `输入看起来像${detected}。你的语言设置为${selected}。请修改，或再次发送以继续。`,
    joinGlossary: "术语表",
    guideIntroTitle: "可以按你的场景调整翻译",
    guideIntroInstructions: "在翻译指示里写语气、称呼、关系。",
    guideIntroGlossary: "在术语表里固定公司名、职位和常用业务词。",
    guideIntroPreview: "在房间里，发送前可以预览对方看到的译文。",
    translationOptions: "翻译选项",
    translationOptionsActive: "翻译选项已启用",
    sentenceTranslator: "句子翻译器",
    sentenceTranslatorHint: "快速翻译一句话到你选择的语言",
    sentenceTranslatorSubtitle: "选择一个目标语言，快速翻译。",
    sentenceSourceLanguage: "原文语言",
    sentenceTargetLanguage: "目标语言",
    sentenceAutoDetect: "自动检测",
    sentenceText: "句子",
    sentenceTextPlaceholder: "请输入要翻译的句子。",
    sentenceGuide: "翻译规则",
    sentenceGuidePlaceholder: "例：自然一点 / 商务语气 / 我用 anh，对方用 em",
    translateSentence: "翻译",
    sentenceResult: "翻译结果",
    sentenceCopy: "复制结果",
    sentenceTranslating: "正在翻译...",
    sentenceEmpty: "请输入要翻译的句子。",
    sentenceTranslateFailed: "句子翻译失败",
    sentenceCopied: "翻译结果已复制",
    close: "关闭",
    roomSettings: "房间设置",
    roomName: "房间名称",
    roomNamePlaceholder: "例：越南法人业务房",
    inviteExpiry: "邀请链接过期",
    expiryNever: "不过期",
    expiry1h: "1小时",
    expiry24h: "24小时",
    expiry7d: "7天",
    saveRoomSettings: "保存房间设置",
    closeRoomSettings: "收起设置",
    settingsSaved: "房间设置已保存",
    settingsOwnerOnly: "只有房间创建者可以修改设置。",
    roomExpired: "邀请链接已过期。",
    peerWaiting: "等待对方加入",
    peerOnlineOne: "对方在线",
    peerOnlineMany: (count) => `${count}人在线`,
    typingOne: (name) => `${name}正在输入...`,
    typingMany: (count) => `${count}人正在输入...`,
    previewTranslation: "对方视图预览",
    previewButton: "预览对方视图",
    previewLoading: "正在预览翻译...",
    previewNoPeer: "对方加入后可以生成预览。",
    previewFailed: "预览失败",
    previewClear: "关闭预览",
    retranslate: "重新翻译",
    retranslateNatural: "更自然",
    retranslatePolite: "更礼貌",
    retranslateBusiness: "商务语气",
    retranslateLoading: "正在重新翻译",
    retranslateFailed: "重新翻译失败",
    tonePresets: [
      { id: "casual", label: "日常", rule: "像日常聊天一样自然、简洁地翻译" },
      { id: "business", label: "公司", rule: "用清晰、专业、适合职场的语气翻译" },
      { id: "polite", label: "礼貌", rule: "用礼貌、尊重的语气翻译" },
      { id: "friendly", label: "亲切", rule: "用亲切、温暖、不太正式的语气翻译" },
      { id: "close", label: "亲密", rule: "用适合亲近关系的自然、温柔语气翻译，不要夸张" }
    ],
    helpStepRoom: "创建新房间代码，或通过邀请链接进入。",
    helpStepSettings: "先选择你的语言，再进入房间。",
    helpStepChat: "你发的话会显示为对方语言，对方的话会显示为你的语言。",
    helpStepRulesIcon: "右侧的滑块图标用于设置翻译规则和术语表。",
    replyToMessage: "回复这句话",
    replyingTo: (name) => `回复 ${name}`,
    cancelReply: "取消回复",
    sentStatus: "已发送",
    readCountStatus: (count) => `${count}人已读`,
    allReadStatus: "全部已读",
    recallMessage: "撤回",
    recallFailed: "撤回失败",
    recallExpired: "已超过可撤回时间。",
    messageRecalled: "消息已撤回",
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
    translationGuidePlaceholder: "Ví dụ: tôi là anh, đối phương là em / lịch sự / công việc",
    translationRules: "Quy tắc dịch",
    presetTitle: "Mẫu giọng điệu",
    glossary: "Thuật ngữ",
    glossaryPlaceholder: "Ví dụ: giám đốc = General Director / xuất hàng = shipment",
    addRule: "Thêm quy tắc",
    deleteRule: "Xóa quy tắc",
    applyRules: "Áp dụng quy tắc",
    collapseRules: "Thu gọn quy tắc",
    rulePlaceholder: "Nhập quy tắc",
    ruleEmpty: "Thêm quy tắc để áp dụng từ tin nhắn tiếp theo.",
    rulesActive: (count) => `${count} quy tắc đang áp dụng`,
    rulesAndGlossaryActive: (count) => `${count} quy tắc + thuật ngữ đang áp dụng`,
    glossaryActive: "Đang áp dụng thuật ngữ",
    rulesNone: "Chưa có quy tắc",
    rulesApplied: "Đã áp dụng quy tắc",
    languageMismatch: "Kiểm tra ngôn ngữ",
    languageMismatchDetail: (detected, selected) =>
      `Tin nhắn trông giống ${detected}. Ngôn ngữ của bạn đang là ${selected}. Sửa lại hoặc gửi lần nữa để tiếp tục.`,
    joinGlossary: "Thuật ngữ",
    guideIntroTitle: "Có thể chỉnh bản dịch theo tình huống",
    guideIntroInstructions: "Ghi giọng điệu, cách xưng hô và quan hệ vào hướng dẫn dịch.",
    guideIntroGlossary: "Ghi tên công ty, chức vụ và thuật ngữ công việc hay dùng vào thuật ngữ.",
    guideIntroPreview: "Trong phòng, bạn có thể xem trước phía đối phương trước khi gửi.",
    translationOptions: "Tùy chọn dịch",
    translationOptionsActive: "Tùy chọn dịch đang bật",
    sentenceTranslator: "Dịch câu",
    sentenceTranslatorHint: "Dịch nhanh một câu sang ngôn ngữ bạn chọn",
    sentenceTranslatorSubtitle: "Chọn một ngôn ngữ đích để dịch nhanh.",
    sentenceSourceLanguage: "Ngôn ngữ gốc",
    sentenceTargetLanguage: "Ngôn ngữ đích",
    sentenceAutoDetect: "Tự động nhận diện",
    sentenceText: "Câu",
    sentenceTextPlaceholder: "Nhập câu cần dịch.",
    sentenceGuide: "Quy tắc dịch",
    sentenceGuidePlaceholder: "Ví dụ: tự nhiên / giọng công việc / tôi là anh, đối phương là em",
    translateSentence: "Dịch",
    sentenceResult: "Kết quả dịch",
    sentenceCopy: "Sao chép kết quả",
    sentenceTranslating: "Đang dịch...",
    sentenceEmpty: "Nhập câu cần dịch.",
    sentenceTranslateFailed: "Dịch câu thất bại",
    sentenceCopied: "Đã sao chép bản dịch",
    close: "Đóng",
    roomSettings: "Cài đặt phòng",
    roomName: "Tên phòng",
    roomNamePlaceholder: "Ví dụ: Phòng công việc pháp nhân Việt Nam",
    inviteExpiry: "Hết hạn liên kết mời",
    expiryNever: "Không hết hạn",
    expiry1h: "1 giờ",
    expiry24h: "24 giờ",
    expiry7d: "7 ngày",
    saveRoomSettings: "Lưu cài đặt phòng",
    closeRoomSettings: "Thu gọn cài đặt",
    settingsSaved: "Đã lưu cài đặt phòng",
    settingsOwnerOnly: "Chỉ người tạo phòng có thể đổi cài đặt.",
    roomExpired: "Liên kết mời đã hết hạn.",
    peerWaiting: "Đang chờ đối phương",
    peerOnlineOne: "Đối phương đang online",
    peerOnlineMany: (count) => `${count} người đang online`,
    typingOne: (name) => `${name} đang nhập...`,
    typingMany: (count) => `${count} người đang nhập...`,
    previewTranslation: "Xem trước phía đối phương",
    previewButton: "Xem trước phía đối phương",
    previewLoading: "Đang xem trước bản dịch...",
    previewNoPeer: "Có thể xem trước sau khi có người khác vào phòng.",
    previewFailed: "Xem trước thất bại",
    previewClear: "Đóng xem trước",
    retranslate: "Dịch lại",
    retranslateNatural: "Tự nhiên",
    retranslatePolite: "Lịch sự",
    retranslateBusiness: "Giọng công việc",
    retranslateLoading: "Đang dịch lại",
    retranslateFailed: "Dịch lại thất bại",
    tonePresets: [
      { id: "casual", label: "Thường ngày", rule: "Dịch tự nhiên như trò chuyện hằng ngày, rõ và ngắn gọn." },
      { id: "business", label: "Công việc", rule: "Dịch bằng giọng điệu rõ ràng, chuyên nghiệp, phù hợp công việc." },
      { id: "polite", label: "Lịch sự", rule: "Dịch bằng giọng điệu lịch sự và tôn trọng." },
      { id: "friendly", label: "Thân thiện", rule: "Dịch bằng giọng thân thiện, ấm áp, không quá trang trọng." },
      { id: "close", label: "Thân mật", rule: "Dịch bằng giọng tự nhiên, dịu dàng, phù hợp người thân thiết, không phóng đại." }
    ],
    helpStepRoom: "Tạo mã phòng mới hoặc vào bằng liên kết mời.",
    helpStepSettings: "Chọn ngôn ngữ của bạn trước khi vào.",
    helpStepChat: "Tin của bạn hiện bằng ngôn ngữ của họ, tin của họ hiện bằng ngôn ngữ của bạn.",
    helpStepRulesIcon: "Biểu tượng thanh trượt bên phải dùng để chỉnh quy tắc dịch và thuật ngữ.",
    replyToMessage: "Trả lời tin này",
    replyingTo: (name) => `Đang trả lời ${name}`,
    cancelReply: "Hủy trả lời",
    sentStatus: "Đã gửi",
    readCountStatus: (count) => `${count} người đã đọc`,
    allReadStatus: "Tất cả đã đọc",
    recallMessage: "Thu hồi",
    recallFailed: "Thu hồi thất bại",
    recallExpired: "Đã quá thời gian thu hồi.",
    messageRecalled: "Tin nhắn đã được thu hồi",
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
  joinOptionsButton: document.querySelector("#joinOptionsButton"),
  joinOptionsButtonText: document.querySelector("#joinOptionsButtonText"),
  joinTranslationOptions: document.querySelector("#joinTranslationOptions"),
  sentenceTranslatorButton: document.querySelector("#sentenceTranslatorButton"),
  sentenceTranslatorButtonText: document.querySelector("#sentenceTranslatorButtonText"),
  sentenceTranslatorButtonHint: document.querySelector("#sentenceTranslatorButtonHint"),
  sentenceTranslatorModal: document.querySelector("#sentenceTranslatorModal"),
  sentenceTranslatorTitle: document.querySelector("#sentenceTranslatorTitle"),
  sentenceTranslatorSubtitle: document.querySelector("#sentenceTranslatorSubtitle"),
  sentenceTranslatorCloseButton: document.querySelector("#sentenceTranslatorCloseButton"),
  sentenceTranslatorForm: document.querySelector("#sentenceTranslatorForm"),
  sentenceSourceLanguage: document.querySelector("#sentenceSourceLanguage"),
  sentenceTargetLanguage: document.querySelector("#sentenceTargetLanguage"),
  sentenceSourceLabel: document.querySelector("#sentenceSourceLabel"),
  sentenceTargetLabel: document.querySelector("#sentenceTargetLabel"),
  sentenceTextLabel: document.querySelector("#sentenceTextLabel"),
  sentenceTextInput: document.querySelector("#sentenceTextInput"),
  sentenceGuideLabel: document.querySelector("#sentenceGuideLabel"),
  sentenceGuideInput: document.querySelector("#sentenceGuideInput"),
  sentenceTranslateButton: document.querySelector("#sentenceTranslateButton"),
  sentenceResult: document.querySelector("#sentenceResult"),
  sentenceResultMeta: document.querySelector("#sentenceResultMeta"),
  sentenceResultText: document.querySelector("#sentenceResultText"),
  sentenceCopyButton: document.querySelector("#sentenceCopyButton"),
  translationGuideInput: document.querySelector("#translationGuideInput"),
  joinGlossaryInput: document.querySelector("#joinGlossaryInput"),
  guideIntroTitle: document.querySelector("#guideIntroTitle"),
  guideIntroInstructions: document.querySelector("#guideIntroInstructions"),
  guideIntroGlossary: document.querySelector("#guideIntroGlossary"),
  guideIntroPreview: document.querySelector("#guideIntroPreview"),
  helpStepRoom: document.querySelector("#helpStepRoom"),
  helpStepSettings: document.querySelector("#helpStepSettings"),
  helpStepChat: document.querySelector("#helpStepChat"),
  helpStepRulesIcon: document.querySelector("#helpStepRulesIcon"),
  joinButton: document.querySelector("#joinButton"),
  newRoomButton: document.querySelector("#newRoomButton"),
  roomCodeDisplay: document.querySelector("#roomCodeDisplay"),
  memberCount: document.querySelector("#memberCount"),
  presenceSummary: document.querySelector("#presenceSummary"),
  typingIndicator: document.querySelector("#typingIndicator"),
  roomSettingsButton: document.querySelector("#roomSettingsButton"),
  roomSettingsPanel: document.querySelector("#roomSettingsPanel"),
  roomSettingsTitle: document.querySelector("#roomSettingsTitle"),
  saveRoomSettingsButton: document.querySelector("#saveRoomSettingsButton"),
  closeRoomSettingsButton: document.querySelector("#closeRoomSettingsButton"),
  roomTitleInput: document.querySelector("#roomTitleInput"),
  inviteExpiryInput: document.querySelector("#inviteExpiryInput"),
  roomSettingsFeedback: document.querySelector("#roomSettingsFeedback"),
  translationRulesButton: document.querySelector("#translationRulesButton"),
  translationRulesPanel: document.querySelector("#translationRulesPanel"),
  translationRulesTitle: document.querySelector("#translationRulesTitle"),
  applyRulesButton: document.querySelector("#applyRulesButton"),
  addRuleButton: document.querySelector("#addRuleButton"),
  collapseRulesButton: document.querySelector("#collapseRulesButton"),
  tonePresetList: document.querySelector("#tonePresetList"),
  translationRulesList: document.querySelector("#translationRulesList"),
  glossaryTitle: document.querySelector("#glossaryTitle"),
  glossaryInput: document.querySelector("#glossaryInput"),
  rulesFeedback: document.querySelector("#rulesFeedback"),
  notificationButton: document.querySelector("#notificationButton"),
  copyLinkButton: document.querySelector("#copyLinkButton"),
  leaveRoomButton: document.querySelector("#leaveRoomButton"),
  composerLeaveButton: document.querySelector("#composerLeaveButton"),
  memberRow: document.querySelector("#memberRow"),
  messages: document.querySelector("#messages"),
  messageForm: document.querySelector("#messageForm"),
  messagePreview: document.querySelector("#messagePreview"),
  previewTitle: document.querySelector("#previewTitle"),
  messagePreviewList: document.querySelector("#messagePreviewList"),
  previewClearButton: document.querySelector("#previewClearButton"),
  languageHint: document.querySelector("#languageHint"),
  replyPreview: document.querySelector("#replyPreview"),
  replyPreviewSender: document.querySelector("#replyPreviewSender"),
  replyPreviewText: document.querySelector("#replyPreviewText"),
  replyCancelButton: document.querySelector("#replyCancelButton"),
  messageInput: document.querySelector("#messageInput"),
  previewButton: document.querySelector("#previewButton"),
  sendButton: document.querySelector("#sendButton")
};

const initialTranslationRules = loadTranslationRules();
const initialTranslationGlossary = loadTranslationGlossary();

const state = {
  room: roomFromPath() || localStorage.getItem("translator.room") || randomRoom(),
  name: localStorage.getItem("translator.name") || "",
  language: localStorage.getItem("translator.language") || "ko",
  uiLanguage: normalizeUiLanguage(localStorage.getItem("translator.uiLanguage") || detectUiLanguage()),
  translationRules: initialTranslationRules,
  translationGlossary: initialTranslationGlossary,
  translationGuide: buildTranslationGuide(initialTranslationRules, initialTranslationGlossary),
  clientId: getClientId(),
  roomAccessToken: "",
  roomSettings: {
    title: "",
    expiresAt: 0
  },
  isRoomOwner: false,
  eventSource: null,
  reconnectTimer: 0,
  reconnectAttempts: 0,
  connectionWatchdog: 0,
  lastEventAt: 0,
  aiEnabled: false,
  sentenceTranslating: false,
  notificationSupported: false,
  notificationsEnabled: false,
  sending: false,
  previewing: false,
  typing: false,
  typingTimer: 0,
  pendingMismatchText: "",
  replyTarget: null,
  seenMessageIds: new Set(),
  messageElements: new Map(),
  messageData: new Map(),
  pendingReadIds: new Set(),
  sentReadIds: new Set(),
  readReceiptTimer: 0,
  members: [],
  typingMembers: [],
  memberCount: 0,
  statusKey: "waiting",
  statusClass: "",
  roomFullLimit: null
};

els.roomInput.value = state.room;
els.nameInput.value = state.name;
els.languageInput.value = state.language;
els.uiLanguageInput.value = state.uiLanguage;
els.translationGuideInput.value = displayTranslationRulesForInput(state.translationRules);
els.glossaryInput.value = state.translationGlossary;
els.joinGlossaryInput.value = state.translationGlossary;

els.joinButton.addEventListener("click", joinRoom);
els.joinOptionsButton.addEventListener("click", toggleJoinTranslationOptions);
els.sentenceTranslatorButton.addEventListener("click", openSentenceTranslator);
els.sentenceTranslatorCloseButton.addEventListener("click", closeSentenceTranslator);
els.sentenceTranslatorForm.addEventListener("submit", translateSentence);
els.sentenceCopyButton.addEventListener("click", copySentenceResult);
els.newRoomButton.addEventListener("click", () => {
  els.roomInput.value = randomRoom();
  els.roomInput.focus();
});
els.copyLinkButton.addEventListener("click", copyRoomLink);
els.leaveRoomButton.addEventListener("click", leaveRoom);
els.composerLeaveButton.addEventListener("click", leaveRoom);
els.roomSettingsButton.addEventListener("click", toggleRoomSettingsPanel);
els.saveRoomSettingsButton.addEventListener("click", saveRoomSettings);
els.closeRoomSettingsButton.addEventListener("click", closeRoomSettingsPanel);
els.translationRulesButton.addEventListener("click", toggleTranslationRulesPanel);
els.applyRulesButton.addEventListener("click", applyTranslationRules);
els.addRuleButton.addEventListener("click", addTranslationRuleRow);
els.collapseRulesButton.addEventListener("click", closeTranslationRulesPanel);
els.glossaryInput.addEventListener("input", saveTranslationGlossaryFromPanel);
els.translationGuideInput.addEventListener("input", syncJoinTranslationRules);
els.joinGlossaryInput.addEventListener("input", () => {
  state.translationGlossary = normalizeGlossaryText(els.joinGlossaryInput.value);
  saveTranslationGlossary();
  updateJoinOptionsButton();
});
els.notificationButton.addEventListener("click", toggleNotifications);
els.uiLanguageInput.addEventListener("change", () => {
  state.uiLanguage = normalizeUiLanguage(els.uiLanguageInput.value);
  localStorage.setItem("translator.uiLanguage", state.uiLanguage);
  applyUiLanguage();
});
els.messageForm.addEventListener("submit", sendMessage);
els.previewButton.addEventListener("click", previewMessage);
els.previewClearButton.addEventListener("click", hideMessagePreview);
els.replyCancelButton.addEventListener("click", clearReplyTarget);
els.messageInput.addEventListener("input", () => {
  resizeComposer();
  state.pendingMismatchText = "";
  hideLanguageHint();
  hideMessagePreview();
  scheduleTyping();
});
els.messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    if (event.isComposing || event.keyCode === 229) return;
    event.preventDefault();
    if (state.sending) return;
    els.messageForm.requestSubmit();
  }
});

window.addEventListener("beforeunload", () => {
  if (state.typing) {
    navigator.sendBeacon?.(
      "/api/typing",
      new Blob(
        [
          JSON.stringify({
            room: state.room,
            clientId: state.clientId,
            roomAccessToken: state.roomAccessToken,
            typing: false
          })
        ],
        { type: "application/json" }
      )
    );
  }
});

document.addEventListener("visibilitychange", () => {
  if (
    document.visibilityState === "visible" &&
    !els.chatPanel.hidden &&
    (!state.eventSource || state.eventSource.readyState !== EventSource.OPEN)
  ) {
    scheduleEventReconnect(0);
  }
});

window.addEventListener("online", () => {
  if (!els.chatPanel.hidden) scheduleEventReconnect(0);
});

window.addEventListener("pageshow", (event) => {
  if (
    event.persisted &&
    !els.chatPanel.hidden &&
    (!state.eventSource || state.eventSource.readyState !== EventSource.OPEN)
  ) {
    scheduleEventReconnect(0);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !els.sentenceTranslatorModal.hidden) {
    closeSentenceTranslator();
  }
});

if (roomFromPath()) {
  els.roomInput.value = roomFromPath();
}

applyUiLanguage();
initializeNotifications();
registerAppShell().catch((error) => {
  console.warn("App shell registration failed:", error);
});

async function joinRoom() {
  state.room = normalizeRoom(els.roomInput.value);
  state.name = normalizeName(els.nameInput.value);
  state.language = els.languageInput.value;
  state.translationRules = parseTranslationRules(els.translationGuideInput.value);
  state.translationGlossary = normalizeGlossaryText(els.joinGlossaryInput.value);
  saveTranslationRules();
  saveTranslationGlossary();
  state.roomFullLimit = null;

  const joinResult = await requestRoomJoin();
  if (!joinResult.ok) {
    setStatusKey(joinResult.statusKey, "demo");
    return;
  }

  localStorage.setItem("translator.room", state.room);
  localStorage.setItem("translator.name", state.name);
  localStorage.setItem("translator.language", state.language);

  els.roomInput.value = state.room;
  els.nameInput.value = state.name;
  els.translationGuideInput.value = displayTranslationRulesForInput(state.translationRules);
  els.joinGlossaryInput.value = state.translationGlossary;
  renderRoomHeader();
  els.messages.replaceChildren();
  state.seenMessageIds.clear();
  state.messageElements.clear();
  state.pendingReadIds.clear();
  state.sentReadIds.clear();
  window.clearTimeout(state.readReceiptTimer);
  state.sending = false;
  state.previewing = false;
  state.typing = false;
  state.replyTarget = null;
  els.messageInput.disabled = false;
  els.sendButton.disabled = false;
  hideLanguageHint();
  hideMessagePreview();
  renderReplyPreview();
  state.memberCount = 0;
  state.members = [];
  state.typingMembers = [];
  updateMemberCount();
  renderPresenceSummary();
  renderTypingIndicator();
  els.joinPanel.hidden = true;
  els.chatPanel.hidden = false;
  els.roomSettingsPanel.hidden = true;
  els.translationRulesPanel.hidden = true;
  updateRoomSettingsButton();
  updateTranslationRulesButton();
  renderTranslationRulesPanel();
  renderRoomSettingsPanel();
  history.replaceState(null, "", `/room/${encodeURIComponent(state.room)}`);
  connectEvents();
  syncPushSubscriptionIfAllowed().catch(() => {
    updateNotificationButton();
  });
  els.messageInput.focus();
}

function toggleJoinTranslationOptions() {
  els.joinTranslationOptions.hidden = !els.joinTranslationOptions.hidden;
  updateJoinOptionsButton();
}

function updateJoinOptionsButton() {
  const isOpen = !els.joinTranslationOptions.hidden;
  const hasOptions = state.translationRules.length > 0 || Boolean(state.translationGlossary);
  els.joinOptionsButton.classList.toggle("active", isOpen || hasOptions);
  els.joinOptionsButton.setAttribute("aria-expanded", String(isOpen));
  els.joinOptionsButtonText.textContent = hasOptions ? t("translationOptionsActive") : t("translationOptions");
}

function syncJoinTranslationRules() {
  state.translationRules = parseTranslationRules(els.translationGuideInput.value);
  state.translationGuide = buildTranslationGuide(state.translationRules, state.translationGlossary);
  localStorage.setItem("translator.translationRules", JSON.stringify(state.translationRules));
  localStorage.setItem("translator.translationGuide", state.translationGuide);
  updateJoinOptionsButton();
  updateTranslationRulesButton();
  updateRulesFeedback();
}

function openSentenceTranslator() {
  els.sentenceTranslatorModal.hidden = false;
  els.sentenceSourceLanguage.value = "auto";
  els.sentenceTargetLanguage.value = defaultSentenceTargetLanguage();
  els.sentenceGuideInput.value ||= displayTranslationRulesForInput(state.translationRules);
  setSentenceResult(null);
  window.setTimeout(() => els.sentenceTextInput.focus(), 0);
}

function closeSentenceTranslator() {
  els.sentenceTranslatorModal.hidden = true;
}

function defaultSentenceTargetLanguage() {
  const currentLanguage = els.languageInput.value || state.language;
  if (currentLanguage === "vi") return "ko";
  return "vi";
}

async function translateSentence(event) {
  event.preventDefault();
  if (state.sentenceTranslating) return;

  const text = els.sentenceTextInput.value.trim();
  if (!text) {
    setSentenceResult({ error: t("sentenceEmpty") });
    return;
  }

  const sourceLanguage =
    els.sentenceSourceLanguage.value === "auto"
      ? detectMessageLanguage(text) || state.language || "ko"
      : els.sentenceSourceLanguage.value;
  const targetLanguage = els.sentenceTargetLanguage.value;

  state.sentenceTranslating = true;
  els.sentenceTranslateButton.disabled = true;
  els.sentenceTranslateButton.textContent = t("sentenceTranslating");
  setSentenceResult({
    meta: `${languages[sourceLanguage]} -> ${languages[targetLanguage]}`,
    text: t("sentenceTranslating")
  });

  try {
    const response = await fetchWithTimeout("/api/sentence-translate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        text,
        sourceLanguage,
        targetLanguage,
        translationGuide: els.sentenceGuideInput.value
      })
    }, 25_000);
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error("Sentence translation failed");
    setSentenceResult({
      meta: `${languages[payload.sourceLanguage] || languages[sourceLanguage]} -> ${
        languages[payload.targetLanguage] || languages[targetLanguage]
      } · ${providerLabel(payload.translationProvider)}`,
      text: payload.translatedText || ""
    });
  } catch {
    setSentenceResult({ error: t("sentenceTranslateFailed") });
    setStatusKey("sentenceTranslateFailed", "demo");
  } finally {
    state.sentenceTranslating = false;
    els.sentenceTranslateButton.disabled = false;
    els.sentenceTranslateButton.textContent = t("translateSentence");
  }
}

function setSentenceResult(result) {
  if (!result) {
    els.sentenceResult.hidden = true;
    els.sentenceResult.classList.remove("error");
    els.sentenceResultMeta.textContent = t("sentenceResult");
    els.sentenceResultText.textContent = "";
    return;
  }

  els.sentenceResult.hidden = false;
  els.sentenceResult.classList.toggle("error", Boolean(result.error));
  els.sentenceResultMeta.textContent = result.error ? t("sentenceTranslateFailed") : result.meta || t("sentenceResult");
  els.sentenceResultText.textContent = result.error || result.text || "";
}

async function copySentenceResult() {
  const text = els.sentenceResultText.textContent.trim();
  if (!text || els.sentenceResult.classList.contains("error")) return;
  try {
    await navigator.clipboard.writeText(text);
    setStatusKey("sentenceCopied", state.aiEnabled ? "online" : "demo");
  } catch {
    setStatusKey("copyFailed", "demo");
  }
}

async function requestRoomJoin() {
  try {
    const response = await fetch("/api/room/join", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        room: state.room,
        clientId: state.clientId
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) {
      return { ok: false, statusKey: statusKeyForRoomError(payload.error, response.status) };
    }

    state.room = payload.room?.code || state.room;
    state.roomAccessToken = payload.roomAccessToken || "";
    applyRoomSettings(payload.room, payload.isOwner);
    return { ok: true };
  } catch {
    return { ok: false, statusKey: "reconnecting" };
  }
}

function statusKeyForRoomError(error, status) {
  if (error === "room_expired" || status === 410) return "roomExpired";
  return "sendFailed";
}

function applyRoomSettings(settings = {}, isOwner = state.isRoomOwner) {
  state.roomSettings = {
    title: normalizeRoomTitle(settings.title),
    expiresAt: Number(settings.expiresAt || 0)
  };
  state.isRoomOwner = Boolean(isOwner);
  renderRoomHeader();
  renderRoomSettingsPanel();
  updateRoomSettingsButton();
}

function renderRoomHeader() {
  const title = normalizeRoomTitle(state.roomSettings.title);
  els.roomCodeDisplay.textContent = title ? `${title} · ${state.room}` : state.room;
}

function toggleRoomSettingsPanel() {
  if (els.roomSettingsPanel.hidden) {
    openRoomSettingsPanel();
  } else {
    closeRoomSettingsPanel();
  }
}

function openRoomSettingsPanel() {
  els.roomSettingsPanel.hidden = false;
  renderRoomSettingsPanel();
  updateRoomSettingsButton();
}

function closeRoomSettingsPanel() {
  els.roomSettingsPanel.hidden = true;
  updateRoomSettingsButton();
}

function updateRoomSettingsButton() {
  const isOpen = !els.roomSettingsPanel.hidden;
  els.roomSettingsButton.classList.toggle("active", isOpen);
  els.roomSettingsButton.setAttribute("aria-expanded", String(isOpen));
}

function renderRoomSettingsPanel() {
  if (!els.roomSettingsPanel) return;
  els.roomTitleInput.value = state.roomSettings.title || "";
  els.roomTitleInput.placeholder = t("roomNamePlaceholder");
  els.inviteExpiryInput.value = expiryValueFromSettings(state.roomSettings.expiresAt);
  els.roomSettingsFeedback.textContent = state.isRoomOwner
    ? settingsSummaryText()
    : t("settingsOwnerOnly");
  els.roomTitleInput.disabled = !state.isRoomOwner;
  els.inviteExpiryInput.disabled = !state.isRoomOwner;
  els.saveRoomSettingsButton.disabled = !state.isRoomOwner;
}

function settingsSummaryText() {
  const parts = [];
  const expiryText = expiryLabelFromValue(expiryValueFromSettings(state.roomSettings.expiresAt));
  if (expiryText !== t("expiryNever")) parts.push(expiryText);
  return parts.join(" · ") || t("settingsSaved");
}

async function saveRoomSettings() {
  if (!state.isRoomOwner) {
    els.roomSettingsFeedback.textContent = t("settingsOwnerOnly");
    return;
  }

  try {
    const response = await fetch("/api/room/settings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        room: state.room,
        clientId: state.clientId,
        roomAccessToken: state.roomAccessToken,
        title: els.roomTitleInput.value,
        expiryMinutes: Number(els.inviteExpiryInput.value || 0)
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) {
      els.roomSettingsFeedback.textContent = t(statusKeyForRoomError(payload.error, response.status));
      return;
    }

    applyRoomSettings(payload.room, payload.isOwner);
    els.roomSettingsFeedback.textContent = t("settingsSaved");
    setStatusKey("settingsSaved", state.aiEnabled ? "online" : "demo");
  } catch {
    els.roomSettingsFeedback.textContent = t("sendFailed");
  }
}

function expiryValueFromSettings(expiresAt) {
  const expires = Number(expiresAt || 0);
  if (!expires) return "0";
  const minutes = Math.max(1, Math.round((expires - Date.now()) / 60_000));
  if (minutes <= 75) return "60";
  if (minutes <= 1_800) return "1440";
  return "10080";
}

function expiryLabelFromValue(value) {
  if (value === "60") return t("expiry1h");
  if (value === "1440") return t("expiry24h");
  if (value === "10080") return t("expiry7d");
  return t("expiryNever");
}

function connectEvents() {
  clearEventReconnectTimers();
  if (state.eventSource) state.eventSource.close();

  setStatusKey("connecting", "");
  const params = new URLSearchParams({
    room: state.room,
    client: state.clientId,
    name: state.name,
    language: state.language,
    token: state.roomAccessToken
  });
  const eventSource = new EventSource(`/events?${params}`);
  state.eventSource = eventSource;

  const markConnectionAlive = () => {
    if (state.eventSource !== eventSource) return;
    state.lastEventAt = Date.now();
    window.clearTimeout(state.connectionWatchdog);
    state.connectionWatchdog = window.setTimeout(() => {
      if (state.eventSource === eventSource) scheduleEventReconnect(0);
    }, 45_000);
  };

  eventSource.addEventListener("connected", (event) => {
    markConnectionAlive();
    state.reconnectAttempts = 0;
    const payload = JSON.parse(event.data);
    state.aiEnabled = payload.aiEnabled;
    if (payload.roomSettings) applyRoomSettings(payload.roomSettings, payload.isOwner);
    setStatusKey(state.aiEnabled ? "aiConnected" : "demoMode", state.aiEnabled ? "online" : "demo");
  });

  eventSource.addEventListener("presence", (event) => {
    markConnectionAlive();
    const payload = JSON.parse(event.data);
    renderMembers(payload.members || []);
  });

  eventSource.addEventListener("typing", (event) => {
    markConnectionAlive();
    const payload = JSON.parse(event.data);
    renderTypingMembers(payload.typing || []);
  });

  eventSource.addEventListener("roomSettings", (event) => {
    markConnectionAlive();
    const payload = JSON.parse(event.data);
    applyRoomSettings(payload.settings, payload.isOwner);
  });

  eventSource.addEventListener("roomExpired", () => {
    stopEventConnection();
    leaveRoom();
    setStatusKey("roomExpired", "demo");
  });

  eventSource.addEventListener("roomFull", (event) => {
    const payload = JSON.parse(event.data);
    stopEventConnection();
    els.messageInput.disabled = true;
    els.sendButton.disabled = true;
    state.roomFullLimit = payload.limit;
    updateMemberCount();
    setStatusKey("roomFullStatus", "demo");
    renderSystemMessage(t("roomFullMessage"));
  });

  eventSource.addEventListener("message", (event) => {
    markConnectionAlive();
    const payload = JSON.parse(event.data);
    renderMessage(payload);
  });

  eventSource.addEventListener("messageRead", (event) => {
    markConnectionAlive();
    const payload = JSON.parse(event.data);
    updateMessageReadStatus(payload);
  });

  eventSource.addEventListener("messageRecall", (event) => {
    markConnectionAlive();
    const payload = JSON.parse(event.data);
    markMessageRecalled(payload);
  });

  eventSource.addEventListener("messageReaction", (event) => {
    markConnectionAlive();
    const payload = JSON.parse(event.data);
    updateMessageReactions(payload);
  });

  eventSource.addEventListener("ping", markConnectionAlive);

  eventSource.onerror = () => {
    if (state.eventSource !== eventSource) return;
    scheduleEventReconnect();
  };
}

function scheduleEventReconnect(delayMs) {
  if (els.chatPanel.hidden) return;

  if (state.eventSource) {
    state.eventSource.close();
    state.eventSource = null;
  }
  window.clearTimeout(state.connectionWatchdog);
  state.connectionWatchdog = 0;
  if (state.reconnectTimer) return;

  setStatusKey("reconnecting", "");
  const delay =
    delayMs === undefined
      ? Math.min(1_000 * 2 ** Math.min(state.reconnectAttempts, 3), 8_000)
      : Math.max(0, delayMs);
  state.reconnectAttempts += 1;
  state.reconnectTimer = window.setTimeout(() => {
    state.reconnectTimer = 0;
    if (!els.chatPanel.hidden) connectEvents();
  }, delay);
}

function clearEventReconnectTimers() {
  window.clearTimeout(state.reconnectTimer);
  window.clearTimeout(state.connectionWatchdog);
  state.reconnectTimer = 0;
  state.connectionWatchdog = 0;
}

function stopEventConnection() {
  clearEventReconnectTimers();
  if (state.eventSource) state.eventSource.close();
  state.eventSource = null;
  state.reconnectAttempts = 0;
}

function leaveRoom() {
  sendTyping(false).catch(() => {});
  stopEventConnection();
  unregisterPushSubscriptionFromServer().catch(() => {});
  state.notificationsEnabled = false;
  updateNotificationButton();

  els.messageInput.value = "";
  resizeComposer();
  state.seenMessageIds.clear();
  state.messageElements.clear();
  state.messageData.clear();
  state.pendingReadIds.clear();
  state.sentReadIds.clear();
  window.clearTimeout(state.readReceiptTimer);
  state.sending = false;
  state.previewing = false;
  state.typing = false;
  window.clearTimeout(state.typingTimer);
  state.pendingMismatchText = "";
  state.roomAccessToken = "";
  state.replyTarget = null;
  els.messageInput.disabled = false;
  els.sendButton.disabled = false;
  els.messages.replaceChildren();
  els.memberRow.replaceChildren();
  els.presenceSummary.textContent = "";
  els.typingIndicator.hidden = true;
  els.typingIndicator.textContent = "";
  state.memberCount = 0;
  state.members = [];
  state.typingMembers = [];
  state.roomFullLimit = null;
  updateMemberCount();
  els.chatPanel.hidden = true;
  els.joinPanel.hidden = false;
  history.replaceState(null, "", "/");
  setStatusKey("waiting", "");
  els.roomInput.value = state.room;
  els.nameInput.value = state.name;
  els.languageInput.value = state.language;
  els.translationGuideInput.value = displayTranslationRulesForInput(state.translationRules);
  els.glossaryInput.value = state.translationGlossary;
  els.joinGlossaryInput.value = state.translationGlossary;
  hideMessagePreview();
  renderReplyPreview();
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
  return registerAppShell();
}

async function registerAppShell() {
  if (!("serviceWorker" in navigator) || !window.isSecureContext) return null;
  const registration = await navigator.serviceWorker.register("/sw.js", {
    scope: "/",
    updateViaCache: "none"
  });
  registration.update().catch(() => {});
  return navigator.serviceWorker.ready;
}

async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    window.clearTimeout(timeout);
  }
}

async function savePushSubscription(subscription) {
  const response = await fetch("/api/push/subscribe", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      room: state.room,
      clientId: state.clientId,
      roomAccessToken: state.roomAccessToken,
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

function toggleTranslationRulesPanel() {
  if (els.translationRulesPanel.hidden) {
    openTranslationRulesPanel();
  } else {
    closeTranslationRulesPanel();
  }
}

function openTranslationRulesPanel() {
  els.translationRulesPanel.hidden = false;
  renderTranslationRulesPanel();
  updateTranslationRulesButton();
}

function closeTranslationRulesPanel() {
  if (!els.translationRulesPanel.hidden) saveTranslationRulesFromPanel();
  els.translationRulesPanel.hidden = true;
  updateTranslationRulesButton();
}

function updateTranslationRulesButton() {
  const isOpen = !els.translationRulesPanel.hidden;
  els.translationRulesButton.classList.toggle(
    "active",
    isOpen || state.translationRules.length > 0 || Boolean(state.translationGlossary)
  );
  els.translationRulesButton.setAttribute("aria-expanded", String(isOpen));
}

function renderTranslationRulesPanel() {
  const rules = state.translationRules.length > 0 ? state.translationRules : [""];
  renderTonePresetButtons();
  els.translationRulesList.replaceChildren(
    ...rules.map((rule, index) => createTranslationRuleRow(rule, index))
  );
  els.glossaryInput.value = state.translationGlossary;
  updateRulesFeedback();
}

function renderTonePresetButtons() {
  const presets = getTonePresets();
  els.tonePresetList.setAttribute("aria-label", t("presetTitle"));
  els.tonePresetList.replaceChildren(
    ...presets.map((preset) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "preset-chip";
      button.textContent = preset.label;
      button.title = preset.rule;
      button.addEventListener("click", () => addTranslationRule(preset.rule));
      return button;
    })
  );
}

function createTranslationRuleRow(rule, index) {
  const row = document.createElement("div");
  row.className = "rule-row";

  const input = document.createElement("input");
  input.className = "rule-input";
  input.maxLength = 220;
  input.placeholder = state.translationRules.length === 0 ? t("ruleEmpty") : t("rulePlaceholder");
  input.value = rule;
  input.addEventListener("input", saveTranslationRulesFromPanel);

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "icon-button small danger";
  setButtonLabel(deleteButton, t("deleteRule"));
  deleteButton.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v5" />
      <path d="M14 11v5" />
    </svg>
  `;
  deleteButton.addEventListener("click", () => {
    const nextRules = getPanelRuleValues();
    nextRules.splice(index, 1);
    state.translationRules = nextRules;
    saveTranslationRules();
    renderTranslationRulesPanel();
  });

  row.append(input, deleteButton);
  return row;
}

function addTranslationRuleRow() {
  const emptyInput = [...els.translationRulesList.querySelectorAll(".rule-input")].find(
    (input) => !normalizeRuleText(input.value)
  );
  if (emptyInput) {
    emptyInput.focus();
    return;
  }

  const currentRules = getPanelRuleValues();
  if (currentRules.length >= 8) return;
  state.translationRules = currentRules;
  saveTranslationRules();
  const row = createTranslationRuleRow("", currentRules.length);
  els.translationRulesList.append(row);
  updateRulesFeedback();
  row.querySelector("input")?.focus();
}

function addTranslationRule(rule) {
  const normalizedRule = normalizeRuleText(rule);
  if (!normalizedRule) return;

  const currentRules = els.translationRulesPanel.hidden ? [...state.translationRules] : getPanelRuleValues();
  if (!currentRules.includes(normalizedRule) && currentRules.length < 8) {
    currentRules.push(normalizedRule);
  }

  state.translationRules = currentRules;
  saveTranslationRules();
  if (!els.translationRulesPanel.hidden) renderTranslationRulesPanel();
}

function saveTranslationRulesFromPanel() {
  state.translationRules = getPanelRuleValues();
  saveTranslationRules();
}

function saveTranslationGlossaryFromPanel() {
  state.translationGlossary = normalizeGlossaryText(els.glossaryInput.value);
  state.translationGuide = buildTranslationGuide(state.translationRules, state.translationGlossary);
  localStorage.setItem("translator.translationGlossary", state.translationGlossary);
  els.joinGlossaryInput.value = state.translationGlossary;
  updateJoinOptionsButton();
  updateTranslationRulesButton();
  updateRulesFeedback();
}

function applyTranslationRules() {
  saveTranslationRulesFromPanel();
  closeTranslationRulesPanel();
  const fallbackKey = state.aiEnabled ? "aiConnected" : "demoMode";
  const fallbackClass = state.aiEnabled ? "online" : "demo";
  setStatusKey("rulesApplied", fallbackClass);
  window.setTimeout(() => {
    if (!els.chatPanel.hidden && state.statusKey === "rulesApplied") {
      setStatusKey(fallbackKey, fallbackClass);
    }
  }, 1400);
}

function updateRulesFeedback() {
  if (!els.rulesFeedback) return;
  const count = state.translationRules.length;
  const hasGlossary = Boolean(state.translationGlossary);
  if (count > 0 && hasGlossary) {
    els.rulesFeedback.textContent = t("rulesAndGlossaryActive", count);
  } else if (count > 0) {
    els.rulesFeedback.textContent = t("rulesActive", count);
  } else if (hasGlossary) {
    els.rulesFeedback.textContent = t("glossaryActive");
  } else {
    els.rulesFeedback.textContent = t("rulesNone");
  }
}

function formatMessageTime(isoString) {
  if (!isoString) return "";
  try {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return "";
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}

function getPanelRuleValues() {
  return [...els.translationRulesList.querySelectorAll(".rule-input")]
    .map((input) => normalizeRuleText(input.value))
    .filter(Boolean)
    .slice(0, 8);
}

async function sendMessage(event) {
  event.preventDefault();
  if (state.sending) return;
  const text = els.messageInput.value.trim();
  if (!text) return;

  const detectedLanguage = detectMessageLanguage(text);
  if (detectedLanguage && detectedLanguage !== state.language && state.pendingMismatchText !== text) {
    state.pendingMismatchText = text;
    showLanguageHint(detectedLanguage);
    setStatusKey("languageMismatch", "demo");
    return;
  }

  hideLanguageHint();
  state.sending = true;
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
        roomAccessToken: state.roomAccessToken,
        translationGuide: state.translationGuide,
        replyToId: state.replyTarget?.id || "",
        text
      })
    });
    if (!response.ok) throw new Error("Message failed");
    els.messageInput.value = "";
    state.pendingMismatchText = "";
    clearReplyTarget();
    hideMessagePreview();
    sendTyping(false).catch(() => {});
    resizeComposer();
  } catch {
    setStatusKey("sendFailed", "demo");
  } finally {
    state.sending = false;
    els.sendButton.disabled = false;
    els.messageInput.focus();
  }
}

async function previewMessage() {
  const text = els.messageInput.value.trim();
  if (!text || state.previewing) return;

  const detectedLanguage = detectMessageLanguage(text);
  if (detectedLanguage && detectedLanguage !== state.language && state.pendingMismatchText !== text) {
    state.pendingMismatchText = text;
    showLanguageHint(detectedLanguage);
    setStatusKey("languageMismatch", "demo");
    return;
  }

  hideLanguageHint();
  state.previewing = true;
  els.previewButton.disabled = true;
  renderMessagePreview([{ targetLanguageName: "", translatedText: t("previewLoading") }]);
  try {
    const response = await fetch("/api/preview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        room: state.room,
        senderId: state.clientId,
        senderName: state.name,
        language: state.language,
        roomAccessToken: state.roomAccessToken,
        translationGuide: state.translationGuide,
        text
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error("Preview failed");
    renderMessagePreview(payload.previews || []);
  } catch {
    renderMessagePreview([{ targetLanguageName: "", translatedText: t("previewFailed") }]);
    setStatusKey("previewFailed", "demo");
  } finally {
    state.previewing = false;
    els.previewButton.disabled = false;
    els.messageInput.focus();
  }
}

function renderMessagePreview(previews) {
  els.messagePreview.hidden = false;
  els.previewTitle.textContent = t("previewTranslation");
  els.messagePreviewList.replaceChildren();

  if (!previews.length) {
    const item = createPreviewItem("", t("previewNoPeer"));
    els.messagePreviewList.append(item);
    return;
  }

  for (const preview of previews) {
    els.messagePreviewList.append(
      createPreviewItem(
        preview.targetLanguageName || languages[preview.targetLanguage] || "",
        preview.translatedText || ""
      )
    );
  }
}

function createPreviewItem(labelText, translatedText) {
  const item = document.createElement("div");
  item.className = "preview-item";

  if (labelText) {
    const label = document.createElement("div");
    label.className = "preview-label";
    label.textContent = t("shownToPartner", labelText);
    item.append(label);
  }

  const text = document.createElement("p");
  text.className = "preview-text";
  text.textContent = translatedText;
  item.append(text);
  return item;
}

function hideMessagePreview() {
  els.messagePreview.hidden = true;
  els.messagePreviewList.replaceChildren();
}

function scheduleTyping() {
  if (els.chatPanel.hidden) return;
  const hasText = Boolean(els.messageInput.value.trim());
  sendTyping(hasText).catch(() => {});
  window.clearTimeout(state.typingTimer);
  if (hasText) {
    state.typingTimer = window.setTimeout(() => {
      sendTyping(false).catch(() => {});
    }, 1800);
  }
}

async function sendTyping(isTyping) {
  if (els.chatPanel.hidden && isTyping) return;
  if (state.typing === isTyping) return;
  state.typing = isTyping;
  await fetch("/api/typing", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      room: state.room,
      clientId: state.clientId,
      name: state.name,
      roomAccessToken: state.roomAccessToken,
      typing: isTyping
    })
  });
}

function renderMembers(members) {
  state.members = members;
  state.memberCount = members.length;
  state.roomFullLimit = null;
  updateMemberCount();
  renderPresenceSummary();
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
  renderTypingIndicator();
}

function renderPresenceSummary() {
  const peerCount = state.members.filter((member) => member.id !== state.clientId).length;
  if (peerCount === 0) {
    els.presenceSummary.textContent = t("peerWaiting");
  } else if (peerCount === 1) {
    els.presenceSummary.textContent = t("peerOnlineOne");
  } else {
    els.presenceSummary.textContent = t("peerOnlineMany", state.members.length);
  }
}

function renderTypingMembers(typingMembers) {
  state.typingMembers = typingMembers.filter((member) => member.id !== state.clientId);
  renderTypingIndicator();
}

function renderTypingIndicator() {
  if (!state.typingMembers.length) {
    els.typingIndicator.hidden = true;
    els.typingIndicator.textContent = "";
    return;
  }

  els.typingIndicator.hidden = false;
  els.typingIndicator.textContent =
    state.typingMembers.length === 1
      ? t("typingOne", state.typingMembers[0].name)
      : t("typingMany", state.typingMembers.length);
}

function renderMessage(message) {
  if (message.id && state.seenMessageIds.has(message.id)) return;
  if (message.id) state.seenMessageIds.add(message.id);
  if (message.id) state.messageData.set(message.id, message);

  const item = document.createElement("li");
  item.className = `message${message.senderId === state.clientId ? " mine" : ""}`;
  item.dataset.messageId = message.id || "";
  item.dataset.senderId = message.senderId || "";

  if (message.recalledAt) {
    renderRecalledMessage(item, message);
    els.messages.append(item);
    state.messageElements.set(message.id, item);
    item.scrollIntoView({ block: "end", behavior: "smooth" });
    return;
  }

  item.tabIndex = 0;
  item.title = t("replyToMessage");
  item.addEventListener("click", () => selectReplyTarget(message, item));
  item.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    selectReplyTarget(message, item);
  });

    const meta = document.createElement("div");
  meta.className = "message-meta";

  const left = document.createElement("span");
  left.className = "message-meta-left";

  const sender = document.createElement("span");
  sender.textContent = `${message.senderName} · ${languages[message.sourceLanguage]}`;

  const time = document.createElement("span");
  time.className = "message-time";
  time.textContent = formatMessageTime(message.createdAt);

  left.append(sender, document.createTextNode(" · "), time);

  const provider = document.createElement("span");
  provider.className = `provider${message.translationProvider === "demo" ? " demo" : ""}`;
  provider.textContent = providerLabel(message.translationProvider);

  const translated = document.createElement("p");
  translated.className = "message-text";
  translated.textContent = message.translatedText;

  meta.append(left, provider);
  item.append(meta);

  if (message.replyTo) {
    item.append(createReplyContextElement(message.replyTo));
  }

  item.append(translated);

  if (message.originalVisible) {
    const original = document.createElement("p");
    original.className = "message-original";
    original.textContent = message.text;
    item.append(original);
  }

  const footer = createMessageFooter(message);
  if (footer) item.append(footer);

  const reactions = createMessageReactionArea(message);
  if (reactions) item.append(reactions);

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
  state.messageElements.set(message.id, item);
  if (message.senderId !== state.clientId) scheduleReadReceipt(message.id);
  item.scrollIntoView({ block: "end", behavior: "smooth" });
}

function renderRecalledMessage(item, message) {
  item.className = `message recalled${message.senderId === state.clientId ? " mine" : ""}`;
  item.tabIndex = -1;
  item.title = "";
  item.replaceChildren();

    const meta = document.createElement("div");
  meta.className = "message-meta";

  const left = document.createElement("span");
  left.className = "message-meta-left";

  const sender = document.createElement("span");
  sender.textContent = message.senderName || "";

  const time = document.createElement("span");
  time.className = "message-time";
  time.textContent = formatMessageTime(message.createdAt);

  left.append(sender, document.createTextNode(" · "), time);

  meta.append(left);

  const recalled = document.createElement("p");
  recalled.className = "message-text recalled-text";
  recalled.textContent = t("messageRecalled");

  item.append(meta, recalled);
}

function createMessageFooter(message) {
  if (message.senderId !== state.clientId) return null;

  const footer = document.createElement("div");
  footer.className = "message-footer";

  const status = document.createElement("span");
  status.className = "message-read-status";
  status.dataset.messageId = message.id || "";
  status.textContent = readStatusText(message.readStatus);
  footer.append(status);

  if (canRecallMessage(message)) {
    const recallButton = document.createElement("button");
    recallButton.type = "button";
    recallButton.className = "message-recall-button";
    recallButton.textContent = t("recallMessage");
    recallButton.title = t("recallMessage");
    recallButton.addEventListener("click", (event) => {
      event.stopPropagation();
      recallMessage(message.id);
    });
    footer.append(recallButton);

    const remainingMs = messageRecallRemainingMs(message);
    if (remainingMs > 0) {
      window.setTimeout(() => {
        recallButton.remove();
      }, remainingMs + 250);
    }
  }

  return footer;
}

function createMessageReactionArea(message) {
  const activeReactions = Array.isArray(message.reactions) ? message.reactions : [];
  const isMine = message.senderId === state.clientId;
  const hasActiveReactions = activeReactions.some((reaction) => Number(reaction.count || 0) > 0);
  if (isMine && !hasActiveReactions) return null;

  const area = document.createElement("div");
  area.className = `message-reaction-area${isMine ? " summary-only" : ""}`;
  area.dataset.messageId = message.id || "";
  area.addEventListener("click", (event) => event.stopPropagation());
  area.addEventListener("keydown", (event) => event.stopPropagation());

  for (const option of reactionOptions) {
    const reaction = reactionById(activeReactions, option.id);
    const count = Number(reaction?.count || 0);
    if (count <= 0) continue;

    const selected = Boolean(reaction?.reactedBy?.includes(state.clientId));
    const button = document.createElement("button");
    button.type = "button";
    button.className = `message-reaction-button${selected ? " selected" : ""} has-count`;
    button.textContent = `${option.emoji} ${count}`;
    button.title = option.emoji;
    button.setAttribute("aria-label", option.emoji);
    if (isMine) {
      button.disabled = true;
    } else {
      button.addEventListener("click", () => toggleMessageReaction(message.id, option.id));
    }
    area.append(button);
  }

  if (!isMine) {
    const picker = document.createElement("div");
    picker.className = "message-reaction-picker";

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "message-reaction-picker-button";
    trigger.textContent = "🙂 반응";
    trigger.title = "반응";
    trigger.setAttribute("aria-label", "반응");
    trigger.setAttribute("aria-expanded", "false");

    const menu = document.createElement("div");
    menu.className = "message-reaction-picker-menu";

    for (const option of reactionOptions) {
      const emojiButton = document.createElement("button");
      emojiButton.type = "button";
      emojiButton.className = "message-reaction-option";
      emojiButton.textContent = option.emoji;
      emojiButton.title = option.emoji;
      emojiButton.setAttribute("aria-label", option.emoji);
      emojiButton.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleMessageReaction(message.id, option.id);
        closeReactionPickers();
      });
      menu.append(emojiButton);
    }

    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      const wasOpen = picker.classList.contains("open");
      closeReactionPickers(picker);
      picker.classList.toggle("open", !wasOpen);
      trigger.setAttribute("aria-expanded", String(!wasOpen));
    });

    picker.append(trigger, menu);
    area.append(picker);
  }

  return area.childElementCount > 0 ? area : null;
}

document.addEventListener("click", () => {
  closeReactionPickers();
});

function closeReactionPickers(exceptPicker = null) {
  document.querySelectorAll(".message-reaction-picker.open").forEach((picker) => {
    if (picker === exceptPicker) return;
    picker.classList.remove("open");
    const trigger = picker.querySelector(".message-reaction-picker-button");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
  });
}

function reactionById(reactions, id) {
  return reactions.find((reaction) => reaction.id === id);
}

async function toggleMessageReaction(messageId, reactionId) {
  if (!messageId || !reactionId) return;
  try {
    const response = await fetch("/api/message/reaction", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        room: state.room,
        clientId: state.clientId,
        roomAccessToken: state.roomAccessToken,
        messageId,
        reactionId
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      setStatusKey("sendFailed", "demo");
      return;
    }
    if (Array.isArray(payload.reactions)) {
      updateMessageReactions({ messageId, reactions: payload.reactions });
    }
  } catch {
    setStatusKey("sendFailed", "demo");
  }
}

function updateMessageReactions(payload) {
  const item = state.messageElements.get(payload.messageId);
  const message = state.messageData.get(payload.messageId);
  if (!item || !message || item.classList.contains("recalled")) return;

  message.reactions = Array.isArray(payload.reactions) ? payload.reactions : [];
  state.messageData.set(payload.messageId, message);

  const previous = item.querySelector(".message-reaction-area");
  const next = createMessageReactionArea(message);
  if (previous && next) {
    previous.replaceWith(next);
  } else if (previous) {
    previous.remove();
  } else if (next) {
    insertReactionArea(item, next);
  }
}

function insertReactionArea(item, reactionArea) {
  const footer = item.querySelector(".message-footer");
  if (footer) {
    footer.after(reactionArea);
    return;
  }

  const peerBox = item.querySelector(".message-peer-box");
  if (peerBox) {
    peerBox.before(reactionArea);
    return;
  }

  item.append(reactionArea);
}

function readStatusText(readStatus = {}) {
  const count = Number(readStatus.readCount || 0);
  const total = Number(readStatus.totalRecipients || 0);
  if (total <= 0 || count <= 0) return t("sentStatus");
  if (readStatus.allRead || count >= total) return t("allReadStatus");
  return t("readCountStatus", count);
}

function updateMessageReadStatus(payload) {
  const status = [...els.messages.querySelectorAll(".message-read-status")].find(
    (element) => element.dataset.messageId === payload.messageId
  );
  if (!status) return;
  status.textContent = readStatusText(payload);
}

function messageRecallRemainingMs(message) {
  const createdAt = Date.parse(message.createdAt || "");
  if (!Number.isFinite(createdAt)) return 0;
  return Math.max(0, 2 * 60 * 1000 - (Date.now() - createdAt));
}

function canRecallMessage(message) {
  return (
    message.senderId === state.clientId &&
    !message.recalledAt &&
    messageRecallRemainingMs(message) > 0
  );
}

async function recallMessage(messageId) {
  if (!messageId) return;
  try {
    const response = await fetch("/api/message/recall", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        room: state.room,
        clientId: state.clientId,
        roomAccessToken: state.roomAccessToken,
        messageId
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) {
      setStatusKey(payload.error === "recall_expired" ? "recallExpired" : "recallFailed", "demo");
    }
  } catch {
    setStatusKey("recallFailed", "demo");
  }
}

function markMessageRecalled(payload) {
  const item = state.messageElements.get(payload.messageId);
  state.messageData.delete(payload.messageId);
  if (item) {
    renderRecalledMessage(item, {
      id: payload.messageId,
      senderId: payload.senderId,
      senderName: payload.senderName,
      recalledAt: payload.recalledAt
    });
  }

  if (state.replyTarget?.id === payload.messageId) clearReplyTarget();
  updateRecalledReplyContexts(payload.messageId);
}

function updateRecalledReplyContexts(messageId) {
  for (const box of els.messages.querySelectorAll(".message-reply-context")) {
    if (box.dataset.replyId !== messageId) continue;
    box.classList.add("recalled");
    const text = box.querySelector(".message-reply-text");
    if (text) text.textContent = t("messageRecalled");
  }
}

function scheduleReadReceipt(messageId) {
  if (!messageId || state.sentReadIds.has(messageId)) return;
  state.pendingReadIds.add(messageId);
  window.clearTimeout(state.readReceiptTimer);
  state.readReceiptTimer = window.setTimeout(flushReadReceipts, 350);
}

async function flushReadReceipts() {
  const messageIds = [...state.pendingReadIds].filter((id) => !state.sentReadIds.has(id));
  state.pendingReadIds.clear();
  if (messageIds.length === 0 || els.chatPanel.hidden) return;
  for (const id of messageIds) state.sentReadIds.add(id);

  try {
    await fetch("/api/message/read", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        room: state.room,
        clientId: state.clientId,
        roomAccessToken: state.roomAccessToken,
        messageIds
      })
    });
  } catch {
    for (const id of messageIds) state.sentReadIds.delete(id);
  }
}

function createReplyContextElement(replyTo) {
  const box = document.createElement("div");
  box.className = "message-reply-context";
  box.dataset.replyId = replyTo.id || "";
  box.title = t("replyToMessage");

  const label = document.createElement("span");
  label.className = "message-reply-label";
  label.textContent = t("replyingTo", replyTo.senderName || "");

  const text = document.createElement("p");
  text.className = "message-reply-text";
  text.textContent = replyTo.recalledAt ? t("messageRecalled") : replyTo.translatedText || replyTo.text || "";

  box.append(label, text);
  box.classList.toggle("recalled", Boolean(replyTo.recalledAt));
  box.addEventListener("click", (event) => {
    event.stopPropagation();
    scrollToMessage(replyTo.id);
  });
  return box;
}

function selectReplyTarget(message, item) {
  if (!message?.id) return;
  state.replyTarget = {
    id: message.id,
    senderName: message.senderName || "",
    text: message.translatedText || message.text || ""
  };
  markReplySelected(item);
  renderReplyPreview();
  els.messageInput.focus();
}

function markReplySelected(item) {
  els.messages.querySelectorAll(".reply-selected").forEach((element) => {
    element.classList.remove("reply-selected");
  });
  item?.classList.add("reply-selected");
}

function clearReplyTarget() {
  state.replyTarget = null;
  markReplySelected(null);
  renderReplyPreview();
}

function renderReplyPreview() {
  if (!state.replyTarget) {
    els.replyPreview.hidden = true;
    els.replyPreviewSender.textContent = "";
    els.replyPreviewText.textContent = "";
    return;
  }

  els.replyPreview.hidden = false;
  els.replyPreviewSender.textContent = t("replyingTo", state.replyTarget.senderName);
  els.replyPreviewText.textContent = summarizeInlineText(state.replyTarget.text, 120);
}

function scrollToMessage(messageId) {
  const target = [...els.messages.children].find((item) => item.dataset.messageId === messageId);
  if (!target) return;
  target.scrollIntoView({ block: "center", behavior: "smooth" });
  target.classList.add("message-highlight");
  window.setTimeout(() => {
    target.classList.remove("message-highlight");
  }, 1400);
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
  setLabelText(els.joinGlossaryInput, "joinGlossary");
  els.guideIntroTitle.textContent = t("guideIntroTitle");
  els.guideIntroInstructions.textContent = t("guideIntroInstructions");
  els.guideIntroGlossary.textContent = t("guideIntroGlossary");
  els.guideIntroPreview.textContent = t("guideIntroPreview");
  els.helpStepRoom.textContent = t("helpStepRoom");
  els.helpStepSettings.textContent = t("helpStepSettings");
  els.helpStepChat.textContent = t("helpStepChat");
  els.helpStepRulesIcon.textContent = t("helpStepRulesIcon");
  els.roomSettingsTitle.textContent = t("roomSettings");
  els.translationRulesTitle.textContent = t("translationRules");
  els.glossaryTitle.textContent = t("glossary");
  setLabelText(els.roomTitleInput, "roomName");
  setLabelText(els.inviteExpiryInput, "inviteExpiry");

  els.joinButton.textContent = t("join");
  setButtonLabel(els.newRoomButton, t("newRoom"));
  updateNotificationButton();
  updateRoomSettingsButton();
  setButtonLabel(els.roomSettingsButton, t("roomSettings"));
  setButtonLabel(els.saveRoomSettingsButton, t("saveRoomSettings"));
  setButtonLabel(els.closeRoomSettingsButton, t("closeRoomSettings"));
  updateTranslationRulesButton();
  setButtonLabel(els.translationRulesButton, t("translationRules"));
  setButtonLabel(els.applyRulesButton, t("applyRules"));
  setButtonLabel(els.addRuleButton, t("addRule"));
  setButtonLabel(els.collapseRulesButton, t("collapseRules"));
  setButtonLabel(els.copyLinkButton, t("copyLink"));
  setButtonLabel(els.leaveRoomButton, t("leaveRoom"));
  setButtonLabel(els.composerLeaveButton, t("leaveRoom"));
  setButtonLabel(els.previewButton, t("previewButton"));
  setButtonLabel(els.previewClearButton, t("previewClear"));
  setButtonLabel(els.replyCancelButton, t("cancelReply"));
  setButtonLabel(els.sendButton, t("send"));
  setButtonLabel(els.joinOptionsButton, t("translationOptions"));
  updateJoinOptionsButton();
  els.sentenceTranslatorButtonText.textContent = t("sentenceTranslator");
  els.sentenceTranslatorButtonHint.textContent = t("sentenceTranslatorHint");
  els.sentenceTranslatorTitle.textContent = t("sentenceTranslator");
  els.sentenceTranslatorSubtitle.textContent = t("sentenceTranslatorSubtitle");
  els.sentenceSourceLabel.textContent = t("sentenceSourceLanguage");
  els.sentenceTargetLabel.textContent = t("sentenceTargetLanguage");
  els.sentenceTextLabel.textContent = t("sentenceText");
  els.sentenceGuideLabel.textContent = t("sentenceGuide");
  els.sentenceTextInput.placeholder = t("sentenceTextPlaceholder");
  els.sentenceGuideInput.placeholder = t("sentenceGuidePlaceholder");
  els.sentenceTranslateButton.textContent = state.sentenceTranslating
    ? t("sentenceTranslating")
    : t("translateSentence");
  setButtonLabel(els.sentenceTranslatorButton, t("sentenceTranslator"));
  setButtonLabel(els.sentenceTranslatorCloseButton, t("close"));
  setButtonLabel(els.sentenceCopyButton, t("sentenceCopy"));
  updateSentenceLanguageOptions();
  els.messageInput.placeholder = t("messagePlaceholder");
  els.translationGuideInput.placeholder = t("translationGuidePlaceholder");
  els.joinGlossaryInput.placeholder = t("glossaryPlaceholder");
  els.glossaryInput.placeholder = t("glossaryPlaceholder");
  els.roomTitleInput.placeholder = t("roomNamePlaceholder");
  updateExpiryOptions();
  renderRoomSettingsPanel();
  updateRulesFeedback();
  if (!els.translationRulesPanel.hidden) {
    renderTonePresetButtons();
    renderTranslationRulesPanel();
  }
  els.joinPanel.setAttribute("aria-label", t("join"));
  els.chatPanel.setAttribute("aria-label", t("chatRoom"));
  document.querySelector(".room-label").textContent = t("room");

  updateMemberCount();
  renderPresenceSummary();
  renderTypingIndicator();
  renderReplyPreview();
  refreshStatus();
}

function updateSentenceLanguageOptions() {
  const languageNames = {
    ko: "한국어",
    en: "English",
    ja: "日本語",
    zh: "中文",
    vi: "Tiếng Việt"
  };
  for (const option of els.sentenceSourceLanguage.options) {
    option.textContent = option.value === "auto" ? t("sentenceAutoDetect") : languageNames[option.value];
  }
  for (const option of els.sentenceTargetLanguage.options) {
    option.textContent = languageNames[option.value] || option.textContent;
  }
}

function setLabelText(input, key) {
  const label = input.closest("label");
  const labelText = label?.querySelector(".label-with-icon span") || label?.querySelector("span");
  if (labelText) labelText.textContent = t(key);
}

function setButtonLabel(button, label) {
  button.title = label;
  button.setAttribute("aria-label", label);
}

function updateExpiryOptions() {
  const labels = {
    0: t("expiryNever"),
    60: t("expiry1h"),
    1440: t("expiry24h"),
    10080: t("expiry7d")
  };
  for (const option of els.inviteExpiryInput.options) {
    option.textContent = labels[option.value] || option.textContent;
  }
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

function summarizeInlineText(value, limit = 140) {
  const clean = String(value || "").trim().replace(/\s+/g, " ");
  if (clean.length <= limit) return clean;
  return `${clean.slice(0, Math.max(0, limit - 3))}...`;
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
  if (provider === "openai" || provider === "anthropic") return "AI";
  if (provider === "original") return t("original");
  return t("demo");
}

function getTonePresets() {
  const presets = t("tonePresets");
  if (Array.isArray(presets)) {
    return tonePresetIds
      .map((id) => presets.find((preset) => preset.id === id))
      .filter(Boolean);
  }
  return [];
}

function detectMessageLanguage(value) {
  const text = String(value || "");
  const hangul = countMatches(text, /\p{Script=Hangul}/gu);
  const kana = countMatches(text, /[\u3040-\u30ff]/gu);
  const han = countMatches(text, /[\u3400-\u9fff]/gu);
  const vietnameseMarks = countMatches(text, /[À-ỹĂăÂâĐđÊêÔôƠơƯư]/gu);

  if (hangul >= 2) return "ko";
  if (kana >= 2) return "ja";
  if (kana === 0 && han >= 2) return "zh";
  if (vietnameseMarks >= 1) return "vi";
  return "";
}

function countMatches(value, pattern) {
  return value.match(pattern)?.length || 0;
}

function showLanguageHint(detectedLanguage) {
  const detectedName = languages[detectedLanguage] || detectedLanguage;
  const selectedName = languages[state.language] || state.language;
  els.languageHint.textContent = t("languageMismatchDetail", detectedName, selectedName);
  els.languageHint.hidden = false;
}

function hideLanguageHint() {
  els.languageHint.hidden = true;
  els.languageHint.textContent = "";
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

function normalizeRoomTitle(value) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, 40);
}

function normalizeTranslationGuide(value) {
  return parseTranslationRules(value)
    .map((rule, index) => `${index + 1}. ${rule}`)
    .join("\n")
    .slice(0, 1_500);
}

function getClientId() {
  const stored = sessionStorage.getItem("translator.clientId");
  if (stored) return stored;
  const nextId = crypto.randomUUID();
  sessionStorage.setItem("translator.clientId", nextId);
  return nextId;
}

function normalizeRuleText(value) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, 220);
}

function parseTranslationRules(value) {
  return String(value || "")
    .split(/\r?\n|\s+\/\s+|;|；/g)
    .map(normalizeRuleText)
    .filter(Boolean)
    .slice(0, 8);
}

function normalizeGlossaryText(value) {
  return String(value || "")
    .split(/\r?\n|\s+\/\s+|;|；/g)
    .map((line) => line.trim().replace(/\s+/g, " "))
    .filter(Boolean)
    .slice(0, 20)
    .join("\n")
    .slice(0, 700);
}

function loadTranslationRules() {
  try {
    const stored = JSON.parse(localStorage.getItem("translator.translationRules") || "[]");
    if (Array.isArray(stored)) {
      const rules = stored.map(normalizeRuleText).filter(Boolean).slice(0, 8);
      if (rules.length > 0) return rules;
    }
  } catch {
    // Ignore bad local storage and fall back to the previous single-field value.
  }
  return parseTranslationRules(localStorage.getItem("translator.translationGuide") || "");
}

function loadTranslationGlossary() {
  return normalizeGlossaryText(localStorage.getItem("translator.translationGlossary") || "");
}

function saveTranslationRules() {
  state.translationRules = state.translationRules.map(normalizeRuleText).filter(Boolean).slice(0, 8);
  state.translationGuide = buildTranslationGuide(state.translationRules, state.translationGlossary);
  localStorage.setItem("translator.translationRules", JSON.stringify(state.translationRules));
  localStorage.setItem("translator.translationGuide", state.translationGuide);
  els.translationGuideInput.value = displayTranslationRulesForInput(state.translationRules);
  updateJoinOptionsButton();
  updateTranslationRulesButton();
  updateRulesFeedback();
}

function saveTranslationGlossary() {
  state.translationGlossary = normalizeGlossaryText(state.translationGlossary);
  state.translationGuide = buildTranslationGuide(state.translationRules, state.translationGlossary);
  localStorage.setItem("translator.translationGlossary", state.translationGlossary);
  els.glossaryInput.value = state.translationGlossary;
  els.joinGlossaryInput.value = state.translationGlossary;
  updateJoinOptionsButton();
  updateRulesFeedback();
}

function buildTranslationGuide(rules, glossary = "") {
  const normalizedRules = rules.map(normalizeRuleText).filter(Boolean).slice(0, 8);
  const normalizedGlossary = normalizeGlossaryText(glossary);
  const sections = [];
  if (normalizedRules.length > 0) {
    sections.push(
      [
        "Style and translation rules:",
        ...normalizedRules.map((rule, index) => `${index + 1}. ${rule}`)
      ].join("\n")
    );
  }
  if (normalizedGlossary) {
    sections.push(["Preferred glossary terms:", normalizedGlossary].join("\n"));
  }
  return sections.join("\n\n").slice(0, 1_500);
}

function displayTranslationRulesForInput(rules) {
  return rules.join(" / ");
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
