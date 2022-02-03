import axios from "axios";

const ACCESS_TOKEN_STORAGE_KEY = "spotify-access-token";

export const saveAccessToken = (token: string) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, token);
};

export const loadAccessToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
};

export const removeAccessToken = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
};

type RequestAccessTokenResponse = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

export const requestAccessToken = async (code: string) => {
  const response = await axios.post<RequestAccessTokenResponse>("/api/token", { code });
  return response.data;
};
