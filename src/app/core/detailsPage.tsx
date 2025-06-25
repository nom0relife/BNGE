import React, { FC } from 'react';
import { singleMovie } from '@/app/movies/components/fetchMovie';

const DetailsPage: FC<{ movie: singleMovie | null }> = ({ movie }) => {

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{movie?.title}</h1>
      <p className="text-gray-700 mb-2">Release Date: {movie?.release_date}</p>
      <p className="text-gray-700 mb-2">Rating: {movie?.vote_average} ({movie?.vote_count} votes)</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
        alt={movie?.title}
        className="w-full h-auto mb-4"
      />
      <p className="text-gray-700 mb-4">{movie?.overview}</p>
    </div>
  );
};

export default DetailsPage;
