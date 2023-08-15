import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGenreFilter, filterVideogames, orderVideogames, removeGenreFilter } from '@/redux'
import {
  arrowDownLetters,
  arrowDownNumbers,
  arrowUpLetters,
  arrowUpNumbers,
} from '@/assets';

export const useOrderAndFilter = () => {
  const { genres, genres_filter, order, filter } = useSelector((store) => store.videogames)

  const dispatch = useDispatch()

  const [filterIsOpen, setFilterIsOpen] = useState(false)
  const [orderIsOpen, setOrderIsOpen] = useState(false)

  const handleOrder = (order) => {
    dispatch(orderVideogames(order))
    toggleOrder()
  }

  const handleFilter = (filter) => {
    dispatch(filterVideogames(filter))
    toggleFilter()
  }

  const toggleFilter = () => {
    setFilterIsOpen(!filterIsOpen)
    setOrderIsOpen(false)
  }

  const toggleOrder = () => {
    setOrderIsOpen(!orderIsOpen)
    setFilterIsOpen(false)
  }

  const toggleOriginFilter = (genre) => {
    if (genres_filter.includes(genre)) dispatch(removeGenreFilter(genre))
    else dispatch(addGenreFilter(genre))
  }

  const setOrderIcon = (order) => {
    switch (order) {
      case 'name_asc':
        return arrowDownLetters
      case 'name_desc':
        return arrowUpLetters
      case 'rating_asc':
        return arrowDownNumbers
      case 'rating_desc':
        return arrowUpNumbers
      default:
        return
    }
  }

  return {
    handleOrder,
    handleFilter,
    orderIsOpen,
    filterIsOpen,
    toggleFilter,
    toggleOrder,
    genres,
    toggleOriginFilter,
    order,
    filter,
    setOrderIcon
  }
}
