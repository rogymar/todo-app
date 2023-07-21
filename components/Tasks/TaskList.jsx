import React from "react";
export function TaskList({children}) {
  return (
    <div className="bg-verde p-0.5 rounded-lg">
      <ul className="m-2 flex-col justify-between items-center"> {children}
      </ul>
    </div>
  );
}
