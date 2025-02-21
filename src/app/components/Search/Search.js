import { useContext } from "react";
//* Base
import style from "./Search.module.css";

//* Contexts
import { TasksContext } from "../../contexts/tasksContext";

export function Search() {
  //#region --------------------------------- Variables ---------------------------------

  const { searchValue, setSearchValue } = useContext(TasksContext);

  //#endregion

  //#region --------------------------------- Html ---------------------------------

  return (
    <fieldset className={style.mainContainer}>
      <label
        className={style.__label + " GLOBAL__text-body--1"}
        htmlFor="search"
      >
        <strong>Busca una tarea</strong>
      </label>
      <input
        className={style.__input + " GLOBAL__text-body--1"}
        id="search"
        type="text"
        placeholder="Escribe la tarea que deseas encontrar..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      ></input>
    </fieldset>
  );

  //#endregion
}
