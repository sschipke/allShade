
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable("seasons", function (table) {
      table.increments("id").primary();
      table.integer("number");
      table.string("winner");
      table.string("image_url");
      table.timestamps(true, true);
    }),

    knex.schema.createTable("queens", function (table) {
      table.increments("id").primary();
      table.string("name");
      table.integer('queen_id')
      table.boolean("winner");
      table.boolean("missCongeniality");
      table.string("quote");
      table.integer("season").unsigned();
      table.integer("season_id").unsigned();
      table.foreign("season_id").references("seasons.id");
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable("queens"),
    knex.schema.dropTable("seasons")
  ]);
};