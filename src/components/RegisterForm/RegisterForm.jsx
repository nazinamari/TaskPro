import { useForm } from "react-hook-form";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import styled from "./RegisterForm.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(styled.registerLink, isActive && styled.linkActive);
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors, formState);

  return (
    <section className={styled.registerContainer}>
      <div className={styled.registerWrapper}>
        <form className={styled.formWrapper} onSubmit={handleSubmit(onSubmit)}>
          <ul className={styled.registerList}>
            <li className={styled.registerItem}>
              <NavLink to="register" className={buildLinkClass}>
                Registration
              </NavLink>
            </li>
            <li className={styled.registerItem}>
              <NavLink to="login" className={buildLinkClass}>
                Log In
              </NavLink>
            </li>
          </ul>

          <input
            className={styled.registerInput}
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: "The name field is not filled",
            })}
          />
          {errors.email && <div>{errors.email.message}</div>}

          <input
            className={styled.registerInput}
            type="text"
            placeholder="Enter your email"
            {...register("email", {
              required: "The email field is not filled",
            })}
          />
          {errors.email && <div>{errors.email.message}</div>}

          <input
            className={styled.registerInput}
            type="password"
            placeholder="Confirm a password"
            {...register("password", {
              required: "The password field is not filled",
            })}
          />

          <button className={styled.registerButton} type="submit">
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
}
