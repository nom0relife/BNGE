import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SingleMovie } from '@/app/core/interfaces/interfaces';

interface movieState {
    favoriteMovies: SingleMovie[];
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
      action: PayloadAction<SingleMovie>) {
      state.favoriteMovies.push(action.payload);
    },
    setFavoriteMoviesArray(
      state,
      action: PayloadAction<SingleMovie[]>) {
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
