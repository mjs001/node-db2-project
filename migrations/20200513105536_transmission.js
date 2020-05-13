exports.up = function (knex) {
  return knex.schema.table("cars", (tbl) => {
    tbl.string("Transmission Type", 256);
  });
};

exports.down = function (knex) {
  return knex.schema.table("cars", (tbl) => {
    tbl.dropColumn("Transmission Type");
  });
};
