import React, { useContext } from "react";
import Image from "next/image";

//SVG
import search from "@/public/search.svg";
import { TaskManagerContex } from "@/app/context";

export function Searcher() {
  const { searchValue, setSearchValue } = useContext(TaskManagerContex);

  return (
    <div className="flex items-center gap-3 bg-verde rounded-lg p-2">
      <Image
        src={search}
        alt="search-button"
        className="hover:ring hover:ring-turquesa p-1 rounded-md h-9 w-9"
      />
      <input
        className="w-full bg-white p-2 rounded-sm outline-gris"
        placeholder="Busca tareas, sólo escribe aquí..."
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}
