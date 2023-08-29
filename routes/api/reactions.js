const express = require('express');
const router = express.Router();
const reactionController = require('../../controllers/reactionController');

router.get('/', reactionController.getAllReactions);

router.post('/', reactionController.createReaction);

router.put('/:reactionId', reactionController.updateReaction);
/*
PUT Request:
http://localhost:3001/api/reactions/:id
  {
    "reactionBody": "Updated reaction body"
  }
*/

router.delete('/:reactionId', reactionController.deleteReaction);
/*
DELETE Request:
http://localhost:3001/api/reactions/:id
  [no body]
*/

module.exports = router;
