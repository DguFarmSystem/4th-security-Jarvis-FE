import axios from "axios";
// import { startMSW } from "../mocks/startMSW";

const API_BASE = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: `${API_BASE}/api/v1`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// let retriedOnce = new Set<string>();

api.interceptors.request.use((config) => {
  console.log("📤 요청 전송");
  console.log("👉 요청 URL:", config.url);
  console.log("👉 요청 Headers:", config.headers);
  console.log("👉 withCredentials:", config.withCredentials);
  console.log("👉 현재 document.cookie:", document.cookie);
  return config;
});

api.interceptors.response.use(
  (res) => {
    console.log("✅ 응답 도착", res);
    return res;
  },
  async (error) => {
    console.error("❌ 응답 오류 발생", error);

    // const config = error?.config;
    // const isNetworkError =
    //   !error.response &&
    //   (error.code === "ERR_NETWORK" ||
    //     error.message?.includes("Network Error"));

    // if (isNetworkError && config) {
    //   console.log("🌐 네트워크 오류로 MSW 시작 시도");
    //   await startMSW();
    //   return api.request(config);
    // }

    return Promise.reject(error);
  }
);

// // GET 결과가 빈 배열이면 MSW 시작 후 한 번 더 같은 요청을 해보는 헬퍼
// export async function getWithMockFallback<T = any>(url: string) {
//   const res = await api.get<T>(url);
//   const data: any = res.data;
//   if (Array.isArray(data) && data.length === 0) {
//     await startMSW();
//     const res2 = await api.get<T>(url);
//     return res2.data;
//   }
//   return data;
// }