import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from '@/components';
import { MainContainer, NotificationsContainer } from './main.styles';
import { FloatingNotification } from '../../components/FloatingNotification/floating-notification';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Main = () => {
  const { notifications } = useSelector(state => state.notifications);
  const location = useLocation();

  const blacklistedPaths = ['/', '/admin/home'];
  const shouldShowNav = !blacklistedPaths.includes(location.pathname);

  useEffect(() => {
    console.log(notifications)
  },[notifications])

  return (
    <MainContainer>
      {shouldShowNav && <Nav />}
      {notifications.length ? (
        <NotificationsContainer>
          {notifications.map((notification) => (
            <FloatingNotification
              key={notification.id}
              id={notification.id}
              message={notification.message}
              type={notification.type}
            />
          ))}
        </NotificationsContainer>
      ) : <></>}
      <Outlet />
    </MainContainer>
  );
};
