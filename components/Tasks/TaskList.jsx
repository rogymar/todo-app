import React, { useContext } from "react";
import { TaskManagerContex } from "@/app/context";

//Components
import { Task } from "./Task";

export function TaskList() {
  const { searchTasks, doneTask, removeTask } = useContext(TaskManagerContex);

  return (
    <div className="bg-verde p-0.5 rounded-lg">
      <ul className="m-2 flex-col justify-between items-center">
        {searchTasks.map((tasks) => (
          <Task
            key={tasks.text}
            value={tasks.text}
            completed={tasks.completed}
            onComplete={() => doneTask(tasks.text)}
            onRemove={() => removeTask(tasks.text)}
          />
        ))}
      </ul>
    </div>
  );
}
