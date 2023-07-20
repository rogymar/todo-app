import React from "react";

//Components
import { Task } from "@/components/Tasks/Task";
import { TaskList } from "@/components/Tasks/TaskList";

const items = [
  { text: "Hacer la lloracion porque no se me se un estilo css", completed: false },
  { text: "Todo lo que no he hecho en 25 años", completed: false },
  { text: "Aprender a usar el checkbox", completed: false },
  { text: "Llorar porque no se me ve el Checkbox como queria", completed: false },
];

export function TaskBox() {
  return (
    <TaskList>
      {items.map((item) => (
        <Task key={item.text} text={item.text} completed={item.completed} />
      ))}
    </TaskList>
  );
}
