import { styled } from 'styled-components';

export const TabBarContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 5px;
  left: 0;
  right: 0;
  justify-content: center;
`;

export const TabBarButton = styled.button`
  font-size: 2.4rem;
  padding: 1.3rem 2.1rem;
  visibility: 'visible';
  border-radius: 50%;
  font-family: var(--font-3);
  border: none;
  color: ${props => (props.$currentPage ? '#242424' : '#fff')};
  background: ${props =>
    props.$currentPage
      ? 'linear-gradient(120deg, #fed43a 20%, #f5ac2d 84%)'
      : '#121212'};
  font-weight: 600;

  /* &:first-child { */
  /*   border-radius: 1.6rem 0 0 1.6rem; */
  /* } */
  /**/
  /* &:last-child { */
  /*   border-radius: 0 1.6rem 1.6rem 0; */
  /* } */
`;
export const TabBarNumbers = styled(TabBarButton)`
  display: ${props => (props.$active ? 'inline-block' : `none`)};
`;

export const InvisibleTabBarButton = styled(TabBarButton)`
  opacity: 0;
`;

export const ButtonContainer = styled.div`
  border-radius: 3rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  background-color: #121212;
`;
