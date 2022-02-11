import axios from "axios";
import {
  AuthCredentials,
  LoginResponse,
  ProfileResponse,
  RefreshTokenResponse
} from "./spotify.api.types";

const AUTH_CREDENTIALS_STORAGE_KEY = "spotify-tracker-auth-credentials";

export const saveAuthCredentials = (credentials: AuthCredentials) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(AUTH_CREDENTIALS_STORAGE_KEY, JSON.stringify(credentials));
  }
};

export const loadAuthCredentials = (): AuthCredentials | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const credentials = localStorage.getItem(AUTH_CREDENTIALS_STORAGE_KEY);
  return credentials ? JSON.parse(credentials) : null;
};

export const removeAuthCredentials = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_CREDENTIALS_STORAGE_KEY);
  }
};

export const login = async (code: string) => {
  const response = await axios.post<LoginResponse>("/api/login", { code });
  return response.data;
};

export const getProfile = async (accessToken: string) => {
  const response = await axios.get<ProfileResponse>("/api/profile", {
    headers: { Authorization: accessToken }
  });
  return response.data;
};

export const refreshToken = async (token?: string) => {
  const response = await axios.post<RefreshTokenResponse>("/api/refresh-token", {
    refreshToken: token
  });
  return response.data;
};
