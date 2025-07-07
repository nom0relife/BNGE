import { Game } from '@/app/core/interfaces/gameInterfaces';

export const updateFavoriteGames = async (games: Game[]) => {
  try {
    const response = await fetch('/api/favorites/games', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ games }),
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

export const getFavoriteGames = async (): Promise<Game[]> => {
  try {
    const response = await fetch('/api/favorites/games', {
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
    return data.games ?? [];
  } catch (err) {
    console.error('Failed to fetch favorites:', err);
    return [];
  }
};
