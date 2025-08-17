// src/pages/ManagementPage/index.tsx

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
  metadata: {
    name: string;
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

  // Fetch users and roles
  const fetchUsers = async () => {
    const res = await fetch("https://openswdev.duckdns.org:3000/api/v1/users");
    const data = await res.json();
    setUsers(data);
  };

  const fetchRoles = async () => {
    const res = await fetch("https://openswdev.duckdns.org:3000/api/v1/roles");
    const data = await res.json();
    setRoles(data);
  };

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  const handleUserDelete = async () => {
    if (!selectedUser) return;
    await fetch(`https://openswdev.duckdns.org:3000/api/v1/users/${selectedUser.username}`, {
      method: "DELETE",
    });
    setDeleteModalOpen(false);
    setSelectedUser(null);
    fetchUsers();
  };

  const handleRoleDelete = async () => {
    if (!selectedRole) return;
    await fetch(`https://openswdev.duckdns.org:3000/api/v1/roles/${selectedRole.role}`, {
      method: "DELETE",
    });
    setDeleteModalOpen(false);
    setSelectedRole(null);
    fetchRoles();
  };

  const handleUserUpdate = async (updated: { username: string; role: string }) => {
    await fetch(`https://openswdev.duckdns.org:3000/api/v1/users/${updated.username}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roles: updated.role }),
    });
    setUpdateUserModalOpen(false);
    setSelectedUser(null);
    fetchUsers();
  };

  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "48px" }}>
      {/* User 관리 */}
      <UserManagement
        users={users.map((u) => ({
          user: u.metadata.name,
          email: "", // 실제 API에 이메일 없음
          role: u.spec.roles.join(", "),
        }))}
        onAddUser={() => {
          // AddUserModal 향후 확장
        }}
        onDelete={(index) => {
          const user = users[index];
          setSelectedUser({
            username: user.metadata.name,
            email: "", // placeholder
            role: user.spec.roles.join(","),
          });
          setDeletingTarget("user");
          setDeleteModalOpen(true);
        }}
      />

      {/* Role 관리 */}
      <RoleManagement
        roles={roles.map((r) => ({
          role: r.metadata.name,
          permissionsLeft: [], // 실제 권한 추출 필요 시 추후 확장
        }))}
        onCreateRole={() => {
          // CreateRoleModal 향후 확장
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

      {/* 사용자 수정 모달 */}
      {isUpdateUserModalOpen && selectedUser && (
        <UpdateUserModal
          username={selectedUser.username}
          role={selectedUser.role}
          onSave={({ username, role }) => {
            handleUserUpdate({ username, role });
          }}
        />
      )}
    </div>
  );
}