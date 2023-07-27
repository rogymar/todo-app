import React from "react";

export function TaskLoading() {
  return (
    <span className="">
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />
      <p className="">Cargando</p>
    </span>
  );
}
