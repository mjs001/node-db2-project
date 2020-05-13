exports.up = function (knex) {
  return knex.schema.table("cars", (tbl) => {
    tbl.string("Title Status", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.table("cars", (tbl) => {
    tbl.dropColumn("Title Status");
  });
};
