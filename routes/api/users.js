const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.get('/', (req, res) => {
  // ...
});

router.post('/', (req, res) => {
  // ...
});

router.put('/:userId', (req, res) => {
  // ...
});

router.delete('/:userId', (req, res) => {
  // ...
});

module.exports = router;
