import { createSlice } from '@reduxjs/toolkit'
import { fetchGenres } from './actions'

const initialState = {
  inputFields: {
    genres: [],
    platforms: [],
  },
  initialFields: {
    genres: [],
    platforms: [],
  },
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addInputField: (state, action) => {
      state.inputFields[action.payload.field] = state.inputFields[
        action.payload.field
      ].map((element) =>
        element.id == action.payload.id
          ? { ...element, selected: true }
          : element
      )
    },
    removeInputField: (state, action) => {
      state.inputFields[action.payload.field] = state.inputFields[
        action.payload.field
      ].map((element) =>
        element.id == action.payload.id
          ? { ...element, selected: false }
          : element
      )
    },
    resetInputField: (state, action) => {
      state.inputFields[action.payload.field] =
        state.initialFields[action.payload.field]
    },
    updateInitialFields: (state, action) => {
      state.initialFields[action.payload.field] =
        state.inputFields[action.payload.field]
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.pending, (state) => {})
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.initialFields.genres = action.payload.map((genre) => {
        return {
          ...genre,
          selected: false,
        }
      })
      state.inputFields.genres = action.payload.map((genre) => {
        return {
          ...genre,
          selected: false,
        }
      })
    })
  },
})

export const {
  addInputField,
  removeInputField,
  resetInputField,
  updateInitialFields,
} = formSlice.actions
export default formSlice.reducer
