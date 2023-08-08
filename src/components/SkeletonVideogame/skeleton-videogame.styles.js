import { styled } from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #202020;
  border-radius: 1.2rem;
`

export const Title = styled.h3`
  font-size: 2.2rem;
  font-weight: bold;
  width: 60%;
  height: 2.5rem;
  border-radius: 0.7rem;
  animation: skeleton-loading 1s linear infinite alternate;
`

export const Rating = styled.p`
  text-align: center;
  border-radius: 0.7rem;
  width: 4.3rem;
  height: 3rem;
  animation: skeleton-loading 1s linear infinite alternate;
`

export const Description = styled.p``

export const PlatformLogo = styled.div`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  border-radius: 50%;
  animation: skeleton-loading 1s linear infinite alternate;
`

export const CardSubheading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  opacity: 0.7;
  animation: skeleton-loading 1s linear infinite alternate;
  border-radius: 1.2rem 1.2rem 0 0;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(0, 0%, 20%);
    }

    100% {
      background-color: hsl(0, 0%, 45%);
    }
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`

export const Info = styled.p`
  width: 40%;
  height: 1.8rem;
  border-radius: 0.7rem;
  animation: skeleton-loading 1s linear infinite alternate;

  &:last-child {
    width: 50%;
  }
`
