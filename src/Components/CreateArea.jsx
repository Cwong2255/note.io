import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import React, { useState } from "react";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

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
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div className="shadow-md rounded-lg bg-white p-5 mx-auto my-7 relative w-1/3 text-lg text-gray-500">
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
        className="focus:outline-none w-full border-none resize-none p-1"
      />
      <textarea
        name="content"
        id=""
        cols="30"
        rows="4"
        onChange={handleChange}
        value={note.content}
        placeholder="Write a note..."
        className="resize-none focus:outline-none w-full border-none p-1"
      ></textarea>

      <button onClick={submitNote}>
        <AddBoxRoundedIcon
          sx={{ color: "#FFB72B" }}
          className="absolute bottom-3 right-3"
          fontSize="large"
        />
      </button>
    </div>
  );
}

export default CreateArea;
