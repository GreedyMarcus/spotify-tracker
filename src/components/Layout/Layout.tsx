import { ReactNode } from "react";
import * as S from "./Layout.styles";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>Spotify Tracker</S.HeaderTitle>
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
