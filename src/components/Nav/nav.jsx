import { logo } from '@/assets';
import { NavContainer, NavLogo, NavButton } from './nav.styles';
import { SearchBar } from '@/components';
import { useNavigate } from 'react-router-dom';

export const Nav = () => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <div>
        <NavLogo
          src={logo}
          alt="logo"
          onClick={() => {
            navigate('/videogames');
          }}
        />
        <h1>&games</h1>
      </div>
      <SearchBar />
      <NavButton
        onClick={() => {
          navigate('videogames/new');
        }}
      >
        New
      </NavButton>
    </NavContainer>
  );
};
