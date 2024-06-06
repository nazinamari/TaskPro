import { useForm } from "react-hook-form";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import styled from "./RegisterForm.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(styled.loginLink, isActive && styled.linkActive);
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
          <li>
            <NavLink to="/" className={buildLinkClass}>
              Registration
            </NavLink>
          </li>
          <li>
            <NavLink to="login" className={buildLinkClass}>
              Log In
            </NavLink>
          </li>
        </ul>

        <input
          type="text"
          placeholder="Enter your name"
          {...register("name", {
            required: "The name field is not filled",
          })}
        />
        {errors.email && <div>{errors.email.message}</div>}

        <input
          type="text"
          placeholder="Enter your email"
          {...register("email", {
            required: "The email field is not filled",
          })}
        />
        {errors.email && <div>{errors.email.message}</div>}

        <input
          type="password"
          placeholder="Confirm a password"
          {...register("password", {
            required: "The password field is not filled",
          })}
        />

        <button type="submit">Register Now</button>
      </form>
    </div>
  );
}
