import { useState } from "react";
import AddColumnModal from "../AddColumnModal/AddColumnModal";
import Icon from "../../shared/components/Icon/Icon";
import styles from "./AddColumnBtn.module.css";

const AddColumnBtn = ({ onAddColumn }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button className={styles.addButton} onClick={handleModalOpen}>
        <div className={styles.iconContainer}>
          <Icon id="icon-plus" width="16" height="16" className={styles.icon} />
        </div>
        Add another column
      </button>
      <AddColumnModal
        isOpen={modalIsOpen}
        onClose={handleModalClose}
        onAddColumn={onAddColumn}
      />
    </>
  );
};

export default AddColumnBtn;
