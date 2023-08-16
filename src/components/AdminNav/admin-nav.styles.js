import { styled } from 'styled-components';

export const ToggleAside = styled.button`
  height: 40px;
  width: 40px;
  outline: none;
  border: none;
  background-color: #0000;
  border-radius: 8px;
  dispaly: flex;

  &:hover {
    cursor: pointer;
    background-color: #303030;
  }
  img {
    height: 24px;
    width: 24px;
    object-fit: cover;
  }
`;
export const AdminNavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.4rem;
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
