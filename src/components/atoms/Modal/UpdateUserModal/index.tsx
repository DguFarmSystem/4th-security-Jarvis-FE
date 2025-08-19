import React, { useMemo, useState } from "react";

interface UpdateUserModalProps {
  username?: string;
  roles?: string[];
  allRoles?: string[];
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

  const handleToggleRole = (role: string) => {
    setSelectedRoles(prev =>
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  };

  return (
    <div style={modalWrapperStyle}>
      <div style={modalStyle}>
        <h2 style={titleStyle}>Update User</h2>
        <div style={dividerStyle} />

        {/* 스크롤 가능한 내용 */}
        <div style={scrollAreaStyle}>
          <label style={labelStyle}>
            Username
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          </label>

          <div style={{ ...labelStyle, gap: 8 }}>
            Roles
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {roleOptions.map((role) => (
                <label key={role} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <input
                    type="checkbox"
                    checked={selectedRoles.includes(role)}
                    onChange={() => handleToggleRole(role)}
                  />
                  {role}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* 푸터 버튼 */}
        <div style={footerStyle}>
          <button onClick={onCancel}>Cancel</button>
          <button
            onClick={() => onSave?.({ username: name.trim(), roles: selectedRoles })}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const modalWrapperStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0,0,0,0.3)",
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  width: 520,
  height: 524,
  borderRadius: 40,
  border: "1px solid rgba(0, 0, 0, 0.60)",
  background: "#FFF",
  boxShadow: "0 0 20px rgba(0,0,0,0.15)",
  padding: "20px 36px 24px",
  fontFamily: "var(--font-pretendard)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};

const titleStyle: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 700,
  textAlign: "center",
  marginBottom: 12,
};

const dividerStyle: React.CSSProperties = {
  width: "100%",
  height: 1,
  background: "#B9B9B9",
  marginBottom: 12,
};

const scrollAreaStyle: React.CSSProperties = {
  flex: 1,
  minHeight: 0,
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: 16,
  paddingRight: 6,
};

const footerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 10,
  marginTop: 12,
};

const labelStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 400,
  color: "#000",
  display: "flex",
  flexDirection: "column",
  gap: 4,
};

const inputStyle: React.CSSProperties = {
  height: 36,
  borderRadius: 8,
  border: "1px solid var(--color-gray-300)",
  padding: "0 12px",
  fontSize: 14,
  color: "#000",
};