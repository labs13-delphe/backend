
exports.up = function(knex, Promise) {
  
    return knex.schema
    .createTable('questions', tbl => {
        tbl.increments();
        
        // user ID foreign key for asker
        tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
            
        tbl.string('title', 128);
        tbl.text('question').notNullable();
        tbl.string('date', 128);
        tbl.timestamps(true, true);
    })

};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('questions')

};
