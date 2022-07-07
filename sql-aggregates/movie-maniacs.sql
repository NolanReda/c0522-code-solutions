select "c"."firstName" || "c"."lastName" as "customerName",
       count("p"."rentalId") as "rentals",
       sum("p"."amount") as "paid"
       from "customers" as "c"
       join "payments" as "p" using ("customerId")
       group by "customerName"
       order by "paid" desc;
