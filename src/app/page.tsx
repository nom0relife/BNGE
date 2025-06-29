'use client';
import React from 'react';
import Footer from '@/app/layout/footer/footer';
import Header from '@/app/layout/header/header';
import MovieDetails from '@/app/movies/components/movieDetails';
import DefaultPage from '@/app/movies/components/defaultPage';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const Home = () => {
  const query = useSelector(((state: RootState) => state.uiState.query));

  return (
    <React.Fragment>
      <Header />
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
