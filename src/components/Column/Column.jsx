// import { useState } from "react";
// import Modal from "react-modal";
// import ToDo from "../ToDo/ToDo";
// import TaskCard from "../CardTask/CardTask";
// import AddCardBtn from "../AddCardBtn/AddCardBtn";
// import AddCardModal from "../AddCardModal/AddCardModal";
// import styles from "./Column.module.css";

// const Column = ({ title: initialTitle, onDelete }) => {
//   const [cards, setCards] = useState([]);
//   const [title, setTitle] = useState(initialTitle);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleAddCard = (newCard) => {
//     setCards([...cards, { ...newCard, id: cards.length }]);
//     setIsModalOpen(false);
//   };

//   const handleEditTitle = (newTitle) => {
//     setTitle(newTitle);
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className={styles.column}>
//       <ToDo title={title} onEditTitle={handleEditTitle} onDelete={onDelete} />
//       <div className={styles.cards}>
//         {cards.map((card) => (
//           <TaskCard key={card.id} {...card} />
//         ))}
//       </div>
//       <AddCardBtn onClick={openModal} />
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel="Add Card Modal"
//         className={styles.modal}
//         overlayClassName={styles.overlay}
//       >
//         <AddCardModal onAddCard={handleAddCard} onClose={closeModal} />
//       </Modal>
//     </div>
//   );
// };

// export default Column;
import { useState } from "react";
import Modal from "react-modal";
import ToDo from "../ToDo/ToDo";
import TaskCard from "../CardTask/CardTask";
import AddCardBtn from "../AddCardBtn/AddCardBtn";
import AddCardModal from "../AddCardModal/AddCardModal";
import styles from "./Column.module.css";

const Column = ({ title: initialTitle, onDelete }) => {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState(initialTitle);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (newCard) => {
    setCards([...cards, { ...newCard, id: cards.length }]);
    setIsModalOpen(false);
  };

  const handleRemoveCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
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

  return (
    <div className={styles.column}>
      <ToDo title={title} onEditTitle={handleEditTitle} onDelete={onDelete} />
      <div className={styles.cards}>
        {cards.map((card) => (
          <TaskCard key={card.id} {...card} onRemove={handleRemoveCard} />
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
    </div>
  );
};

export default Column;
