import css from "./EditBoardModal.module.css";
// import { useForm } from "react-hook-form";
import Icon from "../../shared/components/Icon/Icon";
import bgImages from "../../images/desktop_1x/index";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editBoard } from "../../../redux/board/operations";
import Background from "../../shared/components/Background/Background";

const icons = [
  {
    value: "Icon1",
    id: "icon-projects",
    alt: "icon-projects",
    width: "18px",
    height: "18px",
  },
  {
    value: "Icon2",
    id: "icon-star",
    alt: "icon-star",
    width: "18px",
    height: "18px",
  },
  {
    value: "Icon3",
    id: "icon-loading",
    alt: "icon-loading",
    width: "18px",
    height: "18px",
  },
  {
    value: "Icon4",
    id: "icon-puzzle",
    alt: "icon-puzzle",
    width: "18px",
    height: "18px",
  },
  {
    value: "Icon5",
    id: "icon-container",
    alt: "icon-container",
    width: "18px",
    height: "18px",
  },
  {
    value: "Icon6",
    id: "icon-lightning",
    alt: "icon-lightning",
    width: "18px",
    height: "18px",
  },
  {
    value: "Icon7",
    id: "icon-colors",
    alt: "icon-colors",
    width: "18px",
    height: "18px",
  },
  {
    value: "Icon8",
    id: "icon-hexagon",
    alt: "icon-hexagon",
    width: "18px",
    height: "18px",
  },
];

export default function EditBoardModal({ onClose, title }) {
  const [selectedIcon, setSelectedIcon] = useState("Icon1");
  const [selectedBg, setSelectedBg] = useState("bg-1");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: title,
      icon: selectedIcon,
      background: selectedBg,
    };

    dispatch(editBoard(data))
      .unwrap()
      .then(() => {
        console.log("update successfully"); // додати тост
      })
      .catch((error) => {
        console.error(error.message);
      });
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
            <input className={css.input} type="text" defaultValue={title} />
            <div className={css.formContainer}>
              <h3 className={css.iconsTitle}>Icons</h3>
              <ul className={css.iconsContainer}>
                {icons.map((icon) => (
                  <li key={icon.value} className={css.iconLabel}>
                    <label htmlFor={icon.id} className={css.iconLabel}>
                      <input
                        type="radio"
                        value={selectedIcon}
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
                      value={selectedBg}
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
