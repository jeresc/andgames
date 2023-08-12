import { styled } from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #202020;
  border-radius: 1.2rem;
`;

export const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
  width: 60%;
  height: 2.5rem;
  border-radius: 0.7rem;
  background: linear-gradient(110deg, #333 8%, #444 18%, #333 33%);
  background-size: 200% 100%;
  animation: shine 1.5s linear infinite;
`;

export const Rating = styled.p`
  text-align: center;
  border-radius: 0.7rem;
  width: 4.3rem;
  height: 3rem;
  background: linear-gradient(110deg, #333 8%, #444 18%, #333 33%);
  background-size: 200% 100%;
  animation: shine 1.5s linear infinite;
`;

export const Description = styled.p``;

export const PlatformLogo = styled.div`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  border-radius: 50%;
  background: linear-gradient(110deg, #333 8%, #444 18%, #333 33%);
  background-size: 200% 100%;
  animation: shine 1.5s linear infinite;
`;

export const CardSubheading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  opacity: 0.7;
  background: linear-gradient(110deg, #333 8%, #444 18%, #333 33%);
  background-size: 200% 100%;
  animation: shine 1.5s linear infinite;
  border-radius: 1.2rem 1.2rem 0 0;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

export const Info = styled.p`
  width: 40%;
  height: 1.8rem;
  border-radius: 0.7rem;
  animation: shine 1.5s linear infinite;
  background: linear-gradient(110deg, #333 8%, #444 18%, #333 33%);
  background-size: 200% 100%;

  &:last-child {
    width: 50%;
  }
`;
