import Image from "next/image";
import React from "react";

//SVG
import equis from "@/public/delete.svg";
import check from "@/public/check.svg";
import edit from "@/public/edit.svg";
import { CustomButton } from "../CustomButton";

export function Task({ text, completed, remove }) {
  return (
    <div className="bg-white m-2 flex justify-between items-center">
      <ul class="m-1">
        <li class="p-2 flex gap-5 items-center rounded-sm">
          <input
            type="checkbox"
            id={text}
            class="h-5 w-5 border-2 border-turquesa peer appearance-none rounded-md checked:bg-turquesa checked:border-none after:bg-check after:bg-center after:bg-no-repeat l hover:ring hover:ring-turquesa"
          />
          <label
            for={text}
            class="w-full cursor-pointer font-medium text-texto peer-checked:text-gris peer-checked:line-through"
          >
            {text}
          </label>
        </li>
      </ul>
      <div className="flex justify-between items-center gap-1 mx-2">
        <CustomButton img={edit} descrip='edit-button' />
        <CustomButton img={equis} descrip='remove-button' />
      </div>
    </div>
  );
}
