exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();

    tbl.string("first_name", 128).notNullable();
    tbl.string("last_name", 128).notNullable();
    tbl.string("username", 128).notNullable();
    tbl.string("password", 128).notNullable();
    tbl.string("email", 128).notNullable();
    tbl.text("bio");
    tbl.string("image_url");
    tbl.string("user_type").defaultTo("asker");
    tbl.integer("hourly_rate").unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
