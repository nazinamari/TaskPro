import { useForm } from "react-hook-form";
import styled from "./LoginForm.module.css";


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
    <form className={styled.loginForm} onSubmit={handleSubmit(onSubmit)}>
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

      <button type="submit">Log In Now</button>
    </form>
  );
}
