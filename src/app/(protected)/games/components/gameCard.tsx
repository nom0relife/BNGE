import { Game } from '@/app/core/interfaces/gameInterfaces';
import React, { FC } from 'react';

export const GameCard: FC<{ game: Game }> = ({ game }) => {
  return (
    <div className="bg-[#18181c] rounded-2xl shadow-md
    overflow-hidden flex flex-col transition hover:scale-105 hover:shadow-lg
     duration-200 min-w-[220px] max-w-[260px]">
      <div className="aspect-[16/9] bg-zinc-900 relative">
        {game.background_image ? (
          <img
            src={game.background_image}
            alt={game.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-zinc-500 text-sm">No image</div>
        )}
      </div>
      <div className="flex flex-col gap-1 px-4 py-3">
        <h3 className="text-lg font-semibold text-zinc-100 truncate">{game.name}</h3>
        <div className="flex gap-2 flex-wrap text-xs text-zinc-400">
          {Array.isArray(game.platforms) && game.platforms.length > 0
            ? game.platforms.slice(0, 3).map((p) => (
              <span key={p.platform.id}>{p.platform.name}</span>
            ))
            : <span>No platforms</span>
          }
        </div>
        <div className="text-xs text-zinc-500 mt-1">
          {game.released ? (
            <span>Released: {game.released}</span>
          ) : (
            <span>TBA</span>
          )}
        </div>
      </div>
    </div>
  );
};
