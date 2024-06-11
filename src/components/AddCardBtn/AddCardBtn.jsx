import styles from "./AddCardBtn.module.css";

const AddCardBtn = ({ onClick }) => {
  return (
    <button className={styles.addButton} onClick={onClick}>
      <div className={styles.iconContainer}>
        <svg className={styles.icon} width="16" height="16">
          <use href="../../../public/icons.svg#icon-colors"></use>
        </svg>
      </div>
      Add another card
    </button>
  );
};

export default AddCardBtn;
