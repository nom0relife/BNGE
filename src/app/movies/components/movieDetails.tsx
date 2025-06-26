import React, { useState, useEffect, FC } from 'react';
import fetchMovies from '@/app/movies/components/fetchMovies';
import { Movie } from '@/app/movies/components/fetchMovies';
import MovieCard from '@/app/movies/components/movieCard';
import useSWR from 'swr';

const MovieList: FC<{ movies: Movie[] }> = ({ movies }) => {

  const filteredMovies = movies.filter((movie: Movie) => {
    if (movie.popularity > 1 && movie.original_language === 'en') {
      return movie;
    }
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {filteredMovies.map((movie: Movie) => (
        <React.Fragment key={movie.id}>
          <MovieCard movie={movie} key={movie.id} />
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

  if (isLoading) {return <div>Loading…</div>;}
  if (error) {return <div>Error loading movies!</div>;}

  return <MovieList movies={movies} />;
}


