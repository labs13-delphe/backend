const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  add,
  remove,
  update
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
      "questions.title",
      "questions.question",
      "questions.date",
      "questions.created_at"
    );

  const answers = await db("answers")
    .join("questions", "questions.id", "=", "answers.question_id")
    .where({ "questions.id": Number(id) })
    .select("answers.id", "answers.user_id", "answers.answer");

  return { ...question, answers: [...answers] };

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
