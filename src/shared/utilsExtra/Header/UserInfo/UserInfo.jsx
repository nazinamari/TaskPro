import {
  StyledUserInfo,
  StyledUserName,
  StyledUserPhoto,
  StyledUserBtn,
} from "./UserInfo";
import { useSelector } from "react-redux";

import Modal from "react-modal";
import { useState } from "react";
import { EditProfileModal } from "components/EditProfileModal/EditProfileModal";
import "../../EditProfileModal/EditModal.css";
import { selectAvatar, selectUser } from "redux/auth/selectors";
import { IconUserInfo } from "components/EditProfileModal/EditProfileModal.styled";
import sprite from "../../../images/icons.svg";

Modal.setAppElement("#root");

export const UserInfo = () => {
  const userName = useSelector(selectUser);
  const userAvatar = useSelector(selectAvatar);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const avatarURL = userAvatar && new URL(userAvatar, "https://"); //beckend вписати

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledUserInfo>
      <StyledUserName>{userName.name}</StyledUserName>
      <StyledUserBtn type="button" onClick={openModal}>
        {!userAvatar ? (
          <StyledUserPhoto
            src={avatarURL}
            alt="user_photo"
            width={32}
            height={32}
          />
        ) : (
          <IconUserInfo>
            <use xlinkHref={`${sprite}#icon-user`}></use>
          </IconUserInfo>
        )}
      </StyledUserBtn>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          overlayClassName={"modal-overlay"}
          className={"modal-content"}
          closeTimeoutMS={300}
        >
          <EditProfileModal onCloseModal={closeModal} avatar={avatarURL} />
        </Modal>
      )}
    </StyledUserInfo>
  );
};
