//* Base
import style from "./Header.module.css";

export function Header() {
  //#region --------------------------------- Html ---------------------------------

  return (
    <div className={style.mainContainer}>
      <h1 className={style.__title + " GLOBAL__text-heading--1"}>
        Basic Todo App
      </h1>
    </div>
  );

  //#endregion
}
