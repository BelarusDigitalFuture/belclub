const ideasDAO = require('../integration/ideasDAO')
const ideasService =  class {
  constructor(){
    this.ideasDAO = new ideasDAO();
  }
  async getIdeas(type){
    return this.ideasDAO.getAllIdeas(type)
  }
  async upVote(id){
    return this.ideasDAO.upVoteIdea(id)
  }
}
module.exports = ideasService