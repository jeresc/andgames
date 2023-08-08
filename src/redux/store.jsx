import { configureStore } from '@reduxjs/toolkit'
import videogamesReducer from './videogamesSlice'
import formReducer from './formSlice'

export const store = configureStore({
  reducer: {
    videogames: videogamesReducer,
    form: formReducer,
  },
})
