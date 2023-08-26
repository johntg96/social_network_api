const express = require('express');
const router = express.Router();

const Thoughts = require('../../models/Thoughts');

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
