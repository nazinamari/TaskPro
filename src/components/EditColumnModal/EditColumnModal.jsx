import { useState, useEffect } from "react";
import Modal from "react-modal";
import Icon from "../../shared/components/Icon/Icon";
import styles from "./EditColumnModal.module.css";

const EditColumnModal = ({ isOpen, onClose, title, onEditTitle }) => {
  const [newTitle, setNewTitle] = useState(title);

  useEffect(() => {
    setNewTitle(title);
  }, [title]);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSave = () => {
    if (!newTitle.trim()) {
      alert("The field must not be empty");
      return;
    }
    onEditTitle(newTitle);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Title Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onClose} className={styles.closeButton}>
        <Icon id="icon-close" width="16" height="16" className={styles.icon} />
      </button>
      <div className={styles.title}>Edit column</div>
      <input
        type="text"
        value={newTitle}
        onChange={handleTitleChange}
        placeholder="New Title"
        className={styles.input}
      />
      <button onClick={handleSave} className={styles.addButton}>
        <div className={styles.iconContainer}>
          <Icon id="icon-plus" width="16" height="16" className={styles.icon} />
        </div>
        Edit
      </button>
    </Modal>
  );
};

export default EditColumnModal;
