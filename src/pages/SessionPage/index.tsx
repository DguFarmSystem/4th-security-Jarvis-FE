import { useEffect, useRef, useState } from "react";
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
  const [sessionOutput, setSessionOutput] = useState<string>("");
  const [currentSessionID, setCurrentSessionID] = useState<string | null>(null);

  const queueRef = useRef<any[]>([]);
  const processingRef = useRef(false);
  const eventSourceRef = useRef<EventSource | null>(null);

  const handleViewSession = (sessionID: string) => {
    if (!sessionID) return;

    // 이전 연결 종료
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }

    setSessionOutput("");
    setCurrentSessionID(sessionID);
    queueRef.current = [];
    processingRef.current = false;

    const eventSource = new EventSource(
      `${import.meta.env.VITE_API_URL}/api/v1/audit/session/${sessionID}`,
      { withCredentials: true }
    );

     eventSource.addEventListener("session_chunk", (e: MessageEvent) => {
    try {
      const payload = JSON.parse(e.data);
      if (payload.type === "print") {
        queueRef.current.push(payload);
        processQueue();
      }
    } catch (err) {
      console.error("SSE 파싱 에러:", err);
    }
  });

    eventSource.onerror = (e) => {
      console.error("SSE 연결 오류:", e);
      eventSource.close();
    };

    eventSourceRef.current = eventSource;
  };

  const processQueue = async () => {
    if (processingRef.current) return;
    processingRef.current = true;

    while (queueRef.current.length > 0) {
      const { data, delay } = queueRef.current.shift();
      setSessionOutput((prev) => prev + cleanData(data));
      const safeDelay = Math.min(delay ?? 0, 300); // 너무 길면 제한
      await new Promise((res) => setTimeout(res, safeDelay));
    }

    processingRef.current = false;
  };

  const cleanData = (input: string) => {
    return input.replace(/.\x08/g, ""); // 백스페이스 처리
  };

  useEffect(() => {
    api.get("/audit/events").then((res) => {
      const rawEvents = res.data;
      const audits: AuditLog[] = rawEvents.map((event: any) => ({
        time: new Date(event.time).toLocaleString(),
        user: event.user ?? "unknown",
        event: event.event ?? "unknown",
      }));
      setAuditLogs(audits);
    });

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

    return () => {
      // 페이지 떠날 때 SSE 종료
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
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

function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}