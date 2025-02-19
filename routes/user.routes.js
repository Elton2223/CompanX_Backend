const express = require('express');
const userController = require('../controllers/user.controller');
const cAuth = require("../middleware/check.auth");

const router = express.Router();

router.post('/register', userController.Register);
router.get('/login', userController.Login);
router.patch('/update/:email', userController.updateUser);
router.post('/getUser/:email', userController.getUser);
router.post('/getAllUser', userController.getAllUser);

module.exports = router;