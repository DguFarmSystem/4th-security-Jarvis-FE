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

이 가이드는 Jarvis 프론트엔드 프로젝트를 로컬에서 실행하고, Vercel에 배포하거나 GitHub Actions로 협업하는 데 필요한 설정 방법을 설명합니다.

### 1. 시스템 요구사항

| 항목     | 권장 버전 |
|----------|----------|
| Node.js  | `>=18.x` |
| pnpm     | `>=8.x`  |

```bash
# pnpm이 없다면 설치
npm install -g pnpm
````

---

### 2. 프로젝트 클론

```bash
git clone https://github.com/your-org/your-project.git
cd your-project
```

---

### 3. 환경 변수 설정 (`.env`)

루트 경로에 `.env` 또는 `.env.local` 파일을 생성한 후 아래 내용을 추가하세요:

```dotenv
# .env

VITE_API_URL=https://your-api-url.example.com
```

| 변수명            | 설명                       | 필수 | 예시                        |
| -------------- | ------------------------ | -- | ------------------------- |
| `VITE_API_URL` | 백엔드 API 서버 주소 (프론트에서 사용) | ✅  | `https://api.example.com` |

> ⚠️ 이 파일은 커밋하지 않도록 `.gitignore`에 등록되어 있습니다.

---

### 4. 의존성 설치

```bash
pnpm install
```

---

### 5. 로컬 개발 서버 실행

```bash
pnpm dev
```

