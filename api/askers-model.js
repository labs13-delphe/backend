const db = require("../data/dbConfig");

module.exports = {
findAskerById,
findAskers
}

async function findAskerById(id) {
    const asker = await db("askers")
      .select("*")
      .where({ "askers.id": Number(id) })
      .first();
  
    const questions = await db("questions")
      .join("askers", "askers.id", "=", "questions.asker_id")
      .where({ "questions.asker_id": Number(id) })
      .select(
        "questions.id",
      "questions.title",
      "questions.question",
      "questions.question_topic",
      "questions.date",
    );

    const answers = await db("answers")
    .join("questions", "questions.id", "=", "answers.question_id")
    .where({ "questions.asker_id": Number(id) })
    .select(
        "answers.id",
        "answers.question_id",
        "answers.expert_id",
        "answers.answer"
    );
  
    return { ...asker, questions: [...questions], answers: [...answers] };
  }
  
  function findAskers() {
    return db("askers").select("*");
  }