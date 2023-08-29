const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);

router.put('/:userId', userController.updateUser);
/*
PUT Request:
http://localhost:3001/api/users/:userId
  {
    "username": "new_username",
    "email": "new_email@example.com"
  }
*/

router.delete('/:userId', userController.deleteUser);
/*
DELETE Request:
http://localhost:3001/api/users/:userId
  [no body]
*/

module.exports = router;
