import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAtom } from "jotai";
import { isAuthenticatedAtom, loginAtom, logoutAtom } from "@/store/authAtoms";
import LoginModal from "./components/atoms/Modal/LoginModal";
import DashboardPage from "./pages/DashboardPage";
import ResourcePage from "./pages/ResourcePage";
import SessionPage from "./pages/SessionPage";
import ManagementPage from "./pages/ManagementPage";
import { Tab } from "./components/atoms/Tab";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { registerLogoutHandler } from "./utils/auth";
import "../src/styles/global.css";
import "./index.css";

function App() {
  const [isAuthenticated] = useAtom(isAuthenticatedAtom);
  const [, login] = useAtom(loginAtom);
  const [, logout] = useAtom(logoutAtom);

   useEffect(() => {
    registerLogoutHandler(() => logout());
  }, [logout]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {!isAuthenticated ? (
          <LoginModal isOpen={true} onSuccess={login}/>
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