import { useState } from "react";
import styles from "./Theme.module.css";
import { Dropdown, DropdownButton } from "react-bootstrap";

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
      <DropdownButton
        id="dropdown-basic-button"
        title="Theme"
        show={isOpen}
        onClick={toggleDropdown}
        className={styles.themaBtn}
      >
        <Dropdown.Item
          className={styles.themaItem}
          onClick={() => handleThemeChange("light")}
        >
          Light
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.themaItem}
          onClick={() => handleThemeChange("dark")}
        >
          Dark
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.themaItem}
          onClick={() => handleThemeChange("violet")}
        >
          Violet
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default ThemeSelector;
