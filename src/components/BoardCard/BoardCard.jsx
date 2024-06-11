import { useState } from "react";
import Icon from "../../shared/components/Icon/Icon";
import EditBoardModal from "../EditBoardModal/EditBoardModal";
import css from "./BoardCard.module.css";
import clsx from "clsx";
import Modal from "react-modal";
// import NeedHelpModal from "../NeedHelpModal/NeedHelpModal";

// Modal.setAppElement("#root");

export default function BoardCard({ icon, title, id, isActive }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBoardId, setCurrentBoardId] = useState(null);

  const handleOpenModal = (boardId) => {
    setCurrentBoardId(boardId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <Icon
          id={icon}
          width="18"
          height="18"
          // className={css.icon}
          className={clsx(css.icon, { [css.activeBtn]: isActive })}
        />
        <h4>{title}</h4>
      </div>
      <div className={css.btnWrapper}>
        <button
          type="button"
          className={clsx(css.btn, { [css.activeBtn]: isActive })}
          onClick={() => handleOpenModal(id)}
        >
          <Icon
            id="icon-pencil"
            width="16"
            height="16"
            className={css.iconBtn}
          />
        </button>
        <button
          type="button"
          onClick={() => {
            alert("DELETE CONTACT");
          }}
          className={clsx(css.btn, { [css.activeBtn]: isActive })}
        >
          <Icon
            id="icon-trash"
            width="16"
            height="16"
            className={css.iconBtn}
          />
        </button>

        {isModalOpen && (
          <EditBoardModal
            boardId={currentBoardId}
            handleHelpModal={handleCloseModal}
          />
        )}
        {/* <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Edit Profile"
          className={css.modalWindowContent}
          overlayClassName={css.Window}
        >
          <EditBoardModal boardId={currentBoardId} />
        </Modal> */}
      </div>
    </div>
  );
}
