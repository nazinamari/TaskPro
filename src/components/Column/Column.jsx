// import { useState } from "react";
// import ToDo from "../ToDo/ToDo";
// import TaskCard from "../CardTask/CardTask";
// import AddCardBtn from "../AddCardBtn/AddCardBtn";
// import styles from "./Column.module.css";

// const Column = ({ title: initialTitle, onDelete }) => {
//   const [cards, setCards] = useState([]);
//   const [title, setTitle] = useState(initialTitle);

//   const handleAddCard = () => {
//     setCards([...cards, <TaskCard key={cards.length} />]);
//   };

//   const handleEditTitle = (newTitle) => {
//     setTitle(newTitle);
//   };

//   return (
//     <div className={styles.column}>
//       <ToDo title={title} onEditTitle={handleEditTitle} onDelete={onDelete} />
//       <div className={styles.cards}>{cards}</div>
//       <AddCardBtn onClick={handleAddCard} />
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
    setCards([...cards, <TaskCard key={cards.length} {...newCard} />]);
    setIsModalOpen(false);
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
      <div className={styles.cards}>{cards}</div>
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
