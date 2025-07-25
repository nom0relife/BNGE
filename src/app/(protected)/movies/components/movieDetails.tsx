import React, { FC } from 'react';
import fetchMovies, { Movie } from '@/app/(protected)/movies/lib/fetchMovies';
import MovieCard from '@/app/(protected)/movies/components/movieCard';
import useSWR from 'swr';
import Loading from '@/app/core/components/loading';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const MovieList: FC<{ movies: Movie[] }> = ({ movies }) => {
  const favoriteMovies = useSelector((state:RootState) =>
    state.movies.favoriteMovies);
  const filteredMovies = movies.filter((movie: Movie) => {
    if (movie.popularity > 1 && movie.original_language === 'en') {
      return movie;
    }
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
     lg:grid-cols-4 gap-6 p-4">
      {filteredMovies.map((movie: Movie) => (
        <React.Fragment key={movie.id}>
          <MovieCard
            key={movie.id}
            movie={movie}
            favoriteMovies={favoriteMovies}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default function MovieDetails({ query }: { query: string }) {
  const { data: movies = [], error, isLoading } = useSWR(query, fetchMovies, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    // ...any other options
  });

  if (isLoading) {return <Loading />;}
  if (error) {return <div>Error loading movies!</div>;}

  return <MovieList movies={movies} />;
}


