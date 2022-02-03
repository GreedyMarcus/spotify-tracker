import axios from "axios";
import * as T from "./spotify.api.types";

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

export const requestAccessToken = async (code: string) => {
  const response = await axios.post<T.RequestAccessTokenResponse>("/api/token", { code });
  return response.data;
};

export const getProfile = async (accessToken: string) => {
  const response = await axios.get<T.GetProfileResponse>("/api/profile", {
    headers: { Authorization: accessToken }
  });
  return response.data;
};
