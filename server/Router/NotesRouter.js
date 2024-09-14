const express = require('express');
const router = express.Router();
const { getNotes, setNoteLikes, approveNote, getCategories, getSavedNotes, getUploadedNotes, deleteNote} = require('../Controller/NoteController.js')
const { getUser } = require('../Middleware/auth')



router
.get('/',getUser,getCategories)
.get('/:categoryID',getUser,getNotes)
.get('/getuploads/:id',getUser,getUploadedNotes)
.post('/deletenote/:id',deleteNote)
.get('/saves/:uid',getUser,getSavedNotes)
.post('/like/:id', setNoteLikes)
.post('/upload',approveNote)


module.exports = router;