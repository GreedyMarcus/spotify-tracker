import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  align-items: center;
  width: 100%;
`;

export const ContentImage = styled(Image)`
  border-radius: 50%;
`;

export const Title = styled.p`
  margin-top: 1.25rem;
  margin-bottom: 0;
  font-family: "Carter One";
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
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

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4rem;
  margin-top: 1.25rem;
  margin-bottom: 1rem;
  width: 100%;
`;
