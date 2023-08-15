import { useDispatch, useSelector } from 'react-redux';
import { Videogame, LoadingCard } from '@/components';
import { CardContainer, NoResultsFound, VideogamesContainer } from './videogames-cards.styles';
import { useEffect } from 'react';
import { fetchGenres, addNotification, setForm } from '@/redux';
import { brokenHeart } from '@/assets';

export const Videogames = () => {
  const { videogames, loading } = useSelector(store => store.videogames);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <VideogamesContainer>
      <h2 style={{ fontWeight: "800", fontSize: "6rem"}}>New and exciting</h2>
      <p>Based on players rating</p>
      <button
        onClick={() => {
          dispatch(
            addNotification({
              message: 'Your game has been successfully added',
              type: 'success',
              id: Math.random(),
            }),
          );
        }}
      >
        Add notification
      </button>
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
          <NoResultsFound>
            <img src={brokenHeart} alt="" />
            <h3>No results found</h3>
            <p>Please try with another keywords or filters</p>
          </NoResultsFound>
        )}
      </CardContainer>
    </VideogamesContainer>
  );
};
