// // import { useState } from "react";
// // import css from "./WorkPlace.module.css";
// // import AddColumnBtn from "../AddColumnBtn/AddColumnBtn";
// // import Column from "../Column/Column";

// // export default function WorkPlace() {
// //   const [columns, setColumns] = useState([]);

// //   const handleAddColumn = (title) => {
// //     const newColumn = {
// //       id: columns.length,
// //       title: title,
// //       cards: [],
// //     };
// //     setColumns([...columns, newColumn]);
// //   };

// //   const handleDeleteColumn = (id) => {
// //     setColumns(columns.filter((column) => column.id !== id));
// //   };

// //   const handleAddCard = (columnId, newCard) => {
// //     setColumns(
// //       columns.map((column) =>
// //         column.id === columnId
// //           ? { ...column, cards: [...column.cards, newCard] }
// //           : column
// //       )
// //     );
// //   };

// //   const handleRemoveCard = (columnId, cardId) => {
// //     setColumns(
// //       columns.map((column) =>
// //         column.id === columnId
// //           ? {
// //               ...column,
// //               cards: column.cards.filter((card) => card.id !== cardId),
// //             }
// //           : column
// //       )
// //     );
// //   };

// //   const handleMoveCard = (currentColumnId, cardId) => {
// //     const currentColumnIndex = columns.findIndex(
// //       (column) => column.id === currentColumnId
// //     );
// //     if (currentColumnIndex < 0 || currentColumnIndex === columns.length - 1)
// //       return;

// //     const card = columns[currentColumnIndex].cards.find(
// //       (card) => card.id === cardId
// //     );
// //     if (card) {
// //       setColumns(
// //         columns.map((column, index) => {
// //           if (index === currentColumnIndex) {
// //             return {
// //               ...column,
// //               cards: column.cards.filter((card) => card.id !== cardId),
// //             };
// //           } else if (index === currentColumnIndex + 1) {
// //             return {
// //               ...column,
// //               cards: [...column.cards, card],
// //             };
// //           } else {
// //             return column;
// //           }
// //         })
// //       );
// //     }
// //   };

// //   const handleEditColumnTitle = (columnId, newTitle) => {
// //     setColumns(
// //       columns.map((column) =>
// //         column.id === columnId ? { ...column, title: newTitle } : column
// //       )
// //     );
// //   };

// //   return (
// //     <div className={css.container}>
// //       <div className={css.columns}>
// //         {columns.map(({ id, title, cards }) => (
// //           <Column
// //             key={id}
// //             id={id}
// //             title={title}
// //             cards={cards}
// //             onDelete={() => handleDeleteColumn(id)}
// //             onAddCard={handleAddCard}
// //             onRemoveCard={handleRemoveCard}
// //             onMoveCard={handleMoveCard}
// //             onEditTitle={handleEditColumnTitle} //
// //           />
// //         ))}
// //         <AddColumnBtn onAddColumn={handleAddColumn} />
// //       </div>
// //     </div>
// //   );
// // }
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchColumns,
//   addColumn,
//   deleteColumn,
//   editColumn,
// } from "./operations";
// import css from "./WorkPlace.module.css";
// import AddColumnBtn from "../AddColumnBtn/AddColumnBtn";
// import Column from "../Column/Column";

// export default function WorkPlace() {
//   const dispatch = useDispatch();
//   const {
//     items: columns,
//     loading,
//     error,
//   } = useSelector((state) => state.columns);

//   useEffect(() => {
//     dispatch(fetchColumns());
//   }, [dispatch]);

//   const handleAddColumn = (title) => {
//     dispatch(addColumn({ title }));
//   };

//   const handleDeleteColumn = (id) => {
//     dispatch(deleteColumn(id));
//   };

//   const handleAddCard = (columnId, newCard) => {
//     const column = columns.find((column) => column.id === columnId);
//     if (column) {
//       const updatedCards = [...column.cards, newCard];
//       dispatch(editColumn({ id: columnId, cards: updatedCards }));
//     }
//   };

