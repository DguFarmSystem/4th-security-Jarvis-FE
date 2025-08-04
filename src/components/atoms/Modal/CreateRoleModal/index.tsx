export const CreateRoleModal = () => {
  const permissions = [
    "View resources",
    "Edit resources",
    "View audit log",
    "View resources",
    "Edit resources",
    "View audit log",
    "View resources",
    "Edit resources",
    "View audit log",
    "View resources",
    "Edit resources",
    "View audit log",
  ];

  return (
    <div
      style={{
        width: "488px",
        height: "356px",
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

{/* 가로선 */}
      <div
        style={{
          position: "absolute",
    bottom: "301px", // 모달 하단 기준으로 301px 위에 위치
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
          marginTop: "auto",
          marginBottom: "47px",
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
            <input type="checkbox" defaultChecked />
            {perm}
          </label>
        ))}
      </div>
    </div>
  );
};