import { createSlice } from '@reduxjs/toolkit'
import { fetchVideogames, fetchGenres, fetchVideogameById } from './actions'

const initialState = {
  videogames: [],
  videogamesCount: 0,
  genres: [],
  platforms: [],
  videogame: {},
  order: 'name_asc',
  filter: 'none',
  genres_filter: [],
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
    resetVideogame: (state) => {
      state.videogame = null
    },
    orderVideogames: (state, action) => {
      state.order = action.payload
    },
    filterVideogames: (state, action) => {
      state.filter = action.payload
    },
    addGenreFilter: (state, action) => {
      state.genres_filter = [...state.genres_filter, action.payload]
    },
    removeGenreFilter: (state, action) => {
      state.genres_filter = state.genres_filter.filter(
        (genre) => genre !== action.payload
      )
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideogames.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchVideogames.fulfilled, (state, action) => {
      state.loading = false
      state.videogames = action.payload.results
      state.videogamesCount = action.payload.count
    })
    builder.addCase(fetchGenres.pending, (state) => {
    })
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.genres = action.payload
    })
    builder.addCase(fetchVideogameById.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchVideogameById.fulfilled, (state, action) => {
      state.loading = false
      state.videogame = action.payload
    })
  },
})

export const {
  setVideogames,
  setVideogame,
  orderVideogames,
  filterVideogames,
  addGenreFilter,
  removeGenreFilter,
  resetVideogame
} = videogamesSlice.actions
export default videogamesSlice.reducer
