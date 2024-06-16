import { selectBoard } from "../../../redux/board/selectors";
import css from "./ScreensPage.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function ScreensPage({ children }) {
  const [background, setBackground] = useState("bg-1");
  const board = useSelector(selectBoard);

  useEffect(() => {
    if (board) {
      setBackground(board.board.background);
    }
  }, [board]);
  console.log(background);
  const style = {
    // backgroundImage: `url(../../images/desktop_1x/${backgroundUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
    position: "relative",
  };
  return (
    <div className={css.wrapper} style={style}>
      {children}
    </div>
  );
}
