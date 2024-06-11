export const violetTheme = {
  taskBgn: "#fff",
  homeText: "rgba(22, 22, 22, 0.7)",
  iconStroke: "rgba(22, 22, 22, 0.5)",
  sidebarBgn: "#5255BC",
  headerBgn: "#fff",
  screensBgn: "#ECEDFD",
  mainText: "#161616",
  grayText: "rgba(22, 22, 22, 0.5)",
  accent: "#5255BC", //hoverIcon, button, inputBorder, calendarText, calendarIcon
  hoverButton: "#7b7ede",
  plusIconStroke: "#161616",
  plusIconFill: "#fff",
  iconNeedHelp: "#fff",
  iconLogout: "#fff",
  hoverIconLogout: "#b8bcfd",
  horizontScrollBgn: "#fff",
  horizontScroll: "#b8bcfd",
  verticalScrollBgn: "#fff",
  verticalScroll: "#b8bcfd",
  btnPlusStroke: "#fff", //create a new board
  btnPlusFill: "#b8bcfd",
  hoverBtnPlusFill: "#979cea",
  modalBgn: "#fcfcfc",
  inputBgn: "#fcfcfc",
  needHelpBgn: "rgba(236, 236, 253, 0.4)",
  filterText: "rgba(22, 22, 22, 0.8)",
  line: "rgba(22, 22, 22, 0.1)",
  greySubtitle: "rgba(22, 22, 22, 0.5)",
  without: "rgba(22, 22, 22, 0.1)",
  logo: "#5255BC",
  logoFill: "rgba(236, 236, 253, 0.4)",
  modalFiltersBgn: "#fff",
  modalFiltersIconClose: "#161616",
  textModal: "rgba(22, 22, 22, 0.7)",
  withoutbl: "rgba(22, 22, 22, 0.3);", //without priority
  greyBoard: "rgba(255, 255, 255, 0.5)",
};

export const lightTheme = {
  taskBgn: "#fff",
  homeText: "rgba(22, 22, 22, 0.7)",
  iconStroke: "rgba(22, 22, 22, 0.5)",
  sidebarBgn: "#fff",
  headerBgn: "#fcfcfc",
  screensBgn: "#f6f6f6",
  mainText: "#161616",
  grayText: "rgba(22, 22, 22, 0.5)",
  accent: "#bedbb0", //hoverIcon, button, inputBorder, calendarText, calendarIcon
  hoverButton: "#9dc888",
  plusIconStroke: "#fff",
  plusIconFill: "#161616",
  iconNeedHelp: "#161616",
  iconLogout: "#bedbb0",
  hoverIconLogout: "#9dc888",
  horizontScrollBgn: "#fff",
  horizontScroll: "#e8e8e8",
  verticalScrollBgn: "#fff",
  verticalScroll: "#e8e8e8",
  btnPlusStroke: "#121212", //create a new board
  btnPlusFill: "#bedbb0",
  hoverBtnPlusFill: "#9dc888",
  modalBgn: "#fcfcfc",
  inputBgn: "#fcfcfc",
  needHelpBgn: "#f6f6f6",
  filterText: "rgba(22, 22, 22, 0.8)",
  line: "rgba(22, 22, 22, 0.1)",
  greySubtitle: "rgba(22, 22, 22, 0.5)",
  without: "rgba(22, 22, 22, 0.1)",
  logo: "#fff",
  logoFill: "#1f1f1f",
  modalFiltersBgn: "#fff",
  modalFiltersIconClose: "#161616",
  textModal: "rgba(22, 22, 22, 0.7)",
  withoutbl: "rgba(22, 22, 22, 0.3);", //without priority
  greyBoard: "rgba(22, 22, 22, 0.5)",
};

export const darkTheme = {
  taskBgn: "#121212",
  homeText: "rgba(225, 225, 225, 0.5)",
  iconStroke: "rgba(225, 225, 225, 0.5)",
  sidebarBgn: "#121212",
  headerBgn: "#161616",
  screensBgn: "#1f1f1f",
  mainText: "#ffffff",
  grayText: "rgba(22, 22, 22, 0.5)",
  accent: "#bedbb0", //hoverIcon, button, inputBorder, calendarText, calendarIcon
  hoverButton: "#9dc888",
  plusIconStroke: "#fff",
  plusIconFill: "#161616",
  iconNeedHelp: "#fff",
  iconLogout: "#bedbb0",
  hoverIconLogout: "#9dc888",
  horizontScrollBgn: "#161616",
  horizontScroll: "rgba(225, 225, 225, 0.08)",
  verticalScrollBgn: "rgba(255, 255, 255, 0.08)",
  verticalScroll: "#121212",
  btnPlusStroke: "#121212", //create a new board
  btnPlusFill: "#bedbb0",
  hoverBtnPlusFill: "#9dc888",
  modalBgn: "#151515",
  inputBgn: "#1f1f1f",
  needHelpBgn: "#1f1f1f",
  filterText: "rgba(255, 255, 255, 0.8)",
  line: "rgba(255, 255, 255, 0.1)",
  greySubtitle: "rgba(255, 255, 255, 0.5)",
  without: "rgba(255, 255, 255, 0.1)",
  logo: "#fff",
  logoFill: "#1f1f1f",
  modalFiltersBgn: "#161616",
  modalFiltersIconClose: "#fff",
  textModal: "rgba(255, 255, 255, 0.5)",
  withoutbl: "rgba(255, 255, 255, 0.3);", //without priority black thema
  greyBoard: "rgba(255, 255, 255, 0.5)",
};

export const getTheme = (themeName) => {
  switch (themeName) {
    case "violet":
      return violetTheme;
    case "light":
      return lightTheme;
    case "dark":
      return darkTheme;
    default:
      return violetTheme;
  }
};
