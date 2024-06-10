import Icon from "../../shared/components/Icon/Icon";
import css from "./BoardCard.module.css";
import clsx from "clsx";

export default function BoardCard({ icon, title, id, isActive }) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <Icon
          id={icon}
          width="18"
          height="18"
          // className={css.icon}
          className={clsx(css.icon, { [css.activeBtn]: isActive })}
        />
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
          <Icon
            id="icon-pencil"
            width="16"
            height="16"
            className={css.iconBtn}
          />
        </button>
        <button
          type="button"
          onClick={() => {
            alert("DELETE CONTACT");
          }}
          className={clsx(css.btn, { [css.activeBtn]: isActive })}
        >
          <Icon
            id="icon-trash"
            width="16"
            height="16"
            className={css.iconBtn}
          />
        </button>
      </div>
    </div>
  );
}
