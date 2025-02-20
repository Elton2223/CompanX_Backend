const express = require('express');
const taskController = require('../controllers/task.controller');
const cAuth = require("../middleware/check.auth");
const router = express.Router();

router.post('/create', taskController.create); //creating task
router.post('/endTask', taskController.endTask); //end task 
router.patch('/inprogressTask/:taskRef', taskController.inprogressTask); //delete task 
router.patch('/pendingTask/:taskRef', taskController.pendingTask); //delete task 
//router.post('/getCategory', taskController.getCategory); // get tasks by category, it will be implemented if i still get more time
router.patch('/updateDescription/:description', taskController.updateDescription);
router.post('/getAll', taskController.getAll); //get all tasks

module.exports = router;