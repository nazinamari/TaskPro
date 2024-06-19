import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './WorkPlace.module.css';
import AddColumnBtn from '../AddColumnBtn/AddColumnBtn';
import Column from '../Column/Column';
import {
  fetchColumns,
  deleteColumn,
  editColumn,
} from '../../../src/redux/column/operations';
import { selectAllColumns } from '../../../src/redux/column/selectors';

export default function WorkPlace({ id }) {
  const dispatch = useDispatch();
  const columns = useSelector(selectAllColumns);
  useEffect(() => {
    dispatch(fetchColumns(id));
  }, [dispatch, id]);

  const handleDeleteColumn = columnId => {
    dispatch(deleteColumn(columnId));
  };

  const handleEditColumnTitle = newTitle => {
    dispatch(
      editColumn({
        title: newTitle,
      }),
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
        <AddColumnBtn />
      </div>
    </div>
  );
}
