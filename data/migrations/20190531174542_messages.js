exports.up = function(knex, Promise) {
    return knex.schema.createTable("messages", tbl => {
      tbl.increments();
  
      // user id foreign key for author
      tbl
        .integer("author_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
  
      // user id foreign key for answer
      tbl
        .integer("answer_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
  
      tbl.text("message").notNullable();
      tbl.timestamps(true, true);
      tbl
        .integer("conversation_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("conversations")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("messages");
  };