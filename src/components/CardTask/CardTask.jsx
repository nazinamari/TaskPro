import { useState } from "react";
import axios from "axios";
import sprite from "../../../public/sprite.svg";
import styles from "./TaskCard.module.css";
import "../../shared/styles/variables.css";
import EditCardForm from "./EditCardForm";

const TaskCard = ({ theme, cardId, cardData, onCardDelete, onCardUpdate }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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

  const handleDelete = async () => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      const response = await axios.delete(`/cards/${cardId}`);
      console.log(response.data);
      if (onCardDelete) {
        onCardDelete(cardId);
      }
    } catch (error) {
      console.error("Error when deleting card:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleUpdateCard = async (updatedCard) => {
    try {
      const response = await axios.put(`/cards/${cardId}`, updatedCard);
      console.log(response.data);
      if (onCardUpdate) {
        onCardUpdate(response.data);
      }
      setIsEditing(false);
    } catch (error) {
      console.error("Ошибка при обновлении карточки:", error);
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
              <use xlinkHref={`${sprite}#icon-arrow-circle-broken-right`} />
            </svg>
          </button>

          <button
            className={styles.actionButton}
            onClick={() => setIsEditing(true)}
          >
            <svg className={styles.icon}>
              <use xlinkHref={`${sprite}#icon-pencil-01`} />
            </svg>
          </button>

          <button
            className={styles.actionButton}
            onClick={handleDelete}
            disabled={isDeleting}
          >
            <svg className={styles.icon}>
              <use xlinkHref={`${sprite}#icon-trash-04`} />
            </svg>
          </button>
        </div>
      </div>

      {isEditing && (
        <div className={styles.modal}>
          <EditCardForm
            cardData={cardData}
            onUpdateCard={handleUpdateCard}
            onClose={() => setIsEditing(false)}
          />
        </div>
      )}
    </div>
  );
};

export default TaskCard;
