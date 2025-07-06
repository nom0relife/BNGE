import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

// This route handles favorite movies for the authenticated user.
// It allows fetching the list of favorite movies and updating them.
// GET: Fetch favorite movies
// PUT: Update favorite movies
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const row = await prisma.favoriteMovies.findUnique({ where: { id: userId } });
    // Return [] if row or movie is missing
    return NextResponse.json({ movies: (row?.movie as any[]) || [] });
  } catch (error) {
    console.error('Error fetching favorite movies:', error);
    return NextResponse.json({ error: 'Failed to fetch favorites.' }, { status: 500 });
  }
}

// This route updates the favorite movies for the authenticated user.
// It expects an array of movie objects in the request body.
// If the user does not have a row in the database, it creates one.
export async function PUT(req: NextRequest) {
  try {
    const { movies } = await req.json();
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    // Validate input
    if (!Array.isArray(movies) || !movies.every(obj => typeof obj === 'object' && obj !== null)) {
      return NextResponse.json({ error: 'movies must be an array of objects.' }, { status: 400 });
    }

    const row = await prisma.favoriteMovies.findUnique({ where: { id: userId } });
    if (!row) {
      await prisma.favoriteMovies.create({ data: { id: userId, movie: movies } });
    } else {
      await prisma.favoriteMovies.update({
        where: { id: userId },
        data: { movie: movies },
      });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating favorite movies:', error);
    return NextResponse.json({ error: 'Failed to update favorites.' }, { status: 500 });
  }
}
