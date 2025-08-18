import React, { useMemo, useState } from "react";

interface UpdateRoleModalProps {
  roleName?: string;
  /** 전체 가능한 권한 목록 */
  allPermissions?: string[];
  /** 현재 역할이 가진 권한(체크 상태) */
  selectedPermissions?: string[];
  /** 저장 시 호출 */
  onSave?: (updated: { role: string; permissions: string[] }) => void;
  /** 취소 시 호출 */
  onCancel?: () => void;
}

export const UpdateRoleModal = ({
  roleName = "",
  allPermissions = [],
  selectedPermissions = [],
  onSave,
  onCancel,
}: UpdateRoleModalProps) => {
  const [name, setName] = useState(roleName);
  const [selected, setSelected] = useState<string[]>(selectedPermissions);

  const toggle = (perm: string) => {
    setSelected((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  // 2열 그리드용 분할(선택)
  const [left, right] = useMemo(() => {
    const mid = Math.ceil(allPermissions.length / 2);
    return [allPermissions.slice(0, mid), allPermissions.slice(mid)];
  }, [allPermissions]);

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {/* 제목 */}
        <h2 style={titleStyle}>Update Role</h2>
        <div style={dividerStyle} />

        {/* 역할명 입력 */}
        <label style={labelStyle}>
          Role Name
          <input value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
        </label>

        {/* 권한 체크박스(스크롤 영역) */}
        <div style={scrollAreaStyle}>
          <div style={gridStyle}>
            {/* 왼쪽 컬럼 */}
            <div style={{ display: "grid", gap: 8 }}>
              {left.map((perm) => (
                <label key={`L-${perm}`} style={checkRowStyle}>
                  <input
                    type="checkbox"
                    checked={selected.includes(perm)}
                    onChange={() => toggle(perm)}
                  />
                  <span>{perm}</span>
                </label>
              ))}
            </div>
            {/* 오른쪽 컬럼 */}
            <div style={{ display: "grid", gap: 8 }}>
              {right.map((perm) => (
                <label key={`R-${perm}`} style={checkRowStyle}>
                  <input
                    type="checkbox"
                    checked={selected.includes(perm)}
                    onChange={() => toggle(perm)}
                  />
                  <span>{perm}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div style={footerStyle}>
          <button onClick={onCancel} style={buttonStyle("gray")}>Cancel</button>
          <button
            onClick={() => onSave?.({ role: name.trim(), permissions: selected })}
            style={buttonStyle("blue")}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

/* 스타일 */
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
  height: 560,          // 고정 높이
  borderRadius: 20,
  background: "#fff",
  boxShadow: "0 0 20px rgba(0,0,0,0.15)",
  padding: "16px 24px 20px",
  fontFamily: "var(--font-pretendard)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};

const titleStyle: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 700,
  textAlign: "center",
  margin: 0,
  marginBottom: 12,
};

const dividerStyle: React.CSSProperties = {
  width: "100%",
  height: 1,
  background: "#B9B9B9",
  marginBottom: 12,
};

const labelStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 400,
  color: "#000",
  display: "flex",
  flexDirection: "column",
  gap: 4,
  marginBottom: 12,
};

const inputStyle: React.CSSProperties = {
  height: 36,
  borderRadius: 8,
  border: "1px solid var(--color-gray-300)",
  padding: "0 12px",
  fontSize: 14,
  color: "#000",
};

const scrollAreaStyle: React.CSSProperties = {
  flex: 1,
  minHeight: 0,
  overflowY: "auto",
  paddingRight: 6,
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px 24px",
};

const checkRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  color: "#000",
  fontSize: 14,
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