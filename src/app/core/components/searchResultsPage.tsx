import ContentList from '@/app/(protected)/movies/components/contentList';
import DefaultPage from '@/app/(protected)/movies/components/defaultPage';
import { useSearchParams } from 'next/navigation';
import SearchBar from '@/app/core/components/SearchBar';
import React from 'react';
import { MEDIA_TYPES, MediaType, SEARCH } from '@/app/common/constants';

export const SearchResultsPage = () => {
  const [selectedType, setSelectedType] = React.useState<MediaType>(MEDIA_TYPES.MOVIES);
  const searchParams = useSearchParams();
  const query = searchParams.get(SEARCH) || '';
  return (
    <div>
      <SearchBar selectedType={selectedType} setSelectedType={setSelectedType} />
      {query !== '' ? (
        <ContentList query={query} selectedType={selectedType} />)
        : <DefaultPage />
      }
    </div>
  );
};
