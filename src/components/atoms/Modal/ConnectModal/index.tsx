import { ProfileIcon } from "../../../../assets/icons/ProfileIcon";
import { RightArrowIcon } from "../../../../assets/icons/RightArrowIcon";

export const ConnectModal = () => {
  const users = ["User 1", "User 2"];

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
        alignItems: "center",
      }}
    >
      {/* 제목 */}
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        Connect
      </h2>

      {/* 내부 사각형 */}
      <div
        style={{
          width: "443px",
          height: "217px",
          borderRadius: "20px",
          border: "1px solid #737373",
          opacity: 0.5,
          background: "#FFF",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* CLI 명령어 */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "none",
            border: "none",
            fontSize: "14px",
            fontWeight: 400,
            color: "#000",
            cursor: "pointer",
            padding: "8px 0",
            borderBottom: "1px solid var(--color-gray-300)",
          }}
        >
          CLI 명령어
          <RightArrowIcon />
        </button>

        {/* 사용자 목록 */}
        {users.map((user, idx) => (
          <button
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px 0",
              borderBottom: idx === users.length - 1 ? "none" : "1px solid var(--color-gray-300)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ color: "#000" }}>
    <ProfileIcon/>
  </div>
              <span style={{ fontSize: "14px", color: "#000" }}>{user}</span>
            </div>
            <RightArrowIcon />
          </button>
        ))}
      </div>
    </div>
  );
};