
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
        
        // expert ID foreign key
        tbl
        .integer('expert_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('experts')
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
