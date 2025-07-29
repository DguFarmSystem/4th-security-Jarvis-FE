import React from "react";

type LogMode = "audits" | "sessions";

interface LogProps {
  mode?: LogMode;
}

export const Log = ({ mode = "audits" }: LogProps) => {
  const isAudit = mode === "audits";

  const headers = isAudit
    ? ["Time", "User", "Event", "Details"]
    : ["User", "Server", "Duration"];

  const columnWidths = isAudit
    ? ["200px", "147px", "122px", "auto"]
    : ["200px", "147px", "auto"];

  const data = isAudit
    ? [
        { time: "2024-04-21 11:30", user: "john.doe", event: "login", details: "john.doe" },
        { time: "2024-04-21 10:55", user: "john.doe", event: "update", details: "john.doe" },
        { time: "2024-04-21 10:22", user: "jane.smith", event: "access", details: "john.doe" },
        { time: "2024-04-20 16:17", user: "error", event: "error", details: "john.doe" },
        { time: "2024-04-21 10:22", user: "john.doe", event: "access", details: "john.doe" },
        { time: "2024-04-21 10:22", user: "jane.smith", event: "access", details: "john.doe" },
        { time: "2024-04-20 16:17", user: "error", event: "error", details: "john.doe" },
        { time: "2024-04-21 10:22", user: "john.doe", event: "access", details: "john.doe" },
      ]
    : [
        { user: "john.doe", server: "web-server", duration: "01:23:45" },
        { user: "jane.smith", server: "db-server", duration: "00:12:07" },
        { user: "john.doe", server: "web-server", duration: "04:55:22" },
        { user: "john.doe", server: "web-server", duration: "01:23:45" },
        { user: "jane.smith", server: "db-server", duration: "00:12:07" },
        { user: "john.doe", server: "web-server", duration: "04:55:22" },
      ];

  return (
    <div
      style={{
        width: "921px",
        height: isAudit ? "422px" : "260px",
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
                  borderBottom: "1px solid var(--color-gray-300)",
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
                      borderBottom: "1px solid var(--color-gray-300)",
                    }}
                  >
                    {(row as any)[key.toLowerCase()]}
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