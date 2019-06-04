exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("topics")
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("topics").insert([
          { topic: "Jane" },
          { topic: "John" },
          { topic: "Bill" },
          { topic: "Steve"}
        ]);
      });
  };
  