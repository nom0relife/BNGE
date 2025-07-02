'use client';
import React, { useEffect } from 'react';
import Footer from '@/app/layout/footer/footer';
import Header from '@/app/layout/header/header';
import MovieDetails from '@/app/movies/components/movieDetails';
import DefaultPage from '@/app/movies/components/defaultPage';
import { useSearchParams } from 'next/navigation';
import { getFavorites } from '@/app/api/favorites/helpers';
import { setFavoriteMoviesArray } from '@/app/movies/reducers/movieStateReducer';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/redux/store';

const Home = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('search') || '';
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // This acts like "onEnter"
    async function loadFavorites() {
      const favorites = await getFavorites();
      dispatch(setFavoriteMoviesArray(favorites));
    }
    loadFavorites().catch((err) =>
      console.error('failed to load favorites', err));
  }, []);

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
