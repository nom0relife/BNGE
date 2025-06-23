import { FC } from 'react';
import { Movie } from '@/app/features/movies/components/fetchMovie';
import { roundToTwoDecimalPlaces } from '@/app/features/movies/utils/utils';

const MovieCard: FC<{ movie: Movie }> = ({ movie }) => (
  <div key={movie.id} className="p-4 border rounded shadow">
    <img
      src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
      alt={movie.title}
      className="w-full h-auto mb-2 rounded" />
    <h2 className="font-bold">{movie.title}</h2>
    <p>Release date: {movie.release_date}</p>
    <p>Popularity: {movie.popularity}</p>
    <p>Rating: {roundToTwoDecimalPlaces(movie.vote_average)} / Number of voters: {movie.vote_count}</p>
  </div>
);

export default MovieCard;
