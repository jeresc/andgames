import { styled } from 'styled-components';

export const PanelContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Aside = styled.aside`
  width: ${props => (props.$isMinimized ? `fit-content` : `240px`)};
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
  font-family: var(--font-3);
  font-weight: 600;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    padding: 1rem;
  }
`;

export const MinimizeArrow = styled.div`
  padding: ${props => props.$isMinimized ? `1rem` : `.5rem`};
 ${props => !props.$isMinimized && `margin: .5rem`};
  border-radius: 0.8rem;
  &:hover {
    cursor: pointer;
    background-color: #303030;
  }

  img {
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
    ${props => props.$isMinimized && `transform: rotate(180deg)`};
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
  ${props =>
    props.$active
      ? `background-color: var(--primary-color)`
      : `&:hover {
          background-color: #303030;
        }
        &:active {
          background-color: #404040;
        }
  `};

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
`;

export const SubOptions = styled.div``;
export const MenuSubOption = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 4.4rem;
  border-radius: 0.8rem;
  gap: 1.2rem;
  align-items: center;
  cursor: pointer;
  ${props =>
    props.$active
      ? `background-color: var(--primary-color)`
      : `&:hover {
          background-color: #303030;
        }
        &:active {
          background-color: #404040;
        }
  `};

  span {
    font-family: var(--font-3);
    font-weight: 500;
    font-size: 1.5rem;
    width: 100%;
  }
`;
export const ModerationSubOption = styled(MenuSubOption)``;
