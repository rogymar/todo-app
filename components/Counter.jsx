import React from "react";

export function Counter({ total, completed }) {
  return (
    <div className="flex justify-center py-5">
      <h2 className="text-4xl">
        Has made
        <span className="text-turquesa mx-3 hover:text-gris">{completed}</span>
        task of
        <span className="text-turquesa mx-3 hover:text-gris">{total}</span>
      </h2>
    </div>
  );
}
