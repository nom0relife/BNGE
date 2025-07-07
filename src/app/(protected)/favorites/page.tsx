'use client';
import React, { useEffect } from 'react';
import FavoritesPage from './components/favoritesPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { getFavorites } from '@/app/api/favorites/movies/helpers';
import { getFavoriteGames } from '@/app/api/favorites/games/helpers';
import { setFavoriteMoviesArray } from '@/app/(protected)/movies/reducers/movieStateReducer';
import Loading from '@/app/core/components/loading';
import {
  setFavoriteGamesArray
} from '@/app/(protected)/games/reducers/gameStateReducer';

const Favorites = () => {
  const favoriteMovies = useSelector((state: RootState) => state.movies.favoriteMovies);
  const favoriteGames = useSelector((state: RootState) => state.games.favoriteGames);
  const dispatch = useDispatch();
  useEffect(() => {
    // on Enter function to load favorites
    async function loadFavorites() {
      const favoritesMovies = await getFavorites();
      const favoriteGames = await getFavoriteGames();
      dispatch(setFavoriteMoviesArray(favoritesMovies));
      dispatch(setFavoriteGamesArray(favoriteGames));
    }
    loadFavorites().catch((err) =>
      console.error('failed to load favorites', err));
  }, []);

  if (!favoriteMovies) {return <Loading />;}
  if (!favoriteGames) {return <Loading />;}
  return (
    <FavoritesPage movies={favoriteMovies} games={favoriteGames} />
  );
};

export default Favorites;
