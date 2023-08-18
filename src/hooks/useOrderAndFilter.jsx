import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterVideogames, orderVideogames, setGenresFilter } from '@/redux';
import {
  arrowDownLetters,
  arrowDownNumbers,
  arrowUpLetters,
  arrowUpNumbers,
} from '@/assets';

export const useOrderAndFilter = () => {
  const { genres, order, filter } = useSelector(store => store.videogames);

  const dispatch = useDispatch();

  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [orderIsOpen, setOrderIsOpen] = useState(false);
  const [debouncedGenresFilter, setDeboundedGenresFilter] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setGenresFilter(debouncedGenresFilter));
    }, 500);
    return () => clearTimeout(timer);
  }, [debouncedGenresFilter, dispatch]);

  const handleOrder = order => {
    dispatch(orderVideogames(order));
    toggleOrder();
  };

  const handleFilter = filter => {
    dispatch(filterVideogames(filter));
    toggleFilter();
  };

  const toggleFilter = () => {
    setFilterIsOpen(!filterIsOpen);
    setOrderIsOpen(false);
  };

  const toggleOrder = () => {
    setOrderIsOpen(!orderIsOpen);
    setFilterIsOpen(false);
  };

  const toggleDebouncedGenresFilter = genre => {
    debouncedGenresFilter.includes(genre)
      ? setDeboundedGenresFilter(debouncedGenresFilter.filter(g => g !== genre))
      : setDeboundedGenresFilter([...debouncedGenresFilter, genre]);
  };
  const setOrderIcon = order => {
    switch (order) {
      case 'name_asc':
        return arrowDownLetters;
      case 'name_desc':
        return arrowUpLetters;
      case 'rating_asc':
        return arrowDownNumbers;
      case 'rating_desc':
        return arrowUpNumbers;
      default:
        return null;
    }
  };

  return {
    handleOrder,
    handleFilter,
    orderIsOpen,
    filterIsOpen,
    toggleFilter,
    toggleOrder,
    genres,
    toggleDebouncedGenresFilter,
    order,
    filter,
    setOrderIcon,
  };
};
