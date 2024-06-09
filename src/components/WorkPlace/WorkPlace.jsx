import css from "./WorkPlace.module.css";
import Icon from "../../shared/components/Icon/Icon";

export default function WorkPlace({ children }) {
  return (
    <div className={css.wrapper}>
      <button
        className={css.filterBtn}
        onClick={() => {
          alert("log out");
        }}
      >
        <Icon
          id="icon-filter"
          width="16"
          height="16"
          className={css.filterIcon}
        />
        Filters
      </button>
      {children}
    </div>
  );
}
