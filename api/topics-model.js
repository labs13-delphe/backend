const db = require("../data/dbConfig");

module.exports = {
  find,
  findBy,
  findQuestionTopics,
  addQuestionTopic,
  addExpertTopic,
  getExpertTopics
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

function findQuestionTopics() {
  return db("question_topics");
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

//get all topics that the expert is expert in

function getExpertTopics(id) {
  return db.raw(
    `select DISTINCT (topics.topic), topics.id from users join expert_topics on users.id=expert_topics.user_id join topics on expert_topics.topic_id=topics.id where users.id=${id}`
  )
}
