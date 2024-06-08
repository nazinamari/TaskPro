import css from "./BoardCard.module.css";
import clsx from "clsx";

export default function BoardCard({ icon, title, id, isActive }) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <svg className={css.icon}>
          <use href={`../../../public/sprite.svg#${icon}`}></use>
        </svg>
        <h4>{title}</h4>
      </div>
      <div className={css.btnWrapper}>
        <button
          type="button"
          className={clsx(css.btn, { [css.activeBtn]: isActive })}
          onClick={() => {
            alert("EDIT MODAL");
          }}
        >
          <svg className={css.iconBtn}>
            <use href="../../../public/sprite.svg#icon-pencil-01"></use>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => {
            alert("DELETE CONTACT");
          }}
          className={clsx(css.btn, { [css.activeBtn]: isActive })}
        >
          <svg className={css.iconBtn}>
            <use href="../../../public/sprite.svg#icon-trash-04"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
