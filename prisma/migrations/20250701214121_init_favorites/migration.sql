-- CreateTable
CREATE TABLE "FavoriteMovies" (
    "id" SERIAL NOT NULL,
    "movie_ids" INTEGER[],

    CONSTRAINT "FavoriteMovies_pkey" PRIMARY KEY ("id")
);
