//* Base
import { useContext } from "react";
import "./Search.css";
import { TasksContext } from "../../contexts/tasksContext";

export function Search() {
  //#region --------------------------------- Variables ---------------------------------

  const { searchValue, setSearchValue } = useContext(TasksContext);

  //#endregion

  //#region --------------------------------- Html ---------------------------------

  return (
    <fieldset className="SEARCH__main-container">
      <label className="SEARCH__label GLOBAL__text-body--1" htmlFor="search">
        <strong>Busca una tarea</strong>
      </label>
      <input
        className="SEARCH__input GLOBAL__text-body--1"
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
