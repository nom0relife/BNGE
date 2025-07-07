import React, { FC } from 'react';
import useSWR from 'swr';
import Loading from '@/app/core/components/loading';
import fetchGames from '@/app/(protected)/games/lib/fetchGames';
import { GameCard } from '@/app/(protected)/games/components/gameCard';

export const GameList: FC<{ query: string }> = ({ query }) => {
  const { data: games = [], error, isLoading } = useSWR(query, fetchGames, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    // ...any other options
  });

  if (isLoading) {return <Loading />;}
  if (error) {return <div>Error loading movies!</div>;}
  console.log('Fetched games:', games);
  return (
    <div className="grid gap-x-2 gap-y-10 my-5 px-[5px]"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};
