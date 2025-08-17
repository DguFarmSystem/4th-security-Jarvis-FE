// src/App.tsx
import { useEffect, useState } from "react";
import { api } from "./utils/axios";
import LoginModal from "./components/atoms/Modal/LoginModal";
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
    <>
      {!isAuthenticated ? (
        <LoginModal isOpen={true} onClose={() => {}} />
      ) : (
        <div style={{ display: "flex" }}>
          <Tab title="Admin Console" />
          <div style={{ flex: 1 }}>
            <ManagementPage />
          </div>
        </div>
      )}
    </>
  );
}

export default App;