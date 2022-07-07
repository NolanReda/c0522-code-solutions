select count("c"."name") as "cities",
          "co"."name" as "countries"
       from "cities" as "c"
       join "countries" as "co" using ("countryId")
       group by "countryId"
       order by "countries";
