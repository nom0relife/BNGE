import React, { FC } from 'react';
import { Movie } from '@/app/(protected)/movies/lib/fetchMovies';
import {
  handleHeartClickFn,
  isFavorite,
  roundToTwoDecimalPlaces
} from '@/app/(protected)/movies/utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/navigation';
import { routePaths } from '@/app/common/constants';
import { SingleMovie } from '@/app/core/interfaces/movieInterfaces';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/redux/store';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

const MovieCard: FC<{ movie: Movie, favoriteMovies: SingleMovie[] }> = ({
  movie,
  favoriteMovies
}) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    router.push(`${routePaths.MOVIE_DETAILS}/${movie.id}`);
  };

  return (
    <div
      className="group relative w-full max-w-md mx-auto h-[350px]
        transition duration-300
        hover:scale-[1.03] hover:shadow-[0_0_25px_#fe414166]
        shadow-[0_5px_115px_-14px_rgba(0,0,0,0.8)]"
    >
      {/* Heart button, now with group-hover */}
      <button
        onClick={() => handleHeartClickFn(movie, favoriteMovies, dispatch)}
        className="absolute top-1 right-1 z-20 text-1xl cursor-pointer"
        aria-label={isFavorite(movie, favoriteMovies) ? 'Remove from favorites' : 'Add to favorites'}
        type="button"
      >
        <div className="absolute top-2 right-3 z-10 text-[#fe4141] text-xl">
          {!isFavorite(movie, favoriteMovies)
            ? <FontAwesomeIcon icon={faHeartRegular} />
            : <FontAwesomeIcon icon={faHeartSolid}  />
          }
        </div>
      </button>

      {/* Main clickable card */}
      <button
        onClick={handleClick}
        className="w-full h-full bg-[#1e1b26] rounded-md
          overflow-hidden flex flex-col cursor-pointer"
        style={{ transition: 'box-shadow 0.3s, transform 0.3s' }}
      >
        {/* Movie Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : '/no-image.jpg'}
            alt={movie.title}
            className="w-full h-full object-cover rounded-t mask-image"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%,' +
                                ' rgba(0,0,0,1) 35%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 65%, ' +
                                'rgba(0,0,0,0.6) 85%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%,' +
                                ' rgba(0,0,0,1) 35%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 65%,' +
                                ' rgba(0,0,0,0.6) 85%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>
        {/* Content */}
        <div className="p-4 text-white font-['Roboto'] text-sm">
          <h2 className="text-xl font-bold text-[#e7e7e7] mb-1">{movie.title}</h2>
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-400 text-xs font-medium">
                            Release date: {movie.release_date}
            </p>
            <div className="text-[#fe4141] flex items-center text-xs font-semibold">
                            Rating: <FontAwesomeIcon icon={faFaceSmile} className="ml-1 mr-1" />
              {roundToTwoDecimalPlaces(movie.vote_average)}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default MovieCard;
