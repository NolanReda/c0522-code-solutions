select "f"."title" as "film",
       "f"."releaseYear",
       "g"."name" as "genre"
  from "filmGenre" as "fg"
  join "films" as "f" using ("filmId")
  join "genres" as "g" using ("genreId")
  where "f"."title" = 'Boogie Amelie';
