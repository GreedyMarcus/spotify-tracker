import { NextApiRequest, NextApiResponse } from "next";
import SpotifyWebApi from "spotify-web-api-node";

/**
 * Retrieve detailed profile information about the current user.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(400).send({ message: "Only GET request allowed" });
    return;
  }

  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI
  });

  spotifyApi.setAccessToken(req.headers.authorization ?? "");

  const myProfile = spotifyApi.getMe();
  const myTopArtists = spotifyApi.getMyTopArtists({ limit: 3 });
  const myTopTracks = spotifyApi.getMyTopTracks({ limit: 3 });

  try {
    const [profile, artists, tracks] = await Promise.all([myProfile, myTopArtists, myTopTracks]);

    res.json({
      profile: {
        id: profile.body.id,
        name: profile.body.display_name,
        followers: profile.body.followers?.total ?? 0,
        image: profile.body.images?.length ? profile.body.images[0].url : null
      },
      artists: artists.body.items.map(({ id, name, images, external_urls }) => ({
        id,
        name,
        image: images.length ? images[0].url : null,
        externalUrl: external_urls.spotify
      })),
      tracks: tracks.body.items.map(({ id, name, duration_ms, album, external_urls }) => ({
        id,
        name,
        duration: duration_ms / 1000,
        album: {
          id: album.id,
          name: album.name,
          image: album.images.length ? album.images[0].url : null
        },
        externalUrl: external_urls.spotify
      }))
    });
  } catch (err) {
    res.status(500);
  }
}
