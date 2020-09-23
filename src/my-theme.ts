import { DefaultTheme } from "styled-components";


const myTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    primary: {
      darkBlue: "hsl(233, 26%, 24%)",
      limeGreen: "hsl(136, 65%, 51%)",
      brightCyan: "hsl(192, 70%, 51%)",
    },
    neutral: {
      grayishBlue: "hsl(233, 8%, 62%)",
      lightGrayishBlue: "hsl(220, 16%, 96%)", 
      veryLightGray: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  screens: {
    xl: "90%",
    lg: "80%",
    md: "80%",
    sm: "100%",
    xs: "100%",
  },
  breakpoints: {
    xl: "144rem",
    lg: "128rem",
    md: "76.8rem",
    sm: "37.5rem",
    xs: "37.5rem",
  }

};

export { myTheme };
