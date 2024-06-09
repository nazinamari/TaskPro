import css from "./WorkPlace.module.css";
import Icon from "../../shared/components/Icon/Icon";

export default function WorkPlace() {
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
      <div className={css.textContainer}>
        <p className={css.text}>
          Before starting your project, it is essential
          <span className={css.markText}>to create a board</span> to visualize
          and track all the necessary tasks and milestones. This board serves as
          a powerful tool to organize the workflow and ensure effective
          collaboration among team members.
        </p>
      </div>
    </div>
  );
}
