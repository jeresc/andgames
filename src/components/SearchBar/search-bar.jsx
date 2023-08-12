import { useSearchBar } from '@/hooks'

export const SearchBar = () => {
  const {
    debouncedSearch,
    setDebouncedSearch,
  } = useSearchBar()

  return (
    <div>
      <input
        type="text"
        value={debouncedSearch}
        onChange={(event) => setDebouncedSearch(event.target.value)}
      />
    </div>
  )
}
