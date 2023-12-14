import React from "react";
import AllRoutes from "./routes/AllRoutes";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <>
      <AuthProvider>
        <AllRoutes />
      </AuthProvider>
    </>
  );
}
