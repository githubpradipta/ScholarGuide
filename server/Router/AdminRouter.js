const express = require('express');
const router = express.Router();
const { createNoteCategory, reviewNotes } = require('../Controller/NoteController');
const {upload} = require('../Middleware/multer.js')

router
.post('/notes/createCategory',createNoteCategory)
.post('/notes/review/:id',upload.single('file'),reviewNotes)
// .get('/notes/getnotes/:status',getNotesByStatus)

module.exports = router;
