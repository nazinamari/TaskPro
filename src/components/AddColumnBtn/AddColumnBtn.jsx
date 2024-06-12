import styles from "./AddColumnBtn.module.css";

const AddColumnBtn = ({ onClick }) => {
  return (
    <button className={styles.addButton} onClick={onClick}>
      <div className={styles.iconContainer}>
        <svg className={styles.icon} width="16" height="16">
          <use href="../../../public/icons.svg#icon-colors"></use>
        </svg>
      </div>
      Add another column
    </button>
  );
};

export default AddColumnBtn;
