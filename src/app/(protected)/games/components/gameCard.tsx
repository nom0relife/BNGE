import React, { FC } from 'react';
import { Game } from '@/app/core/interfaces/gameInterfaces';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppDispatch, RootState } from '@/app/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleGameHeartClickFn,
  isFavorite
} from '@/app/(protected)/games/utils/utils';

export const GameCard: FC<{ game: Game }> = ({ game }) => {
  const dispatch = useDispatch<AppDispatch>();
  const favoriteGames = useSelector((state: RootState) => state.games.favoriteGames);

  return (
    <div className="relative bg-[#18181c] rounded-2xl shadow-lg
      overflow-hidden flex flex-col transition hover:scale-[1.03] hover:shadow-2xl duration-200
      min-w-[280px] max-w-[280px] w-full h-[370px]">

      {/* Heart Icon - top right */}
      <div className="absolute top-3 right-3 z-20">
        {/* Heart button, now with group-hover */}
        <button
          onClick={() => handleGameHeartClickFn(game, favoriteGames, dispatch)}
          className="absolute top-1 right-1 z-20 text-1xl cursor-pointer"
          aria-label={isFavorite(game, favoriteGames) ?  'Remove from favorites' : 'Add to favorites'}
          type="button">
          <div className="absolute top-1 right-1 z-10 text-[#fe4141] text-xl">
            {isFavorite(game, favoriteGames)
              ? <FontAwesomeIcon icon={faHeartSolid} />
              : <FontAwesomeIcon icon={faHeartRegular}  />
            }
          </div>
        </button>
      </div>

      {/* Image + gradient */}
      <div className="relative w-full h-[180px] overflow-hidden">
        {game.background_image ? (
          <>
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#18181c] to-transparent" />
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-zinc-500 text-xs bg-zinc-900">No image</div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-col items-center px-3 py-3 flex-1 z-10 relative">
        <h3 className="text-lg font-bold text-zinc-100 text-center mb-1 line-clamp-2">{game.name}</h3>

        {/* Release Date */}
        <div className="w-full flex justify-center mb-1">
          <span className="text-xs text-zinc-400 bg-zinc-800 px-2 py-[2px] rounded">
            Release date: <span className="text-zinc-100 font-medium">{game.released || 'TBA'}</span>
          </span>
        </div>

        {/* Genres */}
        {Array.isArray(game.genres) && game.genres.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {game.genres.slice(0, 3).map((genre: any) => (
              <span
                key={genre.id}
                className="text-xs bg-[#292932] text-indigo-300 px-2 py-[2px] rounded-full"
              >
                {genre.name}
              </span>
            ))}
          </div>
        )}

        {/* Rating + Metacritic */}
        <div className="flex justify-center gap-3 w-full text-sm mb-1">
          <span className="text-rose-400 font-semibold flex items-center gap-1">
              Rating: <span>{game.rating.toFixed(2)}</span>
          </span>
          {game.metacritic ? (
            <span className="text-xs text-green-400 font-semibold">
              Metacritic: {game.metacritic}
            </span>
          ) : null}
        </div>

        {/* Platforms */}
        <div className="flex flex-wrap justify-center gap-1 text-xs text-zinc-500 mt-auto">
          {Array.isArray(game.platforms) && game.platforms.length > 0
            ? game.platforms.slice(0, 3).map((p) => (
              <span key={p.platform.id}>{p.platform.name}</span>
            ))
            : <span>No platforms</span>
          }
        </div>
      </div>
    </div>
  );
};
