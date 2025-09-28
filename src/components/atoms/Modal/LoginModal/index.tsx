import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../Button';

interface LoginModalProps {
  isOpen: boolean;
  onSuccess: (token: string) => void;
}

function LoginModal({ isOpen, onSuccess }: LoginModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        username,
        password,
      });

      console.log('로그인 성공:', response.data);
      const { token } = response.data;

      if (!token) {
        throw new Error('No token in response');
      }

      onSuccess(token);
      navigate('/');

    } catch (err) {
      console.error('로그인 실패:', err);
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <img src="/images/GithubLogo.png" alt="GitHub Logo" style={styles.logo} />

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {error && <div style={styles.error}>{error}</div>}

        <Button variant="login" onClick={handleLogin} style={styles.loginButton}>
          로그인
        </Button>
      </div>
    </div>
  );
}

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
    justifyContent: 'center',
    paddingBottom: 70,
    boxSizing: 'border-box',
  },
  loginButton: {
    marginTop: 20,
    width: 300,
    height: 44,
  },
  logo: {
    position: 'absolute',
    top: 9,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 443,
    height: 164,
    objectFit: 'contain',
  },
  input: {
    width: 300,
    height: 44,
    marginTop: 12,
    padding: '0 12px',
    border: '1px solid #ccc',
    borderRadius: 6,
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
};

export default LoginModal;