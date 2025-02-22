import { useNavigate } from "react-router-dom";
import { useContext } from "react";

//* Base
import style from "./Home.module.css";

//* Contexts
import { TasksContext } from "../../../contexts/tasksContext";

//* Components
import { Item, Counter, Search, List, Button } from "../../../components";

export function Home() {
  //#region --------------------------------- Variables ---------------------------------

  const navigate = useNavigate();
  const { searchedTasks, checkTasks, deleteTasks, loading, error } =
    useContext(TasksContext);

  //#endregion

  //#region --------------------------------- Html ---------------------------------

  return (
    <div className={style.mainContainer}>
      <div className={style.__counter}>
        <Counter />
      </div>
      <div className={style.__search}>
        <Search />
      </div>
      <div className={style.__list}>
        <List>
          {loading && (
            <p className={style.__loading + " GLOBAL__text-heading--3"}>
              Cargando tareas...
            </p>
          )}
          {error && (
            <p className={style.__error + " GLOBAL__text-heading--3"}>
              Ups... Algo salió mal
            </p>
          )}
          {!loading && !error && searchedTasks.length === 0 && (
            <p className={style.__empty + " GLOBAL__text-heading--3"}>
              Aún no tienes tareas. Haz click en el botón para agregar una.
            </p>
          )}
          {!loading &&
            !error &&
            searchedTasks?.map((task, index) => {
              return (
                <Item
                  key={task.id}
                  taskIndex={index}
                  description={task.description}
                  completed={task.completed}
                  onEdit={() => navigate(`/update/${task.id}`)}
                  onComplete={() => checkTasks(index)}
                  onDelete={() => deleteTasks(index)}
                />
              );
            })}
        </List>
      </div>
      <div className={style.__buttons}>
        <Button onButtonClick={() => navigate("/create")} />
      </div>
    </div>
  );

  //#endregion
}
