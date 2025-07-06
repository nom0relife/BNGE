'use client';
import React, { useEffect } from 'react';
import FavoritesPage from './components/favoritesPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { getFavorites } from '@/app/api/favorites/helpers';
import { setFavoriteMoviesArray } from '@/app/(protected)/movies/reducers/movieStateReducer';
import Loading from '@/app/core/components/loading';

const Favorites = () => {
  const favoriteMovies = useSelector((state: RootState) => state.movies.favoriteMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    // on Enter function to load favorite movies
    async function loadFavorites() {
      const favorites = await getFavorites();
      dispatch(setFavoriteMoviesArray(favorites));
    }
    loadFavorites().catch((err) =>
      console.error('failed to load favorites', err));
  }, []);

  if (!favoriteMovies) {return <Loading />;}
  return (
    <FavoritesPage movies={favoriteMovies} />
  );
};

export default Favorites;
