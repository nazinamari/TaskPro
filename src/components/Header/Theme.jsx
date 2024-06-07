import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./Theme.module.css";

const ThemeSelector = ({ changeTheme }) => {
  const options = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "violet", label: "Violet" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme) => {
    changeTheme(theme);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <Dropdown show={isOpen} onSelect={() => setIsOpen(false)}>
        <Dropdown.Toggle
          id="dropdown-basic-button"
          className={styles.themeBtn}
          onClick={() => setIsOpen(!isOpen)}
        >
          Theme
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.dropdownMenu}>
          {options.map((option) => (
            <Dropdown.Item
              key={option.value}
              className={styles.themeItem}
              eventKey={option.value}
              onSelect={() => handleThemeChange(option.value)}
            >
              {option.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ThemeSelector;
