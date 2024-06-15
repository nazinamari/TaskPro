import { useState } from "react";
import styles from "./BurgerMenu.module.css";
import SideBar from "../../../components/SideBar/SideBar";

export default function BurgerMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleBackdropClick = (event) => {
    if (event.target.classList.contains(styles.backdrop)) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className={styles.burgerWrapper}>
      <button className={styles.burgerButton} onClick={toggleSidebar}>
        <svg className={styles.burgerMenu} width="24" height="24">
          <use href="../../../public/icons.svg#icon-burger"></use>
        </svg>
      </button>
      {isSidebarOpen && (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
          <SideBar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>
      )}
    </div>
  );
}
