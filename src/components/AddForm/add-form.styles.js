import { styled } from 'styled-components';

export const FormContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  place-items: center;
  place-content: center;
  background-color: #151515;
  z-index: 10;
  padding: 2rem;
`;
export const Form = styled.div`
  height: 90vh;
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;
export const FormTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  font-family: var(--font-3);
`;

export const SelectOptionsContainer = styled.div`
  max-width: 100%;
  width: 100%;
  background-color: #121212;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  position: absolute;
  top: 110px;
  border-radius: 1rem;
  overflow-y: scroll;
  scrollbar-gutter: stable;
  &::-webkit-scrollbar {
    display: block;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #222;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #0002;
  }
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

export const SelectOption = styled.div`
  background-color: #303030;
  font-size: 2rem;
  color: #ccc;
  background-color: #0000;
  cursor: pointer;
  padding: 0.7rem;

  &:hover {
    background-color: #333;
    border-radius: 1rem;
  }
`;
export const OptionsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
`;
export const Option = styled.div`
  width: auto;
  padding: 1.4rem;
  border-radius: 1.6rem;
  font-size: 2rem;
  background-color: #222;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }

  img {
    width: 1.6rem;
  }
`;

export const AddButton = styled.button``;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Button = styled.button`
  width: 100%;
  padding: 1.6rem;
  border-radius: 1.6rem;
  font-size: 2rem;
  color: #000;
  background-color: #fff;
  border: none;

  &:hover {
    background-color: #eee;
  }

  &:last-child {
    background-color: #222;
    color: #fff;

    &:hover {
      background-color: #333;
    }
  }
`;
export const ShowButton = styled.button`
  width: 100%;
  padding: 2rem;
  border-radius: ${props => (props.$active ? '1.6rem 1.6rem 0 0' : '1.6rem')};
  color: #ccc;
  font-size: 1.8rem;
  font-weight: 600;
  background-color: #222;
  border: none;
  outline: none;
  z-index: 10;
`;
