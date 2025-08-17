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
  name?: string; 
};

export default function ManagementPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [deletingTarget, setDeletingTarget] = useState<"user" | "role" | null>(null);

  const [isDeleteModalOpen, setDeleteModalOpen] = useAtom(isDeleteConfirmModalOpenAtom);
  const [isUpdateUserModalOpen, setUpdateUserModalOpen] = useAtom(isUpdateUserModalOpenAtom);
  const [selectedUser, setSelectedUser] = useAtom(selectedUserAtom);
  const [selectedRole, setSelectedRole] = useAtom(selectedRoleAtom);

  // 사용자 목록 가져오기
  const fetchUsers = async () => {
    try {
      const { data } = await api.get("/users");
      setUsers(data);
    } catch (err) {
      console.error("유저 목록 가져오기 실패", err);
    }
  };

  // 역할 목록 가져오기
  const fetchRoles = async () => {
    try {
      const { data } = await api.get("/roles");
      setRoles(data);
    } catch (err) {
      console.error("역할 목록 가져오기 실패", err);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  // 사용자 삭제
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

  // 역할 삭제
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

  // 사용자 업데이트
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

  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "48px" }}>
      {/* 사용자 관리 */}
      <UserManagement
        users={users.map((u) => ({
          user: u.metadata.name,
          email: "", // 현재 API에는 없음
          role: u.spec.roles.join(", "),
        }))}
        onAddUser={() => {
          // TODO: AddUserModal 확장 예정
        }}
        onDelete={(index) => {
          const user = users[index];
          setSelectedUser({
            username: user.metadata.name,
            email: "", // placeholder
            role: user.spec.roles.join(", "),
          });
          setDeletingTarget("user");
          setDeleteModalOpen(true);
        }}
      />

      {/* 역할 관리 */}
      <RoleManagement
        roles={roles.map((r) => ({
          role: r.metadata?.name ?? r.name ?? "unknown",
          permissionsLeft: [], // TODO: 권한 목록 추출 시 확장
        }))}
        onCreateRole={() => {
          // TODO: CreateRoleModal 확장 예정
        }}
        onDelete={(index) => {
          const role = roles[index];
          setSelectedRole({
            role: role.metadata?.name ?? "unknown",
          });
          setDeletingTarget("role");
          setDeleteModalOpen(true);
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