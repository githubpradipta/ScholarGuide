const express = require('express');
const router = express.Router();
const { getNotes, setNoteLikes, approveNote, getCategories, getSavedNotes} = require('../Controller/NoteController.js')
const { getUser } = require('../Middleware/auth')



router
.get('/',getUser,getCategories)
.get('/:categoryID',getUser,getNotes)
.get('/saves/:uid',getSavedNotes)
.post('/like/:id', setNoteLikes)
.post('/upload',approveNote)


module.exports = router;