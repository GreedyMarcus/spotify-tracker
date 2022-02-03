import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.main};
  box-shadow: ${({ theme }) => theme.elevation[0]};
  padding: 5rem 1.5rem;
  color: #fff;
  font-family: "Carter One";
  font-size: 2rem;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
  user-select: none;
  transition: all 200ms;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
    box-shadow: none;
    filter: drop-shadow(0 0 0.75rem ${({ theme }) => theme.colors.dark.main});
  }

  :active {
    filter: drop-shadow(0 0 0.25rem ${({ theme }) => theme.colors.dark.main});
  }
`;
