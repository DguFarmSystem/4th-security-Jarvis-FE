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

type Role = {
  kind: string;
  metadata?: {
    name: string;
  };
  spec?: {
    allow?: {
      rules?: {
        resources: string[];
        verbs: string[];
      }[];
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
  const [newRolePermissions, setNewRolePermissions] = useState<string[]>([]);

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

  const handleUserUpdate = async (updated: { username: string; role: string }) => {
    try {
      await api.put(`/users/${updated.username}`, {
        roles: [updated.role],
      });
      setUpdateUserModalOpen(false);
      setSelectedUser(null);
      fetchUsers();
    } catch (err) {
      console.error("사용자 업데이트 실패", err);
    }
  };

  const extractPermissionsFromRoles = (roles: Role[]): string[] => {
    const permissionsSet = new Set<string>();

    roles.forEach((role) => {
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

  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "48px" }}>
      <UserManagement
        users={users.map((u) => ({
          user: u.metadata.name,
          email: "",
          role: u.spec.roles.join(", "),
        }))}
        onAddUser={() => {}}
        onDelete={(index) => {
          const user = users[index];
          setSelectedUser({
            username: user.metadata.name,
            email: "",
            role: user.spec.roles.join(", "),
          });
          setDeletingTarget("user");
          setDeleteModalOpen(true);
        }}
      />

      <RoleManagement
  roles={roles.map((r) => ({
    role: r.metadata?.name ?? "unknown",
    permissions: extractPermissionsFromRoles([r]),
    // 필요 시 체크된 권한 제공
    // checkedPermissions: extractPermissionsFromRoles([r])
  }))}
  onCreateRole={() => setShowCreateModal(true)}
/>

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

      {isUpdateUserModalOpen && selectedUser && (
        <UpdateUserModal
          username={selectedUser.username}
          role={selectedUser.role}
          onSave={({ username, role }) => {
            handleUserUpdate({ username, role });
          }}
        />
      )}

      {showCreateModal && (
        <CreateRoleModal
          permissions={allPermissions}
          selected={newRolePermissions}
          onChange={setNewRolePermissions}
          onCancel={() => {
            setShowCreateModal(false);
            setNewRolePermissions([]);
          }}
          onSubmit={async () => {
            try {
              const newRoleName = prompt("Enter role name") ?? "new-role";

              await api.put("/roles", {
                kind: "role",
                version: "v7",
                metadata: {
                  name: newRoleName,
                  description: "Newly created role",
                  labels: {
                    "teleport.internal/resource-type": "custom",
                  },
                  revision: "auto-gen",
                },
                spec: {
                  allow: {
                    rules: newRolePermissions.map((perm) => {
                      const [res, verb] = perm.split(":").map((s) => s.trim());
                      return {
                        resources: [res],
                        verbs: [verb],
                      };
                    }),
                  },
                },
              });

              setShowCreateModal(false);
              setNewRolePermissions([]);
              fetchRoles();
            } catch (err) {
              console.error("역할 생성 실패", err);
            }
          }}
        />
      )}
    </div>
  );
}