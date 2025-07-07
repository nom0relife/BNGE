import { APPLICATION_ACCEPT_TO_JSON } from '@/app/common/constants';
import { Game } from '@/app/core/interfaces/gameInterfaces';
import gamesApi from '@/app/apis/gamesApi';


async function fetchGames(query: string): Promise<Game[]> {
  try {
    const res = await fetch(gamesApi.fetchGames(query), {
      headers: {
        accept: APPLICATION_ACCEPT_TO_JSON,
      },
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error('Failed to fetch games');
    }

    const data = await res.json();
    //eslint-disable-next-line no-console
    console.log('Fetched games:', data);
    return data.results as Game[];
  } catch (error) {
    //eslint-disable-next-line no-console
    console.error('Error fetching games:', error);
    return [];
  }
}

export default fetchGames;
