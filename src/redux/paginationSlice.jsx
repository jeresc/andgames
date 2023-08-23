import { createSlice } from '@reduxjs/toolkit';
import { fetchVideogames } from './actions';

const initialState = {
  initialPage: 1,
  page: 1,
  pageSize: 15,
  pageCounter: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    nextPage: state => {
      if (state.page < state.pageCounter) state.page = state.page + 1;
    },
    prevPage: state => {
      if (state.page > 1) state.page = state.page - 1;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchVideogames.fulfilled, (state, action) => {
      state.pageCounter = Math.ceil(action.payload.count / state.pageSize);
    });
  },
});

export const { setPage, nextPage, prevPage } = paginationSlice.actions;
export default paginationSlice.reducer;
