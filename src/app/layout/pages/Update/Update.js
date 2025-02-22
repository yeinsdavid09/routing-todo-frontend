import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";

//* Base
import style from "./Update.module.css";

//* Contexts
import { TasksContext } from "../../../contexts/tasksContext";

//* Components
import { Form } from "../../../components";

export function Update() {
  //#region ----------------------------------- Variables ---------------------------------

  const navigate = useNavigate();
  const params = useParams();
  const { findTasks, editTasks } = useContext(TasksContext);

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  function updateTask(id, body) {
    editTasks(id, body);
    navigate("/");
  }

  //#endregion

  //#region --------------------------------- Html ---------------------------------

  return (
    <div className={style.mainContainer}>
      <Form
        formLabel="Edita una tarea"
        formInputValue={findTasks(params.id)?.description}
        formSubmit={(event) => updateTask(params.id, event)}
      />
    </div>
  );

  //#endregion
}
