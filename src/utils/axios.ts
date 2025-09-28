import axios from "axios";
import { logoutOn401 } from "./auth";
// import { startMSW } from "../mocks/startMSW";

const API_BASE = "http://localhost:8080";

export const api = axios.create({
  baseURL: `${API_BASE}/api/v1`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// let retriedOnce = new Set<string>();

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token && config.headers && typeof config.headers.set === 'function') {
    config.headers.set('Authorization', `Bearer ${token}`);
  }

  return config;
});

api.interceptors.response.use(
  (res) => {
    console.log("응답 도착", res);
    return res;
  },
  async (error) => {
    console.error("응답 오류 발생", error);
    if (error.response?.status === 401) {
      logoutOn401();
    }

    // const config = error?.config;
    // const isNetworkError =
    //   !error.response &&
    //   (error.code === "ERR_NETWORK" ||
    //     error.message?.includes("Network Error"));

    // if (isNetworkError && config) {
    //   console.log("네트워크 오류로 MSW 시작 시도");
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