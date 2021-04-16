import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/Global";
import "../styles/reset.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
