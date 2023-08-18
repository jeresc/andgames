import { styled } from "styled-components";

export const PageNotFound = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h1 {
    font-size: 4rem;
    font-weight: 600;
    color: #fff;
    font-family: var(--font-3);
  }

  button {
    font-size: 2.3rem;
    line-height: 2.2rem;
    font-weight: 500;
    width: 150px;
    color: #fff;
    background-color: #121212;
    border: none;
    font-family: var(--font-3);
    padding: 2rem;
    border-radius: 1.2rem;

    &:hover {
      background-color: #222;
    }
  }

  img {
    width: 160px;
    height: 160px;
  }
`
