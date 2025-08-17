import { http, HttpResponse, delay } from "msw";
import { mockUsers } from "./mockUser";
import { mockRoles } from "./mockRoles";
import { mockNodes } from "./mockNodes";
import { mockEvents } from "./mockEvents";
import { mockSessions } from "./mockSessions";

const mockToken = 'mock-jwt-token';

interface UserUpdatePayload {
  spec: {
    roles: string[] | string;
  };
  [key: string]: any;
}

export interface TeleportRolePayload {
  apiVersion?: string;
  kind: string;
  metadata: {
     name: string;
  description?: string;
  labels?: {
  "teleport.internal/resource-type"?: string;
  "teleport.internal/bot"?: string;
} & {
  [key: string]: string | undefined;
};
  revision?: string;
  expires?: string;
  created_by?: {
    user?: {
      name?: string;
      [key: string]: any;
    };
    time?: string;
    [key: string]: any;
  };
  [key: string]: any;
  };
  spec: {
    allow?: TeleportRoleCondition;
    deny?: TeleportRoleCondition;
    options?: TeleportRoleOptions;
    [key: string]: any;
  };
}

export interface TeleportRoleCondition {
  logins?: string[];
  node_labels?: Record<string, string>;
  app_labels?: Record<string, string>;
  db_labels?: Record<string, string>;
  kubernetes_labels?: Record<string, string>;
  rules?: TeleportRule[];
  impersonate?: {
    users?: string[];
    roles?: string[];
    where?: string;
  };
  join_sessions?: Array<{
    kinds?: string[];
    modes?: string[];
    name?: string;
    roles?: string[];
  }>;
  request?: {
    roles?: string[];
    claims_to_roles?: Array<{
      claim: string;
      roles: string[];
      value: string;
    }>;
    max_duration?: string;
    suggested_reviewers?: string[];
    [key: string]: any;
  };
  [key: string]: any;
}

export interface TeleportRule {
  resources: string[];
  verbs: string[];
  actions?: string[];
  where?: string;
}

export interface TeleportRoleOptions {
  forward_agent?: boolean;
  max_session_ttl?: string;
  permit_x11_forwarding?: boolean;
  record_session?: {
    desktop?: boolean;
    ssh?: string;
    default?: string;
  };
  require_session_mfa?: string | number;
  ssh_file_copy?: boolean;
  ssh_port_forwarding?: {
    local?: {
      enabled?: boolean;
    };
    remote?: {
      enabled?: boolean;
    };
  };
  idp?: {
    saml?: {
      enabled?: boolean;
    };
  };
  [key: string]: any;
}

// --- API 핸들러  ---
export const handlers = [
    // GET /api/v1/users
  http.get('/api/v1/users', async () => {
    await delay(500); // 응답 지연 시뮬레이션
    return HttpResponse.json(mockUsers);
  }),

    // PUT /api/v1/users/:username - 사용자 업데이트
http.put('/api/v1/users/:username', async ({ params, request }) => {
  const { username } = params;
   const body = await request.json() as UserUpdatePayload;
  const updatedRoles = body.spec.roles;

  // mockUsers 내부에서 해당 유저 수정
  const user = mockUsers.find(u => u.metadata.name === username);
  if (user) {
    user.spec.roles = Array.isArray(updatedRoles) ? updatedRoles : [updatedRoles];
    return HttpResponse.json({ message: `User '${username}' updated successfully.` });
  } else {
    return new HttpResponse(`User '${username}' not found`, { status: 404 });
  }
}),

// DELETE /api/v1/users/:username - 사용자 삭제
http.delete('/api/v1/users/:username', async ({ params }) => {
  const { username } = params;

  const index = mockUsers.findIndex(u => u.metadata.name === username);
  if (index !== -1) {
    mockUsers.splice(index, 1);
    return HttpResponse.json({ message: `User '${username}' deleted successfully.` });
  } else {
    return new HttpResponse(`User '${username}' not found`, { status: 404 });
  }
}),

  // GET /api/v1/roles
  http.get('/api/v1/roles', async () => {
    await delay(500);
    return HttpResponse.json(mockRoles);
  }),
 
  // PUT /api/v1/roles - 역할 업데이트
  http.put("/api/v1/roles", async ({ request }) => {
  const body = await request.json() as any;

  // 필수 필드 체크
  if (!body || typeof body !== 'object') {
    return new HttpResponse("Invalid request body", { status: 400 });
  }

  if (!body.metadata || typeof body.metadata.name !== 'string') {
    return new HttpResponse("Role name is required in metadata.name", { status: 400 });
  }

  const roleName = body.metadata.name;

  const index = mockRoles.findIndex(
    (r) => r.metadata?.name === roleName
  );

  if (index !== -1) {
    // 기존 역할 업데이트
    mockRoles[index] = {
      ...mockRoles[index],
      ...body,
      metadata: {
        ...mockRoles[index].metadata,
        ...body.metadata,
      },
      spec: {
        ...mockRoles[index].spec,
        ...body.spec,
      },
    };
    return HttpResponse.json({ message: `Role '${roleName}' updated.` });
  } else {
    // 새 역할 추가
    mockRoles.push(body);
    return HttpResponse.json({ message: `Role '${roleName}' created.` });
  }
}),

   // GET /api/v1/resources/nodes
  http.get('/api/v1/resources/nodes', async () => {
    await delay(500);
    return HttpResponse.json(mockNodes);
  }),

  // DELETE /api/v1/resources/nodes/:nodename
http.delete('/api/v1/resources/nodes/:nodename', async ({ params }) => {
  const { nodename } = params;
  return HttpResponse.json({ message: `Node '${nodename}' deleted successfully.` });
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