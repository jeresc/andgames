import { styled } from 'styled-components';

export const StyledOrderAndFilter = styled.div`
  width: 100%;
  display: flex;
  gap: 1.6rem;
  place-items: center;
  place-content: center;
  position: relative;

  @media screen and (min-width: 1024px) {
    width: 300px;
    height: 100vh;
    top: 100px;

    height: fit-content;
    flex-direction: column;
    position: fixed;
    place-content: flex-start;
    place-items: flex-start;
  }
`;

export const DropdownButton = styled.button`
  font-size: 1.7rem;
  line-height: 2.2rem;
  font-weight: 600;
  width: 150px;
  color: #fff;
  background-color: transparent;
  border: none;
  font-family: var(--font);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  background-color: #202020;
  border-radius: 1.2rem;
  padding: 10px;
  font-family: "Nunito";

  @media screen and (min-width: 1024px) {
    background-color: 0000;
    font-size: 2.4rem;
    padding: 10px;
    width: auto;
    background-color: #0000;
    font-weight: 700;
  }
`;

export const ToggleIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  transition: transform 0.3s ease-in-out;

  ${({ $active }) =>
    $active &&
    `
    transform: rotate(-180deg);
  `}

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  gap: 1rem;
  place-items: center;
  place-content: center;

  @media screen and (min-width: 1024px) {
    position: relative;
    flex-direction: column;
    place-items: flex-start;
  }
`;

export const OrderOption = styled.img`
  height: 2rem;
  width: 2rem;
`;

export const Dropdown = styled.div`
  height: auto;
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  position: absolute;
  top: 50px;
  background-color: #202020;
  border-radius: 1.2rem;
  z-index: 50;
  ${({ $active }) =>
    !$active
      ? `
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  `
      : ``}
  transition: visibility 0s linear .2s,opacity .2s ease-in-out,-webkit-transform .2s ease-in-out;
  transition:
    visibility 0s linear 0.2s,
    opacity 0.2s ease-in-out,
    transform 0.2s ease-in-out;
  transition:
    visibility 0s linear 0s,
    opacity 0.2s ease-in-out,
    transform 0.2s ease-in-out,
    -webkit-transform 0.2s ease-in-out;
  visibility: ${({ $active }) => ($active ? 'visible' : 'hidden')};
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 620px) {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1024px) {
    position: static;
    height: 100%;
    visibility: visible;
    opacity: 1;
    -webkit-transform: none;
    transform: none;
    background-color: #0000;
    box-shadow: none;
  }
`;

export const FilterDropdown = styled(Dropdown)`
  width: 430px;
  right: calc(50%-200px);
  padding: 2.2rem;

  @media screen and (min-width: 1024px) {
    width: 300px;
    padding: 0 2.2rem;
  }
`;
export const OrderDropdown = styled(Dropdown)`
  width: 220px;
  padding: 1.4rem;

  @media screen and (min-width: 1024px) {
    padding: 0 2.2rem;
  }
`;

export const OrderButton = styled.button`
  width: fit-content;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.7rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  place-items: center;
  place-content: center;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    position: relative;
    place-items: flex-start;
    gap: 0;
  }
`;

export const FilterButton = styled.button`
  width: fit-content;
  background-color: transparent;
  color: #fff;
  border: none;
  outline: none;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: start;
  text-align: left;
  width: 180px;

  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const GenresContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-content: start;
  align-items: center;
  height: auto;
  grid-gap: 1rem 0.4rem;

  @media screen and (min-width: 1024px) {
    height: 170px;
    width: 280px;
    scrollbar-gutter: stable;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #000c;
      border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary-color);
      border-radius: 20px;
    }
  }
`;

export const OptionIcon = styled.img`
  height: 2.4rem;
  width: 2.4rem;
`;

export const FilterHeading = styled.div``;
export const HeadingTitle = styled.h3`
  color: #fff;
  font-size: 2.3rem;

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const OriginOptions = styled.div`
  display: flex;
  flex-flow: wrap row;
  gap: 1rem;
  justify-content: start;
`;
