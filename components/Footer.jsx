import React from "react";

export function Footer() {
  return (
    <footer className="flex gap-10 items-center justify-between mb-10 mx-10 md:mx-14 lg:mx-12 font-title text-texto text-xs md:text-base">
      <span className="text-xs md:text-base">{new Date().getFullYear()} &copy; All Rights Reserved</span>
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
