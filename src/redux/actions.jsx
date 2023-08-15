import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchVideogames = createAsyncThunk(
  'videogames/fetch',
  async ({ page, name, page_size, filter, order, genres }) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/videogames?page=${page}` +
          `&${page_size ? `page_size=${page_size}` : 'page_size'}` +
          `&${name ? `name=${name}` : 'name'}` +
          `&${filter ? `filter=${filter}` : 'filter'}` +
          `&${order ? `order=${order}` : 'order'}` +
          `&${genres.length ? `genres=${genres.join('&genres=')}` : 'genres'}`
      )
      const videogames = await res.json()
      return videogames
    } catch (error) {
      return []
    }
  }
)

export const fetchVideogameById = createAsyncThunk(
  'videogame/fetch',
  async (id) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/videogames/${id}`)
      const videogame = await res.json()
      return videogame
    } catch (error) {
      return {}
    }
  }
)

export const fetchGenres = createAsyncThunk('genres/fetch', async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/genres`)
    const genres = await res.json()
    return genres
  } catch (error) {
    return []
  }
})

export const postVideogame = createAsyncThunk(
  'videogame/post',
  async (videogame) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/videogames`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videogame),
      })
    } catch (error) {
      return {}
    }
  }
)
