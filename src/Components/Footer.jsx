import React from "react";

function Footer() {
  return (
    <footer>
      <div className="absolute bottom-4 text-center w-full">
        <p className="text-gray-500 font-light text-center">
          Copyright &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
