'use client';
import React from 'react';
import Footer from '@/app/layout/footer/footer';
import Header from '@/app/layout/header/header';
import FavoritesPage from './components/favoritesPage';

const Favorites = () => {

  return (
    <React.Fragment>
      <Header />
      <FavoritesPage />
      <Footer />
    </React.Fragment>
  );
};

export default Favorites;
