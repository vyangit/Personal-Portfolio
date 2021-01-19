// import App from "next/app";
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@styles/index.css';
import '@styles/App.css';

import React, { useState, useEffect } from 'react';
import NavBarComponent from '@components/NavBar.component'
import FooterBarComponent from '@components/FooterBar.component';

import Box from '@material-ui/core/Box';
import {ThemeProvider, ThemeOptions } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {Theme, DarkTheme} from '@styles/Theme'
const lightFavicon = '/assets/favicons/v_favicon_light.ico';
const darkFavicon = '/assets/favicons/v_favicon_dark.ico';

const pages = new Array<Array<string>>();
pages.push(['Home', '/']);
pages.push(['App Catalogue', '/catalogue']);


export default function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const [currPage, setCurrPage] = useState('Home');

  // After effect
  useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    setIsDarkModeOn(window.matchMedia("(prefers-color-scheme: dark)").matches)
  }, [])

  // Handles
  const handlePageChange = (pageLabel: string) => {
    setCurrPage(pageLabel);
  }

  return (
    <React.Fragment>
      <Head>
        <link id="faviconTag" rel="icon" href={isDarkModeOn ? darkFavicon : lightFavicon} />
      </Head>  
      <ThemeProvider theme={isDarkModeOn ? DarkTheme : Theme}>
            <CssBaseline />
        <div className="App">
              <NavBarComponent
                currMenuItem={currPage}
                menuItems={pages}
                onMenuItemClick={handlePageChange}
                isDarkModeOn={isDarkModeOn}
                toggleDarkMode={setIsDarkModeOn} />
              <Box display="flex" flexDirection="row" flexGrow={1} overflow="hidden">
                <Component isDarkModeOn={isDarkModeOn} {...pageProps} />
              </Box>
              <FooterBarComponent />
        </div>
          </ThemeProvider>
    </React.Fragment>);
}