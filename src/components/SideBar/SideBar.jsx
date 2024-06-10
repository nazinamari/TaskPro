import { useState, useCallback } from "react";
import BoardNavigation from "../BoardNavigation/BoardNavigation";
import LogoComponent from "../../shared/components/LogoComponent/LogoComponent";
import img from "../../../public/2.png";
import css from "./SideBar.module.css";
import NeedHelpModal from "../NeedHelpModal/NeedHelpModal";
import clsx from "clsx";
import Icon from "../../shared/components/Icon/Icon";

export default function SideBar({ isSidebarOpen }) {
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
      {isOpenCreateModal && <NeedHelpModal />}
      {isOpenHelpModal && <NeedHelpModal handleHelpModal={handleHelpModal} />}
      <div className={css.backdrop}>
        <aside
          className={clsx(
            css.container,
            {
              [css.isClosed]: !isSidebarOpen,
            },
            {
              [css.backdrop]: isSidebarOpen,
            }
          )}
        >
          <LogoComponent />
          <h4 className={css.title}>My boards</h4>
          <div className={css.wrapper}>
            <p className={css.text}>Create a new board</p>
            <button
              type="button"
              onClick={handleCreateModal}
              className={css.addBtn}
            >
              <Icon
                id="icon-plus"
                width="20"
                height="20"
                className={css.iconPlus}
              />
            </button>
          </div>
          <BoardNavigation />
          <div className={css.helpWrapper}>
            <img className={css.img} src={img} alt="Plant" />
            <p>
              If you need help with <span className={css.span}>TaskPro</span>,
              check out our support resources or reach out to our customer
              support team.
            </p>
            <button
              type="button"
              onClick={handleHelpModal}
              className={css.helpBtn}
            >
              <Icon
                id="icon-help"
                width="20"
                height="20"
                className={css.helpIcon}
              />
              <p>Need help?</p>
            </button>
          </div>
          <button
            className={css.logoutBtn}
            type="button"
            onClick={() => {
              alert("log out");
            }}
          >
            <Icon
              id="icon-login"
              width="32"
              height="32"
              className={css.logoutIcon}
            />
            Log out
          </button>
        </aside>
      </div>
    </>
  );
}
