/**
 * The baseUrl for the TMDB API search endpoint.
 */
const baseUrl = 'https://api.themoviedb.org/3/';

/**
 * Fetch movies from TMDB API based on a search query.
 * @param query
 * @param includeAdult
 * @param language
 */
const fetchMovies = (
  query: string,
  includeAdult: boolean = false,
  language: string = 'en-US'
) => (`${baseUrl}search/movie?query=${encodeURIComponent(query)}&include_adult=${includeAdult}&language=${language}&page=1`);

const fetchMovieById = (
  id: number,
) => (`${baseUrl}movie/${id}`);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchMovies,
  fetchMovieById
};
