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
  set(isAuthenticatedAtom, false); 
});