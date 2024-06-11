import sprite from "../../../public/icons.svg";
import styles from "./AddColumnBtn.module.css";

const AddColumnBtn = ({ onClick }) => {
  return (
    <button className={styles.addButton} onClick={onClick}>
      <svg className={styles.icon}>
        <use xlinkHref={`${sprite}#icon-plus`} />
      </svg>
      Add another column
    </button>
  );
};

export default AddColumnBtn;
