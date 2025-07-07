/**
 * The baseUrl for the TMDB API search endpoint.
 */
const baseUrl = 'https://api.rawg.io/api/games';
const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;

/**
 * Fetch movies from RAWG API based on a search query.
 * @param query
 */
const fetchGames = (
  query: string,
) => (`${baseUrl}?search=${encodeURIComponent(query)}&key=${apiKey}`);


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchGames,
};
