import React from "react";
import Image from "next/image";

export function CustomButton({ img, descrip }) {
  return (
    <button className="hover:ring hover:ring-turquesa p-2 rounded-md">
      <Image src={img} alt={descrip} className="h-5 w-5" />
    </button>
  );
}
