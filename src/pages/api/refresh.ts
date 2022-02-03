import { NextApiRequest, NextApiResponse } from "next";
import SpotifyWebApi from "spotify-web-api-node";

/**
 * Request a refreshed access token.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST request allowed" });
    return;
  }

  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
    refreshToken: req.body.refreshToken
  });

  try {
    const response = await spotifyApi.refreshAccessToken();

    res.json({
      accessToken: response.body.access_token,
      expiresIn: response.body.expires_in
    });
  } catch (err) {
    res.status(500);
  }
}
