import { createSlice } from '@reduxjs/toolkit'
import { fetchGenres } from './actions'

const initialState = {
  genres: [],
  platforms: []
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addGenre: (state, action) => {
      state.genres = [...state.genres, action.payload]
    },
    addPlatform: (state, action) => {
      state.platforms = [...state.platforms, action.payload]
    },
    removeGenre: (state, action) => {
      state.genres = state.genres.filter((genre) => genre.id !== action.payload)
    },
    removePlatform: (state, action) => {
      state.platforms = state.platforms.filter((platform) => platform.id !== action.payload)
    },
    resetGenres: (state) => {
      state.genres = []
    },
    resetPlatforms: (state) => {
      state.platforms = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.loading = false
      state.genres = action.payload
    })
  }
})

export const { setGenres, setPlatforms, resetGenres, resetPlatforms } = formSlice.actions
export default formSlice.reducer
