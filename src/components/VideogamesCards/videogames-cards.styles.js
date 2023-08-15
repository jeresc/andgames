import { styled } from 'styled-components';

export const VideogamesContainer = styled.section`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 1024px) {
    margin-left: 300px;
  }
`;

export const CardContainer = styled.section`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1.2rem;
  margin: 1rem 2rem;
`;

export const NoResultsFound = styled.section`
  margin-top: 7rem;
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .6rem;

  img {
    width: 110px;
    height: 110px;
  }

  h3 {
    font-size: 3rem;
    font-weight: 600;
  }

  p {
    font-size: 1.8rem;
    color: #ccc;
  }
`;
