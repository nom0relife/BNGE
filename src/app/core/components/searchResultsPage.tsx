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
      <div className="bg-gray-900 py-4 flex justify-center w-full shadow">
        <div className="w-full max-w-xl flex justify-center">
          <SearchBar />
        </div>
      </div>
      {query !== '' ? (
        <MovieDetails query={query} />)
        : <DefaultPage />
      }
    </div>
  );
};
