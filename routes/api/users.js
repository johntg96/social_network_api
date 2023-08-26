const express = require('express');
const router = express.Router();

const Users = require('../../models/Users');

// Define routes
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
