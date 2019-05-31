
exports.up = function(knex, Promise) {
  
    return knex.schema
    .createTable('questions', tbl => {
        tbl.increments();
        
        // asker ID foreign key
        tbl
            .integer('asker_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('askers')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
            
        tbl.string('title', 128);
        tbl.text('question').notNullable();
        tbl.string('question_topic').notNullable();
        tbl.string('date', 128);
        tbl.timestamps(true, true);
    })

};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('questions')

};
