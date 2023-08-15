import { useState, useEffect } from 'react';
import {
  NotificationContainer,
  NotificationIcon,
  NotificationMessage,
} from './floating-notification.styles';
import { Checkmark, Error, Warning } from '@/components';
import { useDispatch } from 'react-redux';
import { removeNotification } from '@/redux';

export const FloatingNotification = ({ id, message, type }) => {
  const dispatch = useDispatch();

  const renderIcon = type => {
    switch (type) {
      case 'success':
        return <Checkmark />;
      case 'error':
        return <Error />;
      case 'warning':
        return <Warning />;
      default:
        return null;
    }
  };

  const [showNotification, setShowNotification] = useState(true);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  }, [showNotification, id]);

  useEffect(() => {
    if (!hover && !showNotification) {
      dispatch(removeNotification(id));
    }
  }, [hover, showNotification, dispatch]);

  return (
    <NotificationContainer
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      role="alert"
      $visible={showNotification || hover}
    >
      <NotificationIcon>{renderIcon(type)}</NotificationIcon>
      <NotificationMessage>{message}</NotificationMessage>
    </NotificationContainer>
  );
};
