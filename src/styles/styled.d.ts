import "styled-components";

interface Colors {
  common: {
    black: string;
    white: string;
    text: string;
  };
  primary: {
    main: string;
    light: string;
    dark: string;
  };
}

interface Elevation {
  0: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    elevation: Elevation;
  }
}
