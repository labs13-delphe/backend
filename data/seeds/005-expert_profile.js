exports.seed = function(knex, Promise) {
  return knex("expert_profile")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("expert_profile").insert([
        {
          user_id: 1,
          hourly_rate: 40,
          twitter: "@personalcomputer",
          linkedin: "linkedin.com/personalcomputer",
          facebook: "facebook.com/cool"
        },
        {
          user_id: 2,
          hourly_rate: 20,
          twitter: "@cuterealtor",
          linkedin: "linkedin.com/professionalbabe",
          facebook: "facebook.com/cutecoder"
        },
        {
          user_id: 3,
          hourly_rate: 4000,
          twitter: "@BillGatesDuh",
          linkedin: "linkedin.com/bill4thawin",
          facebook: "facebook.com/applesux"
        },
        {
          user_id: 4,
          hourly_rate: 4500,
          twitter: "@BetterThanBill",
          linkedin: "linkedin.com/professionalbabe",
          facebook: "facebook.com/windowssux"
        },
        {
          user_id: 5,
          hourly_rate: 40,
          twitter: "@Jenny",
          linkedin: "linkedin.com/Jenny",
          facebook: "facebook.com/Jennywastaken"
        },
        {
          user_id: 6,
          hourly_rate: 40,
          twitter: "@Lenny",
          linkedin: "linkedin.com/Lenny",
          facebook: "facebook.com/Lennywastaken"
        },
        {
          user_id: 7,
          hourly_rate: 40,
          twitter: "@Denny",
          linkedin: "linkedin.com/Denny",
          facebook: "facebook.com/Dennywastaken"
        }
      ]);
    });
};
