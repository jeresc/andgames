import { keyframes, styled } from 'styled-components';

const dots = keyframes`
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;
`;

export const DetailContainer = styled.section`
  max-width: 700px;
  margin: 0 auto;
  height: 100%;
  border-radius: 1rem;

  h1 {
    font-size: 4rem;
    font-weight: 700;
  }
`;

export const PlatformLogo = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const DetailCardContainer = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  height: 100%;
  border-radius: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);

  h1 {
    font-size: 4rem;
    font-weight: 700;
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
  }

  img {
    border-radius: 1rem 1rem 0 0;
  }
  h3 {
    color: #ccc;
    font-size: 1.7rem;
    padding: 1rem 0;
  }
`;
export const InfoSubsection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2rem;
`;
export const LoadingContainer = styled.span`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  font-size: 4rem;
  font-weight: 700;
  color: #aaa;
  &:after {
    content: ' .';
    animation: ${dots} 1s steps(5, end) infinite;
  }
`;

export const DetailInfo = styled.div`
  padding: 2rem;
`;
