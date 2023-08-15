import { useSearchBar } from '@/hooks'
import { SearchBarInput, SearchBarContainer, SearchBarIcon } from './search-bar.styles'
import { magnifyingGlass } from '@/assets'

export const SearchBar = () => {
  const {
    debouncedSearch,
    setDebouncedSearch,
    videogamesCount,
    loading
  } = useSearchBar()

  return (
    <SearchBarContainer>
      <SearchBarIcon src={magnifyingGlass} alt="Search icon" />
      <SearchBarInput
        type="text"
        name="search-bar"
        value={debouncedSearch}
        onChange={(event) => setDebouncedSearch(event.target.value)}
        disabled={loading}
        placeholder={loading ? 'Search games' : `Search ${videogamesCount} games`}
      />
    </SearchBarContainer>
  )
}
