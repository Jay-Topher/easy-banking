import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primary: {
        darkBlue: string;
        limeGreen: string;
        brightCyan: string;
      };
      neutral: {
        grayishBlue: string;
        lightGrayishBlue: string;
        veryLightGray: string;
        white: string;
      };
    };
  }
}
