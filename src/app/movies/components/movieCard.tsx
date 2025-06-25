import React, { FC } from 'react';
import { Movie } from '@/app/movies/components/fetchMovies';
import { roundToTwoDecimalPlaces } from '@/app/movies/utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faHeart } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/navigation';


const MovieCard: FC<{ movie: Movie }> = ({ movie }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/movies/${movie.id}`);
  };
  return (
    <button onClick={() => handleClick()}>
      <div className="w-full max-w-md mx-auto
  bg-[#1e1b26] rounded-md shadow-[0_5px_115px_-14px_rgba(0,0,0,0.8)]
   overflow-hidden relative transform transition duration-300 hover:scale-[1.03]
    hover:shadow-[0_0_25px_#fe414166]">
        {/* Heart icon */}
        <div className="absolute top-2 right-3 z-10 text-[#fe4141] text-xl">
          <FontAwesomeIcon icon={faHeart} />
        </div>

        {/* Movie Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover rounded-t mask-image"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, ' +
                                'rgba(0,0,0,1) 35%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 65%,' +
                                ' rgba(0,0,0,0.6) 85%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1)' +
                                ' 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 50%, rgba(0,0,0,1)' +
                                ' 65%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="p-4 text-white font-['Roboto'] text-sm text-justify">
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
          <div className="flex justify-between items-center mb-2">
            <h5 className="text-xs font-medium text-gray-400">SUMMARY</h5>
          </div>
          <p className="text-[#9b9b9b] leading-snug max-h-[150px] overflow-y-auto">
            {movie.overview}
          </p>
        </div>
      </div>
    </button>
  );
};

export default MovieCard;
