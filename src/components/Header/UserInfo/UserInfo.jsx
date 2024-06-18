// import { useDispatch, useSelector } from "react-redux";
// import { updateUserProfile } from "../../../redux/user/operations";
// import { selectUser, selectIsLoading } from "../../../redux/user/selectors";
// import styles from "./UserInfo.module.css";
// import md5 from "md5";

// const getGravatarUrl = (email) => {
//   const hash = email ? md5(email.trim().toLowerCase()) : "";
//   return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
// };

// const UserInfo = ({ openModal }) => {
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);
//   const loading = useSelector(selectIsLoading);

//   if (loading) return <div>Loading...</div>;

//   const getUserAvatar = (user) => {
//     console.log(user.avatarURL);
//     if (!user.avatarURL) {
//       const newGravatar = getGravatarUrl(user.email);
//       dispatch(updateUserProfile({ avatarURL: newGravatar }));
//       return user.avatarURL;
//     }
//     return user.avatarURL;
//   };

//   // const userAvatar = user.avatarURL || getGravatarUrl(user.email);
//   // if (!user.avatarURL && user.email) {
//   //   const newGravatar = getGravatarUrl(user.email);
//   //   dispatch(updateUserProfile({ avatarURL: newGravatar }));
//   // }

//   const handleOpenModal = () => {
//     openModal();
//   };

//   return (
//     <div className={styles.userInfo} onClick={handleOpenModal}>
//       {user && (
//         <>
//           <span className={styles.nameModel}>{user.name}</span>
//           <img
//             src={getUserAvatar(user)}
//             alt="Avatar"
//             className={styles.avatar}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default UserInfo;

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateUserProfile } from "../../../redux/user/operations";
import { selectUser, selectIsLoading } from "../../../redux/user/selectors";
import styles from "./UserInfo.module.css";
import md5 from "md5";

const getGravatarUrl = (email) => {
  const hash = email ? md5(email.trim().toLowerCase()) : "";
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
};

const UserInfo = ({ openModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectIsLoading);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (user && !user.avatarURL) {
      const newGravatar = getGravatarUrl(user.email);
      dispatch(updateUserProfile({ avatarURL: newGravatar }));
      setAvatar(newGravatar);
    } else if (user) {
      setAvatar(user.avatarURL);
    }
  }, [user, dispatch]);

  if (loading) return <div>Loading...</div>;

  const handleOpenModal = () => {
    openModal();
  };

  return (
    <div className={styles.userInfo} onClick={handleOpenModal}>
      {user && (
        <>
          <span className={styles.nameModel}>{user.name}</span>
          <img src={avatar} alt="Avatar" className={styles.avatar} />
        </>
      )}
    </div>
  );
};

export default UserInfo;
