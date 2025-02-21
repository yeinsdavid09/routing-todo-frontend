//* Base
import style from "./Footer.module.css";

export function Footer() {
  //#region ----------------------------------- Variables ---------------------------------

  const currentDate = new Date().getFullYear();

  //#endregion

  //#region --------------------------------- Html ---------------------------------

  return (
    <div className={style.mainContainer}>
      <p className={style.__text + " GLOBAL__text-body--1"}>
        &copy; Copyright {currentDate}
      </p>
    </div>
  );

  //#endregion
}
