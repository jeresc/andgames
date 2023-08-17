import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authToken } from '../redux';

export const useAdmin = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.auth);
  const [showAside, setShowAside] = useState(true);
  const [isAsideMinimized, setIsAsideMinimized] = useState(false);
  const [areOptionsOpen, setAreOptionsOpen] = useState({
    moderation: false,
  });
  const handleOptionClick = option => {
    setAreOptionsOpen({ ...areOptionsOpen, [option]: !areOptionsOpen[option] });
  };
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const toggleAside = () => {
    setShowAside(!showAside);
  };

  const minimizeAside = () => {
    setIsAsideMinimized(!isAsideMinimized);
  };
  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(authToken());
    }
  }, []);

  useEffect(() => {
    if ((pathname === '/admin' || pathname === '/admin/') && isLoggedIn) {
      navigate('home');
    }
  }, [pathname, navigate]);

  return {
    toggleAside,
    showAside,
    isAsideMinimized,
    areOptionsOpen,
    handleOptionClick,
    navigate,
    pathname,
    minimizeAside,
    isLoggedIn,
  };
};
