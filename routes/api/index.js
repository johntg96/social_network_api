const express = require('express');
const router = express.Router();

const reactionsRoutes = require('./reactions');
const thoughtsRoutes = require('./thoughts');
const usersRoutes = require('./users');

router.use('/reactions', reactionsRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
