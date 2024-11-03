//* Base
import "./Footer.css";

export function Footer() {
  //#region ----------------------------------- Variables ---------------------------------

  const currentDate = new Date().getFullYear();

  //#endregion

  //#region --------------------------------- Html ---------------------------------

  return (
    <div className="FOOTER__main-container">
      <p className="FOOTER__text GLOBAL__text-body--1">
        &copy; Copyright {currentDate}
      </p>
    </div>
  );

  //#endregion
}
