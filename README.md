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
