import { createSlice } from '@reduxjs/toolkit';
import { authLogIn, authToken } from './actions';

const initialState = {
  isLoggedIn: false,
  userInfo: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(authLogIn.pending, state => {
      state.isLoggedIn = false;
    });
    builder.addCase(authLogIn.fulfilled, state => {
      state.isLoggedIn = true;
    });
    builder.addCase(authLogIn.rejected, state => {
      state.isLoggedIn = false;
    });
    builder.addCase(authToken.pending, state => {
      state.isLoggedIn = false;
    });
    builder.addCase(authToken.fulfilled, state => {
      state.isLoggedIn = true;
    });
    builder.addCase(authToken.rejected, state => {
      state.isLoggedIn = false;
    });
  },
});

export const { setUserInfo } = authSlice.actions;
export default authSlice.reducer;
