//* Base
import "./Button.css";

export function Button({ onButtonClick }) {
  //#region --------------------------------- Html ---------------------------------

  return (
    <button
      className="BUTTON__main-container"
      type="button"
      onClick={onButtonClick}
    >
      <span className="BUTTON__span GLOBAL__text-heading--1">
        <strong>&#43;</strong>
      </span>
    </button>
  );

  //#endregion
}
