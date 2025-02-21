//* Base
import style from "./Button.module.css";

export function Button({ onButtonClick }) {
  //#region --------------------------------- Html ---------------------------------

  return (
    <button
      className={style.mainContainer}
      type="button"
      onClick={onButtonClick}
    >
      <span className={style.__span + " GLOBAL__text-heading--1"}>
        <strong>&#43;</strong>
      </span>
    </button>
  );

  //#endregion
}
