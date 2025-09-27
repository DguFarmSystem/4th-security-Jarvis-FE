import React, { useState } from "react";
import Button from "../../Button";

interface AddUserModalProps {
  onClose: () => void;
  onSubmit: (payload: { username: string; password: string }) => void;
}

export function AddUserModal({ onClose, onSubmit }: AddUserModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!username.trim() || !password.trim()) {
      setError("Username and password are required.");
      return;
    }

    setError("");
    onSubmit({
      username: username.trim(),
      password: password.trim(),
    });
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2 style={titleStyle}>Add User</h2>

        {/* Divider */}
        <div style={dividerStyle} />

        <div style={formAreaStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="username" style={labelStyle}>Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
          </div>

          {error && <div style={errorStyle}>{error}</div>}
        </div>

        {/* Footer buttons */}
        <div style={footerStyle}>
          <Button variant="auth-cancel" onClick={onClose}>Cancel</Button>
          <Button variant="login" onClick={handleSubmit}>Add</Button>
        </div>
      </div>
    </div>
  );
};

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  width: "488px",
  height: "356px",
  borderRadius: "40px",
  border: "1px solid rgba(0, 0, 0, 0.60)",
  backgroundColor: "#FFF",
  boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.15)",
  padding: "24px 36px",
  fontFamily: "var(--font-pretendard)",
  display: "flex",
  flexDirection: "column",
};

const titleStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: 12,
};

const dividerStyle: React.CSSProperties = {
  width: "100%",
  height: "1px",
  backgroundColor: "#B9B9B9",
  marginBottom: 20,
};

const formAreaStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 16,
};

const formGroupStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
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
  color: "#000",
};

const errorStyle: React.CSSProperties = {
  color: "red",
  fontSize: "14px",
};

const footerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 12,
  marginTop: "auto",
};