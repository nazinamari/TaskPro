import { useState } from "react";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./EditProfileModal.module.css";

Modal.setAppElement("#root");

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password is too short - should be 6 chars minimum.")
    .required("Password is required"),
});

export default function EditProfileModal({
  isModalOpen,
  closeModal,
  user,
  handleFormSubmit,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Profile"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={closeModal} className={styles.closeButton}>
        <svg className={styles.iconModal} width="16" height="16">
          <use href="../../../public/icons.svg#icon-close"></use>
        </svg>
      </button>

      <div className={styles.wrapper}>
        <h2 className={styles.name}>Edit profile</h2>
        <Formik
          initialValues={user}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {() => (
            <Form>
              <div className={styles.avatarBox}>
                <label className={styles.avatarForm}>
                  <img
                    src={user.avatar}
                    alt="Avatar"
                    className={styles.avatarModal}
                    width="68"
                    height="68"
                  />
                </label>

                <button className={styles.buttonPlus}>
                  <svg className={styles.iconPlus} width="10" height="10">
                    <use href="../../../public/icons.svg#icon-plus"></use>
                  </svg>
                </button>
              </div>
              <div className={styles.boxForm}>
                <div className={styles.inputWrapper}>
                  <label className={styles.input}>
                    <Field type="text" name="name" className={styles.field} />
                  </label>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.inputWrapper}>
                  <label className={styles.input}>
                    <Field type="email" name="email" className={styles.field} />
                  </label>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.inputWrapper}>
                  <label className={styles.input}>
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className={styles.field}
                    />
                    <button
                      type="button"
                      className={styles.showPasswordButton}
                      onClick={toggleShowPassword}
                    >
                      <svg
                        className={styles.iconPassword}
                        width="18"
                        height="18"
                      >
                        <use href="../../../public/icons.svg#icon-eye"></use>
                      </svg>
                    </button>
                  </label>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <button className={styles.buttonModal} type="submit">
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
}
