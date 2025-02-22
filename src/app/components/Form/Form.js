import { useNavigate } from "react-router-dom";
import { useState } from "react";

//* Base
import style from "./Form.module.css";

//* Contexts

export function Form({ formLabel, formInputValue, formSubmit }) {
  //#region ----------------------------------- Variables ---------------------------------

  const navigate = useNavigate();
  const [newTask, setNewTask] = useState(formInputValue || "");
  const formIsValid = newTask.length >= 5;

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  function updateValue(event) {
    setNewTask(event.target.value);
  }

  function save(event) {
    event.preventDefault();
    if (!formIsValid) return;
    formSubmit(newTask);
  }

  //#endregion

  //#region --------------------------------- Html ---------------------------------

  return (
    <form className={style.mainContainer} onSubmit={(event) => save(event)}>
      <label className={style.__label + " GLOBAL__text-heading--4"}>
        <strong>{formLabel}</strong>
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
          onClick={() => navigate("/")}
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
