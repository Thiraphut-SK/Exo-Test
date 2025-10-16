import { Navigate, Route, Routes } from "react-router-dom";

import CustomerListPage from "./pages/CustomerListPage";

import LoginPage from "@/pages/LoginPage";
import CustomerPage from "@/pages/CustomerDetail";

import { getToken } from "@/lib/auth";

import { useEffect, useState } from "react";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  // const token = getToken();
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const token = getToken();
    setIsAuthed(!!token);
    setIsChecking(false);
  }, []);

  if (isChecking) return <div>Loading...</div>;
  if (!isAuthed) return <Navigate replace to="/login" />;
  // if (!token) return <Navigate replace to="/login" />;

  return children;
}

function App() {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/login" />
      <Route
        element={
          <ProtectedRoute>
            <CustomerListPage />
          </ProtectedRoute>
        }
        path="/customers"
      />

      <Route
        element={
          <ProtectedRoute>
            <CustomerPage />
          </ProtectedRoute>
        }
        path="/customers/:cid"
      />

      {/* fallback route */}
      <Route element={<Navigate replace to="/customers" />} path="*" />
    </Routes>
  );
}

export default App;
