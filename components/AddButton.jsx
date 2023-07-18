import Image from "next/image";
import React from "react";

//SVG
import addPlus from "@/public/add.svg";

export function AddButton() {
  return (
      <button className='flex gap-3 items-center justify-center bg-gris text-white p-2 rounded-lg my-4 hover:bg-verde hover:text-gris'>
        <Image src={addPlus} alt="plus-icon" className="w-6 h-6" />
        New Task </button>
  );
}
