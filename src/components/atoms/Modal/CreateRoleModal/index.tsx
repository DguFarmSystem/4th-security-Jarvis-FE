type CreateRoleModalProps = {
  permissions: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  onSubmit: () => void;
  onCancel: () => void;
};

export const CreateRoleModal = ({
  permissions,
  selected,
  onChange,
  onSubmit,
  onCancel,
}: CreateRoleModalProps) => {
  const handleCheckboxChange = (perm: string) => {
    if (selected.includes(perm)) {
      onChange(selected.filter((p) => p !== perm));
    } else {
      onChange([...selected, perm]);
    }
  };

  return (
    <div style={modalWrapperStyle}>
      <div style={modalStyle}>
        {/* 헤더 */}
        <h2 style={titleStyle}>Create Role</h2>

        {/* 상단 가로선 */}
        <div style={dividerStyle} />

        {/* 스크롤 영역 */}
        <div style={scrollAreaStyle}>
          <div style={gridStyle}>
            {permissions.map((perm, idx) => (
              <label
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#000",
                  gap: "8px",
                }}
              >
                <input
                  type="checkbox"
                  checked={selected.includes(perm)}
                  onChange={() => handleCheckboxChange(perm)}
                />
                {perm}
              </label>
            ))}
          </div>
        </div>

        {/* 푸터 버튼 */}
        <div style={footerStyle}>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onSubmit}>Create</button>
        </div>
      </div>
    </div>
  );
};

/* 오버레이 */
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

/* 모달 박스: 높이 고정 + 내부 스크롤 */
const modalStyle: React.CSSProperties = {
  width: 520,
  height: 560,             // 고정 높이
  borderRadius: 40,
  border: "1px solid rgba(0, 0, 0, 0.60)",
  background: "#FFF",
  boxShadow: "0 0 20px rgba(0,0,0,0.15)",
  padding: "16px 24px 20px",
  fontFamily: "var(--font-pretendard)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",      // 내부 영역만 스크롤되도록
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

/* 스크롤 영역: flex:1 + minHeight:0 조합 중요 */
const scrollAreaStyle: React.CSSProperties = {
  flex: 1,
  minHeight: 0,            // 자식 요소가 flex 컨테이너에서 올바르게 스크롤되게 함
  overflowY: "auto",
  paddingRight: 6,         // 스크롤바 공간 약간 확보
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "12px 24px",
  paddingBottom: 8,
};

const footerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 10,
  marginTop: 12,
};