* 기본 URL: [http://localhost:5173](http://localhost:5173)

---

## 🚀 GitHub Actions 설정 가이드

이 프로젝트는 GitHub Actions를 통해 다음과 같은 자동화를 수행합니다:

### ✅ Workflow 목록

| Workflow 이름                    | 트리거 조건                                 | 주요 동작                                    |
| ------------------------------ | -------------------------------------- | ---------------------------------------- |
| **Build & Deploy Storybook**   | PR 생성 시 (`src/components/atoms/**`) 변경 | Chromatic에 Storybook 업로드 후 PR에 댓글로 링크 공유 |
| **Preview**                    | 모든 PR 생성 시                             | Vercel Preview 배포 및 PR에 링크 공유            |
| **Synchronize to forked repo** | `main` 브랜치 push 시                      | 지정된 포크 저장소로 코드 자동 푸시                     |

---

## 🔐 GitHub Actions Secrets 설정 가이드

GitHub Actions에서 사용하는 비밀 키(Secrets)는 다음 경로에서 등록할 수 있습니다:

> **경로**:
> GitHub Repository → `Settings` → `Secrets and variables` → `Actions` → `New repository secret`

각 항목의 발급 및 설정 방법은 다음과 같습니다:

---

### 1. `CHROMATIC_PROJECT_TOKEN`

* **용도**: Chromatic에 Storybook을 배포할 때 인증
* **발급 방법**:

  1. [https://www.chromatic.com/](https://www.chromatic.com/) 에 로그인
  2. 프로젝트 생성 후, 좌측 메뉴 → **"Manage project"**
  3. **"Project Token"** 복사
* **GitHub Secrets에 추가**:

  * Name: `CHROMATIC_PROJECT_TOKEN`
  * Value: 위에서 복사한 Token

---

### 2. `GH_TOKEN`

* **용도**: PR에 자동 댓글을 작성하거나, Chromatic 등 외부 연동 시 인증
* **발급 방법**:

  1. GitHub → [Developer Settings → Personal access tokens (classic)](https://github.com/settings/tokens)
  2. "Generate new token (classic)" 클릭
  3. **권한 설정**:

     * `repo` (전체)
     * `write:discussion`
     * `write:packages`
     * `workflow`
  4. Token 생성 후 복사 (한 번만 보여집니다)
* **GitHub Secrets에 추가**:

  * Name: `GH_TOKEN`
  * Value: 위에서 생성한 Personal Access Token

> ⚠️ 이 토큰은 **PR 댓글 작성**, **Chromatic 인증** 등에 쓰입니다.

---

### 3. `AUTO_ACTIONS`

* **용도**: `main` 브랜치 변경 시, 포크된 저장소로 자동 푸시
* **발급 방법**: 본인의 GitHub 계정에서 **PAT (Personal Access Token)** 발급

  * 위의 `GH_TOKEN` 발급 절차와 동일하되, 권한에 다음을 포함해야 함:

    * `repo`
    * `workflow`
    * `admin:repo_hook`
* **GitHub Secrets에 추가**:

  * Name: `AUTO_ACTIONS`
  * Value: 생성한 토큰

---

### 4. `OFFICIAL_ACCOUNT_EMAIL`

* **용도**: Git user.email 설정에 사용됨 (포크 푸시 시)
* **설정 방법**: 푸시용 GitHub 계정의 등록된 이메일 사용
* **GitHub Secrets에 추가**:

  * Name: `OFFICIAL_ACCOUNT_EMAIL`
  * Value: `example@youremail.com`

---

## 🌐 Vercel 설정 가이드

이 프로젝트는 **Vercel Preview 배포**를 GitHub Actions로 자동화하고 있습니다.
이를 위해 Vercel 프로젝트의 **ID, Token, 환경변수** 설정이 필요합니다.

---

### 1. `VERCEL_TOKEN` 발급

* **용도**: Vercel CLI 인증
* **발급 방법**:

  1. [Vercel Dashboard](https://vercel.com/) 접속
  2. 오른쪽 상단 사용자 아이콘 클릭 → **Settings**
  3. 왼쪽 메뉴 → **Tokens** → `Create Token`
  4. 원하는 이름 입력 → `Create`
* **GitHub Secrets에 추가**:

  * Name: `VERCEL_TOKEN`
  * Value: 위에서 복사한 토큰

---

### 2. `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` 확인

* **용도**: Vercel CLI에서 프로젝트를 빌드/배포하기 위한 ID 정보
* **확인 방법**:

  1. 먼저 Vercel CLI를 전역 설치합니다:

  ```bash
  npm install -g vercel
  ```

  2. 터미널에서 다음 명령어 실행:

  ```bash
  vercel pull --yes --environment=preview --token=YOUR_VERCEL_TOKEN
  ```

  3. 실행이 완료되면 프로젝트 루트에 `.vercel` 폴더가 생성되고, 그 안의 `project.json` 파일에 다음 정보가 포함됩니다:

  * `orgId`
  * `projectId`
- **또는, 수동 확인**:

  * [Vercel Dashboard](https://vercel.com/dashboard)
  * 프로젝트 클릭 → `Settings` → 하단의 `Project ID`, `Org ID` 확인 가능

- **GitHub Secrets에 추가**:

  * Name: `VERCEL_PROJECT_ID` → Vercel의 Project ID
  * Name: `VERCEL_ORG_ID` → Vercel의 Organization ID

---

### 3. Vercel 환경 변수 설정 (`VITE_API_URL`)

> 이 프로젝트에서는 프론트엔드에서 사용할 API 주소를 **Vercel 환경 변수로 따로 지정**해야 합니다.

* **경로**:

  * Vercel → 프로젝트 선택 → `Settings` → `Environment Variables`

* **등록 값**:

| Key            | Value 예시                  | Environment    |
| -------------- | ------------------------- | -------------- |
| `VITE_API_URL` | `https://api.example.com` | All or Preview |

> 🔁 이 변수는 `.env`에도 동일하게 설정되어야 합니다.

---

## 📝 요약: GitHub Secrets & Vercel 세팅 리스트

| 항목                        | 설정 위치          | 발급 방법 요약                     |
| ------------------------- | -------------- | ---------------------------- |
| `CHROMATIC_PROJECT_TOKEN` | GitHub Secrets | Chromatic → Manage Project   |
| `GH_TOKEN`                | GitHub Secrets | GitHub Personal Token (PAT)  |
| `AUTO_ACTIONS`            | GitHub Secrets | GitHub PAT                   |
| `OFFICIAL_ACCOUNT_EMAIL`  | GitHub Secrets | GitHub 계정 이메일                |
| `VERCEL_TOKEN`            | GitHub Secrets | Vercel → Settings → Token 생성 |
| `VERCEL_ORG_ID`           | GitHub Secrets | Vercel Settings 또는 CLI       |
| `VERCEL_PROJECT_ID`       | GitHub Secrets | Vercel Settings 또는 CLI       |
| `VITE_API_URL`            | Vercel 환경 변수   | 프로젝트 Settings 내 Environment  |

---

## 🧑‍💻 기여 가이드

### 브랜치 전략

* 모든 PR은 `main` 브랜치를 대상으로 생성

### PR 생성 시 자동 작업

* Chromatic에서 Storybook Preview 배포 → PR에 댓글로 링크 추가
* Vercel Preview 배포 → PR에 댓글로 배포 링크 추가

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
