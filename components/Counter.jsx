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
      return <h2 className="text-4xl">No tienes tareas pendientes 🤔 </h2>;
    } else if (totalTasks === completedTasks) {
      return (
        <h2 className="text-4xl">{`${congratulations[randomMessages]}`}</h2>
      );
    } else {
      return (
        <h2 className="text-4xl">
          Has completado
          <span className="text-turquesa mx-3 hover:text-gris">
            {completedTasks}
          </span>
          tareas de
          <span className="text-turquesa mx-3 hover:text-gris">
            {totalTasks}
          </span>
        </h2>
      );
    }
  };
  return <div className="flex justify-center py-5">{validator()}</div>;
}
