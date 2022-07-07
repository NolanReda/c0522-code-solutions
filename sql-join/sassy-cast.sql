select "a"."firstName",
       "a"."lastName",
       "f"."title" as "film"
  from "castMembers"
  join "actors" as "a" using ("actorId")
  join "films" as "f" using ("filmId")
  where "f"."title" = 'Jersey Sassy';
