const db = require("../data/dbConfig");

module.exports = {
  findBy,
  addQuestionTopic,
  addExpertTopic
};

function findBy(topic) {
    return db("topics").where(topic).select("id").first();

}

function addQuestionTopic(record) {
    res.send("hello question topics")
}

function addExpertTopic(record) {
    res.send("hello expert topics")

}