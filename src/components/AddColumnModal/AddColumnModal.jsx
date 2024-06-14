import { useState } from "react";
import Modal from "react-modal";
import Icon from "../../shared/components/Icon/Icon";
import styles from "./AddColumnModal.module.css";

const AddColumnModal = ({ isOpen, onClose, onAddColumn }) => {
  const [title, setTitle] = useState("");

  const handleAddColumn = () => {
    if (!title.trim()) {
      alert("The field must not be empty");
      return;
    }
    onAddColumn(title);
    setTitle("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add column"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onClose} className={styles.closeButton}>
        <Icon id="icon-close" width="16" height="16" className={styles.icon} />
      </button>
      <div className={styles.title}>Add column</div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className={styles.input}
        autoFocus
      />
      <button onClick={handleAddColumn} className={styles.addButton}>
        <div className={styles.iconContainer}>
          <Icon id="icon-plus" width="16" height="16" className={styles.icon} />
        </div>
        Add
      </button>
    </Modal>
  );
};

export default AddColumnModal;
