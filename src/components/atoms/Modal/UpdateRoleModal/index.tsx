interface UpdateRoleModalProps {
  roleName?: string;
  permissions?: string[];
  onSave?: (updated: { role: string; permissions: string[] }) => void;
}

export const UpdateRoleModal = ({
  roleName = "",
  permissions = [],
}: UpdateRoleModalProps) => {
  return (
    <div
      style={{
        width: "488px",
        height: "356px",
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
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Update Role
      </h2>

      <label style={labelStyle}>
        Role Name
        <input defaultValue={roleName} style={inputStyle} />
      </label>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px 24px",
          marginTop: "auto",
          marginBottom: 47,
        }}
      >
        {permissions.map((perm, idx) => (
          <label key={idx} style={{ display: "flex", gap: 8 }}>
            <input type="checkbox" defaultChecked />
            {perm}
          </label>
        ))}
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
  marginBottom: "16px",
};

const inputStyle: React.CSSProperties = {
  height: "36px",
  borderRadius: "8px",
  border: "1px solid var(--color-gray-300)",
  padding: "0 12px",
  fontSize: "14px",
  color: "#000",
};