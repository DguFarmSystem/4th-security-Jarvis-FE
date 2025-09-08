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

* **Dashboard**: 요약 지표, 최근 세션/이벤트, 빠른 액션
* **Resources**: 리소스 목록, 필터, 등록/삭제, 액션 버튼
* **Sessions**: 활성/종료 세션 목록, 실시간 보기, 세션 상세
* **Management**: 사용자/역할/권한 관리 (체크박스 토글 기반)
* **Audit Logs**: 기간/키워드 필터, AI 분석 결과 표시

---

## 🚀 설치 가이드

이 가이드는 Jarvis 프론트엔드 프로젝트를 로컬에서 실행하고, Vercel에 배포하거나 GitHub Actions로 협업하는 데 필요한 설정 방법을 설명합니다.

### 📦 설치 및 실행

```bash
# 1. 레포 클론
git clone https://github.com/your-org-name/jarvis-frontend.git
cd jarvis-frontend

# 2. 의존성 설치 (pnpm 권장)
pnpm install

# 3. 개발 서버 실행
pnpm dev
```

기본적으로 Vite 개발 서버가 `localhost:5173`에서 실행됩니다. API 호출은 `.env`에 설정된 `VITE_API_URL`을 기준으로 수행됩니다.

---

### ⚙️ 환경변수 설정 (.env.local)

루트 디렉토리에 `.env.local` 파일을 생성하고 다음과 같이 작성합니다:

```env
VITE_API_URL=https://openswdev.duckdns.org
```

> `VITE_API_URL`은 프론트엔드에서 백엔드 API 서버로 요청을 보낼 때 사용하는 기본 URL입니다. 개발 환경에서는 이를 로컬 또는 테스트 서버로 변경할 수 있습니다.

---

### 🔐 GitHub Actions & 배포 관련 Secrets

협업 또는 CI/CD에 필요한 `Repository secrets`는 아래와 같이 사용됩니다:

| 이름                        | 설명                                        |
| ------------------------- | ----------------------------------------- |
| `AUTO_ACTIONS`            | 포크 레포로 자동 푸시 시 사용되는 Personal Access Token |
| `CHROMATIC_PROJECT_TOKEN` | Storybook 프리뷰를 Chromatic에 배포할 때 사용되는 토큰   |
| `GH_TOKEN`                | GitHub API 요청 및 PR 코멘트 등에 사용              |
| `OFFICIAL_ACCOUNT_EMAIL`  | Git 커밋 및 푸시 시 사용하는 공식 계정 이메일              |
| `VERCEL_ORG_ID`           | Vercel 조직 식별자                             |
| `VERCEL_PROJECT_ID`       | Vercel 프로젝트 식별자                           |
| `VERCEL_TOKEN`            | Vercel CLI 인증 및 배포용 토큰                    |

CI에서 사용하는 Workflows는 다음과 같습니다:

#### 1. ✅ **Preview Deployments**

* PR이 생성되면, Vercel로 미리보기 배포 진행
* `.env.local`은 Vercel 설정에서 자동으로 로딩됨 (`vercel pull`)

#### 2. 📚 **Storybook Preview**

* `src/components/atoms/**` 경로에 변경이 생기면 Chromatic으로 Storybook 빌드 & 공유 링크 PR에 자동 코멘트

#### 3. 🔄 **Fork Sync**

* `main` 브랜치에 푸시가 생기면 포크된 레포에도 자동 동기화 (협업자 코드 최신화)

---

### 🧪 유닛 테스트 & 린팅

```bash
# 테스트 실행
pnpm test

# 린트 실행
pnpm lint
```

---

### 📝 기여 방법 (Contribution Guide)

1. `main` 브랜치를 기준으로 새 브랜치 생성
2. 기능 구현 또는 버그 수정
3. PR 생성 → GitHub Actions가 자동으로 PR 미리보기 및 Storybook URL 제공
4. 리뷰 후 병합

---

### 🖥️ 로컬 개발 팁

* 실제 API 연동 없이 테스트하려면 `Mock Service Worker (MSW)`를 활성화하면 됩니다.
* 컴포넌트 개발은 Storybook (`pnpm storybook`)으로 병행 개발 가능합니다.
* 환경에 따라 Vite dev server 포트를 커스터마이징할 수 있습니다:
  `.env.local`에 `VITE_PORT=3000` 등 추가

---
