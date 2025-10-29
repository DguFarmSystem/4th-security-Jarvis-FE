# Jarvis Frontend (자비스 프론트엔드)

이 저장소는 Jarvis 프로젝트의 웹 프론트엔드입니다. 백엔드 API와 Teleport 클러스터가 제공하는 기능을 브라우저에서 안전하고 직관적으로 사용할 수 있도록 UI/UX를 제공합니다. SSO 로그인 → RBAC 기반 관리 → 보안 SSH 세션 → 감사/세션 분석 뷰잉까지, 운영자가 필요한 워크플로를 한 곳에서 처리합니다.

## ✨ 주요 기능 (Features)

* **대시보드 & 상태 가시화**: 접속 현황, 최근 이벤트/세션, 알림을 한 눈에 확인
* **리소스 관리 UI**: 서버/DB/애플리케이션 리소스 목록, 필터, CRUD 인터랙션
* **RBAC 관리 화면**: 사용자/역할/권한 편집, 체크박스 기반 즉시 반영
* **보안 SSH 웹 터미널**: WebSocket 기반 실시간 터미널 (xterm.js 사용)
* **세션 & 감사 로그 뷰어**: 실시간 보기, 필터링, AI 기반 요약/리스크 태그
* **GitHub SSO 연동**: OAuth2 로그인, 팀 멤버십 기반 보호 라우트 처리
* **데이터 상태관리**: TanStack Query로 서버 상태 캐시 및 에러 핸들링

## 🛠️ 기술 스택 (Tech Stack)

* **언어/프레임워크**: React + TypeScript
* **번들러**: Vite
* **라우팅**: React Router v6
* **서버 상태**: TanStack Query
* **HTTP 클라이언트**: Axios (인터셉터 + MSW 폴백)
* **실시간 처리**: WebSocket
* **UI 스타일링**: 커스텀 CSS (`src/styles/global.css`)
* **SSH 터미널**: xterm.js
* **Mocking**: MSW
* **컴포넌트 문서화**: Storybook
* **정적 분석**: ESLint, Prettier
* **배포**: Vercel

## 🔐 인증 및 권한 (Auth & RBAC)

* **GitHub SSO**: `/login` 시 백엔드 OAuth 플로우 리디렉트 → 쿠키 세션 발급
* **Protected Routes**: 인증 전에는 로그인 페이지 유도
* **RBAC 연동**: 사용자 역할에 따라 UI 제어 (버튼/액션/메뉴 비활성화)

## 🖥️ 주요 화면 (Screens)

* **Dashboard**: 요약 지표, 최근 세션/이벤트
* **Resources**: 리소스 목록, 리소스 등록/삭제
* **Sessions**: 활성/종료 세션 목록, SSH 터미널 접속
* **Management**: 사용자/역할/권한 관리 (체크박스 토글 기반)
* **Audit Logs**: 종료된 세션의 로그 조회, AI를 통한 세션 분석

---

## 🚀 설치 가이드

* **설치 가이드**: Deploy 레포지토리에서 clone을 하여 docker로 빌드하거나 이미지를 받아 실행시킵니다.

---

## 🧑‍💻 기여 가이드

### 브랜치 전략

* 모든 PR은 `main` 브랜치를 대상으로 생성

### PR 생성 시 자동 작업

* Chromatic에서 Storybook Preview 배포 → PR에 댓글로 링크 추가
* Vercel Preview 배포 → PR에 댓글로 배포 링크 추가

### 📝 기여 방법 (Contribution Guide)

1. `main` 브랜치를 기준으로 새 브랜치 생성
2. 기능 구현 또는 버그 수정
3. PR 생성 → GitHub Actions가 자동으로 PR 미리보기 및 Storybook URL 제공
4. 리뷰 후 병합

### 🖥️ 로컬 개발 팁

* 실제 API 연동 없이 테스트하려면 `Mock Service Worker (MSW)`를 활성화하면 됩니다.
* 컴포넌트 개발은 Storybook (`pnpm storybook`)으로 병행 개발 가능합니다.
* 환경에 따라 Vite dev server 포트를 커스터마이징할 수 있습니다:
  `.env.local`에 `VITE_PORT=3000` 등 추가
