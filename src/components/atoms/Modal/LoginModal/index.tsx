import React from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleGitHubLogin = () => {
    window.location.href = 'https://openswdev.duckdns.org/login';
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose} aria-label="닫기">×</button>
        <h2 style={styles.title}>GitHub 로그인</h2>
        <p style={styles.description}>GitHub 계정으로 로그인하여 서비스를 시작하세요.</p>
        <button style={styles.githubButton} onClick={handleGitHubLogin}>
          <GitHubIcon />
          <span style={{ marginLeft: 8 }}>Continue with GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default LoginModal;

// GitHub 아이콘 (SVG)
const GitHubIcon = () => (
  <svg height="20" width="20" viewBox="0 0 16 16" fill="white">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54...Z" />
  </svg>
);

// 스타일 정의
const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '90%',
    maxWidth: 400,
    padding: '32px 24px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    position: 'relative',
    textAlign: 'center',
    fontFamily: '"Segoe UI", Helvetica, Arial, sans-serif',
  },
  title: {
    fontSize: 22,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 24,
  },
  githubButton: {
    backgroundColor: '#24292f',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: 6,
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    cursor: 'pointer',
    transition: 'background 0.2s ease-in-out',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    background: 'transparent',
    border: 'none',
    fontSize: 24,
    color: '#999',
    cursor: 'pointer',
  },
};