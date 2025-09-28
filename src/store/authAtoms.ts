import { atom } from "jotai";

// 인증 상태 atom (읽기 + 쓰기 가능)
export const isAuthenticatedAtom = atom<boolean, [boolean], void>(
  () => {
    const token = localStorage.getItem("accessToken");
    return !!token;
  },
  (_get, set, newValue) => {
    set(isAuthenticatedAtom, newValue);
  }
);

// 로그인 시 accessToken 저장하고 상태 true
export const loginAtom = atom(null, (_get, set, token: string) => {
  localStorage.setItem("accessToken", token);
  set(isAuthenticatedAtom, true);
});

// 로그아웃 시 토큰 제거하고 상태 false
export const logoutAtom = atom(null, (_get, set) => {
  localStorage.removeItem("accessToken");
  set(isAuthenticatedAtom, false);
});