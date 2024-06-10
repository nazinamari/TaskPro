import { useState } from "react";
import sprite from "../../../public/icons.svg";
import styles from "./ToDo.module.css";
import "../../shared/styles/variables.css";

const ToDo = ({ title, onEditTitle, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleTitleSubmit = (e) => {
    e.preventDefault();
    onEditTitle(newTitle);
    setIsEditing(false);
  };

  return (
    <div className={styles.card}>
      {isEditing ? (
        <form onSubmit={handleTitleSubmit} className={styles.header}>
          <input
            type="text"
            value={newTitle}
            onChange={handleTitleChange}
            className={styles.titleInput}
            autoFocus
          />
        </form>
      ) : (
        <div className={styles.header}>
          <h3>{title}</h3>
        </div>
      )}
      <div className={styles.actions}>
        <button onClick={handleEditClick} className={styles.actionButton}>
          <svg className={styles.icon}>
            <use xlinkHref={`${sprite}#icon-pencil`} />
          </svg>
        </button>
        <button onClick={handleDeleteClick} className={styles.actionButton}>
          <svg className={styles.icon}>
            <use xlinkHref={`${sprite}#icon-trash`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ToDo;
