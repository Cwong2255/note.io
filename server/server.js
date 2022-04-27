const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/notesDB");

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Note = mongoose.model("Note", noteSchema);

app.post("/", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const newNote = new Note({
    title: title,
    content: content,
  });

  newNote.save();
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});