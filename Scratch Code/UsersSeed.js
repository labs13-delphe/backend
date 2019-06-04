const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "Jane",
          last_name: "Doe",
          username: "janedoe",
          password: bcrypt.hashSync("janedoe", 10), // rounds must match the Registration password hash
          email: "jane@company.com",
          bio: "I'm a primary school counselor with a passion for advancing our youth -- especially those who are under-served. I'm hoping to start an after-school program students interested in STEM! Looking for any resources or leads to make this possible!",
          user_type: "asker"
          
        },
        {
          first_name: "John",
          last_name: "Doe",
          username: "johndoe",
          password: bcrypt.hashSync("johndoe", 10),
          email: "john@company.com",
          bio: "I'm a stay-at-home dad with 4 kids who wants to improve my domestic skills! Any professional home-makers out there can give me a hand? ",
          user_type: "asker"
          
        },
        {
          first_name: "Bill",
          last_name: "Gates",
          username: "billgates",
          password: bcrypt.hashSync("billgates", 10),
          email: "bill@company.com",
          bio: "I just graduated college and want to improve my credit score and financial habits. I'm deciding between pursuing a master's in education or volunteering for a year. How can I become more financially independent?",
          user_type: "asker"
          
        },
        {
          first_name: "Steve",
          last_name: "Jobs",
          username: "stevejobs",
          password: bcrypt.hashSync("stevejobs", 10),
          email: "steve@company.com",
          bio: "I'm a young professional in San Francisco. The housing crisis and real and affordable places are small and not so private. I'm really looking to move into my own place soon but don't know where to start.",
          user_type: "asker"

        },
        {
          first_name: "Jenny",
          last_name: "Hen",
          username: "jennyhen",
          password: bcrypt.hashSync("jennyhen", 10), // rounds must match the Registration password hash
          email: "yo@yo.com",
          bio: "here to teach y'all!",
          user_type: "expert"
        },
        {
          first_name: "Lenny",
          last_name: "Ben",
          username: "lennyben",
          password: bcrypt.hashSync("lennyben", 10),
          email: "yo@yo.com",
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
