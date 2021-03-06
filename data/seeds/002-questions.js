exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("questions")
    // .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("questions").insert([
        {
          user_id: 1,
          title: "After-school STEM Program",
          question:
            "What are some cool online resources for 3rd graders interested in STEM?",
          date: "June 3, 2019"
        },
        {
          user_id: 1,
          title: "Free Transportation",
          question:
            "Are there any transportation providers that are willing to sponsor rides to under-privileged primary school students?",
          date: "June 3, 2019"
        },
        {
          user_id: 1,
          title: "Robotics Mentorship",
          question:
            "Are there mentorship programs to help young children learn more about robotics?",
          date: "June 3, 2019"
        },
        {
          user_id: 2,
          title: "Basic Yellow Cake",
          question: "How do I make a basic but moist yellow cake?",
          date: "June 3, 2019"
        },
        {
          user_id: 2,
          title: "Stocking the Refrigerator",
          question:
            "What foods should I always make sure to have in stock at home?",
          date: "June 3, 2019"
        },
        {
          user_id: 2,
          title: "Healthy Bedtimes",
          question:
            "My kids' ages are from 2-12 years old. What are some good bedtimes for these ages?",
          date: "June 3, 2019"
        },
        {
          user_id: 2,
          title: "Breakfast Meltdown",
          question:
            "My 3-year-old refuses to eat his eggs. What are some strategies to get him to eat?",
          date: "June 3, 2019"
        },
        {
          user_id: 3,
          title: "Save More, Spend Less",
          question: "How do I teach myself to budget and spend responsibly?",
          date: "June 3, 2019"
        },
        {
          user_id: 3,
          title: "Credit Score Goals",
          question: "What are ways to increase my credit score?",
          date: "June 3, 2019"
        },
        {
          user_id: 4,
          title: "Real Estate Step One",
          question:
            "What are the first steps I need to take in finding my own home?",
          date: "June 3, 2019"
        },
        {
          user_id: 4,
          title: "Going to a House Showing",
          question:
            "Should I bring documents to a house showing? If so, what should I bring?",
          date: "June 3, 2019"
        }
      ]);
    });
};
