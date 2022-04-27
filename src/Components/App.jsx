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
      console.log(response.data);
    });
  }, [notes]);

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="h-screen dark:bg-[#202023] transition-colors duration-500">
      <Header />
      <CreateArea />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
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
