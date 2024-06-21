import Modal from 'react-modal';
import Icon from '../../shared/components/Icon/Icon';
import styles from './AddColumnModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn } from '../../redux/column/operations';
import { selectBoard } from '../../redux/board/selectors';

const AddColumnModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const currentBoard = useSelector(selectBoard);
  // const bordId = currentBoard.board._id;

  // console.log(bordId);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const columnTitle = e.target[0].value;
  //   if (columnTitle.trim() === '') {
  //     return;
  //   }
  //   if (currentBoard && currentBoard.board && currentBoard.board._id) {
  //     dispatch(
  //       addColumn({
  //         boardId: bordId,
  //         title: columnTitle,
  //       }),
  //     );
  //     onClose();
  //   }
  // };

  return (
    currentBoard && (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Add column"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <button onClick={onClose} className={styles.closeButton}>
          <Icon
            id="icon-close"
            width="16"
            height="16"
            className={styles.iconClose}
          />
        </button>
        <p className={styles.title}>Add column</p>
        <form>
          <input
            type="text"
            placeholder="Title"
            className={styles.input}
            autoFocus
          />
          <button type="submit" className={styles.addButton}>
            <div className={styles.iconContainer}>
              <Icon
                id="icon-plus"
                width="16"
                height="16"
                className={styles.icon}
              />
            </div>
            <p>Add</p>
          </button>
        </form>
      </Modal>
    )
  );
};

export default AddColumnModal;
