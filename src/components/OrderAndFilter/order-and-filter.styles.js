import { styled } from 'styled-components'

export const StyledOrderAndFilter = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  place-items: center;
  place-content: center;
`

export const DropdownButton = styled.button`
  font-size: 1.6rem;
  padding: 6px;
  width: 140px;
  color: #fff;
  background-color: transparent;
  border: none;
  font-family: var(--font);
`

export const OrderContainer = styled.div`
  display: flex;
  gap: 1rem;
  place-items: center;
  place-content: center;
  position: relative;
`

export const OrderDropdown = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
  background-color: #202020;
  border-radius: 1.2rem;
`

export const OrderButton = styled.button`
  padding: 1rem;
  width: fit-content;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.6rem;
`

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  place-items: center;
  place-content: center;
  position: relative;
`

export const FilterDropdown = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
`

export const FilterButton = styled.button`
  padding: 1rem;
  width: 100%;
`
