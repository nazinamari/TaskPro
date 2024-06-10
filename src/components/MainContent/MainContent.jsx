import Header from "../../components/Header/Header";
import ScreensPage from "../ScreensPage/ScreensPage";
import Filter from "../../shared/components/FilterButton/Filter";
import css from "./MainContent.module.css";

export default function MainContent({ content, header, toggleSidebar }) {
  return (
    <div className={css.wrapper}>
      <Header toggleSidebar={toggleSidebar} />
      <ScreensPage>
        <div className={css.headerWrapper}>
          {header}
          <Filter />
        </div>
        {content}
      </ScreensPage>
    </div>
  );
}

// Прокинути toggleSidebar на бургер
