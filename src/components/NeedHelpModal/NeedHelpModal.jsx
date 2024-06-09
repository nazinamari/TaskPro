import css from "./NeedHelpModal.module.css";
// import * as yup from "yup";
import { useForm } from "react-hook-form";

export default function NeedHelpModal({ handleHelpModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={css.container} onClick={handleHelpModal}>
      <div className={css.modalWindow}>
        <div className={css.modalWindowContent}>
          <button className={css.closeBtn} onClick={handleHelpModal}>
            <svg className={css.icon} width="48" height="48" aria-label="logo">
              <use href="/public/sprite.svg#icon-x-close"></use>
            </svg>
          </button>
          <h2 className={css.title}>Need help</h2>
          <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={css.formContainer}>
              <input
                className={css.input}
                type="email"
                placeholder="Email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
              <textarea
                className={css.textarea}
                type="text"
                placeholder="Comment"
                {...register("comment", { required: "Comment is required" })}
              />
            </div>
            <button type="submit" className={css.sendBtn}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
