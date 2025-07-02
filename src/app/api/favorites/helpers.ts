export const updateFavorites = async (movieIds: number[]) => {
  try {
    const response = await fetch('/api/favorites', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ movieIds }),
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

export const getFavorites = async (): Promise<number[]> => {
  try {
    const response = await fetch('/api/favorites', {
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
    return data.movieIds ?? [];
  } catch (err) {
    console.error('Failed to fetch favorites:', err);
    return [];
  }
};
