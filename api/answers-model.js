const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  add,
  remove,
  update
};

// Find all answers
async function find() {
  return db("answers");
}

function findById(id) {
  return db("answers").where({ id });
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
