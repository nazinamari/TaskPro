import Icon from "../../shared/components/Icon/Icon";
import styles from "./AddColumnBtn.module.css";

const AddColumnBtn = ({ onClick }) => {
  return (
    <button className={styles.addButton} onClick={onClick}>
      <div className={styles.iconContainer}>
        <Icon id="icon-plus" width="16" height="16" className={styles.icon} />
      </div>
      Add another column
    </button>
  );
};

export default AddColumnBtn;
