import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import React from "react";
function CreateArea() {
  return (
    <div className="flex justify-center h-1/3">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Note Title"
        className="rounded-xl shadow-lg resize-none focus:outline-none relative placeholder:pl-4 pt-5 mt-5"
      ></textarea>
      <button>
        <AddBoxRoundedIcon sx={{ color: "#FFB72B" }} />
      </button>
    </div>
  );
}

export default CreateArea;
