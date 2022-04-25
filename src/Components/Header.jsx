import DarkModeIcon from "@mui/icons-material/DarkMode";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import React from "react";
function Header() {
  return (
    <header>
      <div className="bg-[#FFD32D] bg-opacity-90 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl tracking-wide text-white mx-4 font-semibold">
            <EventNoteOutlinedIcon
              fontSize="large"
              sx={{ color: "#FFB72B" }}
              className="hover:-rotate-12 transition-transform duration-300 -rotate-6"
            />
            <span className="mx-2">note.io</span>
          </h1>
        </div>

        <button className="px-3 py-2 bg-[#A865C9] rounded-lg shadow-md mx-10">
          <DarkModeIcon sx={{ color: "white" }} />
          {/* <LightModeOutlinedIcon />         */}
        </button>
      </div>
    </header>
  );
}
export default Header;
