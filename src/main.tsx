import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import { worker } from './mocks/browser.ts'
import "../src/styles/theme.css";

// worker.start();

// async function prepare() {
//   // 프로덕션에서는 무조건 MSW 실행하지 않음
//   if (import.meta.env.MODE !== "development") return;

//   try {
//     // 서버에 /users 요청으로 연결 확인
//     const response = await fetch("https://localhost:8080/api/v1/users", {
//       credentials: "include",
//     });

//     if (!response.ok) throw new Error("API 연결 실패");

//     console.info("[MSW] 서버 연결 성공: MSW 비활성화됨");
//   } catch (error) {
//     console.warn("[MSW] 서버 연결 실패: MSW 활성화됨");
//     const { startMSW } = await import("./mocks/startMSW");
//     await startMSW();
//   }
// }

// prepare().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
// });