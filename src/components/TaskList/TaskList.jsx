// import css from "./TaskList.module.css";
// import TaskCard from "../CardTask/CardTask";

// const arr = [];
// export default function TaskList() {
//   return (
//     <ul className={css.list}>
//       {arr.map(({ name }) => (
//         <li key={(~~(Math.random() * 1e8)).toString(16)}>
//           <TaskCard name={name} />
//         </li>
//       ))}
//     </ul>
//   );
// }
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllCards,
  selectAllCards,
  selectLoading,
  selectError,
} from "../../../redux/cards/slice";
import TaskCard from "../CardTask/CardTask";
import styles from "./TaskList.module.css";

const TaskList = ({ onEdit, onRemove }) => {
  const dispatch = useDispatch();
  const cards = useSelector(selectAllCards);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllCards());
  }, [dispatch]);

  const handleRemove = (id) => {
    onRemove(id);
  };

  const handleEdit = (card) => {
    onEdit(card);
  };

  const handleMove = () => {
    // Реализовать функцию перемещения карточки   const handleMove = (id) => {
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.taskList}>
      {cards.map((card) => (
        <TaskCard
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          labelColor={card.labelColor}
          deadline={card.deadline}
          onRemove={handleRemove}
          onEdit={handleEdit}
          onMove={handleMove}
        />
      ))}
    </div>
  );
};

export default TaskList;
