import { Outlet, useLocation } from 'react-router-dom';
import { Nav, FloatingNotification } from '@/components';
import { MainContainer, NotificationsContainer } from './main.styles';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Main = () => {
  const { notifications } = useSelector(state => state.notifications);
  const { pathname } = useLocation();

  const blacklistedPaths = ['/'];
  const shouldShowNav =
    !blacklistedPaths.includes(pathname) && !/admin/.test(pathname);

  useEffect(() => {
    console.log(notifications);
  }, [notifications]);

  return (
    <MainContainer>
      {shouldShowNav && <Nav />}
      {notifications.length ? (
        <NotificationsContainer>
          {notifications.map(notification => (
            <FloatingNotification
              key={notification.id}
              id={notification.id}
              message={notification.message}
              type={notification.type}
            />
          ))}
        </NotificationsContainer>
      ) : (
        <></>
      )}
      <Outlet />
    </MainContainer>
  );
};
