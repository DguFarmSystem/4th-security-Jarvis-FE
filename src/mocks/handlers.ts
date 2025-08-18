import { http, HttpResponse, delay } from "msw";
import { mockUsers } from "./mockUser";
import { mockRoles } from "./mockRoles";
import { mockNodes } from "./mockNodes";
import { mockEvents } from "./mockEvents";
import { mockSessions } from "./mockSessions";

const API_HOST = "https://openswdev.duckdns.org:3000";
const paths = (p: string) => [p, `${API_HOST}${p}`];
const mockToken = 'mock-jwt-token';
let users = [...mockUsers];
let roles = [...mockRoles];
let nodes = [...mockNodes];
let events = [...mockEvents];
let sessions = [...mockSessions];

// interface UserUpdatePayload {
//   spec: {
//     roles: string[] | string;
//   };
//   [key: string]: any;
// }

interface UpdateUserRequest {
  roles: string[];
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
   ...paths("/api/v1/users").map((url) =>
    http.get(url, async () => {
      await delay(200);
      return HttpResponse.json(users);
    })
  ),

    // PUT /api/v1/users/:username - 사용자 업데이트
...paths("/api/v1/users/:username").map((url) =>
  http.put(url, async ({ params, request }) => {
    const { username } = params as { username: string };

    // 요청 형식 엄격: { roles: string[] } 만 허용
    const body = (await request.json()) as UpdateUserRequest;
    if (!body || !Array.isArray(body.roles)) {
      return new HttpResponse(
        "요청 본문이 잘못되었습니다: { roles: string[] } 형식이어야 합니다.",
        { status: 400 }
      );
    }

    const updatedRoles = body.roles.map(String);

    const idx = users.findIndex((u) => u?.metadata?.name === username);
    if (idx < 0) {
      return new HttpResponse(`User '${username}' not found`, { status: 404 });
    }

    // mock 스키마 그대로 필드만 업데이트
    users[idx].spec.roles = updatedRoles;

    // 백엔드와 유사한 성공 응답
    return HttpResponse.json({
      message: `User '${username}' updated successfully.`,
    });
  })
),
// DELETE /api/v1/users/:username - 사용자 삭제
...paths("/api/v1/users/:username").map((url) =>
    http.delete(url, async ({ params }) => {
      const { username } = params;

  const index = mockUsers.findIndex(u => u.metadata.name === username);
  if (index !== -1) {
    users.splice(index, 1);
    return HttpResponse.json({ message: `User '${username}' deleted successfully.` });
  } else {
    return new HttpResponse(`User '${username}' not found`, { status: 404 });
  }
    })
  ),

  // GET /api/v1/roles
  ...paths("/api/v1/roles").map((url) =>
    http.get(url, async () => {
      await delay(200);
      return HttpResponse.json(roles);
    })
  ),

 // POST /api/v1/roles - 역할 생성 (백엔드 CreateRole와 동일)
...paths("/api/v1/roles").map((url) =>
  http.post(url, async ({ request }) => {
    const body = (await request.json()) as any;
    if (!body?.metadata?.name) {
      return new HttpResponse("요청 본문(Role)이 잘못되었습니다: metadata.name 필요", { status: 400 });
    }
    // 이미 존재하면 409로 막아도 되지만, 여기선 단순 생성
    roles.push(body);
    return HttpResponse.json(body, { status: 201 });
  })
),

// PUT /api/v1/roles - 업서트 (백엔드 UpsertRole와 동일)
...paths("/api/v1/roles").map((url) =>
  http.put(url, async ({ request }) => {
    const body = (await request.json()) as any;
    if (!body?.metadata?.name) {
      return new HttpResponse("Role name is required in metadata.name", { status: 400 });
    }
    const roleName = body.metadata.name;
    const idx = roles.findIndex((r) => r.metadata?.name === roleName);

    if (idx !== -1) {
      roles[idx] = {
        ...roles[idx],
        ...body,
        metadata: { ...roles[idx].metadata, ...body.metadata },
        spec: { ...roles[idx].spec, ...body.spec },
      };
      return HttpResponse.json(roles[idx], { status: 200 });
    } else {
      roles.push(body);
      return HttpResponse.json(body, { status: 200 }); // upsert 성공
    }
  })
),

  // DELETE /api/v1/roles/:rolename - 역할 삭제
...paths("/api/v1/roles/:rolename").map((url) =>
  http.delete(url, async ({ params }) => {
    const { rolename } = params as { rolename: string };
    const index = roles.findIndex(r => r.metadata?.name === rolename);

    if (index !== -1) {
      roles.splice(index, 1);
      return HttpResponse.json({ message: `Role '${rolename}' deleted successfully.` });
    } else {
      return new HttpResponse(`Role '${rolename}' not found`, { status: 404 });
    }
  })
),

   // GET /api/v1/resources/nodes
   ...paths("/api/v1/resources/nodes").map((url) =>
    http.get(url, async () => {
      await delay(200);
      return HttpResponse.json(nodes);
    })
  ),
  
  // DELETE /api/v1/resources/nodes/:nodename
   ...paths("/api/v1/resources/nodes/:nodename").map((url) =>
    http.delete(url, async ({ params }) => {
      const { nodename } = params;
  return HttpResponse.json({ message: `Node '${nodename}' deleted successfully.` });
    })
  ),

  // GET /api/v1/audit/events
   ...paths("/api/v1/audit/events").map((url) =>
    http.get(url, async () => {
      await delay(200);
      return HttpResponse.json(events);
    })
  ),

  // GET /api/v1/audit/session
  ...paths("/api/v1/audit/session").map((url) =>
    http.get(url, async () => {
      await delay(200);
      return HttpResponse.json(sessions);
    })
  ),

  // GitHub 로그인 후 리다이렉트 + 쿠키 설정
 // 로그인 요청 핸들러
  http.get(`${API_HOST}/`, () => {
    return HttpResponse.text("Redirecting...", {
      status: 302,
      headers: {
        Location: "https://jarvis-indol-omega.vercel.app",
        "Set-Cookie": `auth_token=${mockToken}; Path=/; Max-Age=3600; HttpOnly`,
      },
    });
  }),
  // http.get('https://openswdev.duckdns.org:3000/', () => {
  //   return HttpResponse.text('Redirecting...', {
  //     status: 302,
  //     headers: {
  //       'Location': 'https://jarvis-indol-omega.vercel.app',
  //       'Set-Cookie': `auth_token=${mockToken}; Path=/; Max-Age=3600; HttpOnly`,
  //     },
  //   });
  // }),
];