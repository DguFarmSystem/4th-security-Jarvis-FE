interface ConfirmDeleteModalProps {
  title?: string;
  message?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const ConfirmDeleteModal = ({
  title = "Confirm Delete",
  message = "Are you sure you want to delete this item?",
  onConfirm,
  onCancel,
}: ConfirmDeleteModalProps) => {
  return (
     <div style={modalWrapperStyle}>
    <div
      style={{
        width: 400,
        borderRadius: 20,
        padding: 24,
        background: "#fff",
        boxShadow: "0 0 20px rgba(0,0,0,0.15)",
        fontFamily: "var(--font-pretendard)",
      }}
    >
      <h2 style={{ marginBottom: 12, fontSize: 18 }}>{title}</h2>
      <p style={{ fontSize: 14, marginBottom: 24 }}>{message}</p>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
        <button onClick={onCancel} style={buttonStyle("gray")}>
          Cancel
        </button>
        <button onClick={onConfirm} style={buttonStyle("red")}>
          Delete
        </button>
      </div>
    </div>
    </div>
  );
};

const buttonStyle = (color: "red" | "gray"): React.CSSProperties => ({
  padding: "8px 16px",
  borderRadius: 8,
  border: "none",
  backgroundColor: color === "red" ? "#FF5A5A" : "#CCC",
  color: "#fff",
  cursor: "pointer",
});

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