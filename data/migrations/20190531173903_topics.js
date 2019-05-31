
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('topics', tbl => {
    tbl.increments();
    
    tbl.string('topic').notNullable();
})

};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('topics')
};
