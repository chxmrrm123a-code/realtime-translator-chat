# realtime-translator-chat
1:1 realtime AI interpreter chat web app

## TRIO Android 호환 API

TRIO Android 앱은 같은 서버의 `POST /api/translate`를 사용할 수 있습니다.

```json
{
  "sourceLanguage": "ko",
  "targetLanguage": "vi",
  "style": "friendly",
  "customRules": "자연스러운 메신저 말투로 번역한다.",
  "text": "오늘 저녁에 시간 있어?"
}
```

응답의 `translation` 값이 앱에 입력됩니다. 입력 언어와 출력 언어가 같으면 번역 대신 같은 언어로 문장을 다듬습니다. AI 연결이 실패하면 데모 문장을 반환하지 않고 오류로 처리합니다.

개인용 접근 코드를 사용하려면 서버에 `APP_ACCESS_CODE`를 설정하고 앱에도 같은 코드를 입력합니다. 코드가 설정된 서버는 `x-access-code` 요청 헤더를 확인합니다.

## 채팅 기록 영구 저장

서버는 방 설정, 원문, 번역 규칙, 읽음 상태, 반응, 회수 상태와 언어별 번역문을 SQLite에 저장합니다. 재접속할 때 저장된 번역문을 다시 사용하므로 같은 메시지에 대한 AI API 호출을 반복하지 않습니다.

- 기본 개발 경로: `./data/trio-chat.sqlite`
- 배포 환경변수: `CHAT_DATABASE_PATH`
- Render Persistent Disk 권장 마운트 경로: `/var/data`
- Render 권장 DB 경로: `/var/data/trio-chat.sqlite`

Persistent Disk가 없는 Render 서비스의 파일시스템은 재배포나 재시작 때 초기화됩니다. 업무 기록을 보존하려면 유료 Web Service에 Persistent Disk를 연결하고 `CHAT_DATABASE_PATH=/var/data/trio-chat.sqlite`를 설정해야 합니다.

`ROOM_HISTORY_LIMIT`은 한 번에 방으로 불러오는 최근 메시지 수입니다. 한 달 소규모 파일럿을 위해 기본값은 5000이며 SQLite에는 그보다 오래된 메시지도 삭제하지 않고 남깁니다. 사용자가 방 만료 시간을 직접 설정해 방이 만료되면 해당 방의 저장 기록도 삭제됩니다.
