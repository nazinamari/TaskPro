import { Link } from "react-router-dom";
import css from "./WelcomePage.module.css";
import img from "../../../public/welcome-boy.png";
import Icon from "../../shared/components/Icon/Icon";
import NewBoardModal from "../../components/NewBoardModal/NewBoardModal";

export default function WelcomePage() {
  return (
    <div className={css.container}>
      <div className={css.imgTitleTextContainer}>
        <div className={css.imgContainer}>
          <img className={css.image} src={img} alt="Welcome" />
          <div className={css.logotype}>
            <div className={css.wrapper}>
              <Icon id="icon-logo" className={css.icon} />
            </div>

            <h1 className={css.title}>Task Pro</h1>
          </div>
        </div>
        <p className={css.text}>
          Supercharge your productivity and take control of your tasks with Task
          <br />
          Pro - Don't wait, start achieving your goals now!
        </p>
      </div>
      <div className={css.linkContainer}>
        <Link className={css.registration} to="/auth/register">
          Registration
        </Link>
        <Link className={css.login} to="/auth/login">
          Log In
        </Link>
      </div>
      <NewBoardModal />
    </div>
  );
}
