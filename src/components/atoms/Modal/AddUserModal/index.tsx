export const AddUserModal = () => {
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
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        Add User
      </h2>

      {/* 가로선 */}
      <div
        style={{
          position: "absolute",
          top: "55px",
          left: "0",
          right: "0",
          width: "100%",
          height: "1px",
          background: "#B9B9B9",
        }}
      />

      {/* 입력 필드 묶음 */}
<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "24px", // 가로선과의 거리
  }}
>
  {/* User Input */}
  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
    <label htmlFor="user" style={labelStyle}>
      User
    </label>
    <input
      id="user"
      type="text"
      placeholder="Enter username"
      style={inputStyle}
    />
  </div>

  {/* Email Input */}
  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
    <label htmlFor="email" style={labelStyle}>
      Email
    </label>
    <input
      id="email"
      type="email"
      placeholder="Enter email"
      style={inputStyle}
    />
  </div>
</div>

    {/* Role Select */}
<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    marginTop: "auto",         // 위 여백을 자동으로 채움
    marginBottom: "47px",      // 하단 여백 고정
  }}
>
  <label htmlFor="role" style={labelStyle}>
    Role
  </label>
  <select id="role" style={inputStyle}>
    <option value="viewer">Viewer</option>
    <option value="editor">Editor</option>
    <option value="admin">Admin</option>
  </select>
</div>
    </div>
  );
};

const labelStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 400,
  color: "#000",
};

const inputStyle: React.CSSProperties = {
  height: "36px",
  borderRadius: "8px",
  border: "1px solid var(--color-gray-300)",
  padding: "0 12px",
  fontSize: "14px",
  fontFamily: "var(--font-pretendard)",
  color: "#000",
};