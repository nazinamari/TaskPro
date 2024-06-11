// import { useState } from "react";
// import styles from "./Theme.module.css";

// const ThemeSelector = ({ changeTheme }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleThemeChange = (theme) => {
//     changeTheme(theme);
//     setIsOpen(false);
//   };

//   return (
//     <div className={styles.dropdown}>
//       <button onClick={toggleDropdown} className={styles.themeBtn}>
//         Theme
//       </button>
//       {isOpen && (
//         <div className={styles.dropdownMenu}>
//           <div
//             className={styles.themeItem}
//             onClick={() => handleThemeChange("light")}
//           >
//             Light
//           </div>
//           <div
//             className={styles.themeItem}
//             onClick={() => handleThemeChange("dark")}
//           >
//             Dark
//           </div>
//           <div
//             className={styles.themeItem}
//             onClick={() => handleThemeChange("violet")}
//           >
//             Violet
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ThemeSelector;

import { useState, useEffect, useRef } from "react";
import styles from "./Theme.module.css";

const ThemeSelector = ({ changeTheme }) => {
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

export default ThemeSelector;
