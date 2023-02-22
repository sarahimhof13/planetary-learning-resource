const Note = require("../models/notesModel");
const mongoose = require("mongoose");

// get all notes
const allNotes = async (req, res) => {
  const notes = await Note.find({}).sort({ name: -1 });

  res.status(200).json(notes);
};

// get a single note
const singleNote = async (req, res) => {
  const { _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: "note does not exist" });
  }

  const note = await Note.findById(_id);

  res.status(200).json(note);
};

// add a note
const newNote = async (req, res) => {
  const {
    title, 
    body, 
    author, 
    createdAt
  } = req.body;

  try {
    const note = await Note.create({
        title, 
        body, 
        author, 
        createdAt
    });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a note

const deleteNote = async (req, res) => {
  const { _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ error: "No note exists" });
  }

  const note = await Note.findOneAndDelete({ _id: _id });

  if (!note) {
    return res.status(400).json({ error: "No note exists" });
  }

  res.status(200).json(note);
};

// update a note

const updateNote = async (req, res) => {
  const { _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ error: "No note exists" });
  }

  const note = await Note.findOneAndUpdate(
    { _id: _id },
    {
      ...req.body,
    }
  );

  if (!note) {
    return res.status(400).json({ error: "No note exists" });
  }

  res.status(200).json(note);
};

module.exports = {
  allNotes,
  singleNote,
  newNote,
  deleteNote,
  updateNote,
};
