// import App from "next/app";
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@styles/index.css';
import '@styles/App.css';

import React, { useState, useEffect } from 'react';
import NavBarComponent from '@components/NavBar.component'
import FooterBarComponent from '@components/FooterBar.component';

import Box from '@material-ui/core/Box';

import { createMuiTheme, ThemeProvider, ThemeOptions } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';

const lightFavicon = '/assets/favicons/v_favicon_light.ico';
const darkFavicon = '/assets/favicons/v_favicon_dark.ico';

const pages = new Array<Array<string>>();
pages.push(['Home', '/']);
pages.push(['App Catalogue', '/catalogue']);

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const [currPage, setCurrPage] = useState('Home');
  const themeStyle = isDarkModeOn ? {
    palette: {
      type: 'dark',
      primary: {
        main: red[700]
      }, secondary: {
        main: red[900]
      }
    },
  } : {
      palette: {
        type: 'light',
        primary: blue,
        secondary: {
          main: blue[700]
        }
      },
    }
  const themeInjects = isDarkModeOn ? {
    background: 'black',
    color: 'white'
  } : {
      background: '#EAEFF2',
      color: 'black'
    }
  const theme = createMuiTheme(themeStyle as ThemeOptions);

  // After effect
  useEffect(() => {
    setIsDarkModeOn(window.matchMedia("(prefers-color-scheme: dark)").matches)
  }, [])

  // Handles
  const handlePageChange = (pageLabel: string) => {
    setCurrPage(pageLabel);
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link id="faviconTag" rel="icon" href={isDarkModeOn ? darkFavicon : lightFavicon} />
      </Head>
      <div className="App" style={themeInjects}>
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
    </ThemeProvider>);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp