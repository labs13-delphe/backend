const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("askers")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("askers").insert([
        {
          first_name: "Jane",
          last_name: "Doe",
          username: "janedoe",
          password: bcrypt.hashSync("janedoe", 10), // rounds must match the Registration password hash
          email: "jane@company.com",
          bio: "I'm a primary school counselor with a passion for advancing our youth -- especially those who are under-served. I'm hoping to start an after-school program students interested in STEM! Looking for any resources or leads to make this possible!",
          
        },
        {
          first_name: "John",
          last_name: "Doe",
          username: "johndoe",
          password: bcrypt.hashSync("johndoe", 10),
          email: "john@company.com",
          bio: "I'm a stay-at-home dad with 4 kids who wants to improve my domestic skills! Any professional home-makers out there can give me a hand? ",
          
        },
        {
          first_name: "Bill",
          last_name: "Gates",
          username: "billgates",
          password: bcrypt.hashSync("billgates", 10),
          email: "bill@company.com",
          bio: "I just graduated college and want to improve my credit score and financial habits. I'm deciding between pursuing a master's in education or volunteering for a year. How can I become more financially independent?",
          
        },
        {
          first_name: "Steve",
          last_name: "Jobs",
          username: "stevejobs",
          password: bcrypt.hashSync("stevejobs", 10),
          email: "steve@company.com",
          bio: "I'm a young professional in San Francisco. The housing crisis and real and affordable places are small and not so private. I'm really looking to move into my own place soon but don't know where to start.",

        }
      ]);
    });
};
