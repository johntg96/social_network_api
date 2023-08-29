const express = require('express');
const router = express.Router();
const thoughtController = require('../../controllers/thoughtController');

router.get('/', thoughtController.getAllThoughts);

router.post('/', thoughtController.createThought);

router.put('/:thoughtId', thoughtController.updateThought);
/*
PUT Request:
http://localhost:3001/api/thoughts/:userThoughtId
  {
    "username": "new_username",
    "email": "new_email@example.com"
  }
*/

router.delete('/:thoughtId', thoughtController.deleteThought);
/*
DELETE Request:
http://localhost:3001/api/thoughts/:userThoughtId
  [no body]
*/

module.exports = router;
