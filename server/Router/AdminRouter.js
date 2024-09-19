const express = require('express');
const router = express.Router();
const { createNoteCategory, reviewNotes, getPendingNotes } = require('../Controller/NoteController');
const {upload} = require('../Middleware/multer.js')

router
.get('/notes/getpendings',getPendingNotes)
.post('/notes/createCategory',createNoteCategory)
.post('/notes/review/:id',upload.single('file'),reviewNotes)
// .get('/notes/getnotes/:status',getNotesByStatus)

module.exports = router;
