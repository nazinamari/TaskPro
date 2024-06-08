import { useState } from "react";
import sprite from "../../../public/sprite.svg";
import styles from "./AddCardForm.module.css";

const AddCardForm = ({ onAddCard }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [labelColor, setLabelColor] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard({ title, description, labelColor, deadline });
    setTitle("");
    setDescription("");
    setLabelColor("");
    setDeadline("");
    onClose();
  };

  return (
    <div className={styles.addCardForm}>
      <button className={styles.closeButton} onClick={onClose}>
        <svg className={styles.icon}>
          <use xlinkHref={`${sprite}#iicon-x-close`} />
        </svg>
      </button>
      <h3>Add card</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Label color</label>
          <div className={styles.labelColors}>
            {["blue", "pink", "green", "gray"].map((color) => (
              <span
                key={color}
                className={`${styles.labelColor} ${styles[color]} ${
                  labelColor === color ? styles.selected : ""
                }`}
                onClick={() => setLabelColor(color)}
              />
            ))}
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.addButton}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCardForm;
