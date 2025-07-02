import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Movie } from '@/app/movies/lib/fetchMovies';

// Always fetch the row with id: 1
export async function GET() {
  try {
    const row = await prisma.favoriteMovies.findUnique({ where: { id: 1 } });
    // Return [] if row or movie is missing
    return NextResponse.json({ movies: (row?.movie as any[]) || [] });
  } catch (error) {
    console.error('Error fetching favorite movies:', error);
    return NextResponse.json({ error: 'Failed to fetch favorites.' }, { status: 500 });
  }
}

// Always insert/update row with id: 1
export async function PUT(req: NextRequest) {
  try {
    const { movies } = await req.json();

    // Validate input
    if (!Array.isArray(movies) || !movies.every(obj => typeof obj === 'object' && obj !== null)) {
      return NextResponse.json({ error: 'movies must be an array of objects.' }, { status: 400 });
    }

    const row = await prisma.favoriteMovies.findUnique({ where: { id: 1 } });
    if (!row) {
      // Create the row with id: 1 if it doesn't exist
      await prisma.favoriteMovies.create({ data: { id: 1, movie: movies } });
    } else {
      // Update the row with id: 1
      await prisma.favoriteMovies.update({
        where: { id: 1 },
        data: { movie: movies },
      });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating favorite movies:', error);
    return NextResponse.json({ error: 'Failed to update favorites.' }, { status: 500 });
  }
}
