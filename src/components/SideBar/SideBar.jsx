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
      {/* Додати компонент нової таски */}

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
            + {/* Додати icon */}
          </button>
        </div>
        <BoardNavigation />
        <div className={css.helpWrapper}>
          <div className={css.image}></div> {/* Додати image */}
          <p>
            If you need help with{" "}
            <a className={css.link} href="#">
              TaskPro
            </a>
            , check out our support resources or reach out to our customer
            support team.
          </p>
          <button
            type="button"
            onClick={handleHelpModal}
            className={css.helpBtn}
          >
            Need help? {/* Додати icon */}
          </button>
        </div>
        <button
          className={css.logoutBtn}
          type="button"
          onClick={() => {
            // dispatch(logOut())
            //   .unwrap()
            //   .then()
            //   .catch(() => {
            //     errToast();
            //   });
            alert("log out");
          }}
        >
          Log out
        </button>
      </aside>
    </>
  );
}
