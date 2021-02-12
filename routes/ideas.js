const express = require('express');
const ideas = require('../service/ideasService')

const router = express.Router();
const ideasService = new ideas();
router.get('/:type', function(req, res, next) {
  if (!req.params.type){
    res.status(400).send({error: 'missing params'})
  }
  ideasService.getIdeas(req.params.type).then((ideas)=>{
    res.send(ideas);
  })
});
router.put('/:id/upvote', (req, res)=>{
  if (!req.params.id){
    res.status(400).send({error: 'missing params'})
  }
  const result = ideasService.upVote(req.params.id);
  console.log(result);
  res.send(result);
})

module.exports = router;