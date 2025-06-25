import mainApi from '@/app/apis/movieApi';
import { APPLICATION_ACCEPT_TO_JSON } from '@/app/common/constants';

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  vote_count: number;
  popularity: number;
  original_language: string;
  overview: string;
}

async function fetchMovies(query: string): Promise<Movie[]> {
  try {
    const res = await fetch(mainApi.fetchMovies(query), {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
        accept: APPLICATION_ACCEPT_TO_JSON,
      },
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error('Failed to fetch movies');
    }

    const data = await res.json();
    return data.results as Movie[];
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
}

export default fetchMovies;
