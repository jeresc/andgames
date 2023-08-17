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
            navigate('home');
          }}
        />
      </div>
      <SearchBar />
      <NavButton
        onClick={() => {
          navigate('home/new');
        }}
      >
        New
      </NavButton>
    </NavContainer>
  );
};
