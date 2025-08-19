import { useEffect, useState } from "react";
import { Log } from "../../components/atoms/Log";
import { api } from "../../utils/axios";

type AuditLog = {
  time: string;
  user: string;
  event: string;
};

type SessionLog = {
  user: string;
  server: string;
  duration: string;
   sessionid: string;
  onView?: (sessionID: string) => void;
};

export default function SessionPage() {
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [sessionLogs, setSessionLogs] = useState<SessionLog[]>([]);
  const [sessionOutput, setSessionOutput] = useState<string>(""); // 출력 텍스트
const [currentSessionID, setCurrentSessionID] = useState<string | null>(null);

const handleViewSession = (sessionID: string) => {
  if (!sessionID) return;

  const eventSource = new EventSource(`${import.meta.env.VITE_API_URL}/api/v1/audit/session/${sessionID}`, {
    withCredentials: true,
  });

  setSessionOutput(""); // 초기화
  setCurrentSessionID(sessionID);

  eventSource.onmessage = (e) => {
    try {
      const payload = JSON.parse(e.data);
      if (payload.type === "print") {
        setSessionOutput((prev) => prev + payload.data);
      }
    } catch (err) {
      console.error("SSE 파싱 에러:", err);
    }
  };

  eventSource.onerror = (e) => {
    console.error("SSE 연결 오류:", e);
    eventSource.close();
  };
};


  useEffect(() => {
    // audits
    api.get("/audit/events").then((res) => {
      const rawEvents = res.data;
      const audits: AuditLog[] = rawEvents.map((event: any) => ({
        time: new Date(event.time).toLocaleString(), // ex: "2025-08-16 11:45"
        user: event.user ?? "unknown",
        event: event.event ?? "unknown",
      }));
      setAuditLogs(audits);
    });

    // sessions
    api.get("/audit/session").then((res) => {
      const rawSessions = res.data;
      const sessions: SessionLog[] = rawSessions.map((session: any) => {
        const start = new Date(session.session_start);
        const stop = new Date(session.session_stop);
        const durationMs = stop.getTime() - start.getTime();
        const duration = formatDuration(durationMs);
        return {
          user: session.user ?? "unknown",
          server: session.server_hostname ?? "unknown",
          duration,
          sessionid: session.sid, 
         onView: handleViewSession, 
        };
      });
      setSessionLogs(sessions);
    });
  }, []);

  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "48px" }}>
      <Log mode="audits" data={auditLogs} />
      <Log mode="sessions" data={sessionLogs} />
      {currentSessionID && (
  <div
    style={{
      marginTop: "32px",
      padding: "20px",
      background: "#000",
      color: "#0f0",
      whiteSpace: "pre-wrap",
      fontFamily: "monospace",
      maxHeight: "400px",
      overflowY: "auto",
      borderRadius: "8px",
    }}
  >
    <h3 style={{ color: "#fff" }}>🧾 Session Output: {currentSessionID}</h3>
    {sessionOutput || "로딩 중..."}
  </div>
)}

    </div>
  );
}

// 도우미 함수: milliseconds → hh:mm:ss
function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}