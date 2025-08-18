import React from "react";

interface RolePermissionModalProps {
  roleName: string;
  allPermissions: string[];        // 전체 가능한 권한 목록
  selectedPermissions: string[];  // 현재 역할이 가진 권한
  onChange: (newSelected: string[]) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

export const RolePermissionModal = ({
  roleName,
  allPermissions,
  selectedPermissions,
  onChange,
  onSubmit,
  onCancel,
}: RolePermissionModalProps) => {
  const togglePermission = (perm: string) => {
    if (selectedPermissions.includes(perm)) {
      onChange(selectedPermissions.filter((p) => p !== perm));
    } else {
      onChange([...selectedPermissions, perm]);
    }
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {/* 제목 */}
        <h2 style={{ fontSize: 20, fontWeight: 700, textAlign: "center", margin: 0, marginBottom: 12 }}>
          Update Role: {roleName}
        </h2>

        {/* 구분선 */}
        <div style={dividerStyle} />

        {/* 권한 체크박스 영역 (스크롤 가능) */}
        <div style={scrollAreaStyle}>
          <div style={gridStyle}>
            {allPermissions.map((perm, idx) => (
              <label
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 14,
                  color: "#000",
                  gap: 8,
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedPermissions.includes(perm)}
                  onChange={() => togglePermission(perm)}
                />
                {perm}
              </label>
            ))}
          </div>
        </div>

        {/* 버튼 */}
        <div style={footerStyle}>
          <button onClick={onCancel} style={buttonStyle("gray")}>
            Cancel
          </button>
          <button onClick={onSubmit} style={buttonStyle("blue")}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

/* 스타일 정의 */
const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0,0,0,0.3)",
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  width: 520,
  height: 560,
  borderRadius: 20,
  background: "#fff",
  boxShadow: "0 0 20px rgba(0,0,0,0.15)",
  padding: "16px 24px 20px",
  fontFamily: "var(--font-pretendard)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
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
  paddingRight: 6,
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "12px 24px",
};

const footerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 10,
  marginTop: 12,
};

const buttonStyle = (color: "blue" | "gray"): React.CSSProperties => ({
  padding: "8px 16px",
  borderRadius: 8,
  border: "none",
  backgroundColor: color === "blue" ? "#5BA5FF" : "#CCC",
  color: "#fff",
  cursor: "pointer",
});