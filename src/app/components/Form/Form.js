import { useContext, useState } from "react";

//* Base
import "./Form.css";

//* Contexts
import { ModalContext } from "../../contexts/modalContext";
import { TasksContext } from "../../contexts/tasksContext";

export function Form() {
  //#region ----------------------------------- Variables ---------------------------------

  const { setOnModal } = useContext(ModalContext);
  const { addTasks } = useContext(TasksContext);
  const [newTask, setNewTask] = useState("");

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
    addTasks(newTask);
    setOnModal(false);
  }

  //#endregion

  //#region --------------------------------- Html ---------------------------------

  return (
    <form className="FORM__main-container" onSubmit={(event) => save(event)}>
      <label className="FORM__label GLOBAL__text-body--1">
        <strong>Crear nueva tarea</strong>
      </label>
      <textarea
        className="FORM__input GLOBAL__text-body--1"
        placeholder="Agrega una nueva tarea"
        value={newTask}
        onChange={(event) => updateValue(event)}
      ></textarea>
      <div className="FORM__buttons">
        <button
          className="FORM__button --cancel"
          type="button"
          onClick={(event) => cancel(event)}
        >
          <span className="GLOBAL__text-body--1 FORM__span">
            <strong>Cancelar</strong>
          </span>
        </button>
        <button className="FORM__button --save" type="submit">
          <span className="GLOBAL__text-body--1 FORM__span">
            <strong>Añadir</strong>
          </span>
        </button>
      </div>
    </form>
  );

  //#endregion
}
