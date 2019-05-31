
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('messages', tbl => {
    tbl.increments();
    
    // expert ID foreign key
    tbl
        .integer('expert_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('experts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    
    // asker ID foreign key
    tbl
    .integer('asker_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('askers')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    tbl.text('message').notNullable();
    tbl.timestamps(true, true);

})
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('messages')

};
