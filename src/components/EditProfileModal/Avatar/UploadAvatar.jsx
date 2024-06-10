import { useState } from "react";
import { UploadImage } from "../EditProfileModal.styled";

export const PreviewUploadAvatar = ({ file }) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };
  return <>{preview && <UploadImage src={preview} alt="user-avatar" />}</>;
};
