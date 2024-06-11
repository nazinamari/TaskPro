import { useState } from "react";
import ToDo from "./ToDo";
import TaskCard from "./CardTask";
import AddCardBtn from "./AddCardBtn";
import styles from "./Column.module.css";

const Column = ({ title, onDelete }) => {
  const [cards, setCards] = useState([]);

  const handleAddCard = () => {
    setCards([...cards, <TaskCard key={cards.length} />]);
  };

  return (
    <div className={styles.column}>
      <ToDo title={title} onDelete={onDelete} />
      <div className={styles.cards}>{cards}</div>
      <AddCardBtn onClick={handleAddCard} />
    </div>
  );
};

export default Column;
