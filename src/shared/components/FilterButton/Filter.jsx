import css from "./Filter.module.css";
import Icon from "../Icon/Icon";
import { useState, useEffect, useRef } from "react";
import styles from "../../../components/Header/ThemaSwitcher/ThemeSwitcher.module.css";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (theme) => {
    changeTheme(theme);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
     <button
      className={css.filterBtn}
      onClick={toggleDropdown}
    >
      <Icon
        id="icon-filter"
        width="16"
        height="16"
        className={css.filterIcon}
      />
      Filters
    </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <ul className={styles.ThemeList}>
            <li
              className={styles.themeItem}
              onClick={() => handleThemeChange("light")}
            >
              Light
            </li>
            <li
              className={styles.themeItem}
              onClick={() => handleThemeChange("dark")}
            >
              Dark
            </li>
            <li
              className={styles.themeItem}
              onClick={() => handleThemeChange("violet")}
            >
              Violet
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

