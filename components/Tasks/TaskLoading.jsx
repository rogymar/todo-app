import React from "react";

export function TaskLoading() {
  return (
    <span className="">
      <svg className="animate-spin h-10 w-10 mr-3 ..." viewBox="0 0 24 24" />
      <p className="">Cargando</p>
    </span>
  );
}
