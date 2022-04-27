import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import axios from "axios";
import React, { useState } from "react";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    axios.post("http://localhost:3001/", note);
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  function expandNote() {
    setExpanded(true);
  }

  return (
    <div className="shadow-md rounded-lg bg-white p-5 mx-auto my-7 relative w-1/3 text-lg text-gray-500">
      {isExpanded ? (
        <div>
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            className="focus:outline-none w-full border-none resize-none p-1"
          />
          <button onClick={submitNote}>
            <AddBoxRoundedIcon
              sx={{ color: "#FFB72B" }}
              className="absolute bottom-3 right-3"
              fontSize="large"
            />
          </button>
        </div>
      ) : null}

      <textarea
        name="content"
        id=""
        rows={isExpanded ? 4 : 1}
        onChange={handleChange}
        onClick={expandNote}
        value={note.content}
        placeholder="Write a note..."
        className="resize-none focus:outline-none w-full border-none p-1"
      ></textarea>
    </div>
  );
}

export default CreateArea;
