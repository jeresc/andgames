import { Outlet, useLocation } from 'react-router-dom'
import { Nav } from '@/components'
import { MainContainer } from './main.styles'

export const Main = () => {
  const location = useLocation()

  const shouldShowNav = location.pathname !== '/'

  return (
    <MainContainer>
      {shouldShowNav && <Nav />}
      <Outlet />
    </MainContainer>
  )
}
