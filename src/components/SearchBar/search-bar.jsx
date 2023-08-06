import { useEffect } from "react"
import { useState } from "react"
import { fetchVideogames } from "@/redux"
import { useDispatch,useSelector } from "react-redux"

export const SearchBar = () => {
  const dispatch = useDispatch()
  const { videogames } = useSelector((store) => store.videogames)

  const onSearchSubmit = (search) => {
    console.log(search)
    dispatch(fetchVideogames({page: 1, name: search, page_size: 4}))
    console.log(videogames)
  }

  const clearResults = () => {
    dispatch(fetchVideogames({page: 1}))
  }

  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState(search)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(debouncedSearch)
    }, 300)
    return () => clearTimeout(timer)
  }, [debouncedSearch])

  useEffect(() => {
    if (search !== "") {
      onSearchSubmit(search)
    } else {
      clearResults()
    }
  }, [search])

  return (
    <div>
      <input type="text" value={debouncedSearch} onChange={(event) => setDebouncedSearch(event.target.value)}/>
    </div>
  )
}
