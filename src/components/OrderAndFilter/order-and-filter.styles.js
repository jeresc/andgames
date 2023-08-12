import { omit } from 'lodash';
import { styled } from 'styled-components';

export const StyledOrderAndFilter = styled.div`
  width: 100%;
  display: flex;
  gap: 1.6rem;
  place-items: center;
  place-content: center;
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
`;

export const OrderContainer = styled.div`
  display: flex;
  gap: 1rem;
  place-items: center;
  place-content: center;
  position: relative;
`;

export const OrderOption = styled.img`
  height: 2rem;
  width: 2rem;
`

export const Dropdown = styled.div`
  height: auto;
  display: flex;
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
`;

export const FilterDropdown = styled(Dropdown)`
  width: 400px;
  right: calc(50%-200px);
`;
export const OrderDropdown = styled(Dropdown)`
  width: 220px;
`;

export const OrderButton = styled.button`
  padding: 1rem;
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
  position: relative;
`;

export const FilterButton = styled.button`
  padding: 1rem;
  width: fit-content;
`;

export const GenresContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(auto-fill, 20px);
  justify-content: start;
  align-items: center;
  max-height: 220px;
  overflow-x: hidden;
  overflow-y: auto;
  grid-gap: 0.8rem;
  padding: 1.6rem;
`;

export const OptionIcon = styled.img`
  height: 2.4rem;
  width: 2.4rem;
`;
