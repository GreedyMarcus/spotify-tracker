import { useEffect, useState } from "react";
import { GetProfileResponse } from "@api/spotify.api.types";
import * as SpotifyApi from "@api/spotify.api";

/**
 * Custom hook that handles the Spotify authentication flow.
 */
export const useSpotifyAuth = (spotifyCode: string | null) => {
  const [accessToken, setAccessToken] = useState<string | null>(SpotifyApi.loadAccessToken());
  const [data, setData] = useState<GetProfileResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (accessToken || !spotifyCode) return;

    setLoading(true);

    (async () => {
      try {
        const { accessToken } = await SpotifyApi.requestAccessToken(spotifyCode);

        setAccessToken(accessToken);
        SpotifyApi.saveAccessToken(accessToken);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [accessToken, spotifyCode]);

  useEffect(() => {
    if (!accessToken) return;

    setLoading(true);

    (async () => {
      try {
        const data = await SpotifyApi.getProfile(accessToken);
        setData(data);
      } catch (err) {
        setError(true);
        setAccessToken(null);
        SpotifyApi.removeAccessToken();
      } finally {
        setLoading(false);
      }
    })();
  }, [accessToken]);

  return {
    authorized: !!accessToken,
    data,
    loading,
    error
  };
};
