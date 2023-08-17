import { bars } from '@/assets';
import {
  AdminNavContainer,
  LeftNavContainer,
  RightNavContainer,
  ToggleAside,
} from './admin-nav.styles';
import { useLocation } from 'react-router-dom';

export const AdminNav = ({toggleAside, active}) => {
  const location = useLocation();
  const adminPath = location.pathname.match(/\/(\w+)\/?$/)[1]

  return (
    <AdminNavContainer>
      <LeftNavContainer>
        <ToggleAside onClick={toggleAside} $active={active}>
          <img src={bars} alt="Toggle Navigation Menu" />
        </ToggleAside>
        <span>{adminPath.replace(/^./, adminPath[0].toUpperCase())}</span>
      </LeftNavContainer>
      <RightNavContainer></RightNavContainer>
    </AdminNavContainer>
  );
};
