const express = require('express');
const router = express.Router();

const Thought = require('../../models/Thought');

router.get('/', (req, res) => {
  // ...
});

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
