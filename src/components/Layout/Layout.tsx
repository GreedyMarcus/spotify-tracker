import { ReactNode } from "react";
import * as S from "./Layout.styles";

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout = ({ title, children }: Props) => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>{title}</S.HeaderTitle>
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
