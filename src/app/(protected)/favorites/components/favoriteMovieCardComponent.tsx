import Link from 'next/link';
import {SingleMovie} from '@/app/core/interfaces/movieInterfaces';
import React, {FC} from 'react';
import {removeFavoriteMovie} from '@/app/(protected)/movies/utils/utils';
import {useDispatch} from 'react-redux';

export const FavoriteMovieCardComponent: FC<{ movies: SingleMovie[] }> = ({ movies }) => {
  const dispatch = useDispatch();
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies?.map((movie: SingleMovie) => (
        <div
          key={movie.id}
          className="relative min-h-[288px] rounded-2xl shadow-lg bg-[#27213d] p-4
                    flex flex-col items-center overflow-hidden"
        >
          {/* X button, themed */}
          <button
            type="button"
            className="absolute top-2 right-2 z-10
              text-white bg-gradient-to-br from-red-500 via-purple-700 to-[#27213d]
              rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold
              hover:bg-red-700 transition shadow-lg opacity-80 hover:opacity-100"
            tabIndex={-1}
            aria-label="Remove favorite"
            onClick={() => {removeFavoriteMovie(movies, movie, dispatch);}}
          >
                ×
          </button>
          <Link
            href={`/movies/details/${movie.id}`}
            className="flex flex-col items-center w-full h-full"
            tabIndex={0}
          >
            {movie.backdrop_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title || movie.backdrop_path}
                className="w-32 h-44 object-cover rounded-xl mb-2"
              />
            )}
            <span className="text-lg font-medium text-white text-center mt-2">{movie.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};
