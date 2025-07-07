import { configureStore } from '@reduxjs/toolkit';
import uiStateReducer from './slices/uiState';
import movieStateReducer from '@/app/(protected)/movies/reducers/movieStateReducer';
import gameStateReducer
  from '@/app/(protected)/games/reducers/gameStateReducer';

export const store = configureStore({
  reducer: {
    uiState: uiStateReducer,
    movies: movieStateReducer,
    games: gameStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
