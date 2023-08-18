import { styled } from 'styled-components';

export const LandingContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }
  h1 {
    font-size: 5rem;
    font-family: var(--font-3);
    font-weight: 700;
    color: #fff;
  }

  h2 {
    margin-bottom: 2rem;
    background: -webkit-linear-gradient(120deg, #fed43a 20%, #f5ac2d 84%);
    font-size: 5rem;
    font-weight: 700;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  button {
    padding: 2rem;
    font-size: 2rem;
    font-family: var(--font-3);
    font-weight: 600;
    ouline: none;
    background-color: #101010;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 1.2rem;
  }
`;
