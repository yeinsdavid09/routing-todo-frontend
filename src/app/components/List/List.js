//* Base
import "./List.css";

export function List({ children }) {
  //#region --------------------------------- Html ---------------------------------

  return <ul className="LIST__main-container">{children}</ul>;

  //#endregion
}
