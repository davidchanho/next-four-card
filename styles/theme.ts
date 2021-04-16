import { breakpoints } from "./breakpoints";
import * as Colors from "./colors";
import * as fonts from "./fonts";

const theme = {
  colors: {
    white: Colors.white["100"],
    black: Colors.black["100"],

    blue: Colors.blue["100"],
    red: Colors.red["100"],
    cyan: Colors.cyan["100"],
    orange: Colors.orange["100"],

    lightGrey: Colors.neutral["100"],
    grey: Colors.neutral["200"],
    darkGrey: Colors.neutral["300"],

    shadow: Colors.neutral["400"],

    link: Colors.purple["100"],
  },
  breakpoints,
  fonts,
};

export default theme;
