import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '@/app/movies/lib/fetchMovies';

interface movieState {
    favoriteMovies: Movie[];
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
      action: PayloadAction<Movie>) {
      state.favoriteMovies.push(action.payload);
    },
    setFavoriteMoviesArray(
      state,
      action: PayloadAction<Movie[]>) {
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
