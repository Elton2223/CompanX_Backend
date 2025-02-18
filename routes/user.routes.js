const express = require('express');
const userController = require('../controllers/user.controller');
const cAuth = require("../middleware/check.auth");

const router = express.Router();

router.post('/register', userController.Register);
router.post('/login', userController.Login);

module.exports = router;