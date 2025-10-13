import { atom } from "jotai";

// 상태만 저장하는 writable atom
export const isAuthenticatedAtom = atom<boolean>(false);

// 로그인 상태 갱신용 atom
export const loginAtom = atom(null, (_get, set, token: string) => {
  localStorage.setItem("accessToken", token);
  set(isAuthenticatedAtom, true); 
});

export const logoutAtom = atom(null, (_get, set) => {
  localStorage.removeItem("accessToken");
  document.cookie = "auth_token=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  set(isAuthenticatedAtom, false); 
});