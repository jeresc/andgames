import { styled } from 'styled-components';

export const MainContainer = styled.main`
  min-width: 100%;
  min-height: 100vh;
  background-color: #151515;
  color: #fff;
`;

export const NotificationsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 120;
  gap: 12px;
  bottom: 20px;
  justify-content: center;
  align-items: center;
  left: 0;
  left: 50%;
  transform: translateX(-50%);
`;
