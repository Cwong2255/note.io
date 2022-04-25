import EventNoteIcon from "@mui/icons-material/EventNote";
import React from "react";
function Header() {
  return (
    <header>
      <div className="bg-[#FFD32D] bg-opacity-90 py-5">
        <EventNoteIcon />
        <h1 className="text-3xl tracking-wide text-white mx-4 font-semibold">
          Note.IO
        </h1>
      </div>
    </header>
  );
}
export default Header;
