
exports.up = function(knex, Promise) {
    
    return knex.schema
    .createTable('experts', tbl => {
        tbl.increments();
        
        tbl.string('first_name', 128).notNullable();
        tbl.string('last_name', 128).notNullable();
        tbl.string('username', 128).notNullable();
        tbl.string('password', 128).notNullable();
        tbl.string('email', 128).notNullable();
        tbl.string('age', 128);
        tbl.string('gender', 128);
        tbl.string('location', 128);
        tbl.string('languages', 128);
        tbl.integer('years_of_experience');
        tbl.text('certs');
        tbl.text('bio');
        tbl.text('expertise');
        tbl.string('linkedin');
        tbl.string('twitter');
        tbl.string('facebook');
        tbl.string('image_url');

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('experts')
};
