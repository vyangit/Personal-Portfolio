import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
// import reportWebVitals from './js/tests/reportWebVitals';

// Work around cause dark mode media query not working on main html
var favicon: HTMLElement | null = document.getElementById('faviconTag'); // get favicon.ico element
var defaultSchemeIsDark = window.matchMedia('(prefers-color-scheme: dark)');

// Add dark mode listener for favicon
defaultSchemeIsDark.addEventListener('change', event => {
    if (favicon == null) return;

    if(event.matches){
      favicon.setAttribute('href', '/favicons/v_favicon_dark.ico')
    } else {
      favicon.setAttribute('href', '/favicons/v_favicon_light.ico')
    }
});

// Set initial favicon
if (favicon != null && defaultSchemeIsDark) {
  favicon.setAttribute('href', '/favicons/v_favicon_dark.ico')
}

// Main react render logic
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
