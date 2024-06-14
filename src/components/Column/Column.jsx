import { useState } from "react";
import Modal from "react-modal";
import ToDo from "../ToDo/ToDo";
import TaskCard from "../CardTask/CardTask";
import AddCardBtn from "../AddCardBtn/AddCardBtn";
import AddCardModal from "../AddCardModal/AddCardModal";
import EditCardModal from "../EditCardModal/EditCardModal";
import styles from "./Column.module.css";

const Column = ({ title: initialTitle, onDelete }) => {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState(initialTitle);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  const handleAddCard = (newCard) => {
    setCards([...cards, { ...newCard, id: cards.length }]);
    setIsModalOpen(false);
  };

  const handleRemoveCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleEditCard = (updatedCard) => {
    setCards(
      cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
    setIsEditModalOpen(false);
  };

  const handleEditTitle = (newTitle) => {
    setTitle(newTitle);
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

  return (
    <div className={styles.column}>
      <ToDo title={title} onEditTitle={handleEditTitle} onDelete={onDelete} />
      <div className={styles.cards}>
        {cards.map((card) => (
          <TaskCard
            key={card.id}
            {...card}
            onRemove={handleRemoveCard}
            onEdit={openEditModal}
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
