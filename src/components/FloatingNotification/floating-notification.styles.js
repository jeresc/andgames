import { styled } from 'styled-components';

export const NotificationContainer = styled.div`
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  right: 50%;
  bottom: 20px;
  z-index: 120;
  max-width: 280px;
  min-width: fit-content;
  min-height: 50px;
  border-radius: 12px;
  background-color: #181818;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  padding: 12px;
  ${({ $visible }) =>
    !$visible
      ? `
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
  `
      : `
    -webkit-transform: translateY(10px);
  transform: translateY(10px);

  `}
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
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
`;
export const NotificationIcon = styled.div``;
export const NotificationMessage = styled.div`
  color: #fff;
  font-size: 1.7rem;
  font-weight: 700;
`;
