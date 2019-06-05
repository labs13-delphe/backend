exports.seed = function(knex, Promise) {
  return knex("topics")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("topics").insert([
        { topic: "Physics" },
        { topic: "Chemistry" },
        { topic: "Analytics" },
        { topic: "React" },
        { topic: "Javascript" },
        { topic: "Computer Science" },
        { topic: "Algebra" },
        { topic: "Childcare" },
        { topic: "Home Economics" },
        { topic: "Real Estate" }
      ]);
    });
};
