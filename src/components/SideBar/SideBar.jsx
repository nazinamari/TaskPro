import { useState, useCallback } from "react";
import BoardNavigation from "../BoardNavigation/BoardNavigation";
import LogoComponent from "../LogoComponent/LogoComponent";
import css from "./SideBar.module.css";
import NewBoard from "../NewBoard/NewBoard";

export default function SideBar() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleAddModal = useCallback(() => {
    setIsOpenModal((prevState) => !prevState);
  }, []);

  return (
    <>
      {isOpenModal && <NewBoard />}

      <aside className={css.container}>
        <LogoComponent />
        <h4 className={css.title}>My boards</h4>
        <div className={css.wrapper}>
          <p>Create a new board</p>
          <button type="button" onClick={handleAddModal} className={css.addBtn}>
            +
          </button>
        </div>
        <BoardNavigation />
        <div className={css.helpWrapper}>
          <p>
            If you need help with TaskPro, check out our support resources or
            reach out to our customer support team.
          </p>
        </div>
        <button type="button">Log out</button>
      </aside>
    </>
  );
}
