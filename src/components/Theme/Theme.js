import { getTheme } from "components/Theme/themes";
import { useSelector } from "react-redux";
import { selectedTheme } from "redux/auth/selectors";
import { ThemeProvider } from "styled-components";

export const Theme = ({ children }) => {
  const themeName = useSelector(selectedTheme);
  const currentTheme = getTheme(themeName),
    theme = {
      currentTheme,
      colors: {
        //форма реєстрації та логіну
        white: "#fff",
        darkTextColor: "#161616",
        greyTextColor: "rgba(255, 255, 255, 0.3)",
        greyIconColor: "rgba(22, 22, 22, 0.5)",
        lightGreen: "#bedbb0",
        green: "#9dc888",
        darkBgn: "#151515",
        darkInputBgn: "#1f1f1f",
        shadowColor: "rgba(22, 22, 22, 0.08)",
        colorFilterSVG: "",
      },
      violetColors: {
        //violet theme
        violetFill: "#ECEDFD", //фон Screen Page
        accentColor: "#5255bc", //button
        hoverViolet: "#7b7ede", //hover button
        lightViolet: "#b8bcfd", //button +
        violet: "#979cea", //hover button +
        helpBlockColor: "rgba(236, 237, 253, 0.4)",
      },
      priorityColors: {
        //task`s priority
        low: "#8FA1D0", //low priority
        medium: "#E09CB5", //medium priority
        high: "#BEDBB0", // high priority=colors.lightGreen
        without: "rgba(22, 22, 22, 0.3);", //without priority
      },
      radius: {
        s: "6px", //button +
        m: "8px",
        l: "12px", //scroll
      },
    };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
