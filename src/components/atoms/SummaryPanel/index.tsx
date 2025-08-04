import { StatusCard } from "../StatusCard";

interface SummaryPanelProps {
  mode: "system" | "resource";
}

export const SummaryPanel = ({ mode }: SummaryPanelProps) => {
  const items =
    mode === "system"
      ? [
          { label: "클러스터 상태", value: "정상", color: "#C5F4D2" },
          { label: "활성 세션 수", value: "2", color: "#C8F3FF" },
          { label: "총 사용자 수", value: "1070", color: "#85BCFF" },
        ]
      : [
          { label: "서버", value: "3", color: "#C5F4D2" },
          { label: "데이터베이스", value: "2", color: "#C8F3FF" },
          { label: "애플리케이션", value: "5", color: "#85BCFF" },
        ];

  const title = mode === "system" ? "System Status Overview" : "Resource Summary";

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "16px", marginBottom: "20px" }}>
      <h3 style={{ fontWeight: "bold", marginBottom: "16px" }}>{title}</h3>
      <div style={{ display: "flex", gap: "16px" }}>
        {items.map(({ label, value, color }) => (
          <StatusCard key={label} label={label} value={value} color={color} />
        ))}
      </div>
    </div>
  );
};