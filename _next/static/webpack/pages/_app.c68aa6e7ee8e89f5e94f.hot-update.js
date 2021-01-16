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
const darkFavicon = '/assets/favicons/v_favicon_light.ico';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbImxpZ2h0RmF2aWNvbiIsImRhcmtGYXZpY29uIiwicGFnZXMiLCJBcnJheSIsInB1c2giLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzRGFya01vZGVPbiIsInNldElzRGFya01vZGVPbiIsInVzZVN0YXRlIiwiY3VyclBhZ2UiLCJzZXRDdXJyUGFnZSIsInRoZW1lU3R5bGUiLCJwYWxldHRlIiwidHlwZSIsInByaW1hcnkiLCJtYWluIiwicmVkIiwic2Vjb25kYXJ5IiwiYmx1ZSIsInRoZW1lSW5qZWN0cyIsImJhY2tncm91bmQiLCJjb2xvciIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlTGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBRyxzQ0FBckI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsc0NBQXBCO0FBRUEsTUFBTUMsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBZDtBQUNBRCxLQUFLLENBQUNFLElBQU4sQ0FBVyxDQUFDLE1BQUQsRUFBUyxHQUFULENBQVg7QUFDQUYsS0FBSyxDQUFDRSxJQUFOLENBQVcsQ0FBQyxlQUFELEVBQWtCLFlBQWxCLENBQVg7O0FBRUEsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQW1EO0FBQUE7O0FBQ2pELFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Msc0RBQVEsQ0FBQyxLQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRixzREFBUSxDQUFDLE1BQUQsQ0FBeEM7QUFDQSxRQUFNRyxVQUFVLEdBQUdMLFlBQVksR0FBRztBQUNoQ00sV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRSxNQURDO0FBRVBDLGFBQU8sRUFBRTtBQUNQQyxZQUFJLEVBQUVDLDZEQUFHLENBQUMsR0FBRDtBQURGLE9BRkY7QUFJSkMsZUFBUyxFQUFFO0FBQ1pGLFlBQUksRUFBRUMsNkRBQUcsQ0FBQyxHQUFEO0FBREc7QUFKUDtBQUR1QixHQUFILEdBUzNCO0FBQ0FKLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUUsT0FEQztBQUVQQyxhQUFPLEVBQUVJLDhEQUZGO0FBR1BELGVBQVMsRUFBRTtBQUNURixZQUFJLEVBQUVHLDhEQUFJLENBQUMsR0FBRDtBQUREO0FBSEo7QUFEVCxHQVRKO0FBa0JBLFFBQU1DLFlBQVksR0FBR2IsWUFBWSxHQUFHO0FBQ2xDYyxjQUFVLEVBQUUsT0FEc0I7QUFFbENDLFNBQUssRUFBRTtBQUYyQixHQUFILEdBRzdCO0FBQ0FELGNBQVUsRUFBRSxTQURaO0FBRUFDLFNBQUssRUFBRTtBQUZQLEdBSEo7QUFPQSxRQUFNQyxLQUFLLEdBQUdDLCtFQUFjLENBQUNaLFVBQUQsQ0FBNUIsQ0E1QmlELENBOEJqRDs7QUFDQWEseURBQVMsQ0FBQyxNQUFNO0FBQ2RqQixtQkFBZSxDQUFDa0IsTUFBTSxDQUFDQyxVQUFQLENBQWtCLDhCQUFsQixFQUFrREMsT0FBbkQsQ0FBZjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQsQ0EvQmlELENBbUNqRDs7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBSUMsU0FBRCxJQUF1QjtBQUM5Q25CLGVBQVcsQ0FBQ21CLFNBQUQsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsc0VBQUQ7QUFBZSxTQUFLLEVBQUVQLEtBQXRCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFNLFVBQUUsRUFBQyxZQUFUO0FBQXNCLFdBQUcsRUFBQyxNQUExQjtBQUFpQyxZQUFJLEVBQUVoQixZQUFZLEdBQUdQLFdBQUgsR0FBaUJEO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQXFCLFdBQUssRUFBRXFCLFlBQTVCO0FBQUEsOEJBQ0UscUVBQUMsb0VBQUQ7QUFDRSxvQkFBWSxFQUFFVixRQURoQjtBQUVFLGlCQUFTLEVBQUVULEtBRmI7QUFHRSx1QkFBZSxFQUFFNEIsZ0JBSG5CO0FBSUUsb0JBQVksRUFBRXRCLFlBSmhCO0FBS0Usc0JBQWMsRUFBRUM7QUFMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UscUVBQUMsNkRBQUQ7QUFBSyxlQUFPLEVBQUMsTUFBYjtBQUFvQixxQkFBYSxFQUFDLEtBQWxDO0FBQXdDLGdCQUFRLEVBQUUsQ0FBbEQ7QUFBcUQsZ0JBQVEsRUFBQyxRQUE5RDtBQUFBLCtCQUNFLHFFQUFDLFNBQUQ7QUFBVyxzQkFBWSxFQUFFRDtBQUF6QixXQUEyQ0QsU0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVVFLHFFQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztHQXRFU0YsSzs7S0FBQUEsSztBQXdFTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jNjhhYTZlN2VlOGU4OWY1ZTk0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0ICdAc3R5bGVzL2luZGV4LmNzcyc7XG5pbXBvcnQgJ0BzdHlsZXMvQXBwLmNzcyc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdkJhckNvbXBvbmVudCBmcm9tICdAY29tcG9uZW50cy9OYXZCYXIuY29tcG9uZW50J1xuaW1wb3J0IEZvb3RlckJhckNvbXBvbmVudCBmcm9tICdAY29tcG9uZW50cy9Gb290ZXJCYXIuY29tcG9uZW50JztcblxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xuXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSwgVGhlbWVQcm92aWRlciwgVGhlbWVPcHRpb25zIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IGJsdWUsIHJlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XG5cbmNvbnN0IGxpZ2h0RmF2aWNvbiA9ICcvYXNzZXRzL2Zhdmljb25zL3ZfZmF2aWNvbl9saWdodC5pY28nO1xuY29uc3QgZGFya0Zhdmljb24gPSAnL2Fzc2V0cy9mYXZpY29ucy92X2Zhdmljb25fbGlnaHQuaWNvJztcblxuY29uc3QgcGFnZXMgPSBuZXcgQXJyYXk8QXJyYXk8c3RyaW5nPj4oKTtcbnBhZ2VzLnB1c2goWydIb21lJywgJy8nXSk7XG5wYWdlcy5wdXNoKFsnQXBwIENhdGFsb2d1ZScsICcvY2F0YWxvZ3VlJ10pO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IFtpc0RhcmtNb2RlT24sIHNldElzRGFya01vZGVPbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXJyUGFnZSwgc2V0Q3VyclBhZ2VdID0gdXNlU3RhdGUoJ0hvbWUnKTtcbiAgY29uc3QgdGhlbWVTdHlsZSA9IGlzRGFya01vZGVPbiA/IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICB0eXBlOiAnZGFyaycsXG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIG1haW46IHJlZFs3MDBdXG4gICAgICB9LCBzZWNvbmRhcnk6IHtcbiAgICAgICAgbWFpbjogcmVkWzkwMF1cbiAgICAgIH1cbiAgICB9LFxuICB9IDoge1xuICAgICAgcGFsZXR0ZToge1xuICAgICAgICB0eXBlOiAnbGlnaHQnLFxuICAgICAgICBwcmltYXJ5OiBibHVlLFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICBtYWluOiBibHVlWzcwMF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG4gIGNvbnN0IHRoZW1lSW5qZWN0cyA9IGlzRGFya01vZGVPbiA/IHtcbiAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgIGNvbG9yOiAnd2hpdGUnXG4gIH0gOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnI0VBRUZGMicsXG4gICAgICBjb2xvcjogJ2JsYWNrJ1xuICAgIH1cbiAgY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh0aGVtZVN0eWxlIGFzIFRoZW1lT3B0aW9ucyk7XG5cbiAgLy8gQWZ0ZXIgZWZmZWN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNEYXJrTW9kZU9uKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzKVxuICB9LCBbXSlcblxuICAvLyBIYW5kbGVzXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZUxhYmVsOiBzdHJpbmcpID0+IHtcbiAgICBzZXRDdXJyUGFnZShwYWdlTGFiZWwpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIGlkPVwiZmF2aWNvblRhZ1wiIHJlbD1cImljb25cIiBocmVmPXtpc0RhcmtNb2RlT24gPyBkYXJrRmF2aWNvbiA6IGxpZ2h0RmF2aWNvbn0vPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIiBzdHlsZT17dGhlbWVJbmplY3RzfT5cbiAgICAgICAgPE5hdkJhckNvbXBvbmVudFxuICAgICAgICAgIGN1cnJNZW51SXRlbT17Y3VyclBhZ2V9XG4gICAgICAgICAgbWVudUl0ZW1zPXtwYWdlc31cbiAgICAgICAgICBvbk1lbnVJdGVtQ2xpY2s9e2hhbmRsZVBhZ2VDaGFuZ2V9XG4gICAgICAgICAgaXNEYXJrTW9kZU9uPXtpc0RhcmtNb2RlT259XG4gICAgICAgICAgdG9nZ2xlRGFya01vZGU9e3NldElzRGFya01vZGVPbn0gLz5cbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJyb3dcIiBmbGV4R3Jvdz17MX0gb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgICAgICA8Q29tcG9uZW50IGlzRGFya01vZGVPbj17aXNEYXJrTW9kZU9ufSB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEZvb3RlckJhckNvbXBvbmVudCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9UaGVtZVByb3ZpZGVyPik7XG59XG5cbi8vIE9ubHkgdW5jb21tZW50IHRoaXMgbWV0aG9kIGlmIHlvdSBoYXZlIGJsb2NraW5nIGRhdGEgcmVxdWlyZW1lbnRzIGZvclxuLy8gZXZlcnkgc2luZ2xlIHBhZ2UgaW4geW91ciBhcHBsaWNhdGlvbi4gVGhpcyBkaXNhYmxlcyB0aGUgYWJpbGl0eSB0b1xuLy8gcGVyZm9ybSBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiwgY2F1c2luZyBldmVyeSBwYWdlIGluIHlvdXIgYXBwIHRvXG4vLyBiZSBzZXJ2ZXItc2lkZSByZW5kZXJlZC5cbi8vXG4vLyBNeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dDogQXBwQ29udGV4dCkgPT4ge1xuLy8gICAvLyBjYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4vLyAgIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcblxuLy8gICByZXR1cm4geyAuLi5hcHBQcm9wcyB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwIl0sInNvdXJjZVJvb3QiOiIifQ==