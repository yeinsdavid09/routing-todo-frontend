import { useContext, useState } from "react";

//* Base
import style from "./Form.module.css";

//* Contexts
import { ModalContext } from "../../contexts/modalContext";
import { TasksContext } from "../../contexts/tasksContext";

export function Form() {
  //#region ----------------------------------- Variables ---------------------------------

  const { setOnModal } = useContext(ModalContext);
  const { addTasks } = useContext(TasksContext);
  const [newTask, setNewTask] = useState("");
  const formIsValid = newTask.length >= 5;

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  function updateValue(event) {
    setNewTask(event.target.value);
  }

  function cancel(event) {
    event.preventDefault();
    setOnModal(false);
  }

  function save(event) {
    event.preventDefault();
    if (!formIsValid) return;
    addTasks(newTask);
    setOnModal(false);
  }

  //#endregion

  //#region --------------------------------- Html ---------------------------------

  return (
    <form className={style.mainContainer} onSubmit={(event) => save(event)}>
      <label className={style.__label + " GLOBAL__text-body--1"}>
        <strong>Crear nueva tarea</strong>
      </label>
      <textarea
        className={style.__input + " GLOBAL__text-body--1"}
        placeholder="Agrega una nueva tarea"
        value={newTask}
        onChange={(event) => updateValue(event)}
      ></textarea>
      <div className={style.__buttons}>
        <button
          className={`${style.__button} ${style.__cancel_}`}
          type="button"
          onClick={(event) => cancel(event)}
        >
          <span className={style.__span + " GLOBAL__text-body--1"}>
            <strong>Cancelar</strong>
          </span>
        </button>
        <button
          className={`${style.__button} ${style.__save_}`}
          type="submit"
          disabled={!formIsValid}
        >
          <span className={style.__span + " GLOBAL__text-body--1"}>
            <strong>Añadir</strong>
          </span>
        </button>
      </div>
    </form>
  );

  //#endregion
}
