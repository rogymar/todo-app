import Image from "next/image";
import React from "react";

//SVG
import addPlus from "@/public/add.svg";

export function AddNewTask({ setOpenModal }) {
  return (
    <button
      className="flex gap-3 w-full items-center justify-center bg-gris text-gray-600 p-4 rounded-lg my-3 hover:bg-verde hover:text-texto"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      <Image src={addPlus} alt="plus-icon" className="w-6 h-6" />
      Añade una nueva tarea.
    </button>
  );
}
