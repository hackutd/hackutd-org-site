import { useState, useEffect } from "react";
import Head from "next/head";
import GlobalStyle from "components/GlobalStyle";
import ThemeContext from "context/ThemeContext";
import LogoContext from "context/LogoContext";

function MyApp({ Component, pageProps }) {
  // https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component
  const [dark, setDark] = useState(false);
  const [currentlyHoveredLogo, setCurrentlyHoveredLogo] = useState("");
  const value = { dark, setDark };

  useEffect(() => {
    const readValue = localStorage.getItem("dark");
    const userHasPreviouslySelectedDark = JSON.parse(readValue);

    if (userHasPreviouslySelectedDark === null) {
      // handle reading from device settings
      const userUsesDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(userUsesDarkMode);
    } else {
      if (userHasPreviouslySelectedDark === true) {
        setDark(true);
      } else {
        setDark(false);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <GlobalStyle dark={dark} />
      <ThemeContext.Provider value={value}>
        <LogoContext.Provider
          value={{
            currentHoveredLogo: currentlyHoveredLogo,
            setCurrentHoveredLogo: setCurrentlyHoveredLogo,
          }}
        >
          <Component {...pageProps} />
        </LogoContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
