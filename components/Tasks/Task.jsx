import React from "react";
import Image from "next/image";

//SVG
import checkWhite from "@/public/check-white.svg";
import checkColor from "@/public/check-color.svg";
import equis from "@/public/delete.svg";
import pencil from "@/public/edit.svg";

export function Task({ value, completed, onComplete, onEdit, onRemove }) {
  return (
    <li className="bg-white flex gap-3 items-center px-2 py-1 my-2 rounded-sm">
      <button className="peer" onClick={onComplete}>
        {completed ? (
          <Image src={checkColor} alt="no-check-icon" className="h-10 w-10" />
        ) : (
          <Image src={checkWhite} alt="check-icon" className="h-10 w-10" />
        )}
      </button>
      <p
        onClick={onComplete}
        className={
          completed
            ? "w-full cursor-pointer font-medium text-gris line-through"
            : "w-full cursor-pointer font-medium text-texto"
        }
      >
        {value}
      </p>
      <button className="btn-custom" onClick={onRemove}>
        <Image src={equis} alt="delete-button" className="h-7 w-7" />
      </button>
    </li>
  );
}
