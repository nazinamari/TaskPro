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
} from "../../../src/redux/column/operations";
import { selectAllColumns } from "../../../src/redux/column/selectors";

export default function WorkPlace() {
  const dispatch = useDispatch();
  const boardId = useSelector(selectBoard);
  const columns = useSelector(selectAllColumns);

  const id = boardId.board._id;
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

  const handleEditColumnTitle = (columnId, newTitle) => {
    dispatch(
      editColumn({
        title: newTitle,
      })
    );
  };

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
            onEditTitle={() => handleEditColumnTitle(_id)}
          />
        ))}
        <AddColumnBtn onAddColumn={handleAddColumn} />
      </div>
    </div>
  );
}
