import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import ToDo from '../ToDo/ToDo';
import CardTask from '../CardTask/CardTask';
import AddCardBtn from '../AddCardBtn/AddCardBtn';
import AddCardModal from '../AddCardModal/AddCardModal';
import EditCardModal from '../EditCardModal/EditCardModal';
import styles from './Column.module.css';
import {
  addCard,
  deleteCard,
  editCard,
  fetchAllCards,
} from '../../redux/cards/operations';
import { selectFilteredCards } from '../../redux/cards/selectors';
import { getColumnById } from '../../redux/column/operations';

const Column = ({ id, title: initialTitle, onDelete }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(initialTitle);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    dispatch(fetchAllCards(id));
    setTitle(initialTitle);
  }, [dispatch, id, initialTitle]);

  const filteredCards = useSelector(selectFilteredCards);
  const handleAddCard = newCard => {
    dispatch(addCard(newCard));
    dispatch(getColumnById(id));
    setIsModalOpen(false);
  };

  const handleRemoveCard = cardId => {
    dispatch(deleteCard(cardId));
  };

  const handleEditCard = updatedCard => {
    dispatch(editCard({ cardId: updatedCard._id, data: updatedCard }));
    setIsEditModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = card => {
    setCurrentCard(card);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentCard(null);
  };
  return (
    <div className={styles.column}>
      <ToDo id={id} title={title} onDelete={onDelete} />
      <div className={styles.cards}>
        {filteredCards.map(card => (
          <CardTask
            key={card._id}
            {...card}
            onRemove={() => handleRemoveCard(card._id)}
            onEdit={() => openEditModal(card)}
          />
        ))}
      </div>
      <AddCardBtn onClick={openModal} />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Card Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <AddCardModal id={id} onAddCard={handleAddCard} onClose={closeModal} />
      </Modal>
      {currentCard && (
        <Modal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          contentLabel="Edit Card Modal"
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <EditCardModal
            card={currentCard}
            onEditCard={handleEditCard}
            onClose={closeEditModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default Column;
