import { createSlice } from '@reduxjs/toolkit'
import { fetchGenres } from './actions'

const initialState = {
  inputFields: {
    genres: [],
    platforms: [
      { id: 1, name: 'PC', selected: false },
      { id: 2, name: 'PlayStation 4', selected: false },
      { id: 3, name: 'Xbox One', selected: false },
      { id: 4, name: 'Nintendo Switch', selected: false },
      { id: 5, name: 'macOS', selected: false },
      { id: 5, name: 'iOS', selected: false },
      { id: 5, name: 'iOS', selected: false },
      { id: 5, name: 'Android', selected: false },
      { id: 5, name: 'Linux', selected: false },
    ],
  },
  initialFields: {
    genres: [],
    platforms: [
      { id: 1, name: 'PC', selected: false },
      { id: 2, name: 'PlayStation 4', selected: false },
      { id: 3, name: 'Xbox One', selected: false },
      { id: 4, name: 'Nintendo Switch', selected: false },
      { id: 5, name: 'macOS', selected: false },
      { id: 5, name: 'iOS', selected: false },
      { id: 5, name: 'iOS', selected: false },
      { id: 5, name: 'Android', selected: false },
      { id: 5, name: 'Linux', selected: false },
    ],
  },
  image: null,
  rating: 0,
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
    setForm: (state, action) => {
      state[action.payload.field] = action.payload.value
    }
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
  setForm,
} = formSlice.actions
export default formSlice.reducer
