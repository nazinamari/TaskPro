import { useState } from "react";
import ToDo from "../ToDo/ToDo";
import TaskCard from "../CardTask/CardTask";
import AddCardBtn from "../AddCardBtn/AddCardBtn";
import styles from "./Column.module.css";

const Column = ({ title: initialTitle, onDelete }) => {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState(initialTitle);

  const handleAddCard = () => {
    setCards([...cards, <TaskCard key={cards.length} />]);
  };

  const handleEditTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <div className={styles.column}>
      <ToDo title={title} onEditTitle={handleEditTitle} onDelete={onDelete} />
      <div className={styles.cards}>{cards}</div>
      <AddCardBtn onClick={handleAddCard} />
    </div>
  );
};

export default Column;
