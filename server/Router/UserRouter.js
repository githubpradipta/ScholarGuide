const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logOut, editUserLikes, editUserSaves, deleteOneSave, deleteAllSaves, editProfile, getUser } = require('../Controller/UserController.js')
const {upload} = require('../Middleware/multer.js')
router
.get('/getuser/:id',getUser)
.post('/signup',registerUser)
.post('/signin',loginUser)
.post('/logout',logOut)
.post('/editprofile/:id',upload.single('file'),editProfile)
.post('/updateLikes',editUserLikes)
.post('/updateSaves',editUserSaves)
.post('/saves/delete/:uid',deleteOneSave)
.post('/saves/deleteall/:uid',deleteAllSaves)

module.exports = router;