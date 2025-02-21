import { Outlet } from "react-router-dom";
import { useContext } from "react";

//* Base
import style from "./Layout.module.css";

//* Contexts
import { ModalContext } from "../contexts/modalContext";

//* Components
import { Header, Footer, Form } from "../components";
import { Modal } from "../portals/Modal/Modal";

export function Layout() {
  //#region --------------------------------- Variables ---------------------------------

  const { onModal } = useContext(ModalContext);

  //#endregion

  //#region --------------------------------- Html ---------------------------------

  return (
    <div className={style.mainContainer}>
      <header className={style.__header}>
        <Header></Header>
      </header>
      <main className={style.__main}>
        <Outlet></Outlet>
      </main>
      <footer className={style.__footer}>
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
