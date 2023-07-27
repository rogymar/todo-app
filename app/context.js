'use client'

import { useState, createContext } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const TaskManagerContex = createContext()

export function TasksProvider({ children }) {
    const {
        item: tasks,
        saveItems,
        loading,
        error,
    } = useLocalStorage("TASK_MANAGER", []);
    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false)

    // Filtrado de Task completas y totales para el contador.
    const completedTasks = tasks.filter((item) => !!item.completed).length;

    const totalTasks = tasks.length;

    // Validacion de coincidencias para el buscador.
    const searchTasks = tasks.filter((item) => {
        const taskText = item.text.toLocaleLowerCase()
        const searchText = searchValue.toLowerCase()
        return taskText.includes(searchText)
    });

    //Añadir Task Nueva
    const addNewTask = (text) => {
        const newTasks = [...tasks];
        newTasks.push({
            text,
            completed: false,
        })
        saveItems(newTasks);
    };

    // Actualizacion de las task en completadas o incompletas.
    const doneTask = (text) => {
        const newTasks = [...tasks];
        const tasksIndex = newTasks.findIndex((task) => task.text === text);
        newTasks[tasksIndex].completed === true
            ? (newTasks[tasksIndex].completed = false)
            : (newTasks[tasksIndex].completed = true);
        saveItems(newTasks);
    };

    // Función para eliminar Tasks
    const removeTask = (text) => {
        const newTasks = [...tasks];
        const tasksIndex = newTasks.findIndex((task) => task.text === text);
        newTasks.splice(tasksIndex, 1);
        saveItems(newTasks);
    };

    return (
        <TaskManagerContex.Provider value={{
            loading,
            error,
            completedTasks,
            totalTasks,
            searchValue,
            setSearchValue,
            searchTasks,
            addNewTask,
            doneTask,
            removeTask,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TaskManagerContex.Provider>
    )
}