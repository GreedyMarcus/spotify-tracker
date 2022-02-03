import { Profile, Artist, Track } from "@api/spotify.api.types";
import { SpotifyThumbnail } from "@components/SpotifyThumbnail";
import * as S from "./SpotifyProfile.styles";

type Props = {
  profile: Profile;
  artists: Artist[];
  tracks: Track[];
};

export const SpotifyProfile = ({ profile, artists, tracks }: Props) => {
  return (
    <S.Container>
      <S.Section>
        {profile.image && (
          <S.ContentImage
            width={320}
            height={320}
            src={profile.image}
            alt={`Profile picture of ${profile.name}`}
          />
        )}
        <S.Title>{profile.name}</S.Title>
        <S.Text>Followers: {profile.followers}</S.Text>
      </S.Section>

      <S.Section>
        <S.Title>Your Top Artists</S.Title>
        <S.TopContent>
          {artists.map(({ id, name, image, externalUrl }) => (
            <SpotifyThumbnail
              key={id}
              type="artist"
              name={name}
              image={image}
              externalUrl={externalUrl}
            />
          ))}
        </S.TopContent>

        <S.Title>Your Top Tracks</S.Title>
        <S.TopContent>
          {tracks.map(({ id, name, album, externalUrl }) => (
            <SpotifyThumbnail
              key={id}
              type="track"
              name={name}
              image={album.image}
              externalUrl={externalUrl}
            />
          ))}
        </S.TopContent>
      </S.Section>
    </S.Container>
  );
};
