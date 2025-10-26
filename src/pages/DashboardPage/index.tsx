import { useQuery } from "@tanstack/react-query";
import { ResourceSummary } from "@/components/atoms/SummaryPanel";
import { ResourceTrendsChart } from "@/components/atoms/ResourceTrendsChart";
import { api } from "@/utils/axios";
import { mockAppSessions, mockDbSessions } from "@/mocks/mockData";

async function fetchNodes() {
  const res = await api.get("/resources/nodes");
  return res.data;
}

async function fetchSessions() {
  const res = await api.get("/audit/session");
  return res.data;
}

export default function DashboardPage() {
  const {
    data: nodes = [],
    isLoading: isNodesLoading,
    isError: isNodesError,
  } = useQuery({ queryKey: ["nodes"], queryFn: fetchNodes });

  const {
    data: sessions = [],
    isLoading: isSessionsLoading,
    isError: isSessionsError,
  } = useQuery({ queryKey: ["sessions"], queryFn: fetchSessions });

    // 로딩 로그
  if (isNodesLoading || isSessionsLoading) {
    console.log("📡 데이터 로딩 중...");
  }

  // 에러 로그
  if (isNodesError || isSessionsError) {
    console.error("❌ 데이터 불러오기 실패");
  }

  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "32px" }}>
      <ResourceTrendsChart
        nodeSessions={sessions}
        dbSessions={mockDbSessions}
        appSessions={mockAppSessions}
      />
      <ResourceSummary nodeCount={nodes.length} dbCount={2} appCount={2} />
    </div>
  );
}