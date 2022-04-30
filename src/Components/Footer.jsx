import React from "react";

function Footer() {
  return (
    <footer>
      <div className="absolute bottom-4 text-center w-full">
        <p className="text-gray-500 font-light text-center">
          &copy; {new Date().getFullYear()} Calvin Wong. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
