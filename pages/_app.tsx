import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider } from "@material-ui/core/styles";

import defaultTheme, { lightTheme } from "@@/styles/theme";

interface IThemeContext {
  prefersDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<Partial<IThemeContext>>({});

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  const preference = useMediaQuery("(prefers-color-scheme: dark)");
  const [prefersDarkMode, setPrefersDarkMode] = React.useState<boolean>(
    preference
  );

  const toggleTheme = () => setPrefersDarkMode(!prefersDarkMode);

  const theme = React.useMemo(
    () => (prefersDarkMode ? defaultTheme : lightTheme),
    [prefersDarkMode]
  );

  React.useEffect(() => {
    setPrefersDarkMode(preference);
  }, [preference]);

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Study Log</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeContext.Provider value={{ prefersDarkMode, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export const useTheme = () => React.useContext(ThemeContext);
