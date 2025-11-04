import { createContext } from "react";
import type { User } from "../types/api.types";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}
// Contexto de autenticación  EN UN FUTURO podríamos utilizar librerías cómo Zustand, Redux o React Query
//Hammer
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
