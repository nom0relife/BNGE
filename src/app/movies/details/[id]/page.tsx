import DetailsPage from '@/app/movies/details/components/detailsPage';
import Header from '@/app/layout/header/header';
import Footer from '@/app/layout/footer/footer';
import React from 'react';
import fetchMovie from '@/app/movies/lib/fetchMovie';

const Page = async ({
  params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  const movie = await fetchMovie(id);
  return (
    <React.Fragment>
      <Header />
      <DetailsPage movie={movie} />
      <Footer />
    </React.Fragment>
  );
};
export default Page;
