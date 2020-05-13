exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars").then(function () {
    // Inserts seed entries
    return knex("cars").insert([
      { Vin: 1, Make: "Honda", Mileage: 5000 },
      { Vin: 2, Make: "Volvo", Mileage: 20000 },
      { Vin: 3, Make: "Toyota", Mileage: 50000 },
    ]);
  });
};
