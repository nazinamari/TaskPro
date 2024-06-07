import { useState, useCallback } from "react";
import BoardNavigation from "../BoardNavigation/BoardNavigation";
import LogoComponent from "../LogoComponent/LogoComponent";
import css from "./SideBar.module.css";
import NeedHelpModal from "../NeedHelpModal/NeedHelpModal";

export default function SideBar() {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [isOpenHelpModal, setIsOpenHelpModal] = useState(false);

  const handleCreateModal = useCallback(() => {
    setIsOpenCreateModal((prevState) => !prevState);
  }, []);

  const handleHelpModal = useCallback(() => {
    setIsOpenHelpModal((prevState) => !prevState);
  }, []);

  return (
    <>
      {isOpenCreateModal && <p>MODAL WINDOW</p>}
      {isOpenHelpModal && <NeedHelpModal />}
      <aside className={css.container}>
        <LogoComponent />
        <h4 className={css.title}>My boards</h4>
        <div className={css.wrapper}>
          <p className={css.text}>Create a new board</p>
          <button
            type="button"
            onClick={handleCreateModal}
            className={css.addBtn}
          >
            <svg className={css.btnIcon} width="20" height="20">
              <use href="../../../public/sprite.svg#icon-plus"></use>
            </svg>
          </button>
        </div>
        <BoardNavigation />
        <div className={css.helpWrapper}>
          <img src="../../../public/2.png" alt="Plant" />
          <p>
            If you need help with <span className={css.span}>TaskPro</span>,
            check out our support resources or reach out to our customer support
            team.
          </p>
          <button
            type="button"
            onClick={handleHelpModal}
            className={css.helpBtn}
          >
            <svg className={css.helpIcon} width="20" height="20">
              <use href="../../../public/sprite.svg#icon-container"></use>
            </svg>
            Need help?
          </button>
        </div>
        <button
          className={css.logoutBtn}
          type="button"
          onClick={() => {
            alert("log out");
          }}
        >
          <svg className={css.logoutIcon} width="20" height="20">
            <use
              className={css.logoutIcon}
              href="../../../public/sprite.svg#icon-login"
            ></use>
          </svg>
          Log out
        </button>
      </aside>
    </>
  );
}
