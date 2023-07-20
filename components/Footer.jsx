import React from "react";

export function Footer() {
  return (
    <footer className="flex justify-between my-5 mx-10 text-base text-texto font-title">
      <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
      <p className="font-title">
        Icons in{" "}
        <a
          href="https://www.svgrepo.com/collection/web-5/"
          target="_blank"
          className="text-turquesa"
        >
          SVG Repo
        </a>
      </p>
      <p className="font-title">
        Made with 💚 by{" "}
        <a
          href="https://github.com/rogymar/todo-app"
          target="_blank"
          className="text-turquesa"
        >
          RogymarChirinos
        </a>
      </p>
    </footer>
  );
}
