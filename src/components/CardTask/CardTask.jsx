import sprite from "../../../public/icons.svg";
import styles from "./CardTask.module.css";
import "../../shared/styles/variables.css";

const TaskCard = ({ theme }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return styles.highPriority;
      case "Medium":
        return styles.mediumPriority;
      case "Low":
        return styles.lowPriority;
      case "Without":
      default:
        return styles.withoutPriority;
    }
  };

  return (
    <div className={`${styles.card} ${getPriorityClass("Without")} ${theme}`}>
      <div className={styles.header}>
        <h3>Sample Task</h3>
      </div>
      <div className={styles.description}>
        <p>Description goes here...</p>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.footer}>
        <div className={styles.priority}>
          <span className={styles.priorityLabel}>Priority</span>
          <span className={styles.priorityValue}>High</span>
        </div>
        <div className={styles.deadline}>
          <span className={styles.deadlineLabel}>Deadline</span>
          <span className={styles.deadlineValue}>2024-06-10</span>
        </div>
        <div className={styles.actions}>
          <button className={styles.actionButton}>
            <svg className={styles.icon}>
              <use xlinkHref={`${sprite}#icon-arrow-circler`} />
            </svg>
          </button>

          <button className={styles.actionButton}>
            <svg className={styles.icon}>
              <use xlinkHref={`${sprite}#icon-pencil`} />
            </svg>
          </button>

          <button className={styles.actionButton}>
            <svg className={styles.icon}>
              <use xlinkHref={`${sprite}#icon-trash`} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
