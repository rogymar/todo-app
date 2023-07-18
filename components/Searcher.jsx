import Image from "next/image";
import React from "react";

//SVG
import search from "@/public/search.svg";

export function Searcher() {
  return (
    <div className="flex items-center gap-3 bg-verde rounded-lg p-2">
      <button>
        <Image src={search} alt="magnifying-glass-icon" className="h-5 w-5" />
      </button>
      <input
        placeholder="Search To Do..."
        className="w-full bg-white p-2 rounded-lg outline-gris"
      />
    </div>
  );
}
