import { styled } from "styled-components";

export const LandingContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    font-family: var(--font-3);
    margin-bottom: 2rem;
    font-weight: 700;
  background: -webkit-linear-gradient(360deg ,#faca15, #fce96a);
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
`
