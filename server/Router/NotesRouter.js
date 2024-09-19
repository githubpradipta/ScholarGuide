const express = require('express');
const router = express.Router();
const { getNotes, setNoteLikes, approveNote, getCategories, getSavedNotes, getUploadedNotes, deleteNote, getAllNotes } = require('../Controller/NoteController.js')
const { getUser } = require('../Middleware/auth')



router
.get('/',getUser,getCategories)
.get('/notes',getAllNotes)
.get('/:categoryID',getUser,getNotes)
.get('/getuploads/:id',getUser,getUploadedNotes)
.post('/deletenote/:id',deleteNote)
.get('/saves/:uid',getUser,getSavedNotes)
.post('/like/:id', setNoteLikes)
.post('/approvednote/:id',approveNote)


module.exports = router;