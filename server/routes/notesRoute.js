const express = require("express")

const {
    allNotes,
    singleNote,
    newNote,
    deleteNote,
    updateNote,
} = require ("../controllers/notesController")

const router = express.Router();

// new note
router.post("/", newNote)

// All notes
router.get("/", allNotes)

// Single note
router.get("/:_id", singleNote)

// Update note
router.patch("/:_id", updateNote)

// Delete note
router.delete("/:_id", deleteNote)

module.exports = router;