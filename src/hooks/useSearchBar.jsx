import { useEffect } from 'react';
import { useState } from 'react';
import { fetchVideogames } from '@/redux';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/paginationSlice';

export const useSearchBar = () => {
  const { page, initialPage } = useSelector(store => store.pagination);

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [genresFilterWatcher, setGenresFilterWatcher] = useState();

  const dispatch = useDispatch();
  const {
    videogames,
    videogamesCount,
    order,
    filter,
    genres_filter,
    loading,
    fetchedRequests,
  } = useSelector(store => store.videogames);

  const onSearchSubmit = search => {
    dispatch(
      fetchVideogames({
        page: initialPage,
        name: search,
        filter,
        order,
        genres: [],
      }),
    );
    console.log(videogames);
  };

  const clearResults = () => {
    dispatch(fetchVideogames({ page, filter, order, genres: genres_filter }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(debouncedSearch);
    }, 400);
    return () => clearTimeout(timer);
  }, [debouncedSearch]);

  useEffect(() => {
    if (search !== '') {
      onSearchSubmit(search);
    } else {
      clearResults();
    }
  }, [search, filter, order, page, genres_filter]);

  useEffect(() => {
    if (!loading) {
      if (genres_filter.length !== genresFilterWatcher) {
        dispatch(setPage(initialPage));
        setGenresFilterWatcher(genres_filter.length);
      }
    }
  }, [loading]);

  return {
    debouncedSearch,
    setDebouncedSearch,
    videogamesCount,
    loading,
    fetchedRequests,
  };
};
