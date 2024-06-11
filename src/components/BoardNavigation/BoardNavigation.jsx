import BoardCard from "../BoardCard/BoardCard";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./BoardNavigation.module.css";
import clsx from "clsx";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};
export default function BoardNavigation() {
  const [activeBoard, setActiveBoard] = useState(null);

  const arr = [
    { icon: "icon-container", title: "Project office", id: "1" },
    { icon: "icon-colors", title: "Project pictures", id: "2" },
    { icon: "icon-container", title: "Project cartoons", id: "3" },
    { icon: "icon-colors", title: "Project chinaaa", id: "4" },
    { icon: "icon-container", title: "Project sauntres", id: "5" },
    { icon: "icon-colors", title: "Project icons", id: "7" },
    { icon: "icon-container", title: "Project icons", id: "8" },
    { icon: "icon-colors", title: "Project icons", id: "9" },
    { icon: "icon-colors", title: "Project icons", id: "10" },
  ];

  const handleBoardClick = (id) => {
    setActiveBoard(id);
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
            <NavLink className={makeLinkClass} to={`/home/${id}`}>
              <BoardCard
                icon={icon}
                title={title}
                id={id}
                isActive={id === activeBoard}
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
