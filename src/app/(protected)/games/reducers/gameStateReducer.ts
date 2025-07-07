import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SingleMovie } from '@/app/core/interfaces/movieInterfaces';
import { Game } from '@/app/core/interfaces/gameInterfaces';

interface gameState {
    favoriteGames: Game[];
}

const initialState: gameState = {
  favoriteGames: [],
};

const gameStateSlice = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    setFavoriteGames(
      state,
      action: PayloadAction<Game>) {
      state.favoriteGames.push(action.payload);
    },
    setFavoriteGamesArray(
      state,
      action: PayloadAction<Game[]>) {
      state.favoriteGames = action.payload;
    },
    clearFavoriteGames(state) {
      state.favoriteGames = [];
    },
  },
});

export const {
  setFavoriteGames,
  setFavoriteGamesArray,
  clearFavoriteGames
} = gameStateSlice.actions;
export default gameStateSlice.reducer;
