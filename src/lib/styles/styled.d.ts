import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      error: string;
      success: string;
      warning: string;
      gray: string;
      fontBlack: string;
      fontWhite: string;
    };
  }
}
