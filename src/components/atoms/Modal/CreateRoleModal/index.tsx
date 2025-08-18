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
    <div
      style={{
        width: "488px",
        height: "auto",
        position: "relative",
        flexShrink: 0,
        borderRadius: "40px",
        border: "1px solid rgba(0, 0, 0, 0.60)",
        background: "#FFF",
        boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.15)",
        padding: "17px 46px",
        fontFamily: "var(--font-pretendard)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Create Role
      </h2>

      <div
        style={{
          position: "absolute",
          top: "60px",
          left: "0",
          width: "100%",
          height: "1px",
          background: "#B9B9B9",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "12px 24px",
          marginTop: "30px",
          marginBottom: "20px",
        }}
      >
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

      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onSubmit}>Create</button>
      </div>
    </div>
    </div>
  );
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