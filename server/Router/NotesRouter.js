const express = require('express');
const router = express.Router();
const { getNotes, setNoteLikes, createNote, getCategories, getSavedNotes} = require('../Controller/NoteController.js')
const { getUser } = require('../Middleware/auth')


router
.get('/',getUser,getCategories)
.get('/:categoryID',getUser,getNotes)
.get('/saves/:uid',getSavedNotes)
.post('/like/:id', setNoteLikes)
.post('/createNotes', createNote)

module.exports = router;