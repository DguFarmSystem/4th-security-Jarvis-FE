import { useEffect, useState } from "react";
import { ResourceSummary } from "@/components/atoms/SummaryPanel";
import { ResourceTrendsChart } from "../../components/atoms/ResourceTrendsChart";
import { api } from "@/utils/axios";
import { mockAppSessions, mockDbSessions } from "../../mocks/mockData";
import { DiscoverRedirectButton } from "@/components/RedirectButton";

export default function DashboardPage() {
  const [nodeCount, setNodeCount] = useState(0);
  const [sessions, setSessions] = useState<any[]>([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const nodesRes = await api.get("/resources/nodes");
        setNodeCount(nodesRes.data.length ?? 0);
      } catch (err) {
        console.error("노드 불러오기 실패", err);
      }
    };

    const fetchSessions = async () => {
      try {
        const res = await api.get("/audit/session");
        setSessions(res.data ?? []);
      } catch (err) {
        console.error("세션 불러오기 실패", err);
      }
    };

    fetchResources();
    fetchSessions();
  }, []);

  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "32px" }}>
      <DiscoverRedirectButton />
      <ResourceTrendsChart
        nodeSessions={sessions}
        dbSessions={mockDbSessions}
        appSessions={mockAppSessions}
      />
      <ResourceSummary nodeCount={nodeCount} dbCount={2} appCount={5} />
    </div>
  );
}