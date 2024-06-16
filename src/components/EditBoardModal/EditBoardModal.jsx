import css from "./EditBoardModal.module.css";
import Icon from "../../shared/components/Icon/Icon";
import bgImages from "../../images/mini/dt_1x/index";
import { useEffect, useState } from "react";
import { editBoard } from "../../../redux/board/operations";
import Background from "../../shared/components/Background/Background";
import { useDispatch, useSelector } from "react-redux";
import { selectBoard } from "../../../redux/board/selectors";

const icons = [
  {
    value: "icon-projects",
    id: "icon-projects",
    alt: "icon-projects",
    width: "18px",
    height: "18px",
  },
  {
    value: "icon-star",
    id: "icon-star",
    alt: "icon-star",
    width: "18px",
    height: "18px",
  },
  {
    value: "icon-loading",
    id: "icon-loading",
    alt: "icon-loading",
    width: "18px",
    height: "18px",
  },
  {
    value: "icon-puzzle",
    id: "icon-puzzle",
    alt: "icon-puzzle",
    width: "18px",
    height: "18px",
  },
  {
    value: "icon-container",
    id: "icon-container",
    alt: "icon-container",
    width: "18px",
    height: "18px",
  },
  {
    value: "icon-lightning",
    id: "icon-lightning",
    alt: "icon-lightning",
    width: "18px",
    height: "18px",
  },
  {
    value: "icon-colors",
    id: "icon-colors",
    alt: "icon-colors",
    width: "18px",
    height: "18px",
  },
  {
    value: "icon-hexagon",
    id: "icon-hexagon",
    alt: "icon-hexagon",
    width: "18px",
    height: "18px",
  },
];

export default function EditBoardModal({ onClose, title }) {
  const board = useSelector(selectBoard);
  console.log(board);
  const [selectedIcon, setSelectedIcon] = useState(
    board.board.icon || icons[0].value
  );
  const [selectedBg, setSelectedBg] = useState(
    board.board.background || "bg-1"
  );
  const [boardTitle, setBoardTitle] = useState(title);

  useEffect(() => {
    setSelectedIcon(board.board.icon || icons[0].value);
    setSelectedBg(board.board.background || "bg-1");
    setBoardTitle(board.board.title);
  }, [board]);

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const id = board.board._id;
    const data = {
      title: boardTitle,
      icon: selectedIcon,
      background: selectedBg,
    };
    dispatch(editBoard({ boardId: id, data }))
      .unwrap()
      .then(() => {
        console.log("update successfully"); // додати тост
      })
      .catch((error) => {
        console.error(error.message);
      });
    onClose();
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.container} onClick={onClose}>
      <div className={css.modalWindow} onClick={stopPropagation}>
        <div className={css.modalWindowContent}>
          <button className={css.closeBtn} onClick={onClose}>
            <Icon
              id="icon-close"
              width="18"
              height="24"
              className={css.iconClose}
              alt="icon-close"
            />
          </button>
          <h2 className={css.title}>Edit board</h2>

          <form className={css.form} onSubmit={onSubmit}>
            <input
              className={css.input}
              type="text"
              value={boardTitle}
              onChange={(e) => setBoardTitle(e.target.value)}
            />{" "}
            <div className={css.formContainer}>
              <h3 className={css.iconsTitle}>Icons</h3>
              <ul className={css.iconsContainer}>
                {icons.map((icon) => (
                  <li key={icon.value} className={css.iconLabel}>
                    <label htmlFor={icon.id} className={css.iconLabel}>
                      <input
                        type="radio"
                        value={icon.value}
                        id={icon.id}
                        className={css.iconRadio}
                        onChange={() => setSelectedIcon(icon.value)}
                        checked={selectedIcon === icon.value}
                      />

                      <Icon
                        id={icon.id}
                        alt={icon.alt}
                        width={icon.width}
                        height={icon.height}
                        className={css.iconImage}
                      />
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <h3 className={css.iconsTitle}>Background</h3>
            <ul className={css.bgList}>
              {bgImages.map((image, index) => (
                <li key={index}>
                  <label htmlFor={`bg-${index}`} className={css.bgLabel}>
                    <input
                      type="radio"
                      value={image.value}
                      id={`bg-${index}`}
                      className={css.iconRadio}
                      onChange={() => setSelectedBg(image.value)}
                      checked={selectedBg === image.value}
                    />
                    <Background
                      className={css.bgImage}
                      width={image.width}
                      height={image.height}
                      src={image.src}
                      alt={image.index}
                    />
                  </label>
                </li>
              ))}
            </ul>
            <button type="submit" className={css.editBtn}>
              <div className={css.wrapper}>
                <Icon
                  id="icon-plus"
                  width="14"
                  height="14"
                  className={css.iconPlus}
                  alt="icon-close"
                />
              </div>

              <p className={css.createText}>Edit</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
