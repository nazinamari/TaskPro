import css from "./NeedHelpModal.module.css";
// import { useForm } from "react-hook-form";

export default function NeedHelpModal() {
  return (
    <div className={css.container}>
      <div className={css.modalWindow}>
        <button className={css.closeBtn}>X</button>
        <h2 className={css.title}>Need help</h2>
        <form className={css.form}>
          <div className={css.formContainer}>
            <input
              className={css.input}
              type="email"
              placeholder="Email address"
            />
            <textarea
              className={css.textarea}
              type="text"
              placeholder="Comment"
            />
          </div>
          <button type="submit" className={css.sendBtn}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
