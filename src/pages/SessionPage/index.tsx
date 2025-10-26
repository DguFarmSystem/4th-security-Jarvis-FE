import { useEffect, useRef, useState, useMemo } from "react";
import { Log } from "@/components/atoms/Log";
import type { AuditLog, RawAudit } from "@/types/auditTypes";
import type { SessionLog } from "@/types/SessionTypes";
import type { AnalyzeSessionRequest, AnalyzeSessionResponse } from "@/types/analyzeTypes";
import { api } from "@/utils/axios";
import { API_BASE } from "@/utils/axios";
import { SessionViewModal } from "@/components/atoms/Modal/SessionViewModal";
import FilterPanel from "@/components/atoms/FilterPanel";

export default function SessionPage() {
  const [rawAudits, setRawAudits] = useState<RawAudit[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [sessionLogs, setSessionLogs] = useState<SessionLog[]>([]);
  const [sessionMetaMap, setSessionMetaMap] = useState<Record<string, any>>({});
  const [sessionOutput, setSessionOutput] = useState<string>("");
  const [analysisResult, setAnalysisResult] = useState<any | null>(null);
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);

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
  // const queueRef = useRef<any[]>([]);
  // const processingRef = useRef(false);
  const eventSourceRef = useRef<EventSource | null>(null);

  // SessionPage.tsx (수정된 handleViewSession)

  const handleViewSession = async (sessionID: string) => {
    if (!sessionID) return;

    setSessionOutput("");
    setCurrentSessionID(sessionID);
    setAnalysisResult(null);
    setLoadingAnalysis(true);

    try {
    // 백엔드가 JSON 대신 순수 텍스트를 반환할 경우를 대비하여 응답 타입을 string | object로 설정
    const res = await api.get<any>( 
            `/audit/session/${sessionID}`
        );
    
        let rawLog: string;

        if (typeof res.data === 'string' && res.data) {
           
            rawLog = res.data;
        } else if (typeof res.data === 'object' && res.data !== null) {
           
            if (res.data.error) {
                rawLog = `[오류] ${res.data.error}`;
                console.error("세션 로그 API 응답 오류:", res.data.error);
            } else {
                // 서버가 반환한 JSON 객체 전체를 로그 내용으로 사용
                rawLog = JSON.stringify(res.data, null, 2); 
            }
        } else {
            // 예상치 못한 응답 포맷 또는 빈 응답인 경우
            rawLog = "세션 로그를 불러왔으나, 응답 포맷을 알 수 없습니다.";
        }

        const fullLog = cleanData(rawLog); 
        setSessionOutput(fullLog);

        // 3. 로그 분석 요청: 데이터가 비어있지 않다면 분석 요청
        if (rawLog && rawLog.trim() !== "" && !rawLog.startsWith("[오류]")) {
            analyzeSession(sessionID);
        } else {
            setLoadingAnalysis(false); // 로그를 받지 못했으므로 분석 요청 건너뜀
        }
    
  } catch (err) {
    console.error("세션 로그 요청 실패:", err);
    setSessionOutput("세션 로그를 불러오는 데 실패했습니다.");
    setLoadingAnalysis(false);
  }
  };

  const analyzeSession = async (sessionID: string) => {
    const sessionMeta = sessionMetaMap[sessionID] || {};

    if (!sessionMeta) {
      console.error("세션 메타데이터를 찾을 수 없습니다. (ID: ${sessionID}");
      setLoadingAnalysis(false);
      return;
    }

    const payload: AnalyzeSessionRequest = {
      SessionID: sessionID,
      User: sessionMeta.user ?? "unknown",
      ServerID: sessionMeta.server_id ?? "unknown",
      ServerAddr: sessionMeta.server_addr ?? sessionMeta["addr.local"] ?? "unknown",
      SessionStart: sessionMeta.session_start ?? "",
      SessionEnd: sessionMeta.session_stop ?? "",
      Transcript: sessionOutput || "세션 로그 없음",
    };

    try {
       const res = await api.post<AnalyzeSessionResponse>(
        "/api/v1/analyze", 
        payload,
        {
          // 8080 대신 8000번 포트 서버로 요청하도록 baseURL을 오버라이드
          baseURL: API_BASE.replace("8080", "8000"),
        }
      );
      setAnalysisResult(res.data);
    } catch (err) {
      console.error("분석 요청 실패:", err);
      setAnalysisResult({ error: "분석 요청 실패" });
    } finally {
      setLoadingAnalysis(false);
    }
  };

  // const processQueue = async () => {
  //   if (processingRef.current) return;
  //   processingRef.current = true;
  //   while (queueRef.current.length > 0) {
  //     const { data, delay } = queueRef.current.shift();
  //     setSessionOutput(prev => prev + cleanData(data));
  //     const safeDelay = Math.min(delay ?? 0, 300);
  //     await new Promise(res => setTimeout(res, safeDelay));
  //   }
  //   processingRef.current = false;
  //   // 모든 출력이 끝난 후 분석 요청
  // if (currentSessionID && !analysisResult) {
  //   analyzeSession(currentSessionID);
  // }
  // };

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
      const metaMap: Record<string, any> = {};
      const sessions: SessionLog[] = res.data.map((s: any) => {
        const id = s.sid || s.uid; // sid가 주 키이지만, 혹시 대비하여 uid도 고려
        if (id) {
          metaMap[id] = s; // 세션 ID를 키로 사용하여 원본 메타데이터 저장
        }
        const start = new Date(s.session_start);
        const stop = new Date(s.session_stop);
        metaMap[s.sid] = s; // 세션 ID 기준으로 원본 저장
        return {
          user: s.user ?? "unknown",
          server: s.server_hostname ?? "unknown",
          duration: formatDuration(stop.getTime() - start.getTime()),
          sessionid: s.sid,
          onView: handleViewSession,
        };
      });
      setSessionLogs(sessions);
      setSessionMetaMap(metaMap);
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
        loading={loadingAnalysis}
        analysisResult={analysisResult}
        onClose={() => {
          // if (eventSourceRef.current) eventSourceRef.current.close();
          // eventSourceRef.current = null;
          setCurrentSessionID(null);
          setSessionOutput("");
          // queueRef.current = [];
          // processingRef.current = false;
          setAnalysisResult(null);
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