import { FC } from 'react';

const DefaultPage: FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 w-full">
      {/* Icon/Logo */}
      <div className="mb-6 text-5xl drop-shadow-lg mt-20 ">
        <span role="img" aria-label="popcorn">🍿</span>
      </div>
      <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow">
                Welcome to <span className="text-purple-400">BNGE</span>!
      </h1>
      <p className="mb-2 text-lg text-gray-300 text-center max-w-2xl">
          Discover movies, TV shows, books, and more. Use
          the <span className="font-semibold text-white">search bar above</span> to begin your next adventure.
      </p>
      <p className="mb-2 text-base text-gray-400 text-center max-w-xl">
                Explore our curated collection and start your cinematic or literary journey today!
      </p>
      <div className="mt-10 text-xs text-gray-600 italic">
                Tip: Try searching for your favorite title or genre.
      </div>
    </div>
  );
};

export default DefaultPage;
