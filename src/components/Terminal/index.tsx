import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

interface TerminalProps {
  socket: WebSocket;
}

const TerminalComponent: React.FC<TerminalProps> = ({ socket }) => {
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

  return <div ref={terminalRef} style={{ height: '500px', width: '100%', backgroundColor: '#1e1e1e' }} />;
};

export default TerminalComponent;