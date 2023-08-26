const express = require('express');
const router = express.Router();

const Reactions = require('../../models/Reactions');

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
