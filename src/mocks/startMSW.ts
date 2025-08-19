import { worker } from "./browser";

declare global {
  interface Window {
    __MSW_STARTED__?: boolean;
  }
}

export async function startMSW() {
  if (window.__MSW_STARTED__) return;
  
  await worker.start({
    onUnhandledRequest: "bypass",
    serviceWorker: {
      url: "/mockServiceWorker.js",
    },
  });
  window.__MSW_STARTED__ = true;
}