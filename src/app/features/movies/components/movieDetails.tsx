import React, { useState, useEffect, FC } from 'react';
import fetchMovie from '@/app/features/movies/components/fetchMovie';
import { Movie } from '@/app/features/movies/components/fetchMovie';
import MovieCard from '@/app/features/movies/components/movieCard';

const MovieList: FC<{ movies: Movie[] }> = ({ movies }) => {

  const filteredMovies = movies.filter((movie: Movie) => {
    if (movie.popularity > 1 && movie.backdrop_path && movie.original_language === 'en') {
      return movie;
    }
  });

  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredMovies.map((movie: Movie) => (
        <MovieCard movie={movie} key={movie.id}/>
      ))}
    </div>
  );
};

export default function MovieDetails({ query }: { query: string }) {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    fetchMovie(query).then(results => {
      setMovies(results);
    });
  }, [query]);

  return <MovieList movies={movies} />;
}


