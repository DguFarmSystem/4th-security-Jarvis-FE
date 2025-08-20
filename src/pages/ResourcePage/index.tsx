import { useEffect, useState } from "react";
import ResourceTable from "../../components/atoms/ResourceTable";
import type { Resource } from "../../components/atoms/ResourceTable";
import { ResourceType } from "../../components/atoms/Filters";
import type { ResourceOption } from "../../components/atoms/Filters";
import { api } from "../../utils/axios";
import { mockApps, mockDatabases } from "../../mocks/mockData";
// import { getCurrentUsernameFromCookie } from "../../utils/auth";
import { connectToSSHWebSocket } from "../../utils/ws";
import Button from "../../components/atoms/Button";
import { AddResourceModal } from "../../components/atoms/Modal/AddResourceModal";
import TerminalComponent from "../../components/Terminal";

export default function ResourcePage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<ResourceOption[]>([
    { label: "서버", checked: true },
    { label: "데이터베이스", checked: false },
    { label: "애플리케이션", checked: true },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [terminalSocket, setTerminalSocket] = useState<WebSocket | null>(null);

  const fetchResources = async () => {
    try {
      const res = await api.get("/resources/nodes");

      const servers: Resource[] = res.data.map((node: any) => {
        const nodeHost = node.spec.hostname ?? node.metadata.name;
        const nodeName = node.metadata.name; // 삭제용 식별자
        const loginUser = "root";

        return {
          name: nodeHost,
          type: "서버",
          actionLabel: "연결",
          nodeHost,
          nodeName,
          loginUser,
          onActionClick: () => {
            const socket = connectToSSHWebSocket(nodeHost, loginUser);
            setTerminalSocket(socket);
          },
          onDeleteClick: async () => {
            const ok = window.confirm(`노드 "${nodeHost}" 를 삭제할까요?`);
            if (!ok) return;
            try {
              await api.delete(`/resources/nodes/${nodeName}`);
              await fetchResources(); // 삭제 후 새로고침
            } catch (e) {
              console.error("노드 삭제 실패:", e);
              alert("노드 삭제에 실패했어요.");
            }
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

  useEffect(() => {
    fetchResources();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTypes]);

  const handleToggle = (index: number, checked: boolean) => {
    const updated = [...selectedTypes];
    updated[index].checked = checked;
    setSelectedTypes(updated);
  };

  return (
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 32 }}>
      {showModal && (
        <AddResourceModal
          onSubmit={() => setShowModal(false)}
          onCancel={() => setShowModal(false)}
        />
      )}

      <ResourceType
        title="Resource Type"
        options={selectedTypes}
        onToggle={handleToggle}
        headerRight="생성"
        optionsRight={
          <Button variant="addResource" onClick={() => setShowModal(true)}>
            리소스 추가
          </Button>
        }
      />

      {/* 액션 칼럼은 '태그' 자리에 표기 중 */}
      <ResourceTable columns={["이름", "종류", "태그"]} resources={resources} />

      {terminalSocket && (
        <TerminalComponent
          socket={terminalSocket}
          onClose={() => setTerminalSocket(null)}
        />
      )}
    </div>
  );
}