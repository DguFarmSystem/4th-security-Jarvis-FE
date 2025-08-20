import React from "react";
import Button from "../Button";

type LogMode = "audits" | "sessions" | "activities";

interface LogProps {
  mode?: LogMode;
  data: Record<string, any>[];
}

const tableWidths: Record<LogMode, string[]> = {
  audits: ["240px", "240px", "245px"], 
  sessions: ["200px", "200px", "200px", "125px"],
  activities: ["362px", "363px"],
};

const headersByMode: Record<LogMode, { key: string; label: string }[]> = {
  audits: [
    { key: "time", label: "Time" },
    { key: "user", label: "User" },
    { key: "event", label: "Event" },
  ],
  sessions: [
    { key: "user", label: "User" },
    { key: "server", label: "Server" },
    { key: "duration", label: "Duration" },
    { key: "view", label: "View" }, // View 버튼용
  ],
  activities: [
    { key: "time", label: "Time" },
    { key: "event", label: "Event" },
  ],
};

export const Log = ({ mode = "audits", data }: LogProps) => {
  const headers = headersByMode[mode];
  const columnWidths = tableWidths[mode];

  const containerHeight =
    mode === "audits" ? "422px" : mode === "sessions" ? "260px" : "920px";

  return (
    <div
      style={{
        width: "921px",
        height: containerHeight,
        flexShrink: 0,
        borderRadius: "15px",
        border: "1px solid #737373",
        opacity: 0.5,
        background: "var(--color-white)",
        paddingLeft: "52px",
        paddingRight: "144px",
        paddingTop: "27px",
        overflowY: "auto",
        boxSizing: "border-box",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          tableLayout: "fixed",
        }}
      >
        <colgroup>
          {columnWidths.map((width, idx) => (
            <col key={idx} style={{ width }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h.key}
                style={{
                  textAlign: "left",
                  paddingBottom: "14px",
                  color: "#000",
                  fontFamily: "var(--font-pretendard)",
                  fontSize: "20px",
                  fontWeight: 700,
                  borderBottom: "1px solid var(--color-gray-400, #D3D3D3)",
                }}
              >
                {h.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ height: "48px" }}>
              {headers.map((h) => (
                <td
                  key={h.key}
                  style={{
                    ...cellStyle,
                    borderBottom: "1px solid var(--color-gray-400, #D3D3D3)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {h.key === "view" ? (
                    <Button
                      variant="view"
                      onClick={() => {
                        if (row.sessionid) {
                          row.onView?.(row.sessionid);
                        } else {
                          alert("세션 ID가 존재하지 않습니다.");
                        }
                      }}
                    >
                      View
                    </Button>
                  ) : (
                    row[h.key] ?? "-"
                  )}
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