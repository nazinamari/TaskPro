import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../../redux/user/operations";
import { selectUser, selectIsLoading } from "../../../redux/user/selectors";
import styles from "./UserInfo.module.css";
// import icon from "../../../img/user.png";
import md5 from "md5";

const getGravatarUrl = (email) => {
  const hash = email ? md5(email.trim().toLowerCase()) : "";
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
};

const UserInfo = ({ openModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log("UserInfo", user);

  //user.avatarUrl - сюди нічого не приходить

  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  const renderAvatar = () => {
    if (user.avatarUrl) {
      return (
        <img src={user.avatarUrl} alt="Avatar" className={styles.avatar} />
      );
    } else {
      const avatarUrl = getGravatarUrl(user.email);
      return <img src={avatarUrl} alt="Avatar" className={styles.avatar} />;
    }
  };

  const handleOpenModal = () => {
    openModal();
  };

  return (
    <div className={styles.userInfo} onClick={handleOpenModal}>
      {user && (
        <>
          <span className={styles.nameModel}>{user.name}</span>
          {renderAvatar()}
        </>
      )}
    </div>
  );
};

export default UserInfo;
