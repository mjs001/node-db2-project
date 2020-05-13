exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.string("VIN", 255).notNullable().unique();
    tbl.string("Make", 255).notNullable();
    tbl.string("Mileage", 255).notNullable();
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
