import css from "./NeedHelpModal.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Icon from "../../shared/components/Icon/Icon";
import instance from "../../../axios/apiInstance.js";

export default function NeedHelpModal({ handleHelpModal }) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Email must include one '@' and one '.' in the host part"
      )
      .required("The email field is not filled"),
    comment: yup
      .string()
      .min(2, "Comment must be at least 2 characters")
      .max(100, "Comment must be at most 100 characters")
      .required("The comment field is not filled"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      comment: "",
    },
  });

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const onSubmit = async (values) => {
    const message = {
      sender: values.email,
      comment: values.comment,
    };

    try {
      await instance.post("users/help", message);
      console.log("Message sent successfully"); // додати тост
      reset();
      handleHelpModal();
    } catch (error) {
      console.error("Error sending message:", error); // додати тост
    }
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
                name="email"
                className={css.input}
                type="email"
                placeholder="Email address"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
              <textarea
                name="comment"
                className={css.textarea}
                type="text"
                placeholder="Comment"
                {...register("comment")}
              />
              {errors.comment && <p>{errors.comment.message}</p>}
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
