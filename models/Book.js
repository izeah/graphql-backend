const mongoose = require("mongoose");

// create new schema
const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    release_year: Number,
    genre: String,
});

module.exports = mongoose.model("Book", BookSchema);
