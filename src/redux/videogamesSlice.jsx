import {  createSlice } from '@reduxjs/toolkit'
import { fetchVideogames, fetchGenres } from './actions'

const initialState = {
  videogames: [],
  genres: [],
  videogame: null,
  sorting: null,
  filtering: null,
  loading: false
}

const videogamesSlice = createSlice({
  name: 'videogames',
  initialState,
  reducers: {
    setVideogames: (state, action) => {
      state.videogames = action.payload
    },
    setVideogame: (state, action) => {
      state.videogame = action.payload
    },
    setSorting: (state, action) => {
      state.sorting = action.payload
    },
    setFiltering: (state, action) => {
      state.filtering = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideogames.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchVideogames.fulfilled, (state, action) => {
      state.loading = false
      state.videogames = action.payload
    }),
    builder.addCase(fetchGenres.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.loading = false
      state.genres = action.payload
    })
  },
})

export const { setVideogames, setVideogame, setSorting, setFiltering } =
  videogamesSlice.actions
export default videogamesSlice.reducer
