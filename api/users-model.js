const db = require("../data/dbConfig");

module.exports = {
  add,
  remove,
  find,
  findBy,
  findById,
  findUserQuestions,
  update
};

async function add(user) {
  const [id] = await db("users")
    .insert(user)
    .returning("id");
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}

function remove(id) {
  return db("users")
    .where({ id })
    .delete();
}

function find() {
  return db("users").select("*");
}

// For Login
function findBy(filter) {
  return db("users")
    .where(filter)
    .first();
}

function findById(id) {
  return db("users")
    .select("*")
    .where({ id })
    .first();
}

async function findUserQuestions(id) {
  const user = await db("users")
    .select("users.id", "users.username", "users.email", "users.user_type")
    .where({ "users.id": Number(id) })
    .first();

  const questions = await db("questions")
    .join("users", "users.id", "=", "questions.user_id")
    .where({ "questions.user_id": Number(id) })
    .select("questions.id", "questions.title", "questions.question");

  const answers = await db("answers")
    .join("questions", "questions.id", "=", "answers.question_id")
    .where({ "questions.user_id": Number(id) })
    .select(
      "answers.id",
      "answers.question_id",
      "answers.user_id",
      "answers.answer"
    );

  return { ...user, questions: [...questions], answers: [...answers] };
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}

