import { useEffect, useState } from "react";
import * as SpotifyApi from "../api/spotify.api";

/**
 * Custom hook that handles the Spotify authentication flow.
 */
export const useSpotifyAuth = (spotifyCode: string | null) => {
  const [accessToken, setAccessToken] = useState<string | null>(SpotifyApi.loadAccessToken());
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

  return {
    authorized: !!accessToken,
    loading,
    error
  };
};
