import { NextApiRequest, NextApiResponse } from "next";
import SpotifyWebApi from "spotify-web-api-node";
import { generateRandomString } from "@utils/string";

/**
 * Initiates the authorization request to Spotify.
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(400).send({ message: "Only GET request allowed" });
    return;
  }

  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI
  });

  const scopes = ["user-top-read"];
  const state = generateRandomString(16);

  res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
}
