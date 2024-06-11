import styled from "styled-components";

export const StyledUserInfo = styled.div`
  padding: 0;
  display: flex;
  gap: ${(p) => p.theme.spacing(2)};
`;

export const StyledUserBtn = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  border-radius: ${(p) => p.theme.radius.m};
  padding: 0;
`;

export const StyledUserName = styled.p`
  color: ${(p) => p.theme.currentTheme.mainText};
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
  margin: auto 0;
`;

export const StyledUserPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${(p) => p.theme.radius.m};
`;
