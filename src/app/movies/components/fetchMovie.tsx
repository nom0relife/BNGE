import mainApi from '@/app/apis/movieApi';
import { APPLICATION_ACCEPT_TO_JSON } from '@/app/common/constants';

export interface singleMovie {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    backdrop_path: string;
    vote_count: number;
    popularity: number;
    original_language: string;
    overview: string;
    original_title: string;
    poster_path: string;
    genre_ids?: number[];
    adult?: boolean;
    genres?: { id: number; name: string }[];
    homepage?: string;
    status?: string;
    tagline?: string;
    production_companies?: { id: number; name: string; logo_path?: string; origin_country: string }[];
    spoken_languages?: { iso_639_1: string; name: string; english_name: string }[];
    runtime?: number;
    video?: boolean;
    production_countries?: { iso_3166_1: string; name: string }[];
}

async function fetchMovie(id: number): Promise<singleMovie | null> {
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
    return data as singleMovie;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
}

export default fetchMovie;
