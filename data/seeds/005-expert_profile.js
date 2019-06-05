exports.seed = function(knex, Promise) {
  return knex("expert_profile")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("expert_profile").insert([
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
