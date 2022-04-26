import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import React from "react";

function Note(props) {
  return (
    <div className="px-7 py-5 rounded-lg shadow-md relative bg-[#feff9c] bg-opacity-70 ml-11 text-gray-600 inline-block mb-1 mt-8 note-item">
      <h1 className="mb-3 font-bold">{props.title}</h1>
      <p>{props.content}</p>
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
