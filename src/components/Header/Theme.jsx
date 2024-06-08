import { useState } from "react";
import styles from "./Theme.module.css";
import { Dropdown } from "react-bootstrap";

const ThemeSelector = ({ changeTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (theme) => {
    changeTheme(theme);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <Dropdown show={isOpen} onToggle={toggleDropdown}>
        <Dropdown.Toggle id="dropdown-basic-button" className={styles.themeBtn}>
          Theme
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.dropdownMenu}>
          <Dropdown.Item
            className={styles.themeItem}
            onClick={() => handleThemeChange("light")}
          >
            Light
          </Dropdown.Item>
          <Dropdown.Item
            className={styles.themeItem}
            onClick={() => handleThemeChange("dark")}
          >
            Dark
          </Dropdown.Item>
          <Dropdown.Item
            className={styles.themeItem}
            onClick={() => handleThemeChange("violet")}
          >
            Violet
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ThemeSelector;
