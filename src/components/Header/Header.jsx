import { useState } from "react";
import Modal from "react-modal";
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <header className={styles.header}>
      <Theme changeTheme={changeTheme} />
      <div className={styles.userInfo} onClick={openModal}>
        <span>{user.name}</span>
        <img src={user.avatar} alt="Avatar" className={styles.avatar} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Profile"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>Edit profile</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Avatar:
            <input
              type="text"
              name="avatar"
              value={user.avatar}
              onChange={handleInputChange}
            />
          </label>
          <button type="button" onClick={closeModal}>
            Save
          </button>
        </form>
      </Modal>
    </header>
  );
}
