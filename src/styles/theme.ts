import { DefaultTheme } from "styled-components";

export const theme: Readonly<DefaultTheme> = {
  colors: {
    common: {
      black: "#141619",
      white: "#fff",
      text: "#eaeaea"
    },
    primary: {
      main: "#1db954",
      light: "#1ed760",
      dark: "#1aa34a"
    }
  },
  elevation: {
    0: "rgba(100, 100, 100, 0.2) 0px 2px 8px 0px"
  }
};
