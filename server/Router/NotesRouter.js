const express = require('express');
const router = express.Router();
const { getNotes, setNoteLikes, createNote } = require('../Controller/NoteController.js')
const { getUser } = require('../Middleware/auth')


router
.get('/:category',getUser,getNotes)
.post('/like/:id', setNoteLikes)
.post('/', createNote)

module.exports = router;