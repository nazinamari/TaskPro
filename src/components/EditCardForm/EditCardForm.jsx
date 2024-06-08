import { useState, useEffect } from "react";
import styles from "./EditCardForm.module.css";
import "../../shared/styles/variables.css";

const EditCardForm = ({ cardData, onUpdateCard, onClose }) => {
  const [title, setTitle] = useState(cardData.title);
  const [description, setDescription] = useState(cardData.description);
  const [labelColor, setLabelColor] = useState(cardData.labelColor);
  const [deadline, setDeadline] = useState(cardData.deadline);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateCard({ ...cardData, title, description, labelColor, deadline });
    onClose();
  };

  useEffect(() => {
    setTitle(cardData.title);
    setDescription(cardData.description);
    setLabelColor(cardData.labelColor);
    setDeadline(cardData.deadline);
  }, [cardData]);

  return (
    <div className={styles.editCardForm}>
      <h3>Edit card</h3>
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
        <button type="submit" className={styles.editButton}>
          Edit
        </button>
      </form>
      <button onClick={onClose} className={styles.closeButton}>
        Close
      </button>
    </div>
  );
};

export default EditCardForm;
