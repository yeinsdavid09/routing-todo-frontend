import { createPortal } from "react-dom";
import { useContext } from "react";

//* Base
import style from "./Modal.module.css";

//* Contexts
import { ModalContext } from "../../contexts/modalContext";

export function Modal({ children }) {
  //#region ----------------------------------- Variables ---------------------------------

  const { setOnModal } = useContext(ModalContext);
  const node = document.getElementById("modal");

  //#endregion

  //#region --------------------------------- Return ---------------------------------

  return createPortal(
    <div className={style.mainContainer} onClick={() => setOnModal(false)}>
      <article className={style.__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </article>
    </div>,
    node
  );

  //#endregion
}
