import {
  FilterContainer,
  OrderContainer,
  StyledOrderAndFilter,
  OrderDropdown,
  OrderButton,
  FilterButton,
  DropdownButton,
  FilterDropdown,
  FilterHeading,
  HeadingTitle,
  GenresContainer,
  ToggleIcon,
  OptionIcon,
  OrderOption,
  OriginOptions,
} from './order-and-filter.styles';
import { chevronDown } from '@/assets';
import { useOrderAndFilter } from '@/hooks';
import { Checkbox } from '@/components';
import {
  arrowDownLetters,
  arrowDownNumbers,
  arrowUpLetters,
  arrowUpNumbers,
  checkedCircle,
  circle,
  filterIcon
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
    filter,
    setOrderIcon,
  } = useOrderAndFilter();

  return (
    <StyledOrderAndFilter>
      <OrderContainer>
        <DropdownButton onClick={toggleOrder}>
          <OrderOption src={setOrderIcon(order)} />
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
          <OrderOption src={filterIcon} />
          Filter By
          <ToggleIcon src={chevronDown} alt="" $active={filterIsOpen} />
        </DropdownButton>
        {
          <FilterDropdown $active={filterIsOpen}>
            <FilterHeading>
              <HeadingTitle>Genres</HeadingTitle>
            </FilterHeading>
            <GenresContainer>
              {genres.map(genre => (
                <Checkbox
                  key={genre.id}
                  element={genre}
                  toggleElement={toggleOriginFilter}
                />
              ))}
            </GenresContainer>
            <HeadingTitle>Origin</HeadingTitle>
            <OriginOptions>
              <FilterButton onClick={() => handleFilter('none')}>
                <img src={filter === 'none' ? checkedCircle: circle} alt="" />
                All videogames
              </FilterButton>
              <FilterButton onClick={() => handleFilter('api')}>
                <img src={filter === 'api' ? checkedCircle: circle  } alt="" />
                Created by API
              </FilterButton>
              <FilterButton onClick={() => handleFilter('db')}>
                <img src={filter === 'db' ? checkedCircle: circle} alt="" />
                Created by users
              </FilterButton>
            </OriginOptions>
          </FilterDropdown>
        }
      </FilterContainer>
    </StyledOrderAndFilter>
  );
};
