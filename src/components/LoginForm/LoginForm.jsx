import { useForm } from "react-hook-form";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import styled from "./LoginForm.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(styled.loginLink, isActive && styled.linkActive);
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors, formState);

  return (
    <div className={styled.loginWrapper}>
      <form className={styled.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <ul className={styled.loginListWrapper}>
          <li className={styled.loginItem}>
            <NavLink to="register" className={buildLinkClass}>
              Registration
            </NavLink>
          </li>
          <li className={styled.loginItem}>
            <NavLink to="login" className={buildLinkClass}>
              Log In
            </NavLink>
          </li>
        </ul>

        <input
          className={styled.loginInput}
          type="text"
          placeholder="Enter your email"
          {...register("email", {
            required: "The email field is not filled",
          })}
        />
        {errors.email && <div>{errors.email.message}</div>}

        <input
          className={styled.loginInput}
          type="password"
          placeholder="Confirm a password"
          {...register("password", {
            required: "The password field is not filled",
          })}
        />

        <button className={styled.loginButton} type="submit">
          Log In Now
        </button>
      </form>
    </div>
  );
}
