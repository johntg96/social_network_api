const express = require('express');
const router = express.Router();
const thoughtController = require('../../controllers/thoughtController');

const Thought = require('../../models/Thought');

router.get('/', thoughtController.getAllThoughts);

router.post('/', (req, res) => {
  // ...
});

router.put('/:thoughtId', (req, res) => {
  // ...
});

router.delete('/:thoughtId', (req, res) => {
  // ...
});

module.exports = router;
