import { useContext } from "react";

//* Base
import style from "./Counter.module.css";

//* Contexts
import { TasksContext } from "../../contexts/tasksContext";

export function Counter() {
  //#region ----------------------------------- Variables ---------------------------------

  const { completedTasks: completed, totalTasks: total } =
    useContext(TasksContext);

  //#endregion

  //#region --------------------------------- Html ---------------------------------

  return (
    <div className={style.mainContainer}>
      <h2 className={style.__title + " GLOBAL__text-heading--3"}>
        Has completado {completed || 0} de {total || 0} tareas
      </h2>
    </div>
  );

  //#endregion
}
