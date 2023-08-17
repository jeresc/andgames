import { configureStore } from '@reduxjs/toolkit'
import videogamesReducer from './videogamesSlice'
import formReducer from './formSlice'
import paginationReducer from './paginationSlice'
import notificationsReducer from './notificationsSlice'
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    videogames: videogamesReducer,
    form: formReducer,
    pagination: paginationReducer,
    notifications: notificationsReducer,
    auth: authReducer
  },
})
