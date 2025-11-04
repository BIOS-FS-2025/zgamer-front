import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: Readonly<{ children: React.ReactNode }>) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <React.Fragment>{children}</React.Fragment>;
}