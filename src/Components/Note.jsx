import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

function Note() {
  return (
    <div className="px-10 py-5 rounded-lg shadow-md w-1/6 relative bg-white mx-7 text-gray-700">
      <h1 className="underline mb-1">CISC 3320</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nesciunt
        sint ducimus voluptates incidunt, odit distinctio assumenda deleniti qui
        dolores odio aut provident, iure magnam ipsam explicabo maiores
        praesentium necessitatibus?
      </p>
      <DeleteIcon
        className="bottom-2 right-2 absolute"
        sx={{ color: "#FFB72B" }}
      />
    </div>
  );
}

export default Note;
