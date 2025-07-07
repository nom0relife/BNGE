import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

// This route handles favorite games for the authenticated user.
// It allows fetching the list of favorite games and updating them.
// GET: Fetch favorite games
// PUT: Update favorite games
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const row = await prisma.favoriteGames.findUnique({ where: { id: userId } });
    // Return [] if row or game is missing
    return NextResponse.json({ games: (row?.game as any[]) || [] });
  } catch (error) {
    console.error('Error fetching favorite games:', error);
    return NextResponse.json({ error: 'Failed to fetch favorites.' }, { status: 500 });
  }
}

// This route updates the favorite games for the authenticated user.
// It expects an array of game objects in the request body.
// If the user does not have a row in the database, it creates one.
export async function PUT(req: NextRequest) {
  try {
    const { games } = await req.json();
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    // Validate input
    if (!Array.isArray(games) || !games.every(obj => typeof obj === 'object' && obj !== null)) {
      return NextResponse.json({ error: 'games must be an array of objects.' }, { status: 400 });
    }

    const row = await prisma.favoriteGames.findUnique({ where: { id: userId } });
    if (!row) {
      await prisma.favoriteGames.create({ data: { id: userId, game: games } });
    } else {
      await prisma.favoriteGames.update({
        where: { id: userId },
        data: { game: games },
      });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating favorite games:', error);
    return NextResponse.json({ error: 'Failed to update favorites.' }, { status: 500 });
  }
}
