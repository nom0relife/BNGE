/*
  Warnings:

  - Made the column `movie` on table `FavoriteMovies` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "FavoriteMovies" ALTER COLUMN "movie" SET NOT NULL;
