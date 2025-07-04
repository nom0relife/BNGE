'use client';
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { SingleMovie } from '@/app/core/interfaces/interfaces';
import {
  FavoriteMovieCardComponent
} from '@/app/favorites/components/favoriteMovieCardComponent';

const FavoritesPage: FC<{
  movies: SingleMovie[]
}> = ({
  movies
}) => {
  return (
    <div className="min-h-screen bg-[#1e1b26] flex flex-col items-center px-4 pt-10">
      <div className="flex items-center mb-8 space-x-4">
        <FontAwesomeIcon icon={faHeart} className="text-4xl text-purple-500 animate-pulse" />
        <h1 className="text-4xl font-bold text-white tracking-tight">Your Favorites</h1>
      </div>
      <div className="w-full max-w-6xl">
        <section className="mb-8">
          <h2 className="text-2xl text-purple-400 font-semibold mb-3">Movies</h2>
          {/* Show movies only for 'movies' category, empty for others */}
          {
            movies.length ? (<FavoriteMovieCardComponent movies={movies} />) : (
              <div className="text-gray-400 italic">No favorites in this category yet.</div>
            )}
        </section>
        <section className="mb-8">
          <h2 className="text-2xl text-purple-400 font-semibold mb-3">Music</h2>
          <div className="text-gray-400 italic">No favorites in this category yet.</div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl text-purple-400 font-semibold mb-3">Games</h2>
          <div className="text-gray-400 italic">No favorites in this category yet.</div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl text-purple-400 font-semibold mb-3">Books</h2>
          <div className="text-gray-400 italic">No favorites in this category yet.</div>
        </section>
      </div>
    </div>
  );
};

export default FavoritesPage;
