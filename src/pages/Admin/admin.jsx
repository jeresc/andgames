import { useState } from 'react';
import {
  PanelContainer,
  Aside,
  MainContainer,
  MenuOption,
  MenuHeading,
} from './admin.styles';
import { chess, home, closeAsideArrow } from '@/assets';
import { Outlet } from 'react-router-dom';
import { AdminNav } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Admin = () => {
  const [showAside, setShowAside] = useState(true);
  const navigate = useNavigate();

  const toggleAside = () => {
    setShowAside(!showAside);
  };

  useEffect(() => {
navigate("home")
  },[navigate]);

  return (
    <PanelContainer>
      <AdminNav toggleAside={toggleAside} />
      <MainContainer>
        {showAside && (
          <Aside>
            <MenuHeading>
              ADMIN DASHBOARD
              <img src={closeAsideArrow} alt="" onClick={toggleAside} />
            </MenuHeading>
            <MenuOption onClick={() => navigate('home')}>
              <img src={home} alt="" />
              <span>Home</span>
            </MenuOption>
            <MenuOption onClick={() => navigate('dashboard')}>
              <img src={chess} alt="" />
              <span>Dashboard</span>
            </MenuOption>
            <MenuOption onClick={() => navigate('dashboard')}>
              <img src={chess} alt="" />
              <span>Moderation</span>
            </MenuOption>
          </Aside>
        )}
        <Outlet />
      </MainContainer>
    </PanelContainer>
  );
};
