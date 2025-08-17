import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: `${API_BASE}/api/v1`, 
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});
