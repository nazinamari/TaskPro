import { useState } from "react";
import Icon from "../../shared/components/Icon/Icon";
import EditBoardModal from "../EditBoardModal/EditBoardModal";
import css from "./BoardCard.module.css";
import clsx from "clsx";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editBoard } from "../../../redux/board/operations";

Modal.setAppElement("#root");

export default function BoardCard({ icon, title, id, isActive }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBoardId, setCurrentBoardId] = useState(null);

  const handleOpenModal = (boardId) => {
    dispatch(editBoard());
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
          className={clsx(css.icon, isActive && css.activeIcon)}
        />
        <h4 className={clsx(css.title, { [css.activeTitle]: isActive })}>
          {title}
        </h4>
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
        <Modal
          isOpen={isModalOpen}
          contentLabel="Edit Profile"
          className={css.modalWindowContent}
          overlayClassName={css.overlay}
        >
          <EditBoardModal onClose={handleCloseModal} boardId={currentBoardId} />
        </Modal>
      </div>
    </div>
  );
}
