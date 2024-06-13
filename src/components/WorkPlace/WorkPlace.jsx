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
    };
    setColumns([...columns, newColumn]);
  };

  const handleDeleteColumn = (id) => {
    setColumns(columns.filter((column) => column.id !== id));
  };

  return (
    <div className={css.container}>
      <div className={css.columns}>
        {columns.map(({ id, title }) => (
          <Column
            key={id}
            title={title}
            onDelete={() => handleDeleteColumn(id)}
          />
        ))}
        <AddColumnBtn onAddColumn={handleAddColumn} />
      </div>
    </div>
  );
}
