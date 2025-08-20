import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  isDeleteConfirmModalOpenAtom,
  isUpdateUserModalOpenAtom,
  selectedUserAtom,
  selectedRoleAtom,
} from "../../store/modalAtoms";

import { UserManagement } from "../../components/atoms/Management/UserManagement";
import { RoleManagement } from "../../components/atoms/Management/RoleManagement";
import { ConfirmDeleteModal } from "../../components/atoms/Modal/ConfirmDeleteModal";
import { UpdateUserModal } from "../../components/atoms/Modal/UpdateUserModal";
import { CreateRoleModal } from "../../components/atoms/Modal/CreateRoleModal";
import { UpdateRoleModal } from "../../components/atoms/Modal/UpdateRoleModal";

import { api } from "../../utils/axios";

type User = {
  kind: string;
  metadata: {
    name: string;
  };
  spec: {
    roles: string[];
  };
};

type Rule = {
  resources: string[];
  verbs: string[];
};

type Role = {
  kind: string;
  version?: string;
  metadata?: {
    name: string;
    description?: string;
    labels?: Record<string, string>;
    revision?: string;
  };
  spec?: {
    allow?: {
      rules?: Rule[];
      logins?: string[];
      node_labels?: Record<string, string>;
      app_labels?: Record<string, string>;
      db_labels?: Record<string, string>;
      kubernetes_labels?: Record<string, string>;
      kubernetes_groups?: string[];
      kubernetes_users?: string[];
      impersonate?: {
        roles?: string[];
        users?: string[];
      };
      windows_desktop_labels?: Record<string, string>;
      aws_role_arns?: string[];
      azure_identities?: string[];
      gcp_service_accounts?: string[];
      db_users?: string[];
      db_names?: string[];
      db_roles?: string[];
      db_service_labels?: Record<string, string>;
      kubernetes_resources?: any[]; // 실제 스펙 맞게 정의해도 됨
      github_permissions?: any[];
      join_sessions?: any[];
      workload_identity_labels?: Record<string, string>;
      [key: string]: any; // 기타 미정의 필드 대응
    };
    deny?: {
      rules?: Rule[];
      [key: string]: any;
    };
  };
};

export default function ManagementPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [deletingTarget, setDeletingTarget] = useState<"user" | "role" | null>(null);

  const [isDeleteModalOpen, setDeleteModalOpen] = useAtom(isDeleteConfirmModalOpenAtom);
  const [isUpdateUserModalOpen, setUpdateUserModalOpen] = useAtom(isUpdateUserModalOpenAtom);
  const [selectedUser, setSelectedUser] = useAtom(selectedUserAtom);
  const [selectedRole, setSelectedRole] = useAtom(selectedRoleAtom);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newRolePermissions, setNewRolePermissions] = useState<string[]>([]);;
  const [newRoleName, setNewRoleName] = useState("");

   const [showEditRoleModal, setShowEditRoleModal] = useState(false);
  const [editRoleName, setEditRoleName] = useState("");
  const [editRoleChecked, setEditRoleChecked] = useState<string[]>([]);

  // 리스트 조회
  const fetchUsers = async () => {
    try {
      const { data } = await api.get("/users");
      setUsers(Array.isArray(data) ? data : data?.users ?? []);
    } catch (err) {
      console.error("유저 목록 가져오기 실패", err);
    }
  };

  const fetchRoles = async () => {
    try {
      const { data } = await api.get("/roles");
      setRoles(Array.isArray(data) ? data : data?.roles ?? []);
    } catch (err) {
      console.error("역할 목록 가져오기 실패", err);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  // 삭제/업데이트
  const handleUserDelete = async () => {
    if (!selectedUser) return;
    try {
      await api.delete(`/users/${selectedUser.username}`);
      setDeleteModalOpen(false);
      setSelectedUser(null);
      fetchUsers();
    } catch (err) {
      console.error("사용자 삭제 실패", err);
    }
  };

  const handleRoleDelete = async () => {
    if (!selectedRole) return;
    try {
      await api.delete(`/roles/${selectedRole.role}`);
      setDeleteModalOpen(false);
      setSelectedRole(null);
      fetchRoles();
    } catch (err) {
      console.error("역할 삭제 실패", err);
    }
  };

  const createRole = async (name: string, permissions: string[]) => {
  const rules = permissions.map((perm) => {
    const [res, verb] = perm.split(":").map((s) => s.trim());
    return { resources: [res], verbs: [verb] };
  });

  const rolePayload = {
    kind: "role",
    version: "v7",
    metadata: {
      name,
      description: "Created from UI",
      labels: { "teleport.internal/resource-type": "custom" },
      revision: "auto-gen",
    },
    spec: {
      allow: {
        rules,
      },
      deny: {},
    },
  };

  await api.post("/roles", rolePayload);
};


const upsertRole = async (name: string, permissions: string[]) => {
  const rules = permissions.map((perm) => {
    const [res, verb] = perm.split(":").map((s) => s.trim());
    return { resources: [res], verbs: [verb] };
  });

  const existingRole = roles.find((r) => r.metadata?.name === name);

  if (!existingRole) {
    console.warn("역할을 찾을 수 없습니다:", name);
    return;
  }

  // 전체 allow 구조 복사 (rules 포함)
  const updatedAllow = {
    ...(existingRole.spec?.allow ?? {}),
    rules, // rules만 새 값으로 덮어쓰기
  };

  const updatedRole = {
    kind: existingRole.kind,
    version: existingRole.version ?? "v7",
    metadata: {
      ...existingRole.metadata,
      revision: "auto-gen",
    },
    spec: {
      allow: updatedAllow,
      deny: { ...(existingRole.spec?.deny ?? {}) },
    },
  };

  await api.put("/roles", updatedRole);
};

  const handleUserUpdate = async (updated: { username: string; roles: string[] }) => {
    try {
      await api.put(`/users/${updated.username}`, {
        roles: updated.roles, // 백엔드/MSW와 동일 형식
      });
      setUpdateUserModalOpen(false);
      setSelectedUser(null);
      fetchUsers();
    } catch (err) {
      console.error("사용자 업데이트 실패", err);
    }
  };

  // 권한 문자열 추출
  const extractPermissionsFromRoles = (rs: Role[]): string[] => {
    const permissionsSet = new Set<string>();
    rs.forEach((role) => {
      role.spec?.allow?.rules?.forEach((rule) => {
        rule.resources.forEach((res) => {
          rule.verbs.forEach((verb) => {
            permissionsSet.add(`${res}: ${verb}`);
          });
        });
      });
    });
    return Array.from(permissionsSet);
  };

  const allPermissions = extractPermissionsFromRoles(roles);
  const allRoleNames = roles.map((r) => r.metadata?.name).filter(Boolean) as string[];

  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "48px" }}>
      {/* 사용자 관리 */}
      <UserManagement
        users={users.map((u) => ({
          user: u.metadata.name,
          role: u.spec.roles.join(", "),
        }))}
        // 헤더 "+ Update User" 버튼 → 빈 값으로 모달 오픈
        onUpdateUser={() => {
          setSelectedUser({ username: "", roles: [] });
          setUpdateUserModalOpen(true);
        }}
        // 행 삭제 → 삭제 모달 오픈
        onDelete={(index) => {
          const user = users[index];
          setSelectedUser({
            username: user.metadata.name,
            roles: user.spec.roles,
          });
          setDeletingTarget("user");
          setDeleteModalOpen(true);
        }}
      />

      {/* 역할 관리 */}
      <RoleManagement
  roles={roles.map((r) => ({
    role: r.metadata?.name ?? "unknown",
    permissions: extractPermissionsFromRoles([r]),
  }))}
  onCreateRole={() => setShowCreateModal(true)}
  onDeleteRole={(index) => {
    const role = roles[index];
     setSelectedRole({
      role: role.metadata?.name ?? "unknown",
      permissions: extractPermissionsFromRoles([role]), 
    });
    setDeletingTarget("role");
    setDeleteModalOpen(true);
  }}
  onEditRole={(index) => {
    const role = roles[index];
    setEditRoleName(role.metadata?.name ?? "unknown");
    setEditRoleChecked(extractPermissionsFromRoles([role]));
    setShowEditRoleModal(true);
  }}
