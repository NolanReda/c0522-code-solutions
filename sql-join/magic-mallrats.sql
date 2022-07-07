select "c"."firstName",
       "c"."lastName",
       "f"."title" as "film"
  from "rentals" as "r"
  join "customers" as "c" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" as "f" using ("filmId")
  where "f"."title" = 'Magic Mallrats';
