import { createSlice } from '@reduxjs/toolkit'
import { fetchVideogames, fetchGenres } from './actions'

const initialState = {
  videogames: [],
  genres: [],
  videogame: null,
  order: 'name_asc',
  filter: 'none',
  loading: false,
}

const videogamesSlice = createSlice({
  name: 'videogames',
  initialState,
  reducers: {
    setVideogames: (state, action) => {
      state.videogames = action.payload
    },
    addVideogame: (state, action) => {
      state.videogames = [...state.videogames, action.payload]
    },
    setVideogame: (state, action) => {
      state.videogame = action.payload
    },
    orderVideogames: (state, action) => {
      state.order = action.payload
    },
    filterVideogames: (state, action) => {
      state.filter = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideogames.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchVideogames.fulfilled, (state, action) => {
      state.loading = false
      state.videogames = action.payload
    })
    builder.addCase(fetchGenres.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.loading = false
      state.genres = action.payload
    })
  },
})

export const {
  setVideogames,
  setVideogame,
  orderVideogames,
  filterVideogames,
} = videogamesSlice.actions
export default videogamesSlice.reducer
