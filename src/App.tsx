import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { api } from "./utils/axios";
import LoginModal from "./components/atoms/Modal/LoginModal";
import DashboardPage from "./pages/DashboardPage";
import ResourcePage from "./pages/ResourcePage";
import SessionPage from "./pages/SessionPage";
import ManagementPage from "./pages/ManagementPage";
import { Tab } from "./components/atoms/Tab";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/users")
      .then(() => {
        setAuthenticated(true);
      })
      .catch(() => {
        setAuthenticated(false);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
      <BrowserRouter>
      {!isAuthenticated ? (
        <LoginModal isOpen={true} onClose={() => {}} />
      ) : (
        <div style={{ display: "flex" }}>
          <Tab />
          <div style={{ flex: 1, padding: "24px" }}>
            <Routes>
              {/* 기본 경로를 대시보드로 리디렉션 */}
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/resource" element={<ResourcePage />} />
              <Route path="/sessions" element={<SessionPage />} />
              <Route path="/management" element={<ManagementPage />} />
              {/* 존재하지 않는 경로 → 대시보드로 이동 */}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;