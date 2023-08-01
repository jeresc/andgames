import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  videogames: [],
  videogame: null,
}

export const fetchVideogames = createAsyncThunk(
  'videogames/fetch', async () => {
    try {
      const res = await fetch('http://localhost:3001/videogames')
      const videogames = await res.json()
      return videogames
    } catch (error) {
      return []
    }
  }
)

const videogamesSlice = createSlice({
  name: 'videogames',
  initialState,
  reducers: {
    setVideogames: (state, action) => {
      state.videogames = action.payload
    },
    setVideogame: (state, action) => {
      state.videogame = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideogames.fulfilled, (state, action) => {
      state.videogames = action.payload
    })
  }
})

export const { setVideogames, setVideogame } = videogamesSlice.actions
export default videogamesSlice.reducer
