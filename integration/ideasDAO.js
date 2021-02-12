const db = require('./dbConnect');
const ideasDAO = class {
  async getAllIdeas(type) {
    console.log(`SELECT * from idea WHERE type = "solution" ORDER BY id`)
    return (await db.query(`SELECT * from idea WHERE type='${type}' ORDER BY id`)).rows;
  }
  async upVoteIdea(id) {
    return (await db.query(`UPDATE idea SET rating = rating + 1 WHERE id = ${id}`))
  }
}
module.exports = ideasDAO