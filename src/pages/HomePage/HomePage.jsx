// import Title from "../shared/Title/Title";
import SideBar from "../../components/SideBar/SideBar";
import WorkPlace from "../../components/WorkPlace/WorkPlace";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <SideBar />
      <WorkPlace />
    </div>
  );
}