/>

      {/* 삭제 확인 모달 */}
      {isDeleteModalOpen && (
        <ConfirmDeleteModal
          title={`Delete ${deletingTarget === "user" ? "User" : "Role"}`}
          message={`Are you sure you want to delete ${
            deletingTarget === "user" ? selectedUser?.username : selectedRole?.role
          }?`}
          onCancel={() => {
            setDeleteModalOpen(false);
            setSelectedUser(null);
            setSelectedRole(null);
          }}
          onConfirm={deletingTarget === "user" ? handleUserDelete : handleRoleDelete}
        />
      )}

      {/* 사용자 수정 모달 (빈 값/행 편집 둘 다 커버) */}
      {isUpdateUserModalOpen && selectedUser && (
        <UpdateUserModal
          username={selectedUser?.username ?? ""}
          roles={selectedUser?.roles ?? ""}
          allRoles={allRoleNames} // 드롭다운 옵션 (없어도 동작)
          onCancel={() => {
            setUpdateUserModalOpen(false);
            setSelectedUser(null);
          }}
          onSave={({ username, roles }) => {
            handleUserUpdate({ username, roles });
          }}
        />
      )}

      {/* 역할 생성 모달 */}
      {showCreateModal && (
         <CreateRoleModal
          permissions={allPermissions}
          selected={newRolePermissions}
          roleName={newRoleName}
          onChangeRoleName={setNewRoleName}
          onChange={setNewRolePermissions}
          onCancel={() => {
            setShowCreateModal(false);
            setNewRoleName("");
            setNewRolePermissions([]);
          }}
          onSubmit={async () => {
            try {
              await createRole(newRoleName.trim(), newRolePermissions);
              setShowCreateModal(false);
              setNewRoleName("");
              setNewRolePermissions([]);
              fetchRoles();
            } catch (e) {
              console.error("역할 생성 실패", e);
            }
          }}
        />
      )}

      {showEditRoleModal && (
<UpdateRoleModal
  roleName={editRoleName}
  selectedPermissions={editRoleChecked}
  allPermissions={allPermissions}
  onCancel={() => {
    setShowEditRoleModal(false);
    setEditRoleName("");
    setEditRoleChecked([]);
  }}
  onSave={async ({ role, permissions }) => {
    try {
      await upsertRole(role, permissions); // 여기서 실제 선택된 값 사용
      setShowEditRoleModal(false);
      setEditRoleName("");
      setEditRoleChecked([]);
      fetchRoles();
    } catch (e) {
      console.error("역할 업데이트 실패", e);
    }
  }}
/>
)}
    </div>
  );
}