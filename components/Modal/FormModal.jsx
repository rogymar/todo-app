import { useContext, useState } from "react";
import { TaskManagerContex } from "@/app/context";

export function FormModal() {
  const { addNewTask, setOpenModal } = useContext(TaskManagerContex);

  const [newTaskValue, setNewTaskValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTaskValue(event.target.value);
  };

  return (
    <form
      className="flex-col gap-5 m-5 p-10 text-texto text-center fixed top-[280px] left-[500px] rounded-2xl bg-gris"
      onSubmit={onSubmit}
    >
      <label className="font-title">Añade tu nueva tarea.</label>
      <textarea
        className="w-full p-2 my-5 outline-gris"
        onChange={onChange}
        value={newTaskValue}
        placeholder="Escribe tu nueva tarea aquí..."
      />
      <div className="flex gap-10 items-center justify-center font-title">
        <button className="btn-custom" type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button
          className="btn-custom bg-verde hover:bg-turquesa hover:text-white"
          type="submit"
        >
          Añadir Task
        </button>
      </div>
    </form>
  );
}
