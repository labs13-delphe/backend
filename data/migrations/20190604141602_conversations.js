exports.up = function(knex, Promise) {
  return knex.schema.createTable("conversations", tbl => {
    tbl.increments();

    // user ID foreign key for author
    tbl
      .integer("author_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    // user ID foreign key for answer
    tbl
      .integer("answer_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.timestamps(true, true);
    //tbl.datetime("schedule", { precision: 6 }).defaultTo(knex.fn.now(6));

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("conversations");
};
