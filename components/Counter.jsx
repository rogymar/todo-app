import { useContext } from "react";
import { TaskManagerContex } from "@/app/context";

export function Counter() {
  const { completedTasks, totalTasks } = useContext(TaskManagerContex);

  const congratulations = [
    "¡Felicidades! 🥳 Acabaste tus tareas.",
    "¡Productivo! 😜 Completaste tus tareas.",
    "¡Recompensa! 🍫 Por hacer tus tareas.",
    "¡No me engañas! 🤨 Sólo le diste a los botones.",
    "¡El King/Queen! 🤭 Culminaste todo.",
  ];

  let randomMessages = Math.floor(Math.random() * congratulations.length);

  const validator = () => {
    if (totalTasks === 0) {
      return <h2 className="textCustom">No tienes tareas pendientes 🤔 </h2>;
    } else if (totalTasks === completedTasks) {
      return (
        <h2 className="textCustom">{`${congratulations[randomMessages]}`}</h2>
      );
    } else {
      return (
        <h2 className="textCustom">
          Has completado
          <span className="spanText">{completedTasks}</span>
          tareas de
          <span className="spanText">{totalTasks}</span>
        </h2>
      );
    }
  };
  return <div className="flex justify-center py-10 lg:py-5">{validator()}</div>;
}
