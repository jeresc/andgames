import { Videogames, OrderAndFilter, TabBar } from '@/components'
import { HomeContainer, MainContentContainer } from './home.styles'

export const Home = () => {
  return (
    <HomeContainer>
      <MainContentContainer>
      <OrderAndFilter />
      <Videogames />
      </MainContentContainer>
      <TabBar />
    </HomeContainer>
  )
}
