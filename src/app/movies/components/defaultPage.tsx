import { FC } from 'react';

const DefaultPage: FC = () => {
  return (
    <div className="default-page">
      <h1 className="text-2xl font-bold mb-4">Welcome to Binger!</h1>
      <p className="mb-4">
            Discover your favorite movies and TV shows. Use the search bar above to find what you're looking for.
      </p>
      <p className="mb-4">
            Explore our collection and enjoy your cinematic journey!
      </p>
    </div>
  );
};

export default DefaultPage;
