const express = require('express');
const router = express.Router();
const thoughtController = require('../../controllers/thoughtController');

router.get('/', thoughtController.getAllThoughts);

router.post('/', thoughtController.createThought);

router.put('/:thoughtId', thoughtController.updateThought);

router.delete('/:thoughtId', thoughtController.deleteThought);

module.exports = router;
