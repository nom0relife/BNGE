'use client';
import React from 'react';
import Footer from '@/app/layout/footer/footer';
import Header from '@/app/layout/header/header';
import MovieDetails from '@/app/movies/components/movieDetails';
import DefaultPage from '@/app/movies/components/defaultPage';
import { useRouter, useSearchParams } from 'next/navigation';

const Home = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('search') || '';
  const router = useRouter();
  const handleSearch = (searchQuery: string) => {
    router.push(`/?search=${encodeURIComponent(searchQuery)}`);
  };
  return (
    <React.Fragment>
      <Header onSearch={handleSearch} />
      <main className="flex-grow p-4">
        {query !== '' ? (
          <MovieDetails query={query} />)
          : <DefaultPage />
        }
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
