import Icon from "../../shared/components/Icon/Icon";
import styles from "./CardTask.module.css";
import "../../shared/styles/variables.css";

const CardTask = ({
  title,
  description,
  labelColor = "Without",
  deadline,
  onRemove,
  onEdit,
}) => {
  return (
    <div className={`${styles.card} ${styles[labelColor]}`}>
      <p className={styles.header}>{title}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.separator}></div>
      <div className={styles.footer}>
        <div className={styles.containerPriorityDeadline}>
          <div className={styles.priority}>
            <span className={styles.priorityLabel}>Priority</span>
            <div className={styles.priorityContainer}>
              <span
                className={`${styles.priorityColor} ${styles[labelColor]}`}
              ></span>
              <span className={styles.priorityText}>{labelColor}</span>
            </div>
          </div>
          <div className={styles.deadline}>
            <span className={styles.deadlineLabel}>Deadline</span>
            <span className={styles.deadlineValue}>
              {new Date(deadline)
                .toLocaleDateString("en-GB")
                .replace(/\./g, "/")}
            </span>
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.actionButton} onClick={onEdit}>
            <Icon
              id="icon-pencil"
              width="16"
              height="16"
              className={styles.icon}
            />
          </button>
          <button className={styles.actionButton} onClick={onRemove}>
            <Icon
              id="icon-trash"
              width="16"
              height="16"
              className={styles.icon}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTask;
