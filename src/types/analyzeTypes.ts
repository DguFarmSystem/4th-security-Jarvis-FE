export interface AnalyzeSessionRequest {
  SessionID: string;
  User: string;
  ServerID: string;
  ServerAddr: string;
  SessionStart: string;
  SessionEnd: string;
  Transcript: string;
}

export interface AnalyzeSessionResponse {
  is_anomaly: boolean;
  threat_level: string;
  summary: string;
  details: Record<string, any>[];
  llm_reasoning: string;
}