import Link from 'next/link';
import { SingleMovie } from '@/app/core/interfaces/interfaces';
import React, { FC } from 'react';

export const FavoriteMovieCardComponent : FC<{movies: SingleMovie[]}> = ({ movies }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies?.map((movie: SingleMovie) => (
        <Link
          key={movie.id}
          href={`/movies/${movie.id}`}
          className="rounded-2xl shadow-lg bg-[#27213d] p-4
                      transition hover:scale-105 hover:shadow-purple-300/30
                      flex flex-col items-center"
        >
          {movie.backdrop_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.title || movie.backdrop_path}
              className="w-32 h-44 object-cover rounded-xl mb-2"
            />
          )}
          <span className="text-lg font-medium text-white text-center">{movie.title}</span>
        </Link>
      ))}
    </div>
  );
};
