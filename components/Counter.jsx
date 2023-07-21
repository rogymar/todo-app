import React from "react";

export function Counter({ total, completed }) {
  const congratulations = [
    "¡Felicidades! 🥳 Acabaste tus tareas.",
    "¡Productivo! 😜 Completaste tus tareas.",
    "¡Recompensa! 🍫 Por hacer tus tareas.",
    "¡No me engañas! 🤨 Sólo le diste a los botones.",
    "¡El King/Queen! 🤭 Culminaste todo.",
  ];

  let randomMessages = Math.floor(Math.random() * congratulations.length);

  const validator = () => {
    if (total === 0) {
      return <h2 className="text-4xl">¿Seguro no tienes nada qué hacer? 🤔</h2>;
    } else if (total === completed) {
      return (
        <h2 className="text-4xl">{`${congratulations[randomMessages]}`}</h2>
      );
    } else {
      return (
        <h2 className="text-4xl">
          Has completado
          <span className="text-turquesa mx-3 hover:text-gris">
            {completed}
          </span>
          tareas de
          <span className="text-turquesa mx-3 hover:text-gris">{total}</span>
        </h2>
      );
    }
  };
  return <div className="flex justify-center py-5">{validator()}</div>;
}
