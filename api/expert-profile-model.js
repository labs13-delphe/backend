const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

function find() {
  return db("expert_profile");
}

function findById(id) {
  return db("expert_profile").where({ id: Number(id) });
}

function insert(expert) {
  return db("expert_profile")
    .insert(expert)
    .then(ids => ({ id: ids[0] }));
}

function update(id, expert_profile) {
  return db("expert_profile")
    .where("id", Number(id))
    .update(expert_profile);
}

function remove(id) {
  return db("expert_profile")
    .where("id", Number(id))
    .del();
}
