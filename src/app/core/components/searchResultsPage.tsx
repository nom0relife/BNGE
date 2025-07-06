import MovieDetails from '@/app/(protected)/movies/components/movieDetails';
import DefaultPage from '@/app/(protected)/movies/components/defaultPage';
import { useSearchParams } from 'next/navigation';
import SearchBar from '@/app/core/components/SearchBar';
import React from 'react';

export const SearchResultsPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('search') || '';
  return (
    <div>
      <SearchBar />
      {query !== '' ? (
        <MovieDetails query={query} />)
        : <DefaultPage />
      }
    </div>
  );
};
