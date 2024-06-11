import styles from "./UserInfo.module.css";

const UserInfo = ({ user, openModal }) => {
  return (
    <div className={styles.userInfo} onClick={openModal}>
      <span className={styles.nameModel}>{user.name}</span>
      <img src={user.avatar} alt="Avatar" className={styles.avatar} />
    </div>
  );
};

export default UserInfo;
