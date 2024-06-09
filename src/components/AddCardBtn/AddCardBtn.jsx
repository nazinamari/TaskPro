import sprite from "../../../public/sprite.svg";
import styles from "./AddCardBtn.module.css";

const AddCardBtn = ({ onClick }) => {
  return (
    <button className={styles.addButton} onClick={onClick}>
      <svg className={styles.icon}>
        <use xlinkHref={`${sprite}#icon-plus`} />
      </svg>
      Add another card
    </button>
  );
};

export default AddCardBtn;
