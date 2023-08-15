import { createHashRouter } from 'react-router-dom'
import { Main } from '@/layouts'

import {
  NotFound,
  Landing,
  Home,
  VideogameDetailCard,
  VideogameForm,
  AboutMe
} from '@/pages'

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
            element: <VideogameDetailCard />,
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
