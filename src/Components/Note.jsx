import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div
      className="px-7 py-5 rounded-lg shadow-md relative bg-[#feff9c] bg-opacity-60 dark:bg-opacity-95 ml-11 text-gray-600 inline-block mb-1 mt-8"
      style={{ width: "282px" }}
    >
      <h1 className="mb-3 font-bold break-words">{props.title}</h1>
      <p className="break-words">{props.content}</p>
      <button onClick={handleClick}>
        <DeleteRoundedIcon
          className="bottom-3 right-3 absolute"
          sx={{ color: "#FFB72B" }}
        />
      </button>
    </div>
  );
}
export default Note;
