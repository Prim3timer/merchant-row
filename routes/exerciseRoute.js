const express = require('express');
const router = express.Router();


const exerciseController = require('../controllers/exerciseController');

router.route('/').post(exerciseController.addExercise);
router.route('/').get(exerciseController.getExercises);
router.route('/:id').delete(exerciseController.deleteEntry);

module.exports = router;