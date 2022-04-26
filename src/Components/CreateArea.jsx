import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import React from "react";
function CreateArea() {
  return (
    <div>
      <form
        action=""
        className="shadow-md rounded-lg bg-white p-5 mx-auto my-7 relative w-1/3 text-lg text-gray-500"
      >
        <input
          name="title"
          placeholder="Title"
          className="focus:outline-none w-full border-none resize-none p-1"
        />
        <textarea
          name="content"
          id=""
          cols="30"
          rows="10"
          placeholder="Write a note..."
          className="resize-none focus:outline-none w-full border-none p-1"
        ></textarea>

        <button>
          <AddBoxRoundedIcon
            sx={{ color: "#FFB72B" }}
            className="absolute bottom-3 right-3"
            fontSize="large"
          />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
