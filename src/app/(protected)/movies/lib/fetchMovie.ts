import mainApi from '@/app/apis/movieApi';
import { APPLICATION_ACCEPT_TO_JSON } from '@/app/common/constants';
import { SingleMovie } from '@/app/core/interfaces/interfaces';

async function fetchMovie(id: number): Promise<SingleMovie | null> {
  try {
    const res = await fetch(mainApi.fetchMovieById(id), {
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
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
}

export default fetchMovie;
