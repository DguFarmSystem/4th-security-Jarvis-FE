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
};

export default function SessionPage() {
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [sessionLogs, setSessionLogs] = useState<SessionLog[]>([]);

  useEffect(() => {
    // audits
    api.get("/api/v1/audit/events").then((res) => {
      const rawEvents = res.data;
      const audits: AuditLog[] = rawEvents.map((event: any) => ({
        time: new Date(event.time).toLocaleString(), // ex: "2025-08-16 11:45"
        user: event.user ?? "unknown",
        event: event.event ?? "unknown",
      }));
      setAuditLogs(audits);
    });

    // sessions
    api.get("/api/v1/audit/session").then((res) => {
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
        };
      });
      setSessionLogs(sessions);
    });
  }, []);

  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "48px" }}>
      <Log mode="audits" data={auditLogs} />
      <Log mode="sessions" data={sessionLogs} />
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