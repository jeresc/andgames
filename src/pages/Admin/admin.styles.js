import { styled } from 'styled-components';

export const PanelContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Aside = styled.aside`
  min-width: 240px;
  height: 100vh;
  background-color: #101010;
  padding: 0.6rem;
`;
export const MainContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const MenuHeading = styled.div`
  padding: 1rem;
  font-family: var(--font-3);
  font-weight: 600;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
  }
`;
export const MenuOption = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  border-radius: 0.8rem;
  gap: 1.2rem;
  align-items: center;
  cursor: pointer;

  img {
    width: 2.2rem;
    height: 2.2rem;
  }

  span {
    font-family: var(--font-3);
    font-weight: 500;
    font-size: 1.5rem;
    width: 100%;
  }

  &:hover {
    background-color: #303030;
  }

  &:active {
    background-color: var(--primary-color);
  }
`;
