import {
  FilterContainer,
  OrderContainer,
  StyledOrderAndFilter,
  OrderDropdown,
  OrderButton,
  FilterButton,
  DropdownButton,
  FilterDropdown,
  GenresContainer,
  ToggleIcon,
  OptionIcon,
  OrderOption
} from './order-and-filter.styles';
import { chevronDown } from '@/assets';
import { useOrderAndFilter } from '@/hooks';
import { Checkbox } from '@/components';
import {
  arrowDownLetters,
  arrowDownNumbers,
  arrowUpLetters,
  arrowUpNumbers,
} from '@/assets';

export const OrderAndFilter = () => {
  const {
    handleOrder,
    handleFilter,
    orderIsOpen,
    filterIsOpen,
    toggleOrder,
    toggleFilter,
    genres,
    toggleOriginFilter,
    order,
    setOrderIcon
  } = useOrderAndFilter();

  return (
    <StyledOrderAndFilter>
      <OrderContainer>
        <DropdownButton onClick={toggleOrder}>
          <OrderOption src={setOrderIcon(order)}/>
          Order By
          <ToggleIcon src={chevronDown} alt="" $active={orderIsOpen} />
        </DropdownButton>
        {
          <OrderDropdown $active={orderIsOpen}>
            <OrderButton onClick={() => handleOrder('name_asc')}>
              <OptionIcon src={arrowDownLetters} />
              Name (A - Z)
            </OrderButton>
            <OrderButton onClick={() => handleOrder('name_desc')}>
              <OptionIcon src={arrowUpLetters} />
              Name (Z - A)
            </OrderButton>
            <OrderButton onClick={() => handleOrder('rating_asc')}>
              <OptionIcon src={arrowDownNumbers} />
              Rating (Low to High)
            </OrderButton>
            <OrderButton onClick={() => handleOrder('rating_desc')}>
              <OptionIcon src={arrowUpNumbers} />
              Rating (High to Low)
            </OrderButton>
          </OrderDropdown>
        }
      </OrderContainer>
      <FilterContainer>
        <DropdownButton onClick={toggleFilter}>
          Filter By
          <ToggleIcon src={chevronDown} alt="" $active={filterIsOpen} />
        </DropdownButton>
        {
          <FilterDropdown $active={filterIsOpen}>
            <div>
              <h5>Genres</h5>
            </div>
            <GenresContainer>
              {genres.map(genre => (
                <Checkbox
                  key={genre.id}
                  element={genre}
                  toggleElement={toggleOriginFilter}
                />
              ))}
            </GenresContainer>
            <div>
              <h5>Origin</h5>
              <FilterButton onClick={() => handleFilter('none')}>
                All
              </FilterButton>
              <FilterButton onClick={() => handleFilter('db')}>DB</FilterButton>
              <FilterButton onClick={() => handleFilter('api')}>
                API
              </FilterButton>
            </div>
          </FilterDropdown>
        }
      </FilterContainer>
    </StyledOrderAndFilter>
  );
};
