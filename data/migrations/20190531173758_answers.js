
exports.up = function(knex, Promise) {
  
    return knex.schema
    .createTable('answers', tbl => {
        tbl.increments();
        
        // question ID foreign key
        tbl
            .integer('question_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('questions')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        
        // user ID foreign key for expert
        tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    
        tbl.text('answer').notNullable();
        tbl.timestamps(true, true);

    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('answers')

};
