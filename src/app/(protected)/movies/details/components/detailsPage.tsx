'use client';
import React, { FC, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  TMDB_IMAGE_BASE_URL,
  TMDB_IMAGE_BASE_URL_POSTER
} from '@/app/common/constants';
import {
  handleHeartClickFn,
  isFavorite,
  useClickOutside
} from '@/app/(protected)/movies/utils/utils';
import Loading from '@/app/core/components/loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import { SingleMovie } from '@/app/core/interfaces/interfaces';

const DetailsPage: FC<{ movie: SingleMovie | null }> = ({ movie }) => {
  const favoriteMovies = useSelector((state:RootState) =>
    state.movies.favoriteMovies);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => {
    router.back();
  });

  // If movie is null, show loading state
  if (!movie) {return <Loading />;}

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      {/* Backdrop Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={TMDB_IMAGE_BASE_URL + movie.backdrop_path}
          alt="Backdrop"
          className="w-full h-full object-cover blur-sm opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95"></div>
      </div>

      {/* Main Content */}
      <div ref={ref} className="relative z-10 flex flex-col md:flex-row
       items-center md:items-start p-6 md:p-12 gap-8 w-full
        max-w-4xl mx-auto rounded-2xl bg-black/70 shadow-2xl border border-gray-800">

        {/* Poster */}
        <img
          src={TMDB_IMAGE_BASE_URL_POSTER + movie.poster_path}
          alt={movie.title}
          className="w-44 h-auto rounded-2xl shadow-lg border-2 border-gray-800"
        />

        {/* Details */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">{movie.title}</h1>
          {movie.original_title && movie.original_title !== movie.title && (
            <p className="text-sm text-gray-300 mb-1 italic">
              {movie.original_title} ({movie.original_language?.toUpperCase()})
            </p>
          )}
          <div className="flex flex-wrap items-center mb-3 gap-4 text-sm">
            <span className="text-yellow-400 font-semibold">
              ⭐ {movie.vote_average?.toFixed(1)}
              <span className="text-xs text-gray-400 ml-1">({movie.vote_count} votes)</span>
            </span>
            {movie.release_date && (
              <span className="text-gray-400">{movie.release_date}</span>
            )}
            {movie.runtime && (
              <span className="text-gray-400">{movie.runtime} min</span>
            )}
          </div>
          {/* Genres */}
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 rounded-full bg-blue-800 text-white text-xs font-medium"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <p className="text-gray-100 mb-4 text-base">{movie.overview}</p>

          {/* Spoken Languages */}
          {movie.spoken_languages && (
            <div className="mb-3 flex flex-wrap gap-2">
              {movie.spoken_languages.map((lang) => (
                <span
                  key={lang.iso_639_1}
                  className="px-2 py-1 rounded bg-gray-700 text-gray-200 text-xs"
                >
                  {lang.english_name}
                </span>
              ))}
            </div>
          )}

          {/* Production Companies */}
          {movie.production_companies && movie.production_companies.length > 0 && (
            <div className="mb-3">
              <span className="text-xs text-gray-400">Production:</span>
              <ul className="flex flex-wrap gap-2 mt-1">
                {movie.production_companies.map((company) => (
                  <li
                    key={company.id}
                    className="bg-gray-800 text-gray-200 px-2 py-1 rounded text-xs flex items-center gap-1"
                  >
                    {company.logo_path && (
                      <img
                        src={TMDB_IMAGE_BASE_URL_POSTER + company.logo_path}
                        alt={company.name}
                        className="w-6 h-6 object-contain rounded"
                      />
                    )}
                    {company.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Production Countries */}
          {movie.production_countries && movie.production_countries.length > 0 && (
            <div className="mb-3">
              <span className="text-xs text-gray-400">Country:</span>
              <span className="ml-2 text-xs text-gray-300">
                {movie.production_countries.map((c) => c.name).join(', ')}
              </span>
            </div>
          )}

          {/* Homepage Button */}
          {movie.homepage && (
            <a
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2
               px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-800
                text-white font-semibold transition"
            >Visit Homepage
            </a>
          )}
          <button
            onClick={() => router.back()}
            className="mb-4 px-4 py-2 rounded bg-gray-700 hover:bg-gray-900 text-white font-semibold"
          >
            ← Go Back
          </button>

          {/* Adult & Popularity */}
          <div className="flex gap-2 mt-4">
            {movie.adult ? (
              <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold">18+</span>
            ) : (
              <span className="px-3 py-1 rounded-full bg-green-700 text-white text-xs font-bold">PG</span>
            )}
            <span className="px-3 py-1 rounded-full bg-blue-800 text-white text-xs">
              Popularity: {movie.popularity?.toFixed(1)}
            </span>
          </div>
        </div>
        <button onClick={() => handleHeartClickFn(movie, favoriteMovies, dispatch)} className="hover:cursor-pointer">
          <div className="absolute top-2 right-3 z-10 text-[#fe4141] text-xl">
            {!isFavorite(movie, favoriteMovies)
              ? <FontAwesomeIcon icon={faHeartRegular} />
              : <FontAwesomeIcon icon={faHeartSolid}  />
            }
          </div>
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
