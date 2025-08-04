interface StatusCardProps {
  label: string;
  value: string | number;
  color: string;
}

export const StatusCard = ({ label, value, color }: StatusCardProps) => (
  <div
    style={{
      backgroundColor: color,
      borderRadius: "10px",
      padding: "16px",
      width: "160px",
      boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
    }}
  >
    <div style={{ fontSize: "24px", fontWeight: 700, marginBottom: "4px" }}>{value}</div>
    <div style={{ fontSize: "14px", fontWeight: 400 }}>{label}</div>
  </div>
);