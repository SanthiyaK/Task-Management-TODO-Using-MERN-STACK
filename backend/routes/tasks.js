const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const {authMiddleware} = require('../middleware/authMiddleware');

router.post('/' , createTask);
router.get('/' , getTasks);
router.put('/:id' ,updateTask);
router.delete('/:id'/* ,authMiddleware, */,deleteTask);

module.exports = router;