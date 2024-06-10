import { ErrorMessage, Form, Field } from "formik";
import styled from "styled-components";

const getBorder = ({ theme }) => {
  if (theme.currentTheme.modalBgn === "#151515") {
    return "1px solid rgba(190, 219, 176, 0.5)";
  }
  return null;
};

export const ModalWrap = styled.div`
  box-sizing: border-box;
  border-radius: ${(p) => p.theme.radius.m};
  border: ${getBorder};

  width: 335px;
  padding: ${(p) => p.theme.spacing(6)};

  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);
  background-color: ${(p) => p.theme.currentTheme.modalBgn};

  position: relative;

  @media only screen and (min-width: 768px) {
    width: 400px;
  }
`;
export const CLoseButton = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 14px;
  right: 14px;

  background-color: transparent;
`;
export const IconClose = styled.svg`
  width: 18px;
  height: 18px;
  border: none;
  padding: 0;

  stroke: ${(p) => p.theme.currentTheme.modalFiltersIconClose};

  stroke-width: 1.5px;
`;

export const TitleModal = styled.h4`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.currentTheme.mainText};
  margin-bottom: ${(p) => p.theme.spacing(6)};
`;

export const ProfileFotoBox = styled.div`
  width: 68px;
  height: 78px;

  margin: 0 auto ${(p) => p.theme.spacing(3.5)};
  position: relative;
`;

export const Thumb = styled.div`
  width: 68px;
  height: 68px;
  border-radius: ${(p) => p.theme.spacing(2)};
  overflow: hidden;
`;
export const UploadImage = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
`;

export const AddButton = styled.button`
  width: 24px;
  height: 24px;

  border: 0;
  border-radius: ${(props) => props.theme.radius.s};
  background-color: ${(p) => p.theme.currentTheme.accent};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 65%);

  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${(p) => p.theme.currentTheme.hoverButton};
  }
`;

export const IconUser = styled.svg`
  width: 68px;
  height: 68px;
  stroke-width: 0;

  --color2: ${(p) => p.theme.currentTheme.modalBgn};
  --color1: ${(p) => p.theme.currentTheme.screensBgn};
`;
export const IconUserInfo = styled.svg`
  width: 32px;
  height: 32px;
  stroke-width: 0;

  --color2: ${(p) => p.theme.currentTheme.modalBgn};
  --color1: ${(p) => p.theme.currentTheme.screensBgn};
`;
export const ImageUser = styled.img`
  width: 68px;
  height: 68px;

  position: absolute;
  top: 0;
  left: 0;
`;
export const IconPlus = styled.svg`
  width: 10px;
  height: 10px;

  stroke: ${(p) => p.theme.currentTheme.plusIconFill};
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
  margin: 0 auto;
`;

export const StyledLabel = styled.label`
  position: relative;
`;

export const StyledField = styled(Field)`
  width: 100%;
  height: 49px;
  padding: ${(p) => p.theme.spacing(3.5)} ${(p) => p.theme.spacing(9.5)}
    ${(p) => p.theme.spacing(3.5)} ${(p) => p.theme.spacing(4.5)};

  border: 1px solid ${(p) => p.theme.currentTheme.accent};
  border-radius: ${(p) => p.theme.radius.m};
  outline: none;
  box-shadow: 0 4px 16px 0 ${(p) => p.theme.colors.shadowColor};
  opacity: 0.4;

  background-color: inherit;
  color: ${(p) => p.theme.currentTheme.mainText};

  &:focus {
    opacity: 1;
  }
  box-sizing: border-box;
  display: inline;
`;

export const Button = styled.button`
  width: 100%;
  padding: ${(p) => p.theme.spacing(3.5)} ${(p) => p.theme.spacing(4.5)};
  font-weight: 500;

  border: 0;
  border-radius: ${(props) => props.theme.radius.m};

  background-color: ${(p) => p.theme.currentTheme.accent};
  color: ${(p) => p.theme.currentTheme.plusIconFill};

  margin-top: ${(p) => p.theme.spacing(2.5)};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${(p) => p.theme.currentTheme.hoverButton};
  }
`;

export const ErrMessage = styled(ErrorMessage)`
  font-size: 10px;
  color: red;
  position: absolute;
  left: 18px;
  top: 50px;
  color: #c04d4d;
  z-index: 100;
`;

export const HideBtn = styled.button`
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 18%;
  right: 18px;
  appearance: none;

  background: none;
  border: none;
  cursor: pointer;
`;
export const IconEye = styled.svg`
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: ${(p) => p.theme.currentTheme.mainText};
  opacity: 0.4;
  stroke-width: 1.3px;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    stroke: ${(p) => p.theme.currentTheme.hoverButton};
    opacity: 1;
  }
`;
