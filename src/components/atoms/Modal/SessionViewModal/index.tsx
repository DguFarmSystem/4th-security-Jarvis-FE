import React from 'react';
import type { AnalyzeSessionResponse } from '@/types/analyzeTypes';

interface SessionViewModalProps {
  open: boolean;
  title?: string;
  onClose: () => void;
  sessionId?: string;
  loading?: boolean;
  analysisResult?: AnalyzeSessionResponse & { error?: string } | null;
}

export function SessionViewModal({
  open,
  title = "View",
  onClose,
  sessionId,
  loading = false,
  analysisResult,
}: SessionViewModalProps) {
  if (!open) return null;

   return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={titleStyle}>{title}</h2>
        {sessionId && <div style={subTitleStyle}>Session ID: {sessionId}</div>}

        <div style={contentBoxStyle}>
          {loading ? (
            <p style={{ color: "#888", textAlign: "center" }}>분석 중...</p>
          ) : analysisResult?.error ? (
            <p style={{ color: "red", textAlign: "center" }}>{analysisResult.error}</p>
          ) : analysisResult ? (
            <>
              <div style={resultRow}>
                <span style={labelStyle}>위협 수준:</span>
                <span style={getThreatStyle(analysisResult.threat_level)}>
                  {analysisResult.threat_level ?? "unknown"}
                </span>
              </div>
              <div style={resultRow}>
                <span style={labelStyle}>이상 감지:</span>
                <span>{analysisResult.is_anomaly ? "예" : "✅ 정상"}</span>
              </div>

              <div style={sectionStyle}>
                <h4 style={sectionTitle}>요약</h4>
                <p style={textStyle}>{analysisResult.summary || "요약 정보 없음"}</p>
              </div>

              {analysisResult.details && analysisResult.details.length > 0 && (
                <div style={sectionStyle}>
                  <h4 style={sectionTitle}>세부 정보</h4>
                  <ul style={detailListStyle}>
                    {analysisResult.details.map((item, i) => (
                      <li key={i}>
                        {Object.entries(item).map(([k, v]) => (
                          <div key={k}>
                            <b>{k}</b>: {JSON.stringify(v)}
                          </div>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {analysisResult.llm_reasoning && (
                <div style={sectionStyle}>
                  <h4 style={sectionTitle}>AI 분석 근거</h4>
                  <pre style={reasoningBox}>{analysisResult.llm_reasoning}</pre>
                </div>
              )}
            </>
          ) : (
            <p style={{ color: "#aaa", textAlign: "center" }}>분석 결과 없음</p>
          )}
        </div>

        <button style={closeBtnStyle} onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

// ===== styles =====
const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const modalStyle: React.CSSProperties = {
  width: 820,
  height: 640,
  borderRadius: 24,
  background: "#fff",
  boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  position: "relative",
  padding: "32px 40px",
  boxSizing: "border-box",
  overflowY: "auto",
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  textAlign: "center",
  fontSize: 32,
  fontWeight: 700,
};

const subTitleStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#777",
  marginBottom: 16,
};

const contentBoxStyle: React.CSSProperties = {
  marginTop: 16,
};

const resultRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 0",
  borderBottom: "1px solid #eee",
};

const labelStyle: React.CSSProperties = {
  fontWeight: 600,
  color: "#444",
};

const sectionStyle: React.CSSProperties = {
  marginTop: 20,
};

const sectionTitle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 600,
  marginBottom: 8,
};

const textStyle: React.CSSProperties = {
  lineHeight: 1.5,
  whiteSpace: "pre-wrap",
};

const detailListStyle: React.CSSProperties = {
  listStyle: "none",
  paddingLeft: 0,
};

const reasoningBox: React.CSSProperties = {
  background: "#f5f5f5",
  padding: 12,
  borderRadius: 6,
  fontFamily: "monospace",
  fontSize: 13,
  whiteSpace: "pre-wrap",
};

const closeBtnStyle: React.CSSProperties = {
  position: "absolute",
  top: 20,
  right: 20,
  border: "none",
  background: "#000",
  color: "#fff",
  borderRadius: 4,
  padding: "8px 16px",
  cursor: "pointer",
};

function getThreatStyle(level?: string): React.CSSProperties {
  const base: React.CSSProperties = {
    fontWeight: 700,
    textTransform: "capitalize",
  };
  switch (level?.toLowerCase()) {
    case "high":
      return { ...base, color: "#d32f2f" };
    case "medium":
      return { ...base, color: "#f9a825" };
    case "low":
      return { ...base, color: "#388e3c" };
    default:
      return { ...base, color: "#555" };
  }
}