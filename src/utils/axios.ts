import axios from "axios";
import { startMSW } from "../mocks/startMSW";

const API_BASE = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: `${API_BASE}/api/v1`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

let retriedOnce = new Set<string>();

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const config = error?.config;
    const isNetworkError = !error.response && (error.code === "ERR_NETWORK" || error.message?.includes("Network Error"));
    if (isNetworkError && config && !retriedOnce.has(config.url)) {
      retriedOnce.add(config.url);
      await startMSW();
      return api.request(config);
    }
    return Promise.reject(error);
  }
);

// GET 결과가 빈 배열이면 MSW 시작 후 한 번 더 같은 요청을 해보는 헬퍼
export async function getWithMockFallback<T = any>(url: string) {
  const res = await api.get<T>(url);
  const data: any = res.data;
  if (Array.isArray(data) && data.length === 0) {
    await startMSW();
    const res2 = await api.get<T>(url);
    return res2.data;
  }
  return data;
}