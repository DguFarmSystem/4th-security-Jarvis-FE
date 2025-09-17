export function connectToSSHWebSocket(nodeHost: string, loginUser: string) {
  const wsURL = `wss://localhost:8080/ws?node_host=${nodeHost}&login_user=${loginUser}`;

  const socket = new WebSocket(wsURL);

  socket.onopen = () => {
    console.log("✅ WebSocket 연결 성공");
    // 원하는 초기 메시지 전송 또는 UI 전환 가능
  };

  socket.onmessage = (event) => {
    console.log("📥 WebSocket 수신 메시지:", event.data);
    // 수신 데이터를 화면에 출력하거나 처리
  };

  socket.onerror = (err) => {
    console.error("❌ WebSocket 오류:", err);
  };

  socket.onclose = () => {
    console.log("🔌 WebSocket 연결 종료");
  };

  // 필요시 전역 상태로 관리하거나 반환
  return socket;
}