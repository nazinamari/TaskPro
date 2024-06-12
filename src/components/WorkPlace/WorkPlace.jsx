// import css from "./WorkPlace.module.css";
// import TaskCard from "../CardTask/CardTask";
// import AddCardBtn from "../AddCardBtn/AddCardBtn";
// import ToDo from "../ToDo/ToDo";

// const arr = [
//   { title: "to do" },
//   { title: "in progres" },
//   { title: "revue" },
//   { title: "done" },
//   { title: "done" },
//   { title: "done" },
//   { title: "done" },
//   { title: "done" },
//   { title: "done" },
//   { title: "done" },
//   { title: "done" },
//   { title: "done" },
//   { title: "done" },
//   { title: "done" },
//   { title: "done" },
//   { title: "done" },
// ];

// export default function WorkPlace() {
//   return (
//     <div className={css.container}>
//       <div>
//         <ul className={css.list}>
//           {arr.map(({ title }) => (
//             <li key={(~~(Math.random() * 1e8)).toString(16)}>
//               <ToDo title={title} />
//               <TaskCard />
//               <TaskCard />
//               <TaskCard />
//               <TaskCard />
//               <TaskCard />
//               <TaskCard />
//               <TaskCard />
//               <TaskCard />
//               <AddCardBtn />
//             </li>
//           ))}
//         </ul>
//       </div>
//       <button className={css.addColumnBtn}>Add column</button>
//     </div>
//   );
// }

import { useState } from "react";
import css from "./WorkPlace.module.css";
import AddColumnBtn from "../AddColumnBtn/AddColumnBtn";
import Column from "../Column/Column";

export default function WorkPlace() {
  const [columns, setColumns] = useState([]);

  const handleAddColumn = () => {
    const newColumn = {
      id: columns.length,
      title: `Column ${columns.length + 1}`,
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
        <AddColumnBtn onClick={handleAddColumn} />
      </div>
    </div>
  );
}
