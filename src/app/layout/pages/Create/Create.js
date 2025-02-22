import { useNavigate } from "react-router-dom";
import { useContext } from "react";

//* Base
import style from "./Create.module.css";

//* Contexts
import { TasksContext } from "../../../contexts/tasksContext";

//* Components
import { Form } from "../../../components";

export function Create() {
  //#region ----------------------------------- Variables ---------------------------------

  const navigate = useNavigate();
  const { addTasks } = useContext(TasksContext);

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  function createTask(body) {
    addTasks(body);
    navigate("/");
  }

  //#endregion

  //#region --------------------------------- Html ---------------------------------

  return (
    <div className={style.mainContainer}>
      <Form
        formLabel="Crea una nueva tarea"
        formSubmit={(event) => createTask(event)}
      />
    </div>
  );

  //#endregion
}
