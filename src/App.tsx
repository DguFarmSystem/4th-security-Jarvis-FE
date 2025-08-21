import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { api } from "./utils/axios";
import LoginModal from "./components/atoms/Modal/LoginModal";
import DashboardPage from "./pages/DashboardPage";
import ResourcePage from "./pages/ResourcePage";
import SessionPage from "./pages/SessionPage";
import ManagementPage from "./pages/ManagementPage";
import { Tab } from "./components/atoms/Tab";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import "../src/styles/global.css";
import "./index.css";

function App() {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    api
      .get("/users", { withCredentials: true })
      .then(() => setAuthenticated(true))
      .catch(() => setAuthenticated(false));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {!isAuthenticated ? (
          <LoginModal isOpen={true} />
        ) : (
          <div className="layout-wrapper">
            <div className="layout-box">
              <div className="layout-tab">
                <Tab />
              </div>
              <div className="layout-content">
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/resource" element={<ResourcePage />} />
                  <Route path="/sessions" element={<SessionPage />} />
                  <Route path="/management" element={<ManagementPage />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;