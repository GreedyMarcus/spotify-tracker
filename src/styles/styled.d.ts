import "styled-components";

interface Colors {
  primary: {
    main: string;
    light: string;
  };
  dark: {
    main: string;
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
