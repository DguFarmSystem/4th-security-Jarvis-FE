import React from "react";
import Button from "../../Button/index";
import { TrashIcon } from "../../../../assets/icons/TrashIcon";

type UserRow = { user: string; role: string };

interface UserManagementProps {
  title?: string;
  users?: UserRow[];
  onUpdateUser?: () => void;
  onDelete?: (index: number) => void;
}

const DEFAULT_USERS: UserRow[] = [
  { user: "john.doe", role: "Viewer" },
  { user: "jane.smith", role: "Viewer" },
  { user: "sam.lee", role: "Viewer" },
];

export function UserManagement({
  title = "User Management",
  users = DEFAULT_USERS,
  onUpdateUser,
  onDelete,
}: UserManagementProps) {
  return (
    <div
      style={{
        width: "921px",
        borderRadius: "15px",
        border: "1px solid #737373",
        background: "var(--color-white)",
        opacity: 0.5,
        padding: "16px 20px",
        fontFamily: "var(--font-pretendard)",
        // 고정 높이 + 내부 스크롤
        height: 460,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* 헤더 영역 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "12px",
          flexShrink: 0,
        }}
      >
        <h3
          style={{
            color: "#000",
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "normal",
            margin: 0,
          }}
        >
          {title}
        </h3>

        <Button variant="updateUser" onClick={onUpdateUser}>
          + Update User
        </Button>
      </div>

      {/* 상단 구분선 */}
      <div
        style={{
          height: 1,
          width: "100%",
          background: "var(--color-gray-400, #D3D3D3)",
          marginBottom: 8,
          flexShrink: 0,
        }}
      />

      {/* 헤더 라벨 (테이블 헤더 대체) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 56px",
          color: "#000",
          fontSize: 14,
          fontWeight: 700,
          padding: "10px 8px",
          borderBottom: "1px solid var(--color-gray-400, #D3D3D3)",
          flexShrink: 0,
        }}
      >
        <div>User</div>
        <div>Role</div>
        <div style={{ textAlign: "right" }} />
      </div>

      {/* 목록 (스크롤 영역) */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
        }}
      >
        {users.map((row, idx) => (
          <div
            key={`${row.user}-${idx}`}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 56px",
              alignItems: "center",
              padding: "12px 8px",
              borderBottom: "1px solid var(--color-gray-400, #D3D3D3)",
            }}
          >
            <div style={cellStyle}>{row.user}</div>
            <div style={cellStyle}>{row.role}</div>
            <div style={{ ...cellStyle, textAlign: "right" }}>
              <button
                aria-label="delete user"
                onClick={() => onDelete?.(idx)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <TrashIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const cellStyle: React.CSSProperties = {
  color: "#000",
  fontSize: "14px",
  fontWeight: 400,
};