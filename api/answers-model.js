const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
  findUserAnswers
};

// Find all answers
async function find() {
  return db("answers");
  
}

// Find answer By ID
async function findById(id) {
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

//Find answers by user ID
async function findUserAnswers(id) {
  return db("answers")
  .join('questions', 'answers.question_id', '=', 'questions.id')
  .where({"answers.user_id": Number(id)})
  .select()
}