import { useState } from "react";
import Modal from "react-modal";
import { Formik, Form, Field } from "formik";
import styles from "./Header.module.css";
import Theme from "./Theme";

Modal.setAppElement("#root");

export default function Header() {
  const [theme, setTheme] = useState("dark");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({
    name: "Name",
    email: "name.email@example.com",
    avatar: "https://via.placeholder.com/40",
  });

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (values) => {
    setUser(values);
    closeModal();
  };

  return (
    <header className={styles.header}>
      <Theme changeTheme={changeTheme} />
      <div className={styles.userInfo} onClick={openModal}>
        <span className={styles.nameModel}>{user.name}</span>
        <img src={user.avatar} alt="Avatar" className={styles.avatar} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Profile"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <button onClick={closeModal} className={styles.closeButton}>
          <svg className={styles.iconModal} width="16" height="16">
            <use href="../../../public/sprite.svg#icon-x-close"></use>
          </svg>
        </button>
        <div className={styles.wrapper}>
          <h2 className={styles.name}>Edit profile</h2>
          <Formik initialValues={user} onSubmit={handleFormSubmit}>
            {() => (
              <Form>
                <label className={styles.avatarForm}>
                  <img
                    src={user.avatar}
                    alt="Avatar"
                    className={styles.avatarModal}
                    width="68"
                    height="68"
                  />
                </label>
                <div className={styles.boxForm}>
                  <label className={styles.input}>
                    <Field type="text" name="name" className={styles.field} />
                  </label>
                  <label className={styles.input}>
                    <Field type="email" name="email" className={styles.field} />
                  </label>
                  <label className={styles.input}>
                    <Field
                      type="password"
                      name="password"
                      className={styles.field}
                    />
                  </label>
                  <button className={styles.buttonModal} type="submit">
                    Send
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </header>
  );
}
