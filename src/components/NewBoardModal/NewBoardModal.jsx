import css from "./NewBoardModal.module.css";
import { useForm } from "react-hook-form";
import Icon from "../../shared/components/Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { selectAllBoards } from "../../../redux/board/selectors.js";
import bgImages from "../../images/desktop_1x/index";
import { addBoard } from "../../../redux/board/operations.js";
import { useState } from "react";
import Background from "../../shared/components/Background/Background.jsx";

const icons = [
  {
    value: "Icon1",
    id: "icon-projects",
    alt: "icon-projects",
    width: "18",
    height: "18",
  },
  {
    value: "Icon2",
    id: "icon-star",
    alt: "icon-star",
    width: "18",
    height: "18",
  },
  {
    value: "Icon3",
    id: "icon-loading",
    alt: "icon-loading",
    width: "18",
    height: "18",
  },
  {
    value: "Icon4",
    id: "icon-puzzle",
    alt: "icon-puzzle",
    width: "18",
    height: "18",
  },
  {
    value: "Icon5",
    id: "icon-container",
    alt: "icon-container",
    width: "18",
    height: "18",
  },
  {
    value: "Icon6",
    id: "icon-lightning",
    alt: "icon-lightning",
    width: "18",
    height: "18",
  },
  {
    value: "Icon7",
    id: "icon-colors",
    alt: "icon-colors",
    width: "18",
    height: "18",
  },
  {
    value: "Icon8",
    id: "icon-hexagon",
    alt: "icon-hexagon",
    width: "18",
    height: "18",
  },
];

export default function NewBoardModal({ handleCreateModal }) {
  const dispatch = useDispatch();
  const boards = useSelector(selectAllBoards);
  const [selectedIcon, setSelectedIcon] = useState("Icon1");
  const [selectedBg, setSelectedBg] = useState("p1");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Icon: selectedIcon,
      Background: setSelectedBg,
    },
  });

  const onSubmit = (values, actions) => {
    if (boards.find((board) => board.title.trim() === values.title.trim())) {
      alert("already exist");
    } else {
      const newBoard = {
        title: values.title,
        icon: values.icon,
        bgImage: values.bgImage,
      };

      dispatch(addBoard(newBoard))
        .unwrap()
        .then(() => {
          console.log("add board"); // додати тост
        })
        .catch(() => {
          console.error(); // додати тост
        });
      actions.preventDefault();
      reset();
    }
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={css.container} onClick={handleCreateModal}>
      <div className={css.modalWindow} onClick={stopPropagation}>
        <div className={css.modalWindowContent}>
          <button className={css.closeBtn} onClick={handleCreateModal}>
            <Icon
              id="icon-close"
              width="18"
              height="24"
              className={css.iconClose}
              alt="icon-close"
            />
          </button>
          <h2 className={css.title}>New board</h2>
          <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              className={css.input}
              type="text"
              placeholder="Title"
              {...register("title", {
                required: "Title is required",
              })}
            />
            {errors.Title && <span>This field is required</span>}
            <div className={css.formContainer}>
              <h3 className={css.iconsTitle}>Icons</h3>
              <ul className={css.iconsContainer}>
                {icons.map((icon) => (
                  <li key={icon.value} className={css.iconLabel}>
                    <input
                      type="radio"
                      value={icon.value}
                      id={icon.id}
                      {...register("Icon")}
                      className={css.iconRadio}
                      onChange={() => setSelectedIcon(icon.value)}
                      checked={selectedIcon === icon.value}
                    />
                    <label htmlFor={icon.id} className={css.iconImage}>
                      <Icon
                        id={icon.id}
                        alt={icon.alt}
                        width={icon.width}
                        height={icon.height}
                      />
                    </label>
                  </li>
                ))}
              </ul>
              {errors.Icon && <span>{errors.Icon.message}</span>}
            </div>

            <h3 className={css.iconsTitle}>Background</h3>
            <ul className={css.bgList}>
              {bgImages.map((imageSrc, index) => (
                <li key={index}>
                  <label htmlFor={`bg-${index}`} className={css.iconLabel}>
                    <input
                      type="radio"
                      value={imageSrc.value}
                      id={`bg-${index}`}
                      className={css.iconRadio}
                      onChange={() => setSelectedBg(imageSrc.value)}
                      checked={selectedBg === imageSrc.value}
                    />

                    <Background
                      className={css.bgImage}
                      width={imageSrc.width}
                      height={imageSrc.height}
                      src={imageSrc.src}
                      alt={imageSrc.value}
                    />
                  </label>
                </li>
              ))}
            </ul>

            <button type="submit" className={css.createBtn}>
              <div className={css.wrapper}>
                <Icon
                  id="icon-plus"
                  width="14"
                  height="14"
                  className={css.iconPlus}
                  alt="icon-close"
                />
              </div>

              <p className={css.createText}>Create</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
