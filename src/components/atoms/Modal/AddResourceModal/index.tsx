import React, { useState } from "react";
import Button from "../../Button";

type AddResourceModalProps = {
  onSubmit: () => void;
  onCancel: () => void;
};

const resourceTypes = ["서버", "데이터베이스", "애플리케이션"];

export const AddResourceModal = ({ onSubmit, onCancel }: AddResourceModalProps) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["서버", "애플리케이션"]);
  const [token, setToken] = useState<string>("");

  const handleToggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleGenerateToken = () => {
    // TODO: 실제 API 호출로 교체
    const fakeToken = Math.random().toString(36).substring(2, 12);
    setToken(fakeToken);
  };

  return (
    <div style={modalWrapperStyle}>
      <div style={modalStyle}>
        <h2 style={titleStyle}>Add Resource</h2>
        <div style={dividerStyle} />

        {/* Resource Type 체크박스 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
          <span style={{ fontWeight: 600, fontSize: 16 }}>Resource Type</span>
          <div style={{ display: "flex", gap: 12 }}>
            {resourceTypes.map((type) => (
              <label key={type} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleToggleType(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Token Validity Period (고정) */}
        <label style={labelStyle}>
          Token Validity Period
          <input value="15min" disabled style={inputStyle} />
        </label>

        {/* Generate Token 버튼 */}
       <Button variant="addToken" onClick={handleGenerateToken}>
  + Add Token
</Button>

        {/* 생성된 토큰 출력 필드 */}
        <input
          placeholder="Token ..."
          value={token}
          readOnly
          style={{ ...inputStyle, marginTop: 12 }}
        />

        {/* 하단 버튼 */}
        <div style={footerStyle}>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

/* 모달 스타일 그대로 사용 */
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
  width: 400,
  borderRadius: 20,
  border: "1px solid rgba(0, 0, 0, 0.6)",
  background: "#FFF",
  boxShadow: "0 0 20px rgba(0,0,0,0.15)",
  padding: "20px 24px",
  fontFamily: "var(--font-pretendard)",
  display: "flex",
  flexDirection: "column",
  gap: 16,
};

const titleStyle: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 700,
  textAlign: "center",
  margin: 0,
};

const dividerStyle: React.CSSProperties = {
  width: "100%",
  height: 1,
  background: "#B9B9B9",
};

const labelStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
  fontSize: 14,
  color: "#000",
};

const inputStyle: React.CSSProperties = {
  height: 36,
  borderRadius: 8,
  border: "1px solid #D3D3D3",
  padding: "0 12px",
};

const addButtonStyle: React.CSSProperties = {
  background: "#007bff",
  color: "#fff",
  padding: "8px 12px",
  borderRadius: 6,
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
};

const footerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 10,
  marginTop: 16,
};