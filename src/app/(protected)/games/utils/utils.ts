import { Game } from '@/app/core/interfaces/gameInterfaces';
import { Dispatch } from 'react';
import {
  setFavoriteGames, setFavoriteGamesArray
} from '@/app/(protected)/games/reducers/gameStateReducer';
import { updateFavoriteGames } from '@/app/api/favorites/games/helpers';

/**
 * Handles the heart click event to add or remove a game from favorites.
 * @param game
 * @param favoriteGames
 * @param dispatch
 */
export const handleGameHeartClickFn = async (
  game: Game,
  favoriteGames: Game[],
  dispatch: Dispatch<{ type: string;
        payload: Game | Game[] }>) => {

  let newFavorites : Game[] = [];
  if( game !== null && !favoriteGames.some(favMovie => favMovie.id === game.id)) {
    newFavorites = [...favoriteGames, game as Game];
    dispatch(setFavoriteGames(game as Game));
  }
  if( game !== null && favoriteGames.some(favMovie => favMovie.id === game.id)) {
    newFavorites = favoriteGames.filter(favMovie => favMovie.id !== game.id);
    dispatch(setFavoriteGamesArray(favoriteGames.filter(favMovie => favMovie.id  !== game.id)));
  }
  updateFavoriteGames(newFavorites).catch(error =>
    console.error('api error:',  error));
};

/**
 * function that calculates if a game is a favorite or not.
 */
export const isFavorite = (
  game: Game,
  favoriteGames: Game[]
) => {
  return game?.id ? favoriteGames.some(fav => fav.id === game.id) : false;
};

/**
 * Removes a game from the favorites list.
 */
export const removeFavoriteGame = (
  games: Game[],
  game:Game,
  dispatch: Dispatch<{ type: string; payload: Game[] }>,
) => {
  const moviesToUpdate =  games.filter(favGame => favGame.id !== game.id);
  updateFavoriteGames(moviesToUpdate).catch(error =>
    console.error('api error:',  error));
  dispatch(setFavoriteGamesArray(moviesToUpdate));
};
