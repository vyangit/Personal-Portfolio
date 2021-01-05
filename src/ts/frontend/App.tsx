import React, { useState, useMemo } from 'react';
import '../../styles/App.css';
import NavBarComponent from './components/NavBar.component'
import FooterBarComponent from './components/FooterBar.component';
import HomePage from './pages/Home.page';
import AppCataloguePage from './pages/Catalogue.page'

import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider, ThemeOptions } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';

import { makeStyles } from '@material-ui/core/styles';

const pages = [
  'Home',
  'App Catalogue'
]

const useStyles = makeStyles({
  signatureLogo: {
      margin: 'auto'
  },
  rightButton: {
      marginLeft: '4px'
  }
});

export default function App() {
  const classes = useStyles();
  
  const [isDarkModeOn, setIsDarkModeOn] = useState(false); 
  const [currPage, setCurrPage] = useState(pages[0]);
  const themeStyle = isDarkModeOn ? {
    palette: {
      type: 'dark',
      primary: {
        main: red[700]
      },secondary: {
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
  const themeInjects = isDarkModeOn? {
    background: 'black',
    color: 'white'
  } : {
    background: 'white',
    color: 'black'
  }
  const theme = createMuiTheme(themeStyle as ThemeOptions);

  function handlePageChange(pageLabel: string) {
    setCurrPage(pageLabel);
  }

  function renderPage() {
    switch (currPage) {
      case pages[0]: return <HomePage />
      case pages[1]: return <AppCataloguePage />
    }
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
          {renderPage()}
        </Box>
        <FooterBarComponent />
      </div>
    </ThemeProvider>
  );
}