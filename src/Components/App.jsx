import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/read").then((response) => {
      setNotes(response.data);
    });
  }, [notes]);

  function deleteNote(index) {
    axios.delete(`http://localhost:3001/delete/${index}`);
  }

  return (
    <div
      className="h-screen dark:bg-[#202023] transition-colors duration-500"
      style={{ height: "100%" }}
    >
      <Header />
      <CreateArea />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
