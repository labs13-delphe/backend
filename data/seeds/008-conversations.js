exports.seed = function(knex, Promise) {
  return knex("conversations")
    // .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("conversations").insert([
        { author_id: 3, answer_id: 1 },
        { author_id: 3, answer_id: 2 },
        { author_id: 1, answer_id: 5 },
        { author_id: 3, answer_id: 4 },
        { author_id: 2, answer_id: 1 },
        { author_id: 6, answer_id: 5 },
        { author_id: 5, answer_id: 4 }
      ]);
    });
};
