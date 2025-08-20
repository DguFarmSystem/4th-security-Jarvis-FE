import { useEffect, useRef, useState, useMemo } from "react";
import { Log } from "../../components/atoms/Log";
import { api } from "../../utils/axios";
import { SessionViewModal } from "@/components/atoms/Modal/SessionViewModal";
import FilterPanel from "@/components/atoms/FilterPanel";

type AuditLog = { time: string; user: string; event: string };
type RawAudit  = { timeMs: number; user: string; event: string };
type SessionLog = {
  user: string; server: string; duration: string; sessionid: string;
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

  // 다중 선택: 비어있으면(All) = 전체
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([]);

  // 백엔드에서 받은 이벤트 타입 옵션 (중복 제거)
  const eventTypeOptions = useMemo(() => {
    const uniq = new Set(rawAudits.map(a => a.event).filter(Boolean));
    return Array.from(uniq).sort((a, b) => a.localeCompare(b));
  }, [rawAudits]);

  // 옵션 변동 시, 선택값을 교집합으로 보정
  useEffect(() => {
    setSelectedEventTypes(prev => prev.filter(v => eventTypeOptions.includes(v)));
  }, [eventTypeOptions]);

  // --- SSE/세션 보기 로직 동일 ---
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
      setSessionOutput(prev => prev + cleanData(data));
      const safeDelay = Math.min(delay ?? 0, 300);
      await new Promise(res => setTimeout(res, safeDelay));
    }
    processingRef.current = false;
  };

  const cleanData = (input: string) => input.replace(/.\x08/g, "");

  useEffect(() => {
    api.get("/audit/events").then((res) => {
      const raws: RawAudit[] = res.data
        .filter((e: any) => e.event !== "cert.create")
        .map((e: any) => ({
          timeMs: new Date(e.time).getTime(),
          user: e.user ?? e.identity?.user ?? "unknown",
          event: e.event ?? "unknown",
        }));
      setRawAudits(raws);
    });

    api.get("/audit/session").then((res) => {
      const sessions: SessionLog[] = res.data.map((s: any) => {
        const start = new Date(s.session_start);
        const stop = new Date(s.session_stop);
        return {
          user: s.user ?? "unknown",
          server: s.server_hostname ?? "unknown",
          duration: formatDuration(stop.getTime() - start.getTime()),
          sessionid: s.sid,
          onView: handleViewSession,
        };
      });
      setSessionLogs(sessions);
    });

    return () => { if (eventSourceRef.current) eventSourceRef.current.close(); };
  }, []);

  // 날짜/키워드/이벤트타입(다중) 필터링
  const filteredAudits = useMemo(() => {
    let list = rawAudits;

    if (dateRange) {
      const [s, e] = dateRange.split(" - ");
      const startMs = s ? new Date(s + "T00:00:00").getTime() : -Infinity;
      const endMs = e ? new Date(e + "T23:59:59.999").getTime() : Infinity;
      list = list.filter(a => a.timeMs >= startMs && a.timeMs <= endMs);
    }

    if (keyword.trim()) {
      const q = keyword.toLowerCase();
      list = list.filter(a => a.user.toLowerCase().includes(q) || a.event.toLowerCase().includes(q));
    }

    // 비어있지 않으면 선택된 이벤트만
    if (selectedEventTypes.length) {
      const set = new Set(selectedEventTypes);
      list = list.filter(a => set.has(a.event));
    }

    return list.map(a => ({
      time: new Date(a.timeMs).toLocaleString(),
      user: a.user,
      event: a.event,
    }));
  }, [rawAudits, dateRange, keyword, selectedEventTypes]);

  useEffect(() => { setAuditLogs(filteredAudits); }, [filteredAudits]);

  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <FilterPanel
        dateRange={dateRange}
        keyword={keyword}
        onDateChange={setDateRange}
        onKeywordChange={setKeyword}

        // 다중 선택 전달
        selectedEventTypes={selectedEventTypes}
        eventTypeOptions={eventTypeOptions}
        onEventTypesChange={setSelectedEventTypes}
      />

      <Log mode="audits" data={auditLogs} />
      <Log mode="sessions" data={sessionLogs} />

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
  if (!Number.isFinite(ms) || ms < 0) ms = 0;
  const h = Math.floor(ms / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1_000);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}