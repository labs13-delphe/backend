const db = require("../data/dbConfig");

module.exports = {
  find,
  findBy,
  addQuestionTopic,
  addExpertTopic
};

function find() {
  return db("topics");
}

function findBy(topic) {
  return db("topics")
    .where(topic)
    .select("id")
    .first();
}

function addQuestionTopic(record) {
  return db("question_topics")
    .insert(record, "id")
    .then(ids => ({ id: ids[0] }));
}

function addExpertTopic(record) {
  return db("expert_topics")
    .insert(record, "id")
    .then(ids => ({ id: ids[0] }));
}
