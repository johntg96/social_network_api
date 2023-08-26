const express = require('express');
const router = express.Router();

const Reaction = require('../../models/Reaction');

router.get('/', (req, res) => {
  // ...
});

router.post('/', (req, res) => {
  // ...
});

router.delete('/:reactionId', (req, res) => {
  // ...
});

module.exports = router;
