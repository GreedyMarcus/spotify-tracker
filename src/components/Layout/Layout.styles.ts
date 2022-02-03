import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.main};
  box-shadow: ${({ theme }) => theme.elevation[0]};
  width: 100%;
  height: 3.5rem;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  color: #fff;
  font-family: "Carter One";
  font-size: 1.75rem;
  letter-spacing: 1px;
  user-select: none;
`;

export const Content = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
`;
