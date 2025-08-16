import { http, HttpResponse, delay } from "msw";
const mockToken = 'mock-jwt-token';

// --- Mock 데이터베이스 ---
const mockUsers = [
  { name: 'comet', roles: ['editor', 'access'] },
  { name: 'api-user', roles: ['api-tester'] },
];

const mockRoles = [
  { name: 'editor', logins: ['ubuntu'] },
  { name: 'api-tester', app_labels: { '*': '*' } },
];

const mockNodes = [
  {
    hostname: 'gcp-instance-1',
    addr: '34.64.197.81',
  },
];

// --- API 핸들러  ---
export const handlers = [
    // GET /api/users
  http.get('/api/users', async () => {
    await delay(500); // 응답 지연 시뮬레이션
    return HttpResponse.json(mockUsers);
  }),

  // GET /api/roles
  http.get('/api/roles', async () => {
    await delay(500);
    return HttpResponse.json(mockRoles);
  }),
 
   // GET /api/resources/nodes
  http.get('/api/resources/nodes', async () => {
    await delay(500);
    return HttpResponse.json(mockNodes);
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