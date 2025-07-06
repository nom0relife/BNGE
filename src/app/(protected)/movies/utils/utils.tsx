import { useEffect, RefObject, Dispatch } from 'react';
import { SingleMovie } from '@/app/core/interfaces/interfaces';
import { Movie } from '@/app/(protected)/movies/lib/fetchMovies';
import {
  setFavoriteMovies,
  setFavoriteMoviesArray
} from '@/app/(protected)/movies/reducers/movieStateReducer';
import { updateFavorites } from '@/app/api/favorites/helpers';

/**
 * Utility function to round a number to two decimal places.
 * @param num
 */
export const roundToTwoDecimalPlaces = (num: number): number => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

/**
 * Custom hook for detecting clicks outside a given ref.
 *
 * @param ref - React ref to an element (e.g. useRef)
 * @param callback - Function to call when click is outside the ref
 */
export function useClickOutside(ref: RefObject<HTMLElement | null>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

/**
 * function that calculates if a movie is a favorite or not.
 */
export const isFavorite = (
  movie: Movie,
  favoriteMovies: SingleMovie[]
) => {
  return movie?.id ? favoriteMovies.some(fav => fav.id === movie.id) : false;
};

/**
 * Handles the heart click event to add or remove a movie from favorites.
 * @param movie
 * @param favoriteMovies
 * @param dispatch
 */
export const handleHeartClickFn = async (
  movie: Movie,
  favoriteMovies: SingleMovie[],
  dispatch: Dispatch<{ type: string;
    payload: SingleMovie | SingleMovie[] }>) => {

  let newFavoriteMovies : SingleMovie[] = [];
  if( movie !== null && !favoriteMovies.some(favMovie => favMovie.id === movie.id)) {
    newFavoriteMovies = [...favoriteMovies, movie as SingleMovie];
    dispatch(setFavoriteMovies(movie as SingleMovie));
  }
  if( movie !== null && favoriteMovies.some(favMovie => favMovie.id === movie.id)) {
    newFavoriteMovies = favoriteMovies.filter(favMovie => favMovie.id !== movie.id);
    dispatch(setFavoriteMoviesArray(favoriteMovies.filter(favMovie => favMovie.id  !== movie.id)));
  }
  updateFavorites(newFavoriteMovies).catch(error =>
    console.error('api error:',  error));
};

