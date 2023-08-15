import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
  upToDate: true 
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications = [ ...state.notifications, action.payload] 
    },
    shiftNotification: (state) => {
      state.notifications.shift()
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(notification => notification.id !== action.payload)
    }
  }
})

export const { addNotification, shiftNotification, removeNotification } = notificationsSlice.actions
export default notificationsSlice.reducer
