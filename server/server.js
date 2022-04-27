const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/notesDB");

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Note = mongoose.model("Note", noteSchema);


app.post("http://localhost:3000", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const newNote = new Note({
    title,
    content,
  });
  newNote.save();
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
