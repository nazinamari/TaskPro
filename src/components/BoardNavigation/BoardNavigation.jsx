import BoardCard from "../BoardCard/BoardCard";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { selectAllBoards } from "../../../redux/board/selectors.js";
import css from "./BoardNavigation.module.css";
import clsx from "clsx";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};
export default function BoardNavigation({ toggleSidebar }) {
  const location = useLocation();
  const [activeBoard, setActiveBoard] = useState(null);
  const boards = useSelector(selectAllBoards);

  useEffect(() => {
    const path = location.pathname.split("/").pop();
    if (path) {
      setActiveBoard(path);
    }
  }, [location.pathname]);

  const handleBoardClick = (id) => {
    setActiveBoard(id);
  };
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        {boards.map(({ icon, title, id }) => (
          <li
            key={id}
            onClick={() => handleBoardClick(id)}
            className={clsx(css.boardItem, {
              [css.active]: id === activeBoard,
            })}
          >
            <NavLink
              className={makeLinkClass}
              to={`/home/${id}`}
              onClick={toggleSidebar}
            >
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
