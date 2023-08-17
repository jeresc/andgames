import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogIn, authToken } from '../../redux';
import { Navigate } from 'react-router-dom';
import { getCookie } from '@/helpers';

export const LogIn = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.auth);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleChange = event => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    dispatch(authLogIn(user));
    event.preventDefault();
  };

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(authToken());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <form onSubmit={event => event.preventDefault()}>
      {isLoggedIn && <Navigate to="/admin/home" />}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={user.email}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={user.password}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
