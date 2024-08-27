const express = require('express');
const router = express.Router();
const { createNoteCategory } = require('../Controller/NoteController');

router
.post('/notes/createCategory',createNoteCategory);

module.exports = router;
