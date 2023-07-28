import React from "react";
import Image from "next/image";

// SVG
import loading from "@/public/load.svg";

export function TaskLoading() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 fixed top-[200px] left-[50px] md:top-[160px] md:left-[140px] lg:top-[230px] lg:left-[450px] rounded-2xl bg-gris border-4 border-turquesa bg-opacity-90 w-auto h-auto p-10 md:p-20">
      <Image
        src={loading}
        alt="loading-icon"
        className="w-10 h-10 animate-spin"
      />
      <p className="text-xl md:text-3xl font-title">Verificando si existen datos...</p>
    </div>
  );
}
