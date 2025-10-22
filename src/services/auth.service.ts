import type { AuthResponse, LoginRequest, RegisterRequest } from "../types/api.types";
import { apiClient } from "./api.client";

export const authService = {
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/auth/register', data);
    return response.data;
  },
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/auth/login', data);
    return response.data;
  },
  logout: async () => {},
}