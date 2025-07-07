import React, { FC } from 'react';
import fetchMovies, { Movie } from '@/app/(protected)/movies/lib/fetchMovies';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import MovieCard from '@/app/(protected)/movies/components/movieCard';
import useSWR from 'swr';
import Loading from '@/app/core/components/loading';

export const MovieList: FC<{ query: string }> = ({ query }) => {
  const { data: movies = [], error, isLoading } = useSWR(query, fetchMovies, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    // ...any other options
  });
  const favoriteMovies = useSelector((state:RootState) =>
    state.movies.favoriteMovies);
  const filteredMovies = movies.filter((movie: Movie) => {
    if (movie.popularity > 1 && movie.original_language === 'en') {
      return movie;
    }
  });

  if (isLoading) {return <Loading />;}
  if (error) {return <div>Error loading movies!</div>;}

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
     lg:grid-cols-4 gap-6 p-4">
      {filteredMovies.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteMovies={favoriteMovies}
        />
      ))}
    </div>
  );
};
