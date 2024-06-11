import { useState, useEffect, useRef } from "react";
import styles from "./ThemeSwitcher.module.css";
import { useSelector } from "react-redux";
import { selectThemes } from "../../Theme/reduxThemes/themeSlice";

const ThemeSwitcher = ({ changeTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const themes = useSelector(selectThemes);
  console.log(themes);

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
      <button onClick={toggleDropdown} className={styles.themeBtn}>
        Theme
        <svg className={styles.icon} width="16" height="16">
          <use href="../../../public/icons.svg#icon-arrow-down"></use>
        </svg>
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

export default ThemeSwitcher;
