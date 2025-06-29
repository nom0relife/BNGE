import { configureStore } from '@reduxjs/toolkit';
import uiStateReducer from './slices/uiState';

export const store = configureStore({
  reducer: {
    uiState: uiStateReducer,
    // add more slices here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
