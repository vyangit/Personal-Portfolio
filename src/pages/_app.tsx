// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import '@styles/index.css';
import '@styles/App.css';

import React, { useState } from 'react';
import NavBarComponent from '@components/NavBar.component'
import FooterBarComponent from '@components/FooterBar.component';
import HomePage from '.';
import AppCataloguePage from './catalogue'

import Box from '@material-ui/core/Box';

import { createMuiTheme, ThemeProvider, ThemeOptions } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { blue, red } from '@material-ui/core/colors';

const pages = [
  'Home',
  'App Catalogue'
]

function MyApp({ Component, pageProps }: AppProps) {  
  // Opt to not use useMediaQuery hook because of issues with first render not detecting scheme properly
  const isDefaultDarkModeOn = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkModeOn, setIsDarkModeOn] = useState(isDefaultDarkModeOn);
  const [currPage, setCurrPage] = useState(pages[0]);
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

  function handlePageChange(pageLabel: string) {
    setCurrPage(pageLabel);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={themeInjects}>
        <NavBarComponent
          currMenuItem={currPage}
          menuItems={pages}
          onMenuItemClick={handlePageChange}
          isDarkModeOn={isDarkModeOn}
          toggleDarkMode={setIsDarkModeOn} />
        <Box display="flex" flexDirection="row" flexGrow={1} overflow="hidden">
          <Component {...pageProps} />
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