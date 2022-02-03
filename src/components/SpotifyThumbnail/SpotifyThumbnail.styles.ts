import styled from "styled-components";
import Image from "next/image";

export const ContentImage = styled(Image)`
  border-radius: 50%;
`;

export const Text = styled.p`
  margin-top: 0.25rem;
  margin-bottom: 0;
  font-family: "Carter One";
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  max-width: 200px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
