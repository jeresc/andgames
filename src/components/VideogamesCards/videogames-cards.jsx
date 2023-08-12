import { useDispatch, useSelector } from 'react-redux';
import { Videogame, LoadingCard } from '@/components';
import { CardContainer } from './videogames-cards.styles';
import { useEffect } from 'react';
import { fetchGenres } from '@/redux';

export const Videogames = () => {
  const { videogames, loading } = useSelector(store => store.videogames);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div>
      <h2>New and exciting</h2>
      <p>Based on players rating</p>
      <CardContainer>
        {loading ? (
          Array.apply(null, { length: 15 }).map((_, index) => (
            <LoadingCard key={index} />
          ))
        ) : videogames?.length ? (
          videogames.map(videogame => {
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
            );
          })
        ) : (
          <h1>Sorry, we have no videogames</h1>
        )}
      </CardContainer>
    </div>
  );
};
