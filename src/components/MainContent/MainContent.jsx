import Header from "../../components/Header/Header";
import WorkPlace from "../../components/WorkPlace/WorkPlace";
import css from "./MainContent.module.css";

export default function MainContent({
  toggleSidebar,
  handleCreateModal,
  isOpenCreateModal,
}) {
  return (
    <div className={css.wrapper}>
      <Header toggleSidebar={toggleSidebar} />
      <WorkPlace
        handleCreateModal={handleCreateModal}
        isOpenCreateModal={isOpenCreateModal}
      />
    </div>
  );
}

// Прокинути toggleSidebar на бургер
