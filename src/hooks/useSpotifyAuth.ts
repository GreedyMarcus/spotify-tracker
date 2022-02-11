import { useEffect, useState } from "react";
import { ProfileResponse } from "@api/spotify.api.types";
import * as SpotifyApi from "@api/spotify.api";

/**
 * Custom hook that handles the Spotify authentication flow.
 */
export const useSpotifyAuth = (spotifyCode: string | null) => {
  const [authCredentials, setAuthCredentials] = useState(SpotifyApi.loadAuthCredentials());
  const [profileData, setProfileData] = useState<ProfileResponse | null>(null);
  const [refreshRequired, setRefreshRequired] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (authCredentials?.accessToken || !spotifyCode) {
      return;
    }

    setLoading(true);

    SpotifyApi.login(spotifyCode)
      .then(({ accessToken, refreshToken, expiresIn }) => {
        const credentials = {
          accessToken,
          refreshToken,
          expiresAt: new Date().getTime() + expiresIn * 1000
        };

        setAuthCredentials(credentials);
        SpotifyApi.saveAuthCredentials(credentials);
      })
      .catch(() => {
        setError("Oops! Couldn't login to your account. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [authCredentials, spotifyCode]);

  useEffect(() => {
    if (!authCredentials?.accessToken) {
      return;
    }

    setLoading(true);

    if (authCredentials?.expiresAt <= new Date().getTime()) {
      setRefreshRequired(true);
      return;
    }

    SpotifyApi.getProfile(authCredentials.accessToken)
      .then((profile) => {
        setProfileData(profile);
      })
      .catch(() => {
        setError("Oops! Couldn't load your profile. Please authorize yourself again.");
        setAuthCredentials(null);
        SpotifyApi.removeAuthCredentials();
      })
      .finally(() => {
        setLoading(false);
      });
  }, [authCredentials]);

  useEffect(() => {
    if (refreshRequired) {
      SpotifyApi.refreshToken(authCredentials?.refreshToken)
        .then(({ accessToken, expiresIn }) => {
          const credentials = {
            accessToken,
            expiresAt: new Date().getTime() + expiresIn * 1000
          };

          setAuthCredentials(credentials);
          SpotifyApi.saveAuthCredentials(credentials);
        })
        .catch(() => {
          setError("Oops! Something went wrong.");
          setProfileData(null);
          setAuthCredentials(null);
          SpotifyApi.removeAuthCredentials();
        })
        .finally(() => {
          setLoading(false);
          setRefreshRequired(false);
        });
    }
  }, [refreshRequired, authCredentials]);

  return {
    authorized: !!authCredentials?.accessToken,
    profileData,
    loading,
    error
  };
};
