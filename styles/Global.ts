import { createGlobalStyle } from "styled-components";
import * as Fonts from "./fonts";
import Theme from "./theme";

const GlobalStyles = createGlobalStyle`
   html, body {
  padding: 0;
  margin: 0;
  font-size: ${Fonts.fontSize};
  font-family: ${Fonts.fontFamily};
  color: ${Theme.colors.darkGrey};
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyles;
