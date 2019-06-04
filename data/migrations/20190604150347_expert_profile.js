exports.up = function(knex, Promise) {
  return knex.schema.createTable("expert_profile", tbl => {
    tbl.increments();

    // user ID foreign for expert
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("hourly_rate")
      .notNullable()
      .unsigned();
    tbl.string("twitter", 128);
    tbl.string("linkedin", 128);
    tbl.string("facebook", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("expert_profile");
};
