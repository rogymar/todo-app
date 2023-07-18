import Image from "next/image";
import React from "react";

//SVG
import equis from "@/public/delete.svg";
import check from "@/public/check.svg";
import edit from "@/public/edit.svg";

export function Item({ text, completed, remove }) {
  return (
    <div className="flex items-center justify-between bg-white m-2 p-1 rounded-lg hover:bg-gris">
      <div className="flex gap-5">
        <button>
          <Image src={check} alt="remove-icon" className="h-5 w-5" />
        </button>
        <p className="hover:text-white">{text}</p>
      </div>
      <div className="flex gap-6">
        <button>
          <Image src={edit} alt="pencil-edit-icon" className="h-5 w-5" />
        </button>
        <button>
          <Image src={equis} alt="remove-icon" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
