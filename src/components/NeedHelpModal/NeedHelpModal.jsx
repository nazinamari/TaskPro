import css from "./NeedHelpModal.module.css";
import { useForm } from "react-hook-form";
import Icon from "../../shared/components/Icon/Icon";

export default function NeedHelpModal({ handleHelpModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={css.container} onClick={handleHelpModal}>
      <div className={css.modalWindow} onClick={stopPropagation}>
        <div className={css.modalWindowContent}>
          <button className={css.closeBtn} onClick={handleHelpModal}>
            <Icon id="icon-close" width="18" height="18" className={css.icon} />
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