//   const handleRemoveCard = (columnId, cardId) => {
//     const column = columns.find((column) => column.id === columnId);
//     if (column) {
//       const updatedCards = column.cards.filter((card) => card.id !== cardId);
//       dispatch(editColumn({ id: columnId, cards: updatedCards }));
//     }
//   };

//   const handleMoveCard = (currentColumnId, cardId) => {
//     const currentColumnIndex = columns.findIndex(
//       (column) => column.id === currentColumnId
//     );
//     if (currentColumnIndex < 0 || currentColumnIndex === columns.length - 1)
//       return;

//     const card = columns[currentColumnIndex].cards.find(
//       (card) => card.id === cardId
//     );
//     if (card) {
//       dispatch(
//         editColumn({
//           id: currentColumnId,
//           cards: columns[currentColumnIndex].cards.filter(
//             (card) => card.id !== cardId
//           ),
//         })
//       );
//       dispatch(
//         editColumn({
//           id: columns[currentColumnIndex + 1].id,
//           cards: [...columns[currentColumnIndex + 1].cards, card],
//         })
//       );
//     }
//   };

//   const handleEditColumnTitle = (columnId, newTitle) => {
//     dispatch(editColumn({ id: columnId, title: newTitle }));
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error loading columns</div>;

//   return (
//     <div className={css.container}>
//       <div className={css.columns}>
//         {columns.map(({ id, title, cards }) => (
//           <Column
//             key={id}
//             id={id}
//             title={title}
//             cards={cards}
//             onDelete={() => handleDeleteColumn(id)}
//             onAddCard={handleAddCard}
//             onRemoveCard={handleRemoveCard}
//             onMoveCard={handleMoveCard}
//             onEditTitle={handleEditColumnTitle}
//           />
//         ))}
//         <AddColumnBtn onAddColumn={handleAddColumn} />
//       </div>
//     </div>
//   );
// }
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchColumns,
  addColumn,
  deleteColumn,
  editColumn,
} from "./operations";
import css from "./WorkPlace.module.css";
import AddColumnBtn from "../AddColumnBtn/AddColumnBtn";
import Column from "../Column/Column";

export default function WorkPlace({ workplaceId }) {
  const dispatch = useDispatch();
  const {
    items: columns,
    loading,
    error,
  } = useSelector((state) => state.columns);

  useEffect(() => {
    dispatch(fetchColumns({ workplaceId }));
  }, [dispatch, workplaceId]);

  const handleAddColumn = (title) => {
    dispatch(addColumn({ workplaceId, newColumn: { title } }));
  };

  const handleDeleteColumn = (id) => {
    dispatch(deleteColumn({ workplaceId, columnId: id }));
  };

  const handleAddCard = (columnId, newCard) => {
    const column = columns.find((column) => column.id === columnId);
    if (column) {
      const updatedCards = [...column.cards, newCard];
      dispatch(
        editColumn({ workplaceId, columnId, data: { cards: updatedCards } })
      );
    }
  };

  const handleRemoveCard = (columnId, cardId) => {
    const column = columns.find((column) => column.id === columnId);
    if (column) {
      const updatedCards = column.cards.filter((card) => card.id !== cardId);
      dispatch(
        editColumn({ workplaceId, columnId, data: { cards: updatedCards } })
      );
    }
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
      dispatch(
        editColumn({
          workplaceId,
          columnId: currentColumnId,
          data: {
            cards: columns[currentColumnIndex].cards.filter(
              (card) => card.id !== cardId
            ),
          },
        })
      );
      dispatch(
        editColumn({
          workplaceId,
          columnId: columns[currentColumnIndex + 1].id,
          data: {
            cards: [...columns[currentColumnIndex + 1].cards, card],
          },
        })
      );
    }
  };

  const handleEditColumnTitle = (columnId, newTitle) => {
    dispatch(editColumn({ workplaceId, columnId, data: { title: newTitle } }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading columns</div>;

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
            onEditTitle={handleEditColumnTitle}
          />
        ))}
        <AddColumnBtn onAddColumn={handleAddColumn} />
      </div>
    </div>
  );
}
