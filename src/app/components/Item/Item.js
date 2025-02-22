//* Base
import style from "./Item.module.css";

export function Item({
  taskIndex,
  description,
  completed,
  onEdit,
  onComplete,
  onDelete,
}) {
  //#region --------------------------------- Html ---------------------------------

  return (
    <li className={`${style.mainContainer} ${completed && style.__completed_}`}>
      <div className={style.__textsWrapper}>
        <span
          className={`${style.__button} ${style.__index_} " GLOBAL__text-body--1"`}
        >
          {taskIndex + 1}
        </span>
        <span className={style.__text + " GLOBAL__text-body--1"}>
          {description}
        </span>
      </div>
      <div className={style.__buttonsWrapper}>
        <span
          className={`${style.__button} ${style.__edit_} " GLOBAL__text-body--1"`}
          onClick={onEdit}
        >
          ✏
        </span>
        <span
          className={`${style.__button} ${style.__check_} " GLOBAL__text-body--1"`}
          onClick={onComplete}
        >
          &#10003;
        </span>
        <span
          className={`${style.__button} ${style.__remove_} " GLOBAL__text-body--1"`}
          onClick={onDelete}
        >
          &#10007;
        </span>
      </div>
    </li>
  );

  //#endregion
}
