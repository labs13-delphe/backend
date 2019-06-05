exports.seed = function(knex, Promise) {
  return knex("messages")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("messages").insert([
        {
          author_id: 3,
          answer_id: 1,
          conversation_id: 1,
          message: "Could you help me understand how to do this thing?"
        },
        {
          author_id: 3,
          answer_id: 2,
          conversation_id: 2,
          message: "Could you help me understand how to do this thing?"
        },
        {
          author_id: 3,
          answer_id: 2,
          conversation_id: 2,
          message: "Could you help me understand how to do this thing?"
        },
        {
          author_id: 1,
          answer_id: 5,
          conversation_id: 3,
          message: "Could you help me understand how to do this thing?"
        },
        {
          author_id: 3,
          answer_id: 4,
          conversation_id: 4,
          message: "Could you help me understand how to do this thing?"
        },
        {
          author_id: 2,
          answer_id: 1,
          conversation_id: 5,
          message: "Could you help me understand how to do this thing?"
        },
        {
          author_id: 6,
          answer_id: 5,
          conversation_id: 6,
          message: "Could you help me understand how to do this thing?"
        },
        {
          author_id: 5,
          answer_id: 4,
          conversation_id: 7,
          message: "Could you help me understand how to do this thing?"
        }
      ]);
    });
};
