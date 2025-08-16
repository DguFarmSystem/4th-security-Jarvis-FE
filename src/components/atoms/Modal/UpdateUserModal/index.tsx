import React from "react";

interface UpdateUserModalProps {
  username?: string;
  email?: string;
  role?: string;
  onSave?: (updated: { username: string; email: string; role: string }) => void;
}

export const UpdateUserModal = ({
  username = "",
  role = "basic-user",
  onSave,
}: UpdateUserModalProps) => {
  return (
    <div
      style={{
        width: "488px",
        height: "356px",
        position: "relative",
        borderRadius: "40px",
        border: "1px solid rgba(0, 0, 0, 0.60)",
        background: "#FFF",
        boxShadow: "0 0 20px rgba(0,0,0,0.15)",
        padding: "17px 46px",
        fontFamily: "var(--font-pretendard)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ fontSize: 20, fontWeight: 700, textAlign: "center", marginBottom: 8 }}>
        Update User
      </h2>

      {/* 구분선 */}
      <div
        style={{
          position: "absolute",
          top: 55,
          left: 0,
          right: 0,
          height: 1,
          background: "#B9B9B9",
        }}
      />

      {/* 폼 필드 */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
        <label style={labelStyle}>
          User
          <input defaultValue={username} style={inputStyle} />
        </label>
        <label style={{ ...labelStyle, marginTop: "auto", marginBottom: 47 }}>
          Role
          <select defaultValue={role} style={inputStyle}>
            <option value="basic-user">Basic User</option>
            <option value="editor">Editor</option>
            <option value="access">Access</option>
          </select>
        </label>
      </div>
    </div>
  );
};

const labelStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 400,
  color: "#000",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
};

const inputStyle: React.CSSProperties = {
  height: "36px",
  borderRadius: "8px",
  border: "1px solid var(--color-gray-300)",
  padding: "0 12px",
  fontSize: "14px",
  color: "#000",
};