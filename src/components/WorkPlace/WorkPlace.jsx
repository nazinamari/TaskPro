import css from "./WorkPlace.module.css";
export default function WorkPlace({ handleCreateModal }) {
  return (
    <div className={css.wrapper}>
      <button
        className={css.filterBtn}
        onClick={() => {
          alert("log out");
        }}
      >
        <svg className={css.filterIcon}>
          <use href="../../../public/sprite.svg#icon-colors"></use>
        </svg>
        Filters
      </button>
      <div className={css.textContainer}>
        <p className={css.text}>
          Before starting your project, it is essential
          <button
            type="button"
            className={css.markText}
            onClick={handleCreateModal}
          >
            to create a board
          </button>
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
      </div>
    </div>
  );
}
