exports.seed = function(knex, Promise) {
  return knex("question_topics")
    // .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("question_topics").insert([
        { topic_id: 1, question_id: 1 },
        { topic_id: 2, question_id: 1 },
        { topic_id: 3, question_id: 1 },
        { topic_id: 4, question_id: 1 },
        { topic_id: 5, question_id: 1 },
        { topic_id: 6, question_id: 1 },
        { topic_id: 7, question_id: 1 },
        { topic_id: 1, question_id: 3 },
        { topic_id: 2, question_id: 3 },
        { topic_id: 3, question_id: 3 },
        { topic_id: 4, question_id: 3 },
        { topic_id: 5, question_id: 3 },
        { topic_id: 6, question_id: 3 },
        { topic_id: 7, question_id: 3 },
        { topic_id: 8, question_id: 6 },
        { topic_id: 8, question_id: 7 },
        { topic_id: 10, question_id: 8 },
        { topic_id: 10, question_id: 9 },
        { topic_id: 10, question_id: 10 },
        { topic_id: 10, question_id: 11 },
        { topic_id: 9, question_id: 8 }
      ]);
    });
};
