//* Base
import "./Counter.css";
import { useContext } from "react";

//* Contexts
import { TasksContext } from "../../contexts/tasksContext";

export function Counter() {
  //#region ----------------------------------- Variables ---------------------------------

  const { completedTasks: completed, totalTasks: total } =
    useContext(TasksContext);

  //#endregion

  //#region --------------------------------- Html ---------------------------------

  return (
    <div className="COUNTER__main-container">
      <h2 className="COUNTER__title GLOBAL__text-heading--3">
        Has completado {completed || 0} de {total || 0} tareas
      </h2>
    </div>
  );

  //#endregion
}
