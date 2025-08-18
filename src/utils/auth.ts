function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function parseJwt(token: string): any | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const payload = atob(base64);
    return JSON.parse(payload);
  } catch (e) {
    console.error("JWT 파싱 실패:", e);
    return null;
  }
}

export function getCurrentUsernameFromCookie(): string | null {
  const token = getCookie("auth_token");
  const decoded = token ? parseJwt(token) : null;
  return decoded?.username ?? null;
}