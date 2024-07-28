const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedDate: Date,
});

module.exports = mongoose.model('Book', bookSchema);
