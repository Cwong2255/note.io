import React from "react";

function Footer() {
  return (
    <footer>
      <div className="flex justify-center">
        <p className="text-gray-500 font-light">
          Copyright &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
