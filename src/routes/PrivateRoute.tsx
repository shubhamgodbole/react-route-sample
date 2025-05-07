// src/routes/PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const PrivateRoute = () => {
  const { user } = useAuth();

  // Wait for user to load (optional loading state here if async)
  if (user === undefined) return null;

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
