import { createSlice } from '@reduxjs/toolkit';
import { authLogIn, authToken } from './actions';

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(authLogIn.pending, state => {
      state.isLoggedIn = false;
    });
    builder.addCase(authLogIn.fulfilled, state => {
      state.isLoggedIn = true;
    }),
      builder.addCase(authLogIn.rejected, state => {
        state.isLoggedIn = false;
      });
    builder.addCase(authToken.pending, state => {
      state.isLoggedIn = false;
    });
    builder.addCase(authToken.fulfilled, state => {
      state.isLoggedIn = true;
    }),
      builder.addCase(authToken.rejected, state => {
        state.isLoggedIn = false;
      });
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
