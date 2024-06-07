import BoardCard from "../BoardCard/BoardCard";
import { useState, useCallback } from "react";
import css from "./BoardNavigation.module.css";
import clsx from "clsx";

export default function BoardNavigation() {
  const [activeBoard, setActiveBoard] = useState(null);

  const arr = [
    { icon: "icon-bell-01", title: "Project office", id: "1" },
    { icon: "icon-colors", title: "Project pictures", id: "2" },
    { icon: "icon-bell-01", title: "Project cartoons", id: "3" },
    { icon: "icon-colors", title: "Project chinaaa", id: "4" },
    { icon: "icon-bell-01", title: "Project sauntres", id: "5" },
    { icon: "icon-colors", title: "Project icons", id: "7" },
    { icon: "icon-colors", title: "Project icons", id: "8" },
    { icon: "icon-colors", title: "Project icons", id: "9" },
    { icon: "icon-colors", title: "Project icons", id: "10" },
  ];

  const handleBoardClick = (id) => {
    setActiveBoard(id);
    console.log(id);
  };
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        {arr.map(({ icon, title, id }) => (
          <li
            key={id}
            onClick={() => handleBoardClick(id)}
            className={clsx(css.boardItem, {
              [css.active]: id === activeBoard,
            })}
          >
            <BoardCard icon={icon} title={title} id={id} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
