'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

// Test/mock data for favorites
const favorites: Record<string, any[]> = {
  movies: [
    {
      id: 1,
      title: 'Inception',
      image: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg'
    },
    {
      id: 2,
      title: 'The Matrix',
      image: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'
    }
  ],
  music: [
    {
      id: 1,
      name: 'Daft Punk - Discovery',
      image: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg'
    }
  ],
  books: [],
  games: [
    {
      id: 1,
      title: 'The Witcher 3: Wild Hunt',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg'
    }
  ]
};

const categories = [
  { key: 'movies', label: 'Movies' },
  { key: 'music', label: 'Music' },
  { key: 'books', label: 'Books' },
  { key: 'games', label: 'Games' }
];

const FavoritesPage = () => {
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
            {favorites[cat.key]?.length ? (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {favorites[cat.key].map((item: any) => (
                  <Link
                    key={item.id}
                    href={`/${cat.key}/${item.id}`}
                    className="rounded-2xl shadow-lg bg-[#27213d] p-4
                    transition hover:scale-105 hover:shadow-purple-300/30
                    flex flex-col items-center"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title || item.name}
                        className="w-32 h-44 object-cover rounded-xl mb-2"
                      />
                    )}
                    <span className="text-lg font-medium text-white text-center">{item.title || item.name}</span>
                  </Link>
                ))}
              </div>
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
