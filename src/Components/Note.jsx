import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import React from "react";

function Note() {
  return (
    <div className="px-7 py-6 rounded-lg shadow-md w-1/6 relative bg-white ml-12 text-gray-600 float-left mb-5 mt-8">
      <h1 className="underline mb-4">CISC 3320</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nesciunt
        sint ducimus voluptates incidunt, odit distinctio assumenda deleniti qui
        dolores odio aut provident, iure magnam ipsam explicabo maiores
        praesentium necessitatibus?
      </p>
      <button>
        <DeleteRoundedIcon
          className="bottom-3 right-3 absolute"
          sx={{ color: "#FFB72B" }}
        />
      </button>
    </div>
  );
}

export default Note;
