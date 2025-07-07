import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Game } from '@/app/core/interfaces/gameInterfaces';
import { removeFavoriteGame } from '@/app/(protected)/games/utils/utils';

export const FavoriteGameCardComponent: FC<{ games: Game[] }> = ({ games }) => {
  const dispatch = useDispatch();
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {games?.map((game: Game) => (
        <div
          key={game.id}
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
            onClick={() => {removeFavoriteGame(games, game, dispatch);}}
          >
                ×
          </button>
          <div
            className="flex flex-col items-center w-full h-full"
            tabIndex={0}
          >
            {game.background_image && (
              <img
                src={game.background_image}
                alt={game.name || game.background_image}
                className="w-32 h-44 object-cover rounded-xl mb-2"
              />
            )}
            <span className="text-lg font-medium text-white text-center mt-2">{game.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
