import { useSearchBar } from '@/hooks'
import { SearchBarInput, SearchBarContainer, SearchBarIcon, SearchBarIconX } from './search-bar.styles'
import { magnifyingGlass, xmark } from '@/assets'

export const SearchBar = () => {
  const {
    debouncedSearch,
    setDebouncedSearch,
    videogamesCount,
    loading,
    fetchedRequests,
  } = useSearchBar()

  return (
    <SearchBarContainer>
      <SearchBarIcon src={magnifyingGlass} alt="Search icon" />
      <SearchBarInput
        type="text"
        name="search-bar"
        value={debouncedSearch}
        onChange={(event) => setDebouncedSearch(event.target.value)}
        disabled={fetchedRequests < 1}
        placeholder={loading ? 'Search games' : `Search ${videogamesCount ? videogamesCount : ""} games`}
      />
      <SearchBarIconX src={xmark} onClick={() => setDebouncedSearch('')} alt="Clear Input icon"/>
    </SearchBarContainer>
  )
}
