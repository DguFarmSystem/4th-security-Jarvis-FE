import { http, HttpResponse, delay } from "msw";
import { mockUsers } from "./mockUser";
import { mockRoles } from "./mockRoles";
import { mockNodes } from "./mockNodes";
import { mockEvents } from "./mockEvents";
import { mockSessions } from "./mockSessions";
const mockToken = 'mock-jwt-token';

// --- API 핸들러  ---
export const handlers = [
    // GET /api/v1/users
  http.get('/api/v1/users', async () => {
    await delay(500); // 응답 지연 시뮬레이션
    return HttpResponse.json(mockUsers);
  }),

  // GET /api/v1/roles
  http.get('/api/v1/roles', async () => {
    await delay(500);
    return HttpResponse.json(mockRoles);
  }),
 
   // GET /api/v1/resources/nodes
  http.get('/api/v1/resources/nodes', async () => {
    await delay(500);
    return HttpResponse.json(mockNodes);
  }),

  // GET /api/v1/audit/events
  http.get('/api/v1/audit/events', async () => {
    await delay(500);
    return HttpResponse.json(mockEvents);
  }),

  // GET /api/v1/audit/session
  http.get('/api/v1/audit/session', async () => {
    await delay(500);
    return HttpResponse.json(mockSessions);
  }),

  // GitHub 로그인 후 리다이렉트 + 쿠키 설정
 // 로그인 요청 핸들러
  http.get('https://openswdev.duckdns.org:3000/', () => {
    return HttpResponse.text('Redirecting...', {
      status: 302,
      headers: {
        'Location': 'https://jarvis-indol-omega.vercel.app',
        'Set-Cookie': `auth_token=${mockToken}; Path=/; Max-Age=3600; HttpOnly`,
      },
    });
  }),
];