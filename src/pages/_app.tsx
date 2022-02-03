import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import "@styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
