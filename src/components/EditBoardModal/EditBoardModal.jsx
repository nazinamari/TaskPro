import css from "./EditBoardModal.module.css";
import { useForm } from "react-hook-form";
import Icon from "../../shared/components/Icon/Icon";
import bgImages from "../../images/desktop_1x/index";
import { useState } from "react";
import clsx from "clsx";

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

export default function EditBoardModal({ onClose }) {
  const [selectedIcon, setSelectedIcon] = useState("Icon1");
  const [selectedBg, setSelectedBg] = useState("p1");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Icon: selectedIcon,
      Background: selectedBg,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

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
          <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <input className={css.input} type="text" />
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
                    <label
                      htmlFor={icon.id}
                      className={clsx(css.customRadio, {
                        active: selectedIcon === icon.value,
                      })}
                    >
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
              {errors.Icon && <span>{errors.Icon.message}</span>}
            </div>
            <h3 className={css.iconsTitle}>Background</h3>
            <ul className={css.bgList}>
              {bgImages.map((imageSrc, index) => (
                <li key={index}>
                  <input
                    type="radio"
                    value={imageSrc.value}
                    id={`bg-${index}`}
                    className={css.iconRadio}
                    onChange={() => setSelectedBg(imageSrc.value)}
                    checked={selectedBg === imageSrc.value}
                  />
                  <label
                    htmlFor={`bg-${index}`}
                    className={clsx(css.customRadio, {
                      active: selectedBg === imageSrc.value,
                    })}
                  >
                    <img
                      className={css.bgImage}
                      src={imageSrc}
                      alt={`Image ${index + 1}`}
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
