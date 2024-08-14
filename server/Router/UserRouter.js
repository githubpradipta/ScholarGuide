const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logOut } = require('../Controller/UserController.js')

router
.post('/signup',registerUser)
.post('/signin',loginUser)
.post('/logout',logOut)

module.exports = router;