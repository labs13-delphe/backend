exports.seed = function(knex, Promise) {
  return knex("expert_topics")
    // .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("expert_topics").insert([
        { topic_id: 3, user_id: 5 },
        { topic_id: 3, user_id: 5 },
        { topic_id: 3, user_id: 5 },
        { topic_id: 4, user_id: 5 },
        { topic_id: 4, user_id: 5 },
        { topic_id: 4, user_id: 6 },
        { topic_id: 3, user_id: 7 },
        { topic_id: 1, user_id: 5 },
        { topic_id: 2, user_id: 5 },
        { topic_id: 3, user_id: 5 },
        { topic_id: 4, user_id: 5 },
        { topic_id: 5, user_id: 5 },
        { topic_id: 6, user_id: 6 },
        { topic_id: 7, user_id: 7 },
        { topic_id: 8, user_id: 5 },
        { topic_id: 8, user_id: 7 },
        { topic_id: 10, user_id: 5 },
        { topic_id: 10, user_id: 5 },
        { topic_id: 10, user_id: 5 },
        { topic_id: 10, user_id: 5 },
        { topic_id: 9, user_id: 7 }
      ]);
    });
};
