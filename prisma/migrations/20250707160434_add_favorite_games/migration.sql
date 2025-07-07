-- CreateTable
CREATE TABLE "FavoriteGames" (
    "id" SERIAL NOT NULL,
    "game" JSONB NOT NULL,

    CONSTRAINT "FavoriteGames_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserFavoriteGames" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserFavoriteGames_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserFavoriteGames_B_index" ON "_UserFavoriteGames"("B");

-- AddForeignKey
ALTER TABLE "_UserFavoriteGames" ADD CONSTRAINT "_UserFavoriteGames_A_fkey" FOREIGN KEY ("A") REFERENCES "FavoriteGames"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavoriteGames" ADD CONSTRAINT "_UserFavoriteGames_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
