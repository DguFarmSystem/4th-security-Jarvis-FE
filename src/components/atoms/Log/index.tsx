import React from "react";

type LogMode = "audits" | "sessions" | "activities";

interface LogProps {
  mode?: LogMode;
  data: Record<string, any>[]; // 외부에서 데이터를 주입받음
}

export const Log = ({ mode = "audits", data }: LogProps) => {
  const headers =
    mode === "audits"
      ? ["Time", "User", "Event"]
      : mode === "sessions"
      ? ["User", "Server", "Duration"]
      : ["Time", "Event"];

  const columnWidths =
    mode === "audits"
      ? ["200px", "147px", "122px"]
      : mode === "sessions"
      ? ["200px", "147px", "auto"]
      : ["200px", "200px"];

  return (
    <div
      style={{
        width: "921px",
        height:
          mode === "audits"
            ? "422px"
            : mode === "sessions"
            ? "260px"
            : "920px",
        flexShrink: 0,
        borderRadius: "15px",
        border: "1px solid #737373",
        opacity: 0.5,
        background: "var(--color-white)",
        paddingLeft: "52px",
        paddingTop: "27px",
        paddingRight: "144px",
        overflowY: "auto",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {headers.map((title, idx) => (
              <th
                key={title}
                style={{
                  width: columnWidths[idx],
                  textAlign: "left",
                  paddingBottom: "14px",
                  color: "#000",
                  fontFamily: "var(--font-pretendard)",
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "normal",
                  verticalAlign: "middle",
                  borderBottom: "1px solid var(--color-gray-400, #D3D3D3)",
                }}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ height: "48px" }}>
              {headers.map((key) => (
                <td
                  key={key}
                  style={{
                    ...cellStyle,
                    borderBottom: "1px solid var(--color-gray-400, #D3D3D3)",
                  }}
                >
                  {(row as any)[key.toLowerCase()] ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const cellStyle: React.CSSProperties = {
  color: "#000",
  fontFamily: "var(--font-pretendard)",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "normal",
  paddingTop: "12px",
  paddingBottom: "12px",
  verticalAlign: "middle",
};