import { createPortal } from "react-dom";
import { useContext } from "react";

//* Base
import "./Modal.css";

//* Contexts
import { ModalContext } from "../../contexts/modalContext";

export function Modal({ children }) {
  //#region ----------------------------------- Variables ---------------------------------

  const { setOnModal } = useContext(ModalContext);
  const node = document.getElementById("modal");

  //#endregion

  //#region --------------------------------- Return ---------------------------------

  return createPortal(
    <div className="MODAL__main-container" onClick={() => setOnModal(false)}>
      <article className="MODAL__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </article>
    </div>,
    node
  );

  //#endregion
}
