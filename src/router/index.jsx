import { createHashRouter } from 'react-router-dom';
import { Main } from '@/layouts';

import {
  NotFound,
  Landing,
  Home,
  VideogameDetailCard,
  VideogameForm,
  AboutMe,
  Admin,
  AdminDashboard,
  AdminHome,
  AdminModeration,
  AdminModerationVideogames,
  AdminModerationGenres,
  LogIn,
} from '@/pages';

export const router = createHashRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'login',
        element: <LogIn />,
        loader: async () => {
          fetch(`${import.meta.env.VITE_API_URL}/auth/check-session`, {
            method: 'POST',
            credentials: 'include',
          });
          return null;
        },
      },
      {
        path: 'home',
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'new',
            element: <VideogameForm />,
          },
          {
            path: ':videogameId',
            element: <VideogameDetailCard />,
          },
        ],
      },
      {
        path: 'about',
        element: <AboutMe />,
      },
      {
        path: '/admin',
        element: <Admin />,
        children: [
          {
            path: 'home',
            element: <AdminHome />,
          },
          {
            path: 'dashboard',
            element: <AdminDashboard />,
          },
          {
            path: 'moderation',
            children: [
              {
                index: true,
                element: <AdminModeration />,
              },
              {
                path: 'videogames',
                element: <AdminModerationVideogames />,
              },
              {
                path: 'genres',
                element: <AdminModerationGenres />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
