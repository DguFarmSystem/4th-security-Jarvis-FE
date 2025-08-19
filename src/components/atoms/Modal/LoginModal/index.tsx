import React from 'react';
import Button from '../../Button';
import GitHubLogo from '../../assets/GitHub.svg';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleGitHubLogin = () => {
    window.location.href = 'https://openswdev.duckdns.org:8080/login';
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose} aria-label="닫기">
          ×
        </button>

        {/* GitHub 로고 */}
        <img src={GitHubLogo} alt="GitHub Logo" style={styles.logo} />

        {/* 로그인 버튼 */}
        <Button variant="login" onClick={handleGitHubLogin} style={styles.loginButton}>
          Continue with GitHub
        </Button>
      </div>
    </div>
  );
};

export default LoginModal;

// 스타일 정의
const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    width: 520,
    height: 524,
    borderRadius: 40,
    background: '#FFF',
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.15)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 70,
    boxSizing: 'border-box',
  },
  closeButton: {
    position: 'absolute',
    top: 24,
    right: 24,
    background: 'transparent',
    border: 'none',
    fontSize: 24,
    color: '#999',
    cursor: 'pointer',
  },
  loginButton: {
    margin: '0 auto',
  },
  logo: {
    position: 'absolute',
    bottom: 70 + 65 + 216, // 버튼 하단 기준으로부터 216px 위
    transform: 'translateY(-100%)',
    width: 443,
    height: 164,
    flexShrink: 0,
    aspectRatio: '208 / 77', // CSS 속성으로 적용 (최신 브라우저 지원)
  },
};