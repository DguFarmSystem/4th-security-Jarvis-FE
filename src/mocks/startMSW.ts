import { worker } from "./browser";

declare global {
  interface Window {
    __MSW_STARTED__?: boolean;
  }
}

export async function startMSW() {
  if (window.__MSW_STARTED__) return;
  // 배포에서도 동작하게 serviceWorker 경로 지정
  await worker.start({
    onUnhandledRequest: "bypass",
    serviceWorker: {
      url: "/mockServiceWorker.js", // public 폴더에 있어야 함
    },
  });
  window.__MSW_STARTED__ = true;
}