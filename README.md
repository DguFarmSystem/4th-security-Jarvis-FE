Jarvis Frontend (자비스 프론트엔드)

이 저장소는 Jarvis 프로젝트의 웹 프론트엔드입니다. 백엔드 API와 Teleport 클러스터가 제공하는 기능을 브라우저에서 안전하고 직관적으로 사용할 수 있도록 UI/UX를 제공합니다. SSO 로그인 → RBAC 기반 관리 → 보안 SSH 세션 → 감사/세션 분석 뷰잉까지, 운영자가 필요한 워크플로를 한 곳에서 처리합니다.

⸻

✨ 주요 기능 (Features)
	•	대시보드 & 상태 가시화: 접속 현황, 최근 이벤트/세션, 알림을 한 눈에 확인.
	•	리소스(Onboarding) 관리 UI: 서버/DB/애플리케이션 리소스 목록, 필터, 생성/삭제 등 CRUD 인터랙션.
	•	RBAC 관리 화면: 사용자/역할(roles)/권한(permissions) 편집, 체크박스 기반 토글, 즉시 반영 UI.
	•	보안 SSH 웹 터미널: 브라우저에서 WebSocket으로 SSH 세션 연결/중계(xterm.js 사용), 세션 종료/복구 UX.
	•	세션 & 감사 로그 뷰어: 세션 리스트/실시간 보기, 감사 로그 검색·필터링, AI 분석 결과(요약/리스크 태그) 표출.
	•	GitHub SSO 연동: GitHub OAuth2 로그인, 팀 멤버십 기반 접근 제어, 보호 라우트(Protected Route) 처리.
	•	데이터 패칭 상태관리: TanStack Query로 서버 상태 캐시, 로딩/에러/리트라이 표준화.

⸻

🛠️ 기술 스택 (Tech Stack)
	•	언어/프레임워크: React + TypeScript
	•	번들러: Vite
	•	라우팅: React Router v6
	•	서버 상태: TanStack Query
	•	HTTP 클라이언트: Axios (+ 인터셉터/MSW 폴백)
	•	실시간: WebSocket (SSH 터미널, 세션 실시간 보기)
	•	UI: 커스텀 컴포넌트, CSS( src/styles/global.css 등 )
	•	터미널: xterm.js
	•	Mock: MSW
	•	문서화: Storybook
	•	품질: ESLint, Prettier (옵션)
	•	배포: Vercel

⸻

🔐 인증 & 권한 (Auth/RBAC)
	•	GitHub SSO: /login 진입 시 백엔드 OAuth 플로우로 리디렉트, 성공 후 쿠키 세션 발급.
	•	Protected Routes: 인증 전에는 로그인 모달/페이지로 유도. 인증 후 대시보드/관리 메뉴 접근.
	•	RBAC 연동: 현재 사용자 역할에 따른 버튼/액션/메뉴 활성화·비활성화.

⸻

🖥️ 주요 화면 (Screens)
	•	Dashboard: 요약 지표, 최근 세션/이벤트, 빠른 액션.
	•	Resources: 서버/DB/앱 리소스 목록, 필터, 등록/삭제, 액션 버튼.
	•	Sessions: 활성/종료 세션, 실시간 보기, 개별 세션 상세.
	•	Management: 사용자/역할/권한 관리(체크박스 토글 기반), 생성/수정/삭제 모달.
	•	Audit Logs: 기간/키워드/타입 필터, AI 분석 결과(요약·리스크 라벨) 표시.
