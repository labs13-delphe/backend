exports.seed = function(knex, Promise) {
  return knex("answers")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("answers").insert([
        {
          question_id: 1,
          user_id: 5,
          answer:
            "Definitely check to see if there are any MESA (Mathematics, Engineering, Science, Achievement) programs in your area. They have a lot of resources and volunteers who come to schools for this purpose!"
        },
        {
          question_id: 2,
          user_id: 5,
          answer:
            "Contact your school's district first to see if they can be of help. Or maybe try organizing a weekly carpool schedule."
        },
        {
          question_id: 3,
          user_id: 5,
          answer:
            "Definitely check to see if there are any MESA (Mathematics, Engineering, Science, Achievement) programs in your area. They have a lot of volunteers who come to schools for this purpose!"
        },
        {
          question_id: 4,
          user_id: 6,
          answer:
            "Grandma's yellow cake recipe on the food network is pretty good! Add a cup of applesauce for a more moist cake!"
        },
        {
          question_id: 5,
          user_id: 6,
          answer:
            "You should always have eggs, milk, fruit, vegetables, yogurt, hummus, salad, and lunch meats."
        }
      ]);
    });
};
