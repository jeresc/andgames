import { styled } from 'styled-components';

export const NavContainer = styled.nav`
  width: 100%;
  height: 8.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #171717;
  border-bottom: 1px solid #282828;
`;

export const NavLogo = styled.img`
  height: 6.8rem;
  object-fit: cover;
  width: auto;
  cursor: pointer;
`;

export const NavButton = styled.button`
  width: 6rem;
  font-size: 1.7rem;
  font-weight: 700;
  height: 44px;
  padding: 0.5rem;
  border: none;
  border-radius: 16px;
  background-color: #282828;
  color: #fff;
`;
