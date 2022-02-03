import { Profile, Artist, Track } from "@api/spotify.api.types";
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
            width={300}
            height={300}
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
          {artists.map(({ id, name, image }) => (
            <S.Section key={id}>
              {image && (
                <S.ContentImage
                  width={130}
                  height={130}
                  src={image}
                  alt={`Picture of '${name}' artist`}
                />
              )}
              <S.Text>{name}</S.Text>
            </S.Section>
          ))}
        </S.TopContent>

        <S.Title>Your Top Tracks</S.Title>
        <S.TopContent>
          {tracks.map(({ id, name, album }) => (
            <S.Section key={id}>
              {album.image && (
                <S.ContentImage
                  width={130}
                  height={130}
                  src={album.image}
                  alt={`Album picture of '${name}' track`}
                />
              )}
              <S.Text>{name}</S.Text>
            </S.Section>
          ))}
        </S.TopContent>
      </S.Section>
    </S.Container>
  );
};
