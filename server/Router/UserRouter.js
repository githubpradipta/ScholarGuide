const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logOut, editUserLikes, editUserSaves, deleteOneSave, deleteAllSaves, editProfile, editProfileImage, getUser, DemoApi } = require('../Controller/UserController.js')
const {upload} = require('../Middleware/multer.js')
router
.get('/getuser/:id',getUser)
.post('/signup',registerUser)
.post('/signin',loginUser)
.post('/logout',logOut)
.post('/editprofile/:id',editProfile)
.post('/editprofileimage/:id',upload.single('file'),editProfileImage)
.post('/updateLikes',editUserLikes)
.post('/updateSaves',editUserSaves)
.post('/saves/delete/:uid',deleteOneSave)
.post('/saves/deleteall/:uid',deleteAllSaves)

.post('/demo',upload.single('file'),DemoApi);

module.exports = router;