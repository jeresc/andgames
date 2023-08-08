import { useDispatch, useSelector } from 'react-redux'
import { orderVideogames } from '@/redux'
import { useState } from 'react'
import {
  FilterContainer,
  OrderContainer,
  StyledOrderAndFilter,
  OrderDropdown,
  OrderButton,
  FilterButton,
  DropdownButton,
} from './order-and-filter.styles'

export const OrderAndFilter = () => {
  const { order, filter } = useSelector((store) => store.videogames)
  const dispatch = useDispatch()

  const [filterIsOpen, setFilterIsOpen] = useState(false)
  const [orderIsOpen, setOrderIsOpen] = useState(false)

  const handleOrder = (order) => {
    dispatch(orderVideogames(order))
    toggleOrder()
  }

  const toggleFilter = () => {
    setFilterIsOpen(!filterIsOpen)
    setOrderIsOpen(false)
  }

  const toggleOrder = () => {
    setOrderIsOpen(!orderIsOpen)
    setFilterIsOpen(false)
  }

  return (
    <StyledOrderAndFilter>
      <OrderContainer>
        <DropdownButton onClick={toggleOrder}>Order By</DropdownButton>
        {orderIsOpen && (
          <OrderDropdown>
            <OrderButton onClick={() => handleOrder('name_asc')}>
              Name (A - Z)
            </OrderButton>
            <OrderButton onClick={() => handleOrder('name_desc')}>
              Name (Z - A)
            </OrderButton>
            <OrderButton onClick={() => handleOrder('rating_asc')}>
              Rating (Low to High)
            </OrderButton>
            <OrderButton onClick={() => handleOrder('rating_desc')}>
              Rating (High to Low)
            </OrderButton>
          </OrderDropdown>
        )}
      </OrderContainer>
      <FilterContainer>
        <DropdownButton onClick={toggleFilter}>
          Filter By
        </DropdownButton>
        {filterIsOpen && (
          <div>
            <div>
            </div>
            <div>
              Origin <div></div>
            </div>
          </div>
        )}
      </FilterContainer>
    </StyledOrderAndFilter>
  )
}
