const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
  getQuestionsByTopic,
  getQbyT
};

// Find all questions
async function find() {
  return db("questions"); 
}

// Find single question by ID
async function findById(id) {
  const question = await db("questions")
    .where({ id: Number(id) })
    .first()
    .select(
      "questions.id",
      "questions.user_id",
      "questions.title",
      "questions.question",
      "questions.date",
      "questions.created_at"
    );

  const answers = await db("answers")
    .join("questions", "questions.id", "=", "answers.question_id")
    .where({ "questions.id": Number(id) })
    .select("answers.id", "answers.user_id", "answers.answer");

  const topics = await db("topics")
  .join("question_topics", "question_topics.topic_id", "=", "topics.id")
  .where({ "question_topics.question_id": Number(id) })
  .select("topics.id", "topics.topic");


  return { ...question, answers: [...answers], topics: [...topics] };

  // return db("questions")
  // .where({ id: Number(id) })
  // .first();
}

// Add new question
function add(question) {
  return db("questions")
    .insert(question, "id")
    .then(ids => ({ id: ids[0] }));
}

// Delete a question
function remove(id) {
  return db("questions")
    .where({ id: Number(id) })
    .del();
}

// Update a question
function update(id, question) {
  return db("questions")
    .where({ id: Number(id) })
    .update(question);
}

//Get questions by topic
function getQuestionsByTopic(topic_id) {
    return db.raw(
      `SELECT * FROM question_topics as qt JOIN questions as q ON (qt.question_id == q.id) WHERE qt.topic_id == ${topic_id}`
    )
}

//GET questions by topic IDs
function getQbyT(topic_ids) {
return db("question_topics")
    .join("questions", "question_topics.id", "=", "questions.id")
    .join("topics", "topics.id", "=", "question_topics.topic_id")
    .whereIn("question_topics.topic_id", [...topic_ids])
    .select()
}