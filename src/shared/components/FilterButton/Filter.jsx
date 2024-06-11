import css from "./Filter.module.css";
import Icon from "../Icon/Icon";

export default function Filter() {
  return (
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
  );
}

// Прокинути toggleSidebar на бургер
