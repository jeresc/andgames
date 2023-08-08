import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchVideogames = createAsyncThunk(
  'videogames/fetch',
  async ({ page, name, page_size }) => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/videogames?page=${page}${
          page_size ? `&page_size=${page_size}` : ''
        }${name ? `&name=${name}` : ''}`
      )
      const videogames = await res.json()
      return videogames
    } catch (error) {
      return []
    }
  }
)

export const fetchGenres = createAsyncThunk('genres/fetch', async () => {
  try {
    const res = await fetch('http://localhost:3001/api/genres')
    const genres = await res.json()
    return genres
  } catch (error) {
    return []
  }
})
