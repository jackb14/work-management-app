import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 1.125rem;
  }
  body {
    background-color: hsl(0deg 0% 95%);
    font-family: 'Roboto', 'arial', sans-serif;
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export const CUSTOM_STYLES = {
  COLORS: {
    darkestBackground: "#0d1129",
    darkBackground: "#30324e",
    lightGrey: "#efefef",
    fadedDarkBackground: "#1a1b31",
    red: "#e32b1c",
    grey: "#b1aca2",
    green: "#3eac53",
    yellow: "#f2ba0d",
    fadedRed: "rgba(196, 72, 63, 80%)",
    fadedGreen: "rgba(63, 143, 78, 80%)",
    fadedYellow: "rgba(219, 177, 46, 80%)",
    royalBlue: "#214cce",
  },
  OTHER: {
    borderRadius: "5px",
    borderSize: "5px",
  },
};
