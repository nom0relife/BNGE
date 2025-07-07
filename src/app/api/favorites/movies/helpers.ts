import { SingleMovie } from '@/app/core/interfaces/movieInterfaces';

export const updateFavorites = async (movies: SingleMovie[]) => {
  try {
    const response = await fetch('/api/favorites/movies', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ movies }),
    });
    if (!response.ok) {
      // Optionally handle error, e.g., show a toast notification
      const err = await response.json();
      throw new Error(err.error || 'Unknown error');
    }
    // Optionally handle success, e.g., show a toast
  } catch (err) {
    console.error('Failed to update favorites:', err);
  }
};

export const getFavorites = async (): Promise<SingleMovie[]> => {
  try {
    const response = await fetch('/api/favorites/movies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      // Optionally handle error, e.g., show a toast notification
      const err = await response.json();
      throw new Error(err.error || 'Unknown error');
    }
    const data = await response.json();
    return data.movies ?? [];
  } catch (err) {
    console.error('Failed to fetch favorites:', err);
    return [];
  }
};
