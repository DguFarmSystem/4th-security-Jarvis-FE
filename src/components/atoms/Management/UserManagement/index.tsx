import React from "react";
import Button from "../../Button/index";
import { TrashIcon } from "../../../../assets/icons/TrashIcon";

type UserRow = { user: string; role: string; };

interface UserManagementProps {
    title?: string;
    users?: UserRow[];
    onAddUser?: () => void;
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
  onAddUser,
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
      }}
    >
      {/* 헤더 영역 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "12px",
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

        <Button
          variant="addUser"
          onClick={onAddUser}
        >
            + Add User
            </Button>
      </div>

      {/* 상단 구분선 */}
      <div
        style={{
          height: 1,
          width: "100%",
          background: "var(--color-gray-400, #D3D3D3)",
          marginBottom: 8,
        }}
      />

      {/* 테이블 */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {["User", "Role", ""].map((th, i) => (
              <th
                key={i}
                style={{
                  textAlign: i === 3 ? "right" : "left",
                  color: "#000",
                  fontSize: "14px",
                  fontWeight: 700,
                  padding: "10px 8px",
                  borderBottom: "1px solid var(--color-gray-400, #D3D3D3)",
                }}
              >
                {th}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {users.map((row, idx) => (
            <tr key={`${row.user}-${idx}`} style={{ height: 44 }}>
              <td style={cellStyle}>{row.user}</td>
              <td style={cellStyle}>{row.role}</td>
              <td style={{ ...cellStyle, textAlign: "right" }}>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cellStyle: React.CSSProperties = {
  color: "#000",
  fontSize: "14px",
  fontWeight: 400,
  padding: "12px 8px",
  borderBottom: "1px solid var(--color-gray-400, #D3D3D3)",
};