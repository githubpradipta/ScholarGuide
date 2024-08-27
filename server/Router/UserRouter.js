const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logOut, editUserLikes, editUserSaves, deleteOneSave, deleteAllSaves } = require('../Controller/UserController.js')

router
.post('/signup',registerUser)
.post('/signin',loginUser)
.post('/logout',logOut)
.post('/updateLikes',editUserLikes)
.post('/updateSaves',editUserSaves)
.post('/saves/delete/:uid',deleteOneSave)
.post('/saves/deleteall/:uid',deleteAllSaves)

module.exports = router;