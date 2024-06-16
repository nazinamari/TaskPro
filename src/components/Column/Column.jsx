import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import ToDo from "../ToDo/ToDo";
import CardTask from "../CardTask/CardTask";
import AddCardBtn from "../AddCardBtn/AddCardBtn";
import AddCardModal from "../AddCardModal/AddCardModal";
import EditCardModal from "../EditCardModal/EditCardModal";
import styles from "./Column.module.css";
import {
  fetchAllCards,
  addCard,
  deleteCard,
  editCard,
} from "../../../redux/cards/operations";

const Column = ({
  id: columnId,
  title: initialTitle,
  onDelete,
  onEditTitle,
}) => {
  const dispatch = useDispatch();
  const { items: cards, loading, error } = useSelector((state) => state.cards);
  const [title, setTitle] = useState(initialTitle);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    dispatch(fetchAllCards({ columnId }));
  }, [dispatch, columnId]);

  useEffect(() => {
    setTitle(initialTitle);
  }, [initialTitle]);

  const handleAddCard = (newCard) => {
    dispatch(addCard({ columnId, card: newCard }));
    setIsModalOpen(false);
  };

  const handleRemoveCard = (cardId) => {
    dispatch(deleteCard({ columnId, cardId }));
  };

  const handleEditCard = (updatedCard) => {
    dispatch(editCard({ columnId, card: updatedCard }));
    setIsEditModalOpen(false);
  };

  const handleEditTitle = (newTitle) => {
    setTitle(newTitle);
    onEditTitle(columnId, newTitle);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = (card) => {
    setCurrentCard(card);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentCard(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading cards</div>;

  return (
    <div className={styles.column}>
      <ToDo title={title} onEditTitle={handleEditTitle} onDelete={onDelete} />
      <div className={styles.cards}>
        {cards.map((card) => (
          <CardTask
            key={card.id}
            {...card}
            onRemove={() => handleRemoveCard(card.id)}
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
        <AddCardModal onAddCard={handleAddCard} onClose={closeModal} />
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
