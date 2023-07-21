import React from "react";
import Image from "next/image";

//SVG
import search from "@/public/search.svg";

export function Searcher({ value, onChange }) {
  return (
    <div className="flex items-center gap-3 bg-verde rounded-lg p-2">
      <button className="btn-custom">
        <Image src={search} alt="search-button" className="h-7 w-7" />
      </button>
      <input
        className="w-full bg-white p-2 rounded-sm outline-gris"
        placeholder="Search Task..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
