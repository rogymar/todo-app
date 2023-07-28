"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { TaskManagerContex } from "@/app/context";

//Components
import { Counter } from "./Counter";
import { Searcher } from "./Searcher";
import { AddNewTask } from "./AddNewTask";
import { TaskList } from "./Tasks/TaskList";
import { TaskError } from "./Tasks/TaskError";
import { TaskLoading } from "./Tasks/TaskLoading";
import { Modal } from "./Modal/Modal";
import { FormModal } from "./Modal/FormModal";

//Image
import principal from "@/public/principal.png";

export function TaskPage() {
  const { loading, error, openModal, setOpenModal } =
    useContext(TaskManagerContex);

  return (
    <>
      <section className="w-full text-center">
        <h1 className="text-5xl md:text-7xl">Task Manager</h1>
        {loading && <TaskLoading />}
        {error && <TaskError />}
        {!loading ? <Counter /> : null}
        <Image
          src={principal}
          alt="presentation-image"
          className="w-full h-auto hidden lg:block"
        />
      </section>
      <section className="w-full">
        <Searcher />
        <AddNewTask setOpenModal={setOpenModal} />
        {openModal && (
          <Modal>
            <FormModal />
          </Modal>
        )}

        <TaskList />
      </section>
    </>
  );
}
