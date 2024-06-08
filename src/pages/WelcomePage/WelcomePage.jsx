import { Link } from "react-router-dom";
import Title from "../../shared/components/Title/Title";
import css from "./WelcomePage.module.css";

export default function WelcomePage() {
  return (
    <div className={css.container}>
      <div className={css.imgTitleTextContainer}>
        <div className={css.imgContainer}>
          <img
            className={css.image}
            src="../../public/welcome-boy.png"
            alt="Welcome"
          />
          <div className={css.logotype}>
            <svg className={css.icon} width="48" height="48" aria-label="logo">
              <use href="/public/sprite.svg#icon-iconlogo"></use>
            </svg>
            <Title className={css.title}>Task Pro</Title>
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
    </div>
  );
}
