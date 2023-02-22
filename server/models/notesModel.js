const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// Schema for notes
const notesSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      body: {
        type: String,
        required: true
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'username'
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    });

module.exports = mongoose.model('Note', notesSchema, 'Notes');