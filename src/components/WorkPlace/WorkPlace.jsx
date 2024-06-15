import { useState } from "react";
import css from "./WorkPlace.module.css";
import AddColumnBtn from "../AddColumnBtn/AddColumnBtn";
import Column from "../Column/Column";

export default function WorkPlace() {
  const [columns, setColumns] = useState([]);

  const handleAddColumn = (title) => {
    const newColumn = {
      id: columns.length,
      title: title,
      cards: [],
    };
    setColumns([...columns, newColumn]);
  };

  const handleDeleteColumn = (id) => {
    setColumns(columns.filter((column) => column.id !== id));
  };

  const handleAddCard = (columnId, newCard) => {
    setColumns(
      columns.map((column) =>
        column.id === columnId
          ? { ...column, cards: [...column.cards, newCard] }
          : column
      )
    );
  };

  const handleRemoveCard = (columnId, cardId) => {
    setColumns(
      columns.map((column) =>
        column.id === columnId
          ? {
              ...column,
              cards: column.cards.filter((card) => card.id !== cardId),
            }
          : column
      )
    );
  };

  const handleMoveCard = (currentColumnId, cardId) => {
    const currentColumnIndex = columns.findIndex(
      (column) => column.id === currentColumnId
    );
    if (currentColumnIndex < 0 || currentColumnIndex === columns.length - 1)
      return;

    const card = columns[currentColumnIndex].cards.find(
      (card) => card.id === cardId
    );
    if (card) {
      setColumns(
        columns.map((column, index) => {
          if (index === currentColumnIndex) {
            return {
              ...column,
              cards: column.cards.filter((card) => card.id !== cardId),
            };
          } else if (index === currentColumnIndex + 1) {
            return {
              ...column,
              cards: [...column.cards, card],
            };
          } else {
            return column;
          }
        })
      );
    }
  };

  const handleEditColumnTitle = (columnId, newTitle) => {
    setColumns(
      columns.map((column) =>
        column.id === columnId ? { ...column, title: newTitle } : column
      )
    );
  };

  return (
    <div className={css.container}>
      <div className={css.columns}>
        {columns.map(({ id, title, cards }) => (
          <Column
            key={id}
            id={id}
            title={title}
            cards={cards}
            onDelete={() => handleDeleteColumn(id)}
            onAddCard={handleAddCard}
            onRemoveCard={handleRemoveCard}
            onMoveCard={handleMoveCard}
            onEditTitle={handleEditColumnTitle} //
          />
        ))}
        <AddColumnBtn onAddColumn={handleAddColumn} />
      </div>
    </div>
  );
}
