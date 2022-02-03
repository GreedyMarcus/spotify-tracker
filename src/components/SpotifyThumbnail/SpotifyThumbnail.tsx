import * as S from "./SpotifyThumbnail.styles";

type Props = {
  name: string;
  image: string | null;
  externalUrl: string;
  type: "artist" | "track";
};

export const SpotifyThumbnail = ({ name, image, externalUrl, type }: Props) => {
  return (
    <a href={externalUrl} target="_blank" rel="noreferrer">
      <S.Content>
        {image && (
          <S.ContentImage
            width={130}
            height={130}
            src={image}
            alt={`Thumbnail image of the ${name} ${type}`}
          />
        )}
        <S.Text>{name}</S.Text>
      </S.Content>
    </a>
  );
};
