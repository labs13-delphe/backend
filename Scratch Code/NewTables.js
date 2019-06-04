
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
            tbl.string("user_type").defaultTo("expert");

        })

        .createTable('askers', tbl => {
            tbl.increments();

            tbl.string('first_name', 128).notNullable();
            tbl.string('last_name', 128).notNullable();
            tbl.string('username', 128).notNullable();
            tbl.string('password', 128).notNullable();
            tbl.string('email', 128).notNullable();
            tbl.text('bio');            
            tbl.string("user_type").defaultTo("asker");


        })

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
        
        .createTable('topics', tbl => {
            tbl.increments();
            
			tbl.string('topic').notNullable();
        })

        .createTable('topics_experts', tbl => {
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
            
            // expert ID foreign key
			tbl
            .integer('expert_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('experts')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        })
        .createTable('topics_questions', tbl => {
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

        .createTable('messages', tbl => {
            tbl.increments();
            
            // expert ID foreign key
			tbl
				.integer('expert_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('topics')
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
        .dropTableIfExists('experts')
        .dropTableIfExists('askers')
        .dropTableIfExists('questions')
        .dropTableIfExists('answers')
        .dropTableIfExists('topics')
        .dropTableIfExists('topics_experts')
        .dropTableIfExists('topics_questions')
        .dropTableIfExists('messages')
};