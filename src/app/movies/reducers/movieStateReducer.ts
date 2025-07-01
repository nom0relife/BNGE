import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface movieState {
    favoriteMovies: number[];
}

const initialState: movieState = {
  favoriteMovies: [],
};

const movieStateSlice = createSlice({
  name: 'movieState',
  initialState,
  reducers: {
    setFavoriteMovies(
      state,
      action: PayloadAction<number>) {
      state.favoriteMovies.push(action.payload);
    },
    setFavoriteMoviesArray(
      state,
      action: PayloadAction<number[]>) {
      state.favoriteMovies = action.payload;
    },
    clearFavoriteMovies(state) {
      state.favoriteMovies = [];
    },
  },
});

export const {
  setFavoriteMovies,
  setFavoriteMoviesArray,
  clearFavoriteMovies
} = movieStateSlice.actions;
export default movieStateSlice.reducer;
