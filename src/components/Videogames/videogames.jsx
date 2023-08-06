import { fetchVideogames } from '@/redux'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Videogame } from '@/components'
import { CardContainer } from './videogames.styles'

export const Videogames = () => {
  const { videogames } = useSelector((store) => store.videogames)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVideogames({page: 1}))
  }, [dispatch])

  return (
    <div>
      <h1>Videogames</h1>
      <CardContainer>
        {videogames.map((videogame) => {
          return (
            <Videogame
              key={videogame.id}
              id={videogame.id}
              name={videogame.name}
              image={videogame.image}
              platforms={videogame.platforms}
              rating={videogame.rating}
              release_date={videogame.released}
              genres={videogame.genres}
            />
          )
        })}
      </CardContainer>
    </div>
  )
}
