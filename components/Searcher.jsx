import Image from "next/image";
import React from "react";

//SVG
import search from "@/public/search.svg";
import { CustomButton } from "./CustomButton";

export function Searcher() {
  return (
    <div className="flex items-center gap-3 bg-verde rounded-lg p-2">
      <CustomButton img={search} descrip='search-button' />
      <input
        placeholder="Search Task..."
        className="w-full bg-white p-2 rounded-sm outline-gris"
      />
    </div>
  );
}
