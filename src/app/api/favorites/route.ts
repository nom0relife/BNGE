import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Always fetch the row with id: 1
export async function GET() {
  try {
    const row = await prisma.favoriteMovies.findUnique({ where: { id: 1 } });
    if (!row){
      console.log(row);
      console.log('No favorite movies found, returning empty array.');
    }
    return NextResponse.json({ movieIds: row?.movie_ids || [] });
  } catch (error) {
    console.error('Error fetching favorite movies:', error);
    return NextResponse.json({ error: 'Failed to fetch favorites.' }, { status: 500 });
  }
}

// Always insert/update row with id: 1
export async function PUT(req: NextRequest) {
  try {
    const { movieIds } = await req.json();

    // Validate input
    if (!Array.isArray(movieIds) || !movieIds.every(Number.isInteger)) {
      return NextResponse.json({ error: 'movieIds must be an array of integers.' }, { status: 400 });
    }

    const row = await prisma.favoriteMovies.findUnique({ where: { id: 1 } });
    if (!row) {
      // Create the row with id: 1 if it doesn't exist
      await prisma.favoriteMovies.create({ data: { id: 1, movie_ids: movieIds } });
    } else {
      // Update the row with id: 1
      await prisma.favoriteMovies.update({
        where: { id: 1 },
        data: { movie_ids: movieIds },
      });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating favorite movies:', error);
    return NextResponse.json({ error: 'Failed to update favorites.' }, { status: 500 });
  }
}
