"use client";
import { useState } from "react";
import Image from "next/image";

//Components
import { Counter } from "./Counter";
import { Searcher } from "./Searcher";
import { AddButton } from "./AddButton";
import { TaskList } from "./Tasks/TaskList";
import { Task } from "./Tasks/Task";

//Image
import principal from "@/public/principal.png";

const defaultItems = [
  {
    text: "Hacer la lloracion porque no se me se un estilo css",
    completed: false,
  },
  { text: "Todo lo que no he hecho en 25 años", completed: false },
  { text: "Aprender a usar el checkbox", completed: false },
  {
    text: "Llorar porque no se me ve el Checkbox como queria",
    completed: false,
  },
  {
    text: "No me quedo pero arregle otras cosas",
    completed: false,
  },
  {
    text: "Hola, Hola, Hola",
    completed: false,
  },
  {
    text: "Fue dificil de entender jajaja",
    completed: false,
  },
];

export function TaskPage() {
  const [items, setItems] = useState(defaultItems);
  const [searchValue, setSearchValue] = useState("");

  // Función que permite filtrar la cantidad total que exiten de Task y cuántas están completadas para controlar el contador.
  const completedTasks = items.filter((item) => !!item.completed).length;
  const totalTask = items.length;

  // Función que permite validar las coincidencias entre lo que se busca y el texto de las Tasks que sirve al buscador.
  const searchTasks = items.filter((item) => {
    return item.text
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });

  // Función que actualiza el estado de las Tasks para marcarlas o desmarcarlas como completadas al hacer click.
  const doneTask = (text) => {
    const newTasks = [...items];
    const tasksIndex = newTasks.findIndex((task) => task.text === text);
    newTasks[tasksIndex].completed === true
      ? (newTasks[tasksIndex].completed = false)
      : (newTasks[tasksIndex].completed = true);
    setItems(newTasks);
  };

  // Función para eliminar Tasks
  const removeTask = (text) => {
    const newTasks = [...items];
    const tasksIndex = newTasks.findIndex((task) => task.text === text);
    newTasks.splice(tasksIndex, 1);
    setItems(newTasks);
  };

  return (
    <>
      <div className="w-full text-center">
        <h1 className="text-7xl">Task Manager</h1>
        <Counter completed={completedTasks} total={totalTask} />
        <Image
          src={principal}
          alt="presentation-image"
          className="w-full h-auto"
        />
      </div>
      <div className="w-full">
        <Searcher
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <AddButton />
        <TaskList>
          {searchTasks.map((item) => (
            <Task
              key={item.text}
              text={item.text}
              completed={item.completed}
              onComplete={() => doneTask(item.text)}
              onDelete={() => removeTask(item.text)}
            ></Task>
          ))}
        </TaskList>
      </div>
    </>
  );
}
