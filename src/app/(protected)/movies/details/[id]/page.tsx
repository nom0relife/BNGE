import DetailsPage from '@/app/(protected)/movies/details/components/detailsPage';
import React from 'react';
import fetchMovie from '@/app/(protected)/movies/lib/fetchMovie';

const Page = async ({
  params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  const movie = await fetchMovie(id);
  return (
    <React.Fragment>
      <DetailsPage movie={movie} />
    </React.Fragment>
  );
};
export default Page;
