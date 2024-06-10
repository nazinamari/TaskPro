import Header from "../../components/Header/Header";
import WorkPlace from "../../components/WorkPlace/WorkPlace";
import css from "./MainContent.module.css";

export default function MainContent({ content, toggleSidebar }) {
  return (
    <div className={css.wrapper}>
      <Header toggleSidebar={toggleSidebar} />
      <WorkPlace>{content}</WorkPlace>
    </div>
  );
}

// Прокинути toggleSidebar на бургер
