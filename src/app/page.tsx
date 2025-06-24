'use client';
import React, { useState } from 'react';
import Footer from '@/app/layout/footer/footer';
import Header from '@/app/layout/header/header';
import MovieDetails from '@/app/movies/components/movieDetails';
import DefaultPage from '@/app/movies/components/defaultPage';

const Home = () => {
  const [query, setQuery] = useState<string>('');
  return (
    <React.Fragment>
      <Header onSearch={setQuery} />
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
