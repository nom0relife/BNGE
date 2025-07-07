/**
 * Common constants used throughout the application.
 */
export const SITE_TITLE = 'BNGE ';

/**
 * The base URL for the TMDB API.
 */
export const APPLICATION_ACCEPT_TO_JSON = 'application/json';

/**
 * The base URL for the TMDB image service.
 */
export const TMDB_IMAGE_BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500';

/**
 * The base URL for the TMDB image service with original size.
 */
export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export const routePaths = {
  HOME: '/',
  MOVIES: '/movies',
  MOVIE_DETAILS: '/movies/details',
  FAVORITES: '/favorites',
  ABOUT: '/about',
  CONTACT: '/contact',
  LOGIN:'/authentication/login',
  REGISTER:'/authentication/register',
};

/**
 * the media types available in the application.
 */
export type MediaType = 'movies' | 'music' | 'games' | 'books';

/**
 * Constants representing different media types.
 * These are used to filter or categorize content in the application.
 */
export const MEDIA_TYPES = {
  MOVIES: 'movies' as MediaType,
  MUSIC: 'music' as MediaType,
  GAMES: 'games' as MediaType,
  BOOKS: 'books' as MediaType,
};

/**
 * Constant representing the search action.
 */
export const SEARCH = 'search';
