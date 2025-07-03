'use client';
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { categories } from '@/app/common/constants';
import { SingleMovie } from '@/app/core/interfaces/interfaces';

const FavoritesPage: FC<{ movies: SingleMovie[] }> = ({ movies }) => {
  return (
    <div className="min-h-screen bg-[#1e1b26] flex flex-col items-center px-4 pt-10">
      <div className="flex items-center mb-8 space-x-4">
        <FontAwesomeIcon icon={faHeart} className="text-4xl text-purple-500 animate-pulse" />
        <h1 className="text-4xl font-bold text-white tracking-tight">Your Favorites</h1>
      </div>
      <div className="w-full max-w-6xl">
        {categories.map((cat) => (
          <section key={cat.key} className="mb-8">
            <h2 className="text-2xl text-purple-400 font-semibold mb-3">{cat.label}</h2>
            {/* Show movies only for 'movies' category, empty for others */}
            {cat.key === 'movies' ? (
              movies.length ? (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {movies.map((item: SingleMovie) => (
                    <Link
                      key={item.id}
                      href={`/movies/${item.id}`}
                      className="rounded-2xl shadow-lg bg-[#27213d] p-4
                      transition hover:scale-105 hover:shadow-purple-300/30
                      flex flex-col items-center"
                    >
                      {item.backdrop_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                          alt={item.title || item.backdrop_path}
                          className="w-32 h-44 object-cover rounded-xl mb-2"
                        />
                      )}
                      <span className="text-lg font-medium text-white text-center">{item.title}</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-gray-400 italic">No favorites in this category yet.</div>
              )
            ) : (
              <div className="text-gray-400 italic">No favorites in this category yet.</div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
