'use client';
import React, { FC, Fragment, useEffect } from 'react';
import Footer from '@/app/(protected)/layout/footer/footer';
import Header from '@/app/(protected)/layout/header/header';
import { getFavorites } from '@/app/api/favorites/movies/helpers';
import {
  setFavoriteMoviesArray
} from '@/app/(protected)/movies/reducers/movieStateReducer';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/redux/store';
import { SearchResultsPage } from '@/app/core/components/searchResultsPage';
import { Session } from 'next-auth';

const Home:FC<{user?:Session['user']}> = ({ user }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // ToDo: make this a custom hook
    // onEnter function to load favorite movies
    async function loadFavorites() {
      const favorites = await getFavorites();
      dispatch(setFavoriteMoviesArray(favorites));
    }
    loadFavorites().catch((err) =>
      console.error('failed to load favorites', err));
  }, []);

  return (
    <Fragment>
      <Header user={user} />
      <main className="flex-grow py-bottom-4">
        <SearchResultsPage />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
