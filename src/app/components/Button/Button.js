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
      <span className="BUTTON__span">+</span>
    </button>
  );

  //#endregion
}
