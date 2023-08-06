import { createBrowserRouter } from 'react-router-dom'
import { Main } from '@/layouts'

import {
  NotFound,
  Landing,
  Home,
  VideogameDetail,
  VideogameForm,
  AboutMe
} from '@/pages'

export const router = createBrowserRouter([
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
        path: 'videogames',
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
            element: <VideogameDetail />,
          },
        ],
      },
      {
        path: 'about',
        element: <AboutMe/>
      }
    ],
  },
])
