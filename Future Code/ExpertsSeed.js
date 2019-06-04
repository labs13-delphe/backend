const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("experts")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("experts").insert([
        {
          first_name: "Jenny",
          last_name: "Hen",
          username: "jennyhen",
          password: bcrypt.hashSync("jennyhen", 10), // rounds must match the Registration password hash
          email: "yo@yo.com",
          age: "22",
          gender: "female",
          location: "texas",
          languages: "english",
          years_of_experience: 4,
          certs: "graduate degree",
          bio: "here to teach y'all!",
          expertise: "math"
        },
        {
          first_name: "Lenny",
          last_name: "Ben",
          username: "lennyben",
          password: bcrypt.hashSync("lennyben", 10),
          email: "yo@yo.com",
          age: "22",
          gender: "male",
          location: "texas",
          languages: "english",
          years_of_experience: 4,
          certs: "graduate degree",
          bio: "here to teach y'all!",
          expertise: "real estate"
        },
        {
          first_name: "Denny",
          last_name: "Ken",
          username: "dennyken",
          password: bcrypt.hashSync("dennyken", 10),
          email: "yo@yo.com",
          age: "22",
          gender: "male",
          location: "texas",
          languages: "english",
          years_of_experience: 4,
          certs: "graduate degree",
          bio: "here to teach y'all!",
          expertise: "food"
        }
      ]);
    });
};
