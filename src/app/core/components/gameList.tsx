import React, { FC } from 'react';
import useSWR from 'swr';
import Loading from '@/app/core/components/loading';
import fetchGames from '@/app/(protected)/games/lib/fetchGames';
import { GameCard } from '@/app/(protected)/games/components/gameCard';

export const GameList: FC<{ query: string }> = ({ query }) => {
  const { data: games = [], error, isLoading } = useSWR(query, fetchGames, {
    revalidateOnFocus: true,
    // ...any other options
  });
  // const favoriteMovies = useSelector((state:RootState) =>
  //   state.movies.favoriteMovies);
  // const filteredMovies = movies.filter((movie: Movie) => {
  //   if (movie.popularity > 1 && movie.original_language === 'en') {
  //     return movie;
  //   }
  // });

  if (isLoading) {return <Loading />;}
  if (error) {return <div>Error loading movies!</div>;}
  console.log('Fetched games:', games);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
     lg:grid-cols-4 gap-6 p-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};
