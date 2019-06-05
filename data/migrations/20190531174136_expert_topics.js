exports.up = function(knex, Promise) {
  return knex.schema.createTable("expert_topics", tbl => {
    tbl.increments();

    // topic ID foreign key
    tbl
      .integer("topic_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("topics")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    // user ID foreign key for expert
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("expert_topics");
};
