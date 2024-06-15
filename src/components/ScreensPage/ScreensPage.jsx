import css from "./ScreensPage.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectBoard } from "../../../redux/board/selectors";

export default function ScreensPage({ children }) {
  const [backgroundUrl, setBackgroundUrl] = useState(null);
  // const board = useSelector(selectBoard);
  // setBackgroundUrl(board.board.background);
  // console.log(board);

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
