export type SessionLog = {
  user: string; server: string; duration: string; sessionid: string;
  onView?: (sessionID: string) => void;
};