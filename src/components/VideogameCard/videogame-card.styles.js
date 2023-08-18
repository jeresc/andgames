import { styled } from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #121212;
  border-radius: 1.2rem;
`;

export const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: 800;
  color: #fff;
  cursor: pointer;
`;

export const Rating = styled.p`
  text-align: center;
  color: ${({ $rating }) =>
    $rating > 2 ? ($rating > 3.5 ? '#af0' : '#fb0') : '#d00'};
  border: 1px solid
    ${({ $rating }) =>
      $rating > 2 ? ($rating > 3.5 ? '#af0' : '#fb0') : '#d00'};
  border-radius: 0.7rem;
  padding: 0.5rem;
`;

export const Description = styled.p``;

export const PlatformLogo = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
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
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 1.2rem 1.2rem 0 0;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;
