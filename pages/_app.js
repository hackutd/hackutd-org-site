import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import GlobalStyle from "components/GlobalStyle";
import ThemeContext from "context/ThemeContext";
import LogoContext from "context/LogoContext";

import CONSTRAINTS from "constants/constraints";

const TrustBadge = styled.a`
  display: block;
  max-width: 72px;
  min-width: 46px;
  position: absolute;
  left: 16px;
  top: 0;
  width: clamp(46px, 5vw, 72px);
  z-index: 10000;

  @media only screen and (max-width: 1100px) {
    top: 6px;
    width: 60px;
  }

  ${CONSTRAINTS.DEFAULT_BP} {
    left: 10px;
    top: 10px;
    width: 48px;
  }
`;

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
      <TrustBadge
        id="mlh-trust-badge"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=black"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://logged-assets.s3.amazonaws.com/trust-badge/2027/mlh-trust-badge-2027-black.svg"
          alt="Major League Hacking 2026 Hackathon Season"
          style={{ width: "100%" }}
        />
      </TrustBadge>
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
