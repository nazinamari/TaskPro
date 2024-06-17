import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../../redux/user/operations";
import {
  selectUser,
  selectIsLoading,
  selectError,
  selectAvatarUrl,
} from "../../../../redux/user/selectors";
import styles from "./UserInfo.module.css";
import md5 from "md5";

const getGravatarUrl = (email) => {
  const hash = email ? md5(email.trim().toLowerCase()) : "";
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
};

const UserInfo = ({ openModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userAvatarUrl = useSelector(selectAvatarUrl);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const renderAvatar = () => {
    if (userAvatarUrl) {
      return <img src={userAvatarUrl} alt="Avatar" className={styles.avatar} />;
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
