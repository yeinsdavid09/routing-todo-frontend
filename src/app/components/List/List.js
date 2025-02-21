//* Base
import style from "./List.module.css";

export function List({ children }) {
  //#region --------------------------------- Html ---------------------------------

  return <ul className={style.mainContainer}>{children}</ul>;

  //#endregion
}
