import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// const getInitialAuthStatus = () => {
//     return !!localStorage.getItem("accessToken");
// };

// 'isAuth'라는 새로운 키에 boolean 값을 저장하고, 초기값을 false로 설정
export const isAuthenticatedAtom = atomWithStorage<boolean>("isAuth", false);

// 로그인 상태 갱신용 atom
export const loginAtom = atom(null, (_get, set, token: string) => {
    localStorage.setItem("accessToken", token);
    
    // isAuthenticatedAtom에 true를 설정 시 atomWithStorage가 'isAuth' 키에도 true를 저장
    set(isAuthenticatedAtom, true); 
});

export const logoutAtom = atom(null, (_get, set) => {
    localStorage.removeItem("accessToken");
    document.cookie = "auth_token=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    
    // isAuthenticatedAtom에 false를 설정 시 atomWithStorage가 'isAuth' 키에도 false를 저장
    set(isAuthenticatedAtom, false); 
});