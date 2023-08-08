import { fetchVideogames } from '@/redux'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Videogame, SkeletonVideogame } from '@/components'
import { CardContainer } from './videogames.styles'

export const Videogames = () => {
  const { videogames, order, filter, loading } = useSelector(
    (store) => store.videogames
  )

  const sortOptions = {
    name_asc: (a, b) => a.name.localeCompare(b.name),
    name_desc: (a, b) => b.name.localeCompare(a.name),
    rating_asc: (a, b) => a.rating - b.rating,
    rating_desc: (a, b) => b.rating - a.rating,
  }

  const filterOptions = {
    none: (game) => game,
    action: (game) => game.genres.some((genre) => genre.name === 'Action'),
    adventure: (game) => game.genres.some((genre) => genre.name === 'Adventure'),
    shooter : (game) => game.genres.some((genre) => genre.name === 'Shooter'),
    api: (game) => typeof game.id === "number",
    db: (game) => typeof game.id !== "number",
  }

  return (
    <div>
      <h1>Videogames</h1>
      <CardContainer>
        { loading
        ? Array.apply(null, { length: 15 }).map((_, index) => (
          <SkeletonVideogame key={index} />
        ))
        : videogames
          .slice()
          .sort(sortOptions[order])
          .filter(filterOptions[filter])
          .map((videogame) => {
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
