ALTER TABLE "FavoriteMovies"
DROP COLUMN IF EXISTS "movie_ids",
  ADD COLUMN "movie" JSONB;
