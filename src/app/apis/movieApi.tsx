/**
 * The baseUrl for the TMDB API search endpoint.
 */
const baseUrl = 'https://api.themoviedb.org/3/search/movie';

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
) => (`${baseUrl}?query=${encodeURIComponent(query)}&include_adult=${includeAdult}&language=${language}&page=1`);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchMovies
};
