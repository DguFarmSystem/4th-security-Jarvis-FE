import React from 'react';

interface SessionViewModalProps {
  open: boolean;
  title?: string;
  output: string;
  onClose: () => void;
  sessionId?: string;
}

export const SessionViewModal: React.FC<SessionViewModalProps> = ({
  open,
  title = 'View',
  output,
  onClose,
  sessionId,
}) => {
  if (!open) return null;

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        {/* 제목 (상단에서 30px) */}
        <h2 style={titleStyle}>{title}</h2>

        {/* 세션 ID 보조 표시 (선택) */}
        {sessionId && (
          <div style={subTitleStyle}>Session: {sessionId}</div>
        )}

        {/* 터미널 박스: 하단에서 70px 위에 닿도록 */}
        <div style={terminalBoxStyle}>
          <pre style={terminalPreStyle}>{output || '로딩 중...'}</pre>
        </div>

        {/* 닫기 버튼(우상단 간단 x) */}
        <button style={closeBtnStyle} onClick={onClose} aria-label="close">x</button>
      </div>
    </div>
  );
};

// ===== styles =====
const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
};

const modalStyle: React.CSSProperties = {
  width: 869,
  height: 634,
  flexShrink: 0,
  borderRadius: 40,
  border: '1px solid rgba(0,0,0,0.60)',
  background: '#FFF',
  boxShadow: '0 0 20px 0 rgba(0,0,0,0.15)',
  position: 'relative',
  boxSizing: 'border-box',
  overflow: 'hidden',
};

const titleStyle: React.CSSProperties = {
  position: 'absolute',
  top: 30,                      
  left: '50%',
  transform: 'translateX(-50%)',
  margin: 0,
  color: '#000',
  fontFamily: 'Pretendard',
  fontSize: 48,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
};

const subTitleStyle: React.CSSProperties = {
  position: 'absolute',
  top: 30 + 48 + 10,           // 제목 바로 아래(대략 10px 간격)
  left: '50%',
  transform: 'translateX(-50%)',
  color: '#555',
  fontFamily: 'Pretendard',
  fontSize: 16,
};

const terminalBoxStyle: React.CSSProperties = {
  position: 'absolute',
  left: 24,
  right: 24,
  top: 30 + 48 + 10 + 28,      // 제목/부제 아래부터 시작 (대략 116px 근처)
  bottom: 70,                 
  background: '#000',
  borderRadius: 10,
  padding: 16,
  overflow: 'auto',
  boxSizing: 'border-box',
  border: '1px solid #222',
};

const terminalPreStyle: React.CSSProperties = {
  margin: 0,
  color: '#0f0',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: 14,
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
};

const closeBtnStyle: React.CSSProperties = {
  position: 'absolute',
  top: 16,
  right: 20,
  background: 'none',
  border: 'none',
  fontSize: 20,
  cursor: 'pointer',
};