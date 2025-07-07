import { MovieList } from '@/app/core/components/movieList';
import { GameList } from '@/app/core/components/gameList';

const selectedTypeResolver = (
  selectedType: string,
  query: string
) => {
  switch (selectedType) {
  case 'movies':
    return <MovieList query={query} />;
  case 'tv':
    return 'tv';
  case 'games':
    return <GameList query={query} />;
  default:
    return <MovieList query={query} />; // Default to movies if no match
  }
};


export default function Details({
  query,
  selectedType,
}: { query: string,
  selectedType: string,
}) {

  return  selectedTypeResolver(selectedType, query);
}


