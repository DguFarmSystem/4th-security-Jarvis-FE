export function connectToSSHWebSocket(nodeHost: string, loginUser: string, token: string) {
  const wsURL = `ws://localhost:8080/ws?node_host=${nodeHost}&login_user=${loginUser}&token=${token}`;

  const socket = new WebSocket(wsURL);

  socket.onopen = () => {
    console.log("WebSocket 연결 성공");
  };

  socket.onmessage = (event) => {
    console.log("WebSocket 수신 메시지:", event.data);
  };

  socket.onerror = (err) => {
    console.error("WebSocket 오류:", err);
  };

  socket.onclose = () => {
    console.log("WebSocket 연결 종료");
  };

  return socket;
}