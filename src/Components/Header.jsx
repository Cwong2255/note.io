import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import React from "react";
import UseDarkMode from "../Hooks/useDarkMode";
function Header() {
  const [colorTheme, setTheme] = UseDarkMode();

  return (
    <header>
      <div className="bg-[#FFD32D] bg-opacity-90 py-4 flex justify-between items-center">
        <div className="mx-8">
          <h1 className="text-3xl tracking-wide text-white font-semibold">
            <EventNoteRoundedIcon
              fontSize="large"
              sx={{ color: "#FFB72B" }}
              className="hover:-rotate-12 transition-transform duration-300 -rotate-6"
            />
            <span className="mx-2">note.io</span>
          </h1>
        </div>
        <div className="mx-10">
          <button
            onClick={() => setTheme(colorTheme)}
            className="px-3 py-2 bg-[#A865C9] rounded-lg shadow-md"
          >
            {colorTheme === "light" ? (
              <DarkModeRoundedIcon sx={{ color: "white" }} />
            ) : (
              <LightModeOutlinedIcon sx={{ color: "white" }} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
