//* Base
import "./Item.css";

export function Item({
  taskIndex,
  description,
  completed,
  onComplete,
  onDelete,
}) {
  //#region --------------------------------- Html ---------------------------------

  return (
    <li className={`ITEM__container ${completed && "--completed"}`}>
      <div className="ITEM__texts--wrapper">
        <span className="ITEM__button --index GLOBAL__text-body--1">
          {taskIndex + 1}
        </span>
        <span className="ITEM__text GLOBAL__text-body--1">{description}</span>
      </div>
      <div className="ITEM__buttons--wrapper">
        <span
          className="ITEM__button --check GLOBAL__text-body--1"
          onClick={onComplete}
        >
          &#10003;
        </span>
        <span
          className="ITEM__button --remove GLOBAL__text-body--1"
          onClick={onDelete}
        >
          &#10007;
        </span>
      </div>
    </li>
  );

  //#endregion
}
