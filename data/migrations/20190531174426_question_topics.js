
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('question_topics', tbl => {
    tbl.increments();
    
    // topic ID foreign key
    tbl
        .integer('topic_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('topics')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    
    // question ID foreign key
    tbl
    .integer('question_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('questions')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

})
};

exports.down = function(knex, Promise) {
  return knex.schema        
    .dropTableIfExists('question_topics')

};
