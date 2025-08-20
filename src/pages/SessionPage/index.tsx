import { useEffect, useRef, useState, useMemo } from "react";
import { Log } from "../../components/atoms/Log";
import { api } from "../../utils/axios";
import { SessionViewModal } from "@/components/atoms/Modal/SessionViewModal";
import FilterPanel from "@/components/atoms/FilterPanel"; 

type AuditLog = {
  time: string;   // 표시용
  user: string;
  event: string;
};

type RawAudit = {
  timeMs: number; // 필터용
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
  const [rawAudits, setRawAudits] = useState<RawAudit[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [sessionLogs, setSessionLogs] = useState<SessionLog[]>([]);
  const [sessionOutput, setSessionOutput] = useState<string>("");
  const [currentSessionID, setCurrentSessionID] = useState<string | null>(null);

  const [dateRange, setDateRange] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [eventType, setEventType] = useState<string>("All");

  const queueRef = useRef<any[]>([]);
  const processingRef = useRef(false);
  const eventSourceRef = useRef<EventSource | null>(null);

  const handleViewSession = (sessionID: string) => {
    if (!sessionID) return;
    if (eventSourceRef.current) eventSourceRef.current.close();

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
      const safeDelay = Math.min(delay ?? 0, 300);
      await new Promise((res) => setTimeout(res, safeDelay));
    }

    processingRef.current = false;
  };

  const cleanData = (input: string) => input.replace(/.\x08/g, "");

  useEffect(() => {
    api.get("/audit/events").then((res) => {
      const rawEvents = res.data;
      const raws: RawAudit[] = rawEvents
        .filter((event: any) => event.event !== "cert.create")
        .map((event: any) => ({
          timeMs: new Date(event.time).getTime(),
          user: event.user ?? event.identity?.user ?? "unknown",
          event: event.event ?? "unknown",
        }));
      setRawAudits(raws);
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
      if (eventSourceRef.current) eventSourceRef.current.close();
    };
  }, []);

  // 날짜/키워드/타입으로 필터링
  const filteredAudits = useMemo(() => {
    let list = rawAudits;

    // 날짜 범위
    if (dateRange) {
      const [s, e] = dateRange.split(" - ");
      const startMs = s ? new Date(s + "T00:00:00").getTime() : -Infinity;
      const endMs = e ? new Date(e + "T23:59:59.999").getTime() : Infinity;
      list = list.filter((a) => a.timeMs >= startMs && a.timeMs <= endMs);
    }

    // 키워드 (user/event에 포함)
    if (keyword.trim()) {
      const q = keyword.toLowerCase();
      list = list.filter(
        (a) => a.user.toLowerCase().includes(q) || a.event.toLowerCase().includes(q)
      );
    }

    // 타입 (단순 매칭)
    if (eventType !== "All") {
      list = list.filter((a) => a.event === eventType);
    }

    // 표시용 포맷으로 변환
    return list.map((a) => ({
      time: new Date(a.timeMs).toLocaleString(),
      user: a.user,
      event: a.event,
    }));
  }, [rawAudits, dateRange, keyword, eventType]);

  // 화면에 반영
  useEffect(() => {
    setAuditLogs(filteredAudits);
  }, [filteredAudits]);

  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* 🔎 필터 패널 */}
      <FilterPanel
        dateRange={dateRange}
        keyword={keyword}
        eventType={eventType}
        onDateChange={setDateRange}
        onKeywordChange={setKeyword}
        onEventTypeChange={setEventType}
      />

      <Log mode="audits" data={auditLogs} />
      <Log mode="sessions" data={sessionLogs} />

      {/* 세션 뷰 모달 */}
      <SessionViewModal
        open={Boolean(currentSessionID)}
        title="View"
        sessionId={currentSessionID ?? undefined}
        output={sessionOutput}
        onClose={() => {
          if (eventSourceRef.current) eventSourceRef.current.close();
          eventSourceRef.current = null;
          setCurrentSessionID(null);
          setSessionOutput("");
          queueRef.current = [];
          processingRef.current = false;
        }}
      />
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