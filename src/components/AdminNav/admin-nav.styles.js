import { styled } from 'styled-components';

export const ToggleAside = styled.button`
  height: 34px;
  width: 34px;
  outline: none;
  border: none;
  background-color: ${props => (props.$active ? '#303030' : '#0000')};
  border-radius: 8px;
  dispaly: flex;

  &:hover {
    cursor: pointer;
    background-color: #303030;
  }
  img {
    height: 20px;
    width: 20px;
    object-fit: cover;
  }
`;
export const AdminNavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  background-color: #101010;
  height: 60px;
  border-bottom: 1px solid #000;
`;
export const LeftNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-family: var(--font-3);
    font-size: 2rem;
    font-weight: 600;
  }
`;
export const RightNavContainer = styled.div``;
