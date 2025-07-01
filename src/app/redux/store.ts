import { configureStore } from '@reduxjs/toolkit';
import uiStateReducer from './slices/uiState';
import movieStateReducer from '@/app/movies/reducers/movieStateReducer';

export const store = configureStore({
  reducer: {
    uiState: uiStateReducer,
    movies: movieStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
