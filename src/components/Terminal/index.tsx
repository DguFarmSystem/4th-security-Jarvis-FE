import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

interface TerminalProps {
  socket: WebSocket;
  onClose: () => void;
}

const TerminalComponent: React.FC<TerminalProps> = ({ socket, onClose }) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const term = useRef<Terminal | null>(null);

  useEffect(() => {
    term.current = new Terminal({
      cursorBlink: true,
      rows: 24,
      cols: 80,
      fontSize: 14,
      theme: {
        background: '#1e1e1e',
      },
    });

    term.current.open(terminalRef.current!);
    term.current.focus();

    socket.onmessage = (event) => {
      if (typeof event.data === 'string') {
        term.current?.write(event.data);
      } else {
        const reader = new FileReader();
        reader.onload = () => {
          term.current?.write(reader.result as string);
        };
        reader.readAsText(event.data);
      }
    };

    socket.onclose = () => {
      term.current?.writeln('\n🔌 연결 종료됨');
    };

    term.current.onData((data) => {
      socket.send(data);
    });

    return () => {
      term.current?.dispose();
      socket.close();
    };
  }, [socket]);

   return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div ref={terminalRef} style={{ height: '500px', width: '100%' }} />
        <button style={closeButtonStyle} onClick={onClose}>x</button>
      </div>
    </div>
  );
}

export default TerminalComponent;

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const modalStyle: React.CSSProperties = {
  backgroundColor: '#1e1e1e',
  padding: 16,
  borderRadius: 8,
  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  width: '90%',
  maxWidth: 800,
};

const closeButtonStyle: React.CSSProperties = {
  top: 8,
  right: 12,
  background: 'none',
  border: 'none',
  fontSize: 18,
  color: '#fff',
  cursor: 'pointer',
};