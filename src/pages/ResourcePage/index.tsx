import { useEffect, useState } from "react";
import ResourceTable from "../../components/atoms/ResourceTable";
import type { Resource } from "../../components/atoms/ResourceTable";
import { ResourceType } from "../../components/atoms/Filters";
import type { ResourceOption } from "../../components/atoms/Filters";
import { api } from "../../utils/axios";
import { mockApps, mockDatabases } from "../../mocks/mockData";
// import { getCurrentUsernameFromCookie } from "../../utils/auth";
import { connectToSSHWebSocket } from "../../utils/ws";
import TerminalComponent from "../../components/Terminal";

export default function ResourcePage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<ResourceOption[]>([
    { label: "서버", checked: true },
    { label: "데이터베이스", checked: false },
    { label: "애플리케이션", checked: true },
  ]);

  const [terminalSocket, setTerminalSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const fetchResources = async () => {
       try {
      const res = await api.get("/resources/nodes");

      const servers: Resource[] = res.data.map((node: any) => {
        const nodeHost = node.spec.hostname ?? node.metadata.name;
        const loginUser = "minij02"; // 기본 SSH 계정 지정

        return {
          name: nodeHost,
          type: "서버",
          actionLabel: "연결",
          nodeHost,
          loginUser,
          onActionClick: () => {
            connectToSSHWebSocket(nodeHost, loginUser);
          },
        };
      });
        const databases: Resource[] = mockDatabases.map((db: any) => ({
          name: db.metadata?.name ?? "Unknown DB",
          type: "데이터베이스",
          actionLabel: "연결",
        }));

        const apps: Resource[] = mockApps.map((app: any) => ({
          name: app.metadata?.name ?? "Unknown App",
          type: "애플리케이션",
          actionLabel: "연결",
        }));

        const finalResources: Resource[] = [];
        if (selectedTypes[0].checked) finalResources.push(...servers);
        if (selectedTypes[1].checked) finalResources.push(...databases);
        if (selectedTypes[2].checked) finalResources.push(...apps);

        setResources(finalResources);
      } catch (err) {
        console.error("리소스 불러오기 실패:", err);
      }
    };

    fetchResources();
  }, [selectedTypes]);

  const handleToggle = (index: number, checked: boolean) => {
    const updated = [...selectedTypes];
    updated[index].checked = checked;
    setSelectedTypes(updated);
  };

  return (
    <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "32px" }}>
      <ResourceType options={selectedTypes} onToggle={handleToggle} />
      <ResourceTable columns={["이름", "종류", "태그"]} resources={resources} />
       {/* ✅ WebSocket 연결되면 터미널 표시 */}
    {terminalSocket && (
      <div style={{ marginTop: 32 }}>
        <TerminalComponent socket={terminalSocket} />
      </div>
    )}
    </div>
  );
}