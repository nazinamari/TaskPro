import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./WorkPlace.module.css";
import AddColumnBtn from "../AddColumnBtn/AddColumnBtn";
import Column from "../Column/Column";
import { selectBoard } from "../../../src/redux/board/selectors";
import {
  fetchColumns,
  addColumn,
  deleteColumn,
  editColumn,
  getColumnById,
} from "../../../src/redux/column/operations";
import {
  selectAllColumns,
  selectLoading,
  selectError,
  selectColumn,
} from "../../../src/redux/column/selectors";

export default function WorkPlace() {
  const dispatch = useDispatch();
  const boardId = useSelector(selectBoard);
  const columnId = useSelector(selectColumn);
  console.log("columnId:", columnId);

  const columns = useSelector(selectAllColumns);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const id = boardId.board._id;
  console.log("current board", id);
  useEffect(() => {
    if (id) {
      dispatch(fetchColumns(id));
    }
  }, [dispatch, id]);

  const handleAddColumn = (title) => {
    const newColumn = {
      title,
      boardId: id,
    };
    dispatch(addColumn(newColumn));
  };

  const handleDeleteColumn = (id) => {
    dispatch(deleteColumn(id));
  };

  const handleAddCard = (columnId, newCard) => {
    const updatedColumn = columns.find((column) => column._id === columnId);
    updatedColumn.cards.push(newCard);
    dispatch(
      editColumn({
        workplaceId: boardId.board._id,
        columnId,
        data: updatedColumn,
      })
    );
  };

  const handleRemoveCard = (columnId, cardId) => {
    const updatedColumn = columns.find((column) => column._id === columnId);
    updatedColumn.cards = updatedColumn.cards.filter(
      (card) => card._id !== cardId
    );
    dispatch(
      editColumn({
        workplaceId: boardId.board._id,
        columnId,
        data: updatedColumn,
      })
    );
  };

  const handleMoveCard = (currentColumnId, cardId) => {
    const currentColumnIndex = columns.findIndex(
      (column) => column._id === currentColumnId
    );
    if (currentColumnIndex < 0 || currentColumnIndex === columns.length - 1)
      return;

    const card = columns[currentColumnIndex].cards.find(
      (card) => card._id === cardId
    );
    if (card) {
      const updatedCurrentColumn = {
        ...columns[currentColumnIndex],
        cards: columns[currentColumnIndex].cards.filter(
          (card) => card._id !== cardId
        ),
      };
      const updatedNextColumn = {
        ...columns[currentColumnIndex + 1],
        cards: [...columns[currentColumnIndex + 1].cards, card],
      };

      dispatch(
        editColumn({
          workplaceId: boardId.board._id,
          columnId: updatedCurrentColumn._id,
          data: updatedCurrentColumn,
        })
      );
      dispatch(
        editColumn({
          workplaceId: boardId.board._id,
          columnId: updatedNextColumn._id,
          data: updatedNextColumn,
        })
      );
    }
  };

  const handleEditColumnTitle = (columnId, newTitle) => {
    dispatch(
      editColumn({
        title: newTitle,
      })
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.error("Error loading columns:", error);
    return <div>Error loading columns</div>;
  }

  return (
    <div className={css.container}>
      <div className={css.columns}>
        {columns.map(({ _id, title, cards }) => (
          <Column
            key={_id}
            id={_id}
            title={title}
            cards={cards}
            onDelete={() => handleDeleteColumn(_id)}
            onAddCard={handleAddCard}
            onRemoveCard={handleRemoveCard}
            onMoveCard={handleMoveCard}
            onEditTitle={() => handleEditColumnTitle(_id)}
          />
        ))}
        <AddColumnBtn onAddColumn={handleAddColumn} />
      </div>
    </div>
  );
}
