import { StatusCard } from "../StatusCard";

interface Props {
  nodeCount: number;
  dbCount: number;
  appCount: number;
}

export const ResourceSummary = ({ nodeCount, dbCount, appCount }: Props) => {
  const items = [
    { label: "서버", value: nodeCount.toString(), color: "#C5F4D2" },
    { label: "데이터베이스", value: dbCount.toString(), color: "#C8F3FF" },
    { label: "애플리케이션", value: appCount.toString(), color: "#85BCFF" },
  ];

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "16px", marginBottom: "20px" }}>
      <h3 style={{ fontWeight: "bold", marginBottom: "16px" }}>Resource Summary</h3>
      <div style={{ display: "flex", gap: "16px" }}>
        {items.map(({ label, value, color }) => (
          <StatusCard key={label} label={label} value={value} color={color} />
        ))}
      </div>
    </div>
  );
};