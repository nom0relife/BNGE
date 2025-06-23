'use client';
import React, { useState } from 'react';
import Footer from '@/app/layout/footer/footer';
import Header from '@/app/layout/header/header';
import MovieDetails from '@/app/features/movies/components/movieDetails';

const Home = () => {
  const [query, setQuery] = useState<string>('');
  return (
    <React.Fragment>
      <Header onSearch={setQuery}/>
      {query !== '' ? (
        <MovieDetails query={query} />)
        : null
      }
      <Footer />
    </React.Fragment>
  );
};

export default Home;
