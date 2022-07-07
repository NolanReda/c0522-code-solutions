select "a"."line1",
       "c"."name" as "City",
       "a"."district",
       "co"."name" as "country"
  from "cities" as "c"
  join "addresses" as "a" using ("cityId")
  join "countries" as "co" using ("countryId")
  order by "City";
