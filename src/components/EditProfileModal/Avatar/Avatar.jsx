import { IconUser } from "../EditProfileModal.styled";
import sprite from "../../../images/icons.svg";

export const PreviewAvatar = ({ avatar }) => {
  return (
    <>
      {avatar ? (
        <img src={avatar.href} alt="user-avatar" />
      ) : (
        <IconUser>
          <use xlinkHref={`${sprite}#icon-user`}></use>
        </IconUser>
      )}
    </>
  );
};
