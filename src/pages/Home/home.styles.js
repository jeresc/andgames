import { styled } from "styled-components"

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const MainContentContainer = styled.section`
  width: 100%;
  height: fit-content;
  display:flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`
