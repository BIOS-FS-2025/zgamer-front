import React, { useEffect, useMemo, useState } from "react"
import { authService } from "../services/auth.service";
import { AuthContext } from "./AuthContext";
import type { User } from "../types/api.types";

export function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await authService.login({ email, password });
    authService.saveAuthData(response.token, response.user);
    setUser(response.user);
  };

  const register = async (email: string, password: string, name: string) => {
    const response = await authService.register({ email, password, name});
    authService.saveAuthData(response.token, response.user);
    setUser(response.user);
  }

  const logout = () => {
    authService.logout();
    setUser(null);
  }
  
  const isAuthenticated = !!user && authService.isAuthenticated();

  const value = useMemo(() => {
    return {
      user,
      login,
      isLoading,
      register,
      logout,
      isAuthenticated
    };
  }, [user, isLoading, login]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}