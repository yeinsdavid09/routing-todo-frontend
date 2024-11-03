import { useContext } from "react";

//* Base
import "./Layout.css";

//* Contexts
import { TasksContext } from "../contexts/tasksContext";
import { ModalContext } from "../contexts/modalContext";

//* Components
import {
  Item,
  Counter,
  Search,
  List,
  Header,
  Footer,
  Button,
  Form,
} from "../components";
import { Modal } from "../portals/Modal/Modal";

export function Layout() {
  //#region --------------------------------- Variables ---------------------------------

  const { searchedTasks, checkTasks, deleteTasks, loading, error } =
    useContext(TasksContext);
  const { onModal, setOnModal } = useContext(ModalContext);

  //#endregion

  //#region --------------------------------- Html ---------------------------------

  return (
    <div className="LAYOUT__main-container">
      <header className="LAYOUT__header">
        <Header></Header>
      </header>
      <main className="LAYOUT__main">
        <div className="LAYOUT__counter">
          <Counter></Counter>
        </div>
        <div className="LAYOUT__search">
          <Search></Search>
        </div>
        <div className="LAYOUT__list">
          <List>
            {loading && (
              <p className="LAYOUT__loading GLOBAL__text-heading--3">
                Cargando tareas...
              </p>
            )}
            {error && (
              <p className="LAYOUT__error GLOBAL__text-heading--3">
                Ups... Algo salió mal
              </p>
            )}
            {!loading && !error && searchedTasks.length === 0 && (
              <p className="LAYOUT__empty GLOBAL__text-heading--3">
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
                    onComplete={() => checkTasks(index)}
                    onDelete={() => deleteTasks(index)}
                  ></Item>
                );
              })}
          </List>
        </div>
        <div className="LAYOUT__buttons">
          <Button onButtonClick={() => setOnModal(true)}></Button>
        </div>
      </main>
      <footer className="LAYOUT__footer">
        <Footer></Footer>
      </footer>
      {onModal && (
        <Modal>
          <Form></Form>
        </Modal>
      )}
    </div>
  );

  //#endregion
}
