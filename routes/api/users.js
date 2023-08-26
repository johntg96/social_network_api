const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.get('/', userController.getAllUsers);

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
