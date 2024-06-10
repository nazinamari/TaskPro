import { useRef, useState } from "react";
import {
  AddButton,
  Button,
  CLoseButton,
  ErrMessage,
  HideBtn,
  IconClose,
  IconEye,
  IconPlus,
  // ImageUser,
  ModalWrap,
  ProfileFotoBox,
  StyledField,
  StyledForm,
  StyledLabel,
  Thumb,
  TitleModal,
} from "./EditProfileModal.styled.js";

import sprite from "../../images/icons.svg";
import { PreviewAvatar } from "./PreviewAvatar/PreviewAvatar.jsx";
import { PreviewUploadAvatar } from "./PreviewAvatar/PreviewUploadAvatar.jsx";

import { Formik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { updateProfile } from "redux/auth/operations.js";

const editFormSchema = Yup.object().shape({
  name: Yup.string().min(3, "To short").max(30, "To long"),
  email: Yup.string().email("Please enter a valid email address"),

  password: Yup.string()
    .min(5, "The password should be at least 5 characters long")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const EditProfileModal = ({ onCloseModal, avatar }) => {
  const dispatch = useDispatch();
  const handleSubmit = (credentials) => {
    return dispatch(updateProfile(credentials));
  };

  const [showPassword, setShowPassword] = useState(false);
  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const fileRef = useRef(null);

  return (
    <ModalWrap>
      <TitleModal>{"screenPage.render.modal.profile.title"}</TitleModal>

      <CLoseButton onClick={onCloseModal}>
        <IconClose>
          <use xlinkHref={`${sprite}#icon-x-close`}></use>
        </IconClose>
      </CLoseButton>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          avatar: null,
        }}
        validationSchema={editFormSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
          onCloseModal();
        }}
      >
        {({ values, setFieldValue }) => (
          <StyledForm>
            <ProfileFotoBox>
              <Thumb>
                <input
                  hidden
                  ref={fileRef}
                  type="file"
                  name="avatar"
                  onChange={(e) => {
                    setFieldValue("avatar", e.target.files[0]);
                  }}
                />
                {values.avatar ? (
                  <PreviewUploadAvatar file={values.avatar} />
                ) : (
                  <PreviewAvatar avatar={avatar} />
                )}
              </Thumb>

              <AddButton type="button" onClick={() => fileRef.current.click()}>
                <IconPlus>
                  <use xlinkHref={`${sprite}#icon-plus`}></use>
                </IconPlus>
              </AddButton>
            </ProfileFotoBox>

            <StyledLabel htmlFor="name">
              <StyledField
                type="text"
                name="name"
                placeholder={"screenPage.render.modal.profile.name"}
              ></StyledField>
              <ErrMessage component="span" name="name" />
            </StyledLabel>

            <StyledLabel htmlFor="email">
              <StyledField
                type="email"
                name="email"
                placeholder={"screenPage.render.modal.profile.email"}
              ></StyledField>
              <ErrMessage component="span" name="email" />
            </StyledLabel>

            <StyledLabel htmlFor="password">
              <StyledField
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder={"screenPage.render.modal.profile.password"}
              ></StyledField>
              <ErrMessage component="span" name="password" />
              <HideBtn type="button" onClick={onShowPassword}>
                <IconEye>
                  <use xlinkHref={`${sprite}#icon-eye`}></use>
                </IconEye>
              </HideBtn>
            </StyledLabel>

            <Button type="submit" /*onClick={onCloseModal}*/>
              {"screenPage.render.modal.profile.send"}
            </Button>
          </StyledForm>
        )}
      </Formik>
    </ModalWrap>
  );
};
