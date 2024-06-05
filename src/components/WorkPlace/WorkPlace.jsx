import css from "./WorkPlace.module.css";
export default function WorkPlace() {
  return (
    <div>
      <button className={css.filterBtn}>Filters</button>
      <p className={css.text}>
        Before starting your project, it is essential
        <button type="button" className={css.btn}>
          to create a board
        </button>{" "}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
    </div>
  );
}
