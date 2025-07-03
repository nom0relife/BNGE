'use client';
import React from 'react';
import Footer from '@/app/layout/footer/footer';
import Header from '@/app/layout/header/header';
import FavoritesPage from './components/favoritesPage';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const Favorites = () => {
  const favoriteMovies = useSelector((state: RootState) => state.movies.favoriteMovies);

  return (
    <React.Fragment>
      <Header />
      <FavoritesPage movies={favoriteMovies} />
      <Footer />
    </React.Fragment>
  );
};

export default Favorites;
