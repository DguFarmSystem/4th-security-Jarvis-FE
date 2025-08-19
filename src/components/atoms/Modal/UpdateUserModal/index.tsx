import React, { useMemo, useState } from "react";

interface UpdateUserModalProps {
  username?: string;
  roles?: string[]; // 쉼표로 구분된 문자열 혹은 단일 역할명
  allRoles?: string[]; // 선택 가능한 역할 목록(옵션)
  onSave?: (updated: { username: string; roles: string[] }) => void;
  onCancel?: () => void;
}

export const UpdateUserModal = ({
  username = "",
  roles = [],
  allRoles = [],
  onSave,
  onCancel,
}: UpdateUserModalProps) => {
  const [name, setName] = useState(username);
  
  const [selectedRoles, setSelectedRoles] = useState<string[]>(roles);

   const roleOptions = useMemo(() => {
    const base = Array.from(new Set([...selectedRoles, ...allRoles].filter(Boolean)));
    return base.length ? base : ["access", "editor", "basic-user"];
  }, [allRoles, selectedRoles]);

  return (
     <div style={modalWrapperStyle}>
    <div
      style={{
        width: "488px",
        minHeight: "320px",
        borderRadius: "40px",
        border: "1px solid rgba(0, 0, 0, 0.60)",
        background: "#FFF",
        boxShadow: "0 0 20px rgba(0,0,0,0.15)",
        padding: "17px 46px",
        fontFamily: "var(--font-pretendard)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          textAlign: "center",
          marginBottom: 8,
        }}
      >
        Update User
      </h2>

      <label style={labelStyle}>
        Username
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
      </label>

      <label style={labelStyle}>
        Roles
        <select
          value={selectedRoles}
         onChange={(e) =>
              setSelectedRoles(
                Array.from(e.target.selectedOptions).map((opt) => opt.value)
              )
            }
          style={{ ...inputStyle, height: 36 }}
        >
          {roleOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: "auto" }}>
        <button onClick={onCancel}>Cancel</button>
        <button
          onClick={() =>
            onSave?.({
              username: name.trim(),
              roles: selectedRoles,
            })
          }
        >
          Save
        </button>
      </div>
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

const modalWrapperStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0,0,0,0.3)", // 어두운 오버레이
  zIndex: 1000,
};