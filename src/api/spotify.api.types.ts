export type AuthCredentials = {
  accessToken: string;
  refreshToken?: string;
  expiresAt: number;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

export type RefreshTokenResponse = {
  accessToken: string;
  expiresIn: number;
};

export type ProfileResponse = {
  profile: Profile;
  artists: Artist[];
  tracks: Track[];
};

export type Profile = {
  id: string;
  name: string;
  followers: number;
  image: string | null;
};

export type Artist = {
  id: string;
  name: string;
  image: string | null;
  externalUrl: string;
};

export type Track = {
  id: string;
  name: string;
  duration: number;
  album: Album;
  externalUrl: string;
};

type Album = {
  id: string;
  name: string;
  image: string | null;
};
