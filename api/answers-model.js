const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
  findUserAnswers,
  findByQuestionId
};

// Find all answers
function find() {
  return db("answers");
}


// Find answer By ID
function findById(id) {
  return db("answers")
    .select("*")
    .where({ id })
    .first();
}

// Add new answer
function add(answer) {
  return db("answers")
    .insert(answer, "id")
    .then(ids => ({ id: ids[0] }));
}

// Delete an answer
function remove(id) {
  return db("answers")
    .where({ id: Number(id) })
    .del();
}

// Update an answer
function update(id, answer) {
  return db("answers")
    .where({ id: Number(id) })
    .update(answer);
}


// ================================

//Find answers by user ID
async function findUserAnswers(id) {
  return db("answers")
  .join('questions', 'answers.question_id', '=', 'questions.id')
  .where({"answers.user_id": Number(id)})
  .select()
}

//Find Answers by question Id

function findByQuestionId(id) {
  return db("answers")
  .join("users", "answers.user_id", '=', "users.id")
  .where({"answers.question_id": id})
  .select()
}