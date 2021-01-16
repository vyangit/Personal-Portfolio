webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styles/App.css */ "./src/styles/App.css");
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_NavBar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/NavBar.component */ "./src/components/NavBar.component.tsx");
/* harmony import */ var _components_FooterBar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/FooterBar.component */ "./src/components/FooterBar.component.tsx");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");



var _jsxFileName = "/home/vyan/repos/Personal-Portfolio/src/pages/_app.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import App from "next/app";









const lightFavicon = '/assets/favicons/v_favicon_light.ico';
const darkFavicon = '/assets/favicons/v_favicon_dark.ico';
const pages = new Array();
pages.push(['Home', '/']);
pages.push(['App Catalogue', '/catalogue']);

function MyApp({
  Component,
  pageProps
}) {
  _s();

  const {
    0: isDarkModeOn,
    1: setIsDarkModeOn
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: currPage,
    1: setCurrPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('Home');
  const themeStyle = isDarkModeOn ? {
    palette: {
      type: 'dark',
      primary: {
        main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["red"][700]
      },
      secondary: {
        main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["red"][900]
      }
    }
  } : {
    palette: {
      type: 'light',
      primary: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["blue"],
      secondary: {
        main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["blue"][700]
      }
    }
  };
  const themeInjects = isDarkModeOn ? {
    background: 'black',
    color: 'white'
  } : {
    background: '#EAEFF2',
    color: 'black'
  };
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["createMuiTheme"])(themeStyle); // After effect

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    setIsDarkModeOn(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []); // Handles

  const handlePageChange = pageLabel => {
    setCurrPage(pageLabel);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["ThemeProvider"], {
    theme: theme,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        id: "faviconTag",
        rel: "icon",
        href: isDarkModeOn ? darkFavicon : lightFavicon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "App",
      style: themeInjects,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_NavBar_component__WEBPACK_IMPORTED_MODULE_6__["default"], {
        currMenuItem: currPage,
        menuItems: pages,
        onMenuItemClick: handlePageChange,
        isDarkModeOn: isDarkModeOn,
        toggleDarkMode: setIsDarkModeOn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        overflow: "hidden",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({
          isDarkModeOn: isDarkModeOn
        }, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_FooterBar_component__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
} // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps }
// }


_s(MyApp, "7w+wgV8u7DZLsRC2zvhpTZlNrVk=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbImxpZ2h0RmF2aWNvbiIsImRhcmtGYXZpY29uIiwicGFnZXMiLCJBcnJheSIsInB1c2giLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzRGFya01vZGVPbiIsInNldElzRGFya01vZGVPbiIsInVzZVN0YXRlIiwiY3VyclBhZ2UiLCJzZXRDdXJyUGFnZSIsInRoZW1lU3R5bGUiLCJwYWxldHRlIiwidHlwZSIsInByaW1hcnkiLCJtYWluIiwicmVkIiwic2Vjb25kYXJ5IiwiYmx1ZSIsInRoZW1lSW5qZWN0cyIsImJhY2tncm91bmQiLCJjb2xvciIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlTGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBRyxzQ0FBckI7QUFDQSxNQUFNQyxXQUFXLEdBQUcscUNBQXBCO0FBRUEsTUFBTUMsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBZDtBQUNBRCxLQUFLLENBQUNFLElBQU4sQ0FBVyxDQUFDLE1BQUQsRUFBUyxHQUFULENBQVg7QUFDQUYsS0FBSyxDQUFDRSxJQUFOLENBQVcsQ0FBQyxlQUFELEVBQWtCLFlBQWxCLENBQVg7O0FBRUEsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQW1EO0FBQUE7O0FBQ2pELFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Msc0RBQVEsQ0FBQyxLQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRixzREFBUSxDQUFDLE1BQUQsQ0FBeEM7QUFDQSxRQUFNRyxVQUFVLEdBQUdMLFlBQVksR0FBRztBQUNoQ00sV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRSxNQURDO0FBRVBDLGFBQU8sRUFBRTtBQUNQQyxZQUFJLEVBQUVDLDZEQUFHLENBQUMsR0FBRDtBQURGLE9BRkY7QUFJSkMsZUFBUyxFQUFFO0FBQ1pGLFlBQUksRUFBRUMsNkRBQUcsQ0FBQyxHQUFEO0FBREc7QUFKUDtBQUR1QixHQUFILEdBUzNCO0FBQ0FKLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUUsT0FEQztBQUVQQyxhQUFPLEVBQUVJLDhEQUZGO0FBR1BELGVBQVMsRUFBRTtBQUNURixZQUFJLEVBQUVHLDhEQUFJLENBQUMsR0FBRDtBQUREO0FBSEo7QUFEVCxHQVRKO0FBa0JBLFFBQU1DLFlBQVksR0FBR2IsWUFBWSxHQUFHO0FBQ2xDYyxjQUFVLEVBQUUsT0FEc0I7QUFFbENDLFNBQUssRUFBRTtBQUYyQixHQUFILEdBRzdCO0FBQ0FELGNBQVUsRUFBRSxTQURaO0FBRUFDLFNBQUssRUFBRTtBQUZQLEdBSEo7QUFPQSxRQUFNQyxLQUFLLEdBQUdDLCtFQUFjLENBQUNaLFVBQUQsQ0FBNUIsQ0E1QmlELENBOEJqRDs7QUFDQWEseURBQVMsQ0FBQyxNQUFNO0FBQ2RqQixtQkFBZSxDQUFDa0IsTUFBTSxDQUFDQyxVQUFQLENBQWtCLDhCQUFsQixFQUFrREMsT0FBbkQsQ0FBZjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQsQ0EvQmlELENBbUNqRDs7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBSUMsU0FBRCxJQUF1QjtBQUM5Q25CLGVBQVcsQ0FBQ21CLFNBQUQsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsc0VBQUQ7QUFBZSxTQUFLLEVBQUVQLEtBQXRCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFNLFVBQUUsRUFBQyxZQUFUO0FBQXNCLFdBQUcsRUFBQyxNQUExQjtBQUFpQyxZQUFJLEVBQUVoQixZQUFZLEdBQUdQLFdBQUgsR0FBaUJEO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQXFCLFdBQUssRUFBRXFCLFlBQTVCO0FBQUEsOEJBQ0UscUVBQUMsb0VBQUQ7QUFDRSxvQkFBWSxFQUFFVixRQURoQjtBQUVFLGlCQUFTLEVBQUVULEtBRmI7QUFHRSx1QkFBZSxFQUFFNEIsZ0JBSG5CO0FBSUUsb0JBQVksRUFBRXRCLFlBSmhCO0FBS0Usc0JBQWMsRUFBRUM7QUFMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UscUVBQUMsNkRBQUQ7QUFBSyxlQUFPLEVBQUMsTUFBYjtBQUFvQixxQkFBYSxFQUFDLEtBQWxDO0FBQXdDLGdCQUFRLEVBQUUsQ0FBbEQ7QUFBcUQsZ0JBQVEsRUFBQyxRQUE5RDtBQUFBLCtCQUNFLHFFQUFDLFNBQUQ7QUFBVyxzQkFBWSxFQUFFRDtBQUF6QixXQUEyQ0QsU0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVVFLHFFQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztHQXRFU0YsSzs7S0FBQUEsSztBQXdFTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hZjhiNzI1NjM5YzM4ZTJiYTcyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0ICdAc3R5bGVzL2luZGV4LmNzcyc7XG5pbXBvcnQgJ0BzdHlsZXMvQXBwLmNzcyc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdkJhckNvbXBvbmVudCBmcm9tICdAY29tcG9uZW50cy9OYXZCYXIuY29tcG9uZW50J1xuaW1wb3J0IEZvb3RlckJhckNvbXBvbmVudCBmcm9tICdAY29tcG9uZW50cy9Gb290ZXJCYXIuY29tcG9uZW50JztcblxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xuXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSwgVGhlbWVQcm92aWRlciwgVGhlbWVPcHRpb25zIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IGJsdWUsIHJlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XG5cbmNvbnN0IGxpZ2h0RmF2aWNvbiA9ICcvYXNzZXRzL2Zhdmljb25zL3ZfZmF2aWNvbl9saWdodC5pY28nO1xuY29uc3QgZGFya0Zhdmljb24gPSAnL2Fzc2V0cy9mYXZpY29ucy92X2Zhdmljb25fZGFyay5pY28nO1xuXG5jb25zdCBwYWdlcyA9IG5ldyBBcnJheTxBcnJheTxzdHJpbmc+PigpO1xucGFnZXMucHVzaChbJ0hvbWUnLCAnLyddKTtcbnBhZ2VzLnB1c2goWydBcHAgQ2F0YWxvZ3VlJywgJy9jYXRhbG9ndWUnXSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW2lzRGFya01vZGVPbiwgc2V0SXNEYXJrTW9kZU9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2N1cnJQYWdlLCBzZXRDdXJyUGFnZV0gPSB1c2VTdGF0ZSgnSG9tZScpO1xuICBjb25zdCB0aGVtZVN0eWxlID0gaXNEYXJrTW9kZU9uID8ge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHR5cGU6ICdkYXJrJyxcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbWFpbjogcmVkWzcwMF1cbiAgICAgIH0sIHNlY29uZGFyeToge1xuICAgICAgICBtYWluOiByZWRbOTAwXVxuICAgICAgfVxuICAgIH0sXG4gIH0gOiB7XG4gICAgICBwYWxldHRlOiB7XG4gICAgICAgIHR5cGU6ICdsaWdodCcsXG4gICAgICAgIHByaW1hcnk6IGJsdWUsXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgIG1haW46IGJsdWVbNzAwXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cbiAgY29uc3QgdGhlbWVJbmplY3RzID0gaXNEYXJrTW9kZU9uID8ge1xuICAgIGJhY2tncm91bmQ6ICdibGFjaycsXG4gICAgY29sb3I6ICd3aGl0ZSdcbiAgfSA6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjRUFFRkYyJyxcbiAgICAgIGNvbG9yOiAnYmxhY2snXG4gICAgfVxuICBjb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHRoZW1lU3R5bGUgYXMgVGhlbWVPcHRpb25zKTtcblxuICAvLyBBZnRlciBlZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0RhcmtNb2RlT24od2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMpXG4gIH0sIFtdKVxuXG4gIC8vIEhhbmRsZXNcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlTGFiZWw6IHN0cmluZykgPT4ge1xuICAgIHNldEN1cnJQYWdlKHBhZ2VMYWJlbCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgaWQ9XCJmYXZpY29uVGFnXCIgcmVsPVwiaWNvblwiIGhyZWY9e2lzRGFya01vZGVPbiA/IGRhcmtGYXZpY29uIDogbGlnaHRGYXZpY29ufS8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiIHN0eWxlPXt0aGVtZUluamVjdHN9PlxuICAgICAgICA8TmF2QmFyQ29tcG9uZW50XG4gICAgICAgICAgY3Vyck1lbnVJdGVtPXtjdXJyUGFnZX1cbiAgICAgICAgICBtZW51SXRlbXM9e3BhZ2VzfVxuICAgICAgICAgIG9uTWVudUl0ZW1DbGljaz17aGFuZGxlUGFnZUNoYW5nZX1cbiAgICAgICAgICBpc0RhcmtNb2RlT249e2lzRGFya01vZGVPbn1cbiAgICAgICAgICB0b2dnbGVEYXJrTW9kZT17c2V0SXNEYXJrTW9kZU9ufSAvPlxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cInJvd1wiIGZsZXhHcm93PXsxfSBvdmVyZmxvdz1cImhpZGRlblwiPlxuICAgICAgICAgIDxDb21wb25lbnQgaXNEYXJrTW9kZU9uPXtpc0RhcmtNb2RlT259IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Rm9vdGVyQmFyQ29tcG9uZW50IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+KTtcbn1cblxuLy8gT25seSB1bmNvbW1lbnQgdGhpcyBtZXRob2QgaWYgeW91IGhhdmUgYmxvY2tpbmcgZGF0YSByZXF1aXJlbWVudHMgZm9yXG4vLyBldmVyeSBzaW5nbGUgcGFnZSBpbiB5b3VyIGFwcGxpY2F0aW9uLiBUaGlzIGRpc2FibGVzIHRoZSBhYmlsaXR5IHRvXG4vLyBwZXJmb3JtIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLCBjYXVzaW5nIGV2ZXJ5IHBhZ2UgaW4geW91ciBhcHAgdG9cbi8vIGJlIHNlcnZlci1zaWRlIHJlbmRlcmVkLlxuLy9cbi8vIE15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0OiBBcHBDb250ZXh0KSA9PiB7XG4vLyAgIC8vIGNhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2Bcbi8vICAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xuXG4vLyAgIHJldHVybiB7IC4uLmFwcFByb3BzIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwic291cmNlUm9vdCI6IiJ9