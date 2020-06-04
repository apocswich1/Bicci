(window["webpackJsonpdevias-material-kit-pro"] = window["webpackJsonpdevias-material-kit-pro"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/scss/index.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./src/assets/scss/index.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!react-perfect-scrollbar/dist/css/styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/react-perfect-scrollbar/dist/css/styles.css"), "");

// Module
exports.push([module.i, "/**\n * atom-dark theme for `prism.js`\n * Based on Atom's `atom-dark` theme: https://github.com/atom/atom-dark-syntax\n * @author Joe Gibson (@gibsjose)\n */\ncode[class*='language-'],\npre[class*='language-'] {\n  color: #c5c8c6;\n  font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;\n  direction: ltr;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  line-height: 1.5;\n  font-size: 14px;\n  -moz-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  hyphens: none; }\n\n/* Code blocks */\npre[class*='language-'] {\n  padding: 1em;\n  margin: 0.5em 0;\n  overflow: auto; }\n\n:not(pre) > code[class*='language-'],\npre[class*='language-'] {\n  background: #2d323e; }\n\n/* Inline code */\n:not(pre) > code[class*='language-'] {\n  padding: 0.1em;\n  border-radius: 0.3em; }\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #7c7c7c; }\n\n.token.punctuation {\n  color: #c5c8c6; }\n\n.namespace {\n  opacity: 0.7; }\n\n.token.property,\n.token.keyword,\n.token.tag {\n  color: #96cbfe; }\n\n.token.class-name {\n  color: #ffffb6; }\n\n.token.boolean,\n.token.constant {\n  color: #99cc99; }\n\n.token.symbol,\n.token.deleted {\n  color: #f92672; }\n\n.token.number {\n  color: #ff73fd; }\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #a8ff60; }\n\n.token.variable {\n  color: #c6c5fe; }\n\n.token.operator {\n  color: #ededed; }\n\n.token.entity {\n  color: #ffffb6;\n  /* text-decoration: underline; */ }\n\n.token.url {\n  color: #96cbfe; }\n\n.language-css .token.string,\n.style .token.string {\n  color: #87c38a; }\n\n.token.atrule,\n.token.attr-value {\n  color: #f9ee98; }\n\n.token.function {\n  color: #dad085; }\n\n.token.regex {\n  color: #e9c062; }\n\n.token.important {\n  color: #fd971f; }\n\n.token.important,\n.token.bold {\n  font-weight: bold; }\n\n.token.italic {\n  font-style: italic; }\n\n.token.entity {\n  cursor: help; }\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\nhtml {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nbody {\n  background-color: #f4f6f8;\n  height: 100%; }\n\na {\n  text-decoration: none; }\n\n#root {\n  height: 100%; }\n\n:not(pre) > code {\n  font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;\n  background-color: #eeeeee;\n  padding: 2px 4px;\n  direction: ltr;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  line-height: 1.5;\n  font-size: 14px; }\n", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _date_io_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @date-io/moment */ "./node_modules/@date-io/moment/build/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme */ "./src/theme/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes */ "./src/routes.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _mixins_chartjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mixins/chartjs */ "./src/mixins/chartjs.js");
/* harmony import */ var _mixins_moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mixins/moment */ "./src/mixins/moment.js");
/* harmony import */ var _mixins_validate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mixins/validate */ "./src/mixins/validate.js");
/* harmony import */ var _mixins_prismjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mixins/prismjs */ "./src/mixins/prismjs.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mock */ "./src/mock/index.js");
/* harmony import */ var _assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/scss/index.scss */ "./src/assets/scss/index.scss");
/* harmony import */ var _assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/App.js";



















class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  rende() {
    const history = Object(history__WEBPACK_IMPORTED_MODULE_2__["createBrowserHistory"])();
    const store = Object(_store__WEBPACK_IMPORTED_MODULE_9__["configureStore"])(); //  const App = () => {

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
      theme: _theme__WEBPACK_IMPORTED_MODULE_8__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__["MuiPickersUtilsProvider"], {
      utils: _date_io_moment__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Router"], {
      history: history,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__["ScrollReset"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__["GoogleAnalytics"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__["CookiesNotification"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), Object(react_router_config__WEBPACK_IMPORTED_MODULE_7__["renderRoutes"])(_routes__WEBPACK_IMPORTED_MODULE_10__["default"]))))); //};
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: SESSION_LOGIN, SESSION_LOGOUT, login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sessionActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sessionActions */ "./src/actions/sessionActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SESSION_LOGIN", function() { return _sessionActions__WEBPACK_IMPORTED_MODULE_0__["SESSION_LOGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SESSION_LOGOUT", function() { return _sessionActions__WEBPACK_IMPORTED_MODULE_0__["SESSION_LOGOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _sessionActions__WEBPACK_IMPORTED_MODULE_0__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return _sessionActions__WEBPACK_IMPORTED_MODULE_0__["logout"]; });



/***/ }),

/***/ "./src/actions/sessionActions.js":
/*!***************************************!*\
  !*** ./src/actions/sessionActions.js ***!
  \***************************************/
/*! exports provided: SESSION_LOGIN, SESSION_LOGOUT, login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_LOGIN", function() { return SESSION_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_LOGOUT", function() { return SESSION_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
const SESSION_LOGIN = 'SESSION_LOGIN';
const SESSION_LOGOUT = 'SESSION_LOGOUT';
const login = () => dispatch => dispatch({
  type: SESSION_LOGIN
});
const logout = () => dispatch => dispatch({
  type: SESSION_LOGOUT
});

/***/ }),

/***/ "./src/assets/scss/index.scss":
/*!************************************!*\
  !*** ./src/assets/scss/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/scss/index.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/scss/index.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/scss/index.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/AddPost/AddPost.js":
/*!*******************************************!*\
  !*** ./src/components/AddPost/AddPost.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/AddPhotoAlternate */ "./node_modules/@material-ui/icons/AddPhotoAlternate.js");
/* harmony import */ var _material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/AttachFile */ "./node_modules/@material-ui/icons/AttachFile.js");
/* harmony import */ var _material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/AddPost/AddPost.js";









const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  root: {},
  content: {
    display: 'flex',
    alignItems: 'center'
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing(0.5, 2)
  },
  input: {
    width: '100%'
  },
  divider: {
    width: 1,
    height: 24
  },
  fileInput: {
    display: 'none'
  }
}));

const AddPost = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();
  const fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

  const session = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.session);

  const handleChange = event => {
    event.persist();
    setValue(event.target.value);
  };

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardContent"], {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paper,
    elevation: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    className: classes.input,
    disableUnderline: true,
    onChange: handleChange,
    placeholder: "What's on your mind, ".concat(session.user.first_name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
    title: "Send",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    color: value.length > 0 ? 'primary' : 'default',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
    title: "Attach image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    edge: "end",
    onClick: handleAttach,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
    title: "Attach file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    edge: "end",
    onClick: handleAttach,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: classes.fileInput,
    ref: fileInputRef,
    type: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  })));
};

AddPost.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (AddPost);

/***/ }),

/***/ "./src/components/AddPost/index.js":
/*!*****************************************!*\
  !*** ./src/components/AddPost/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPost */ "./src/components/AddPost/AddPost.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AddPost__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Alert/Alert.js":
/*!***************************************!*\
  !*** ./src/components/Alert/Alert.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/CheckCircleOutlined */ "./node_modules/@material-ui/icons/CheckCircleOutlined.js");
/* harmony import */ var _material_ui_icons_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/CloseOutlined */ "./node_modules/@material-ui/icons/CloseOutlined.js");
/* harmony import */ var _material_ui_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ErrorOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ErrorOutlined */ "./node_modules/@material-ui/icons/ErrorOutlined.js");
/* harmony import */ var _material_ui_icons_ErrorOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ErrorOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/InfoOutlined */ "./node_modules/@material-ui/icons/InfoOutlined.js");
/* harmony import */ var _material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_WarningOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/WarningOutlined */ "./node_modules/@material-ui/icons/WarningOutlined.js");
/* harmony import */ var _material_ui_icons_WarningOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WarningOutlined__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/Alert/Alert.js";










const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '6px 16px',
    borderRadius: theme.shape.borderRadius
  },
  default: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  success: {
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["colors"].green[600],
    color: theme.palette.white
  },
  info: {
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["colors"].lightBlue[600],
    color: theme.palette.white
  },
  warning: {
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["colors"].orange[900],
    color: theme.palette.white
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText
  },
  message: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0'
  },
  icon: {
    fontSize: 20,
    marginRight: theme.spacing(1)
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    paddingLeft: 16,
    marginRight: -8
  }
}));
const icons = {
  default: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }),
  success: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }),
  info: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }),
  warning: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_WarningOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }),
  error: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ErrorOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  })
};
const Alert = Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const className = props.className,
        icon = props.icon,
        variant = props.variant,
        message = props.message,
        onClose = props.onClose,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className", "icon", "variant", "message", "onClose"]);

  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, classes[variant], className),
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"],
    elevation: 1,
    ref: ref,
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, icon || icons[variant]), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, message), onClose && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    className: classes.action,
    color: "inherit",
    key: "close",
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  })));
});
Alert.displayName = 'Alert';
Alert.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  message: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  variant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['default', 'info', 'success', 'warning', 'error'])
};
Alert.defaultProps = {
  variant: 'default'
};
/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "./src/components/Alert/index.js":
/*!***************************************!*\
  !*** ./src/components/Alert/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert */ "./src/components/Alert/Alert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Alert__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/AuthGuard/AuthGuard.js":
/*!***********************************************!*\
  !*** ./src/components/AuthGuard/AuthGuard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_useRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/useRouter */ "./src/utils/useRouter.js");
var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/AuthGuard/AuthGuard.js";



 // Example of user roles: ['GUEST', 'USER', 'ADMIN'];

const AuthGuard = props => {
  const roles = props.roles,
        children = props.children;
  console.log(props);
  const session = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.session);
  const router = Object(utils_useRouter__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!session.loggedIn || !session.user) {
      router.history.push('/auth/login');
      return;
    }

    if (!roles.includes(session.user.role)) {
      router.history.push('/errors/error-401');
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [router]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, children);
};

AuthGuard.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  roles: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
AuthGuard.defaultProps = {
  roles: []
};
/* harmony default export */ __webpack_exports__["default"] = (AuthGuard);

/***/ }),

/***/ "./src/components/AuthGuard/index.js":
/*!*******************************************!*\
  !*** ./src/components/AuthGuard/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthGuard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthGuard */ "./src/components/AuthGuard/AuthGuard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AuthGuard__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/CodeBlock/CodeBlock.js":
/*!***********************************************!*\
  !*** ./src/components/CodeBlock/CodeBlock.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/CodeBlock/CodeBlock.js";





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(() => ({
  root: {}
}));

const trimCode = input => {
  const codeLines = input.split('\n');

  if (!codeLines[0].trim()) {
    codeLines.shift();
  }

  if (!codeLines[codeLines.length - 1].trim()) {
    codeLines.pop();
  }

  const indexOfFirstChar = codeLines[0].search(/\S|$/);
  let output = '';
  codeLines.forEach((line, index) => {
    output = output + line.substr(indexOfFirstChar, line.length);

    if (index !== codeLines.length - 1) {
      output = output + '\n';
    }
  });
  return output;
};

const CodeBlock = props => {
  const async = props.async,
        source = props.source,
        language = props.language,
        className = props.className,
        Component = props.component,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["async", "source", "language", "className", "component"]);

  const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const highlight = () => {
      prismjs__WEBPACK_IMPORTED_MODULE_2__["highlightElement"](ref.current, async);
    };

    highlight();
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pre", {
    className: "language-".concat(language),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), trimCode(source)));
};

CodeBlock.propTypes = {
  async: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  language: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  source: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
CodeBlock.defaultProps = {
  component: 'code'
};
/* harmony default export */ __webpack_exports__["default"] = (CodeBlock);

/***/ }),

/***/ "./src/components/CodeBlock/index.js":
/*!*******************************************!*\
  !*** ./src/components/CodeBlock/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeBlock */ "./src/components/CodeBlock/CodeBlock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CodeBlock__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/CookiesNotification/CookiesNotification.js":
/*!*******************************************************************!*\
  !*** ./src/components/CookiesNotification/CookiesNotification.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/CookiesNotification/CookiesNotification.js";




const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    maxWidth: 420,
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: theme.spacing(3),
    outline: 'none',
    zIndex: 2000
  },
  media: {
    padding: theme.spacing(1, 2),
    height: 180,
    textAlign: 'center',
    '& > img': {
      height: '100%',
      width: 'auto'
    }
  },
  content: {
    padding: theme.spacing(1, 2)
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1, 2, 2, 1)
  }
}));

const CookiesNotification = () => {
  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        open = _useState2[0],
        setOpen = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const consent = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('consent');

    if (!consent) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('consent', 'true');
    setOpen(false);
  };

  if (!open) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
    className: classes.root,
    elevation: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.media,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Cookies",
    src: "/images/undraw_cookie_love_ulvn.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "We use Cookies to ensure that we give you the best experience on our website. Read our", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    className: classes.link,
    component: "a",
    href: "https://devias.io/privacy-policy",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "Privacy Policy"), ".")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: classes.agreeButton,
    color: "primary",
    onClick: handleClose,
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "I Agree")));
};

/* harmony default export */ __webpack_exports__["default"] = (CookiesNotification);

/***/ }),

/***/ "./src/components/CookiesNotification/index.js":
/*!*****************************************************!*\
  !*** ./src/components/CookiesNotification/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CookiesNotification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CookiesNotification */ "./src/components/CookiesNotification/CookiesNotification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CookiesNotification__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/FilesDropzone/FilesDropzone.js":
/*!*******************************************************!*\
  !*** ./src/components/FilesDropzone/FilesDropzone.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/FileCopy */ "./node_modules/@material-ui/icons/FileCopy.js");
/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var utils_bytesToSize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/bytesToSize */ "./src/utils/bytesToSize.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/FilesDropzone/FilesDropzone.js";











const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(theme => ({
  root: {},
  dropZone: {
    border: "1px dashed ".concat(theme.palette.divider),
    padding: theme.spacing(6),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_9__["colors"].grey[50],
      opacity: 0.5,
      cursor: 'pointer'
    }
  },
  dragActive: {
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_9__["colors"].grey[50],
    opacity: 0.5
  },
  image: {
    width: 130
  },
  info: {
    marginTop: theme.spacing(1)
  },
  list: {
    maxHeight: 320
  },
  actions: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}));

const FilesDropzone = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        files = _useState2[0],
        setFiles = _useState2[1];

  const handleDrop = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(acceptedFiles => {
    setFiles(files => [...files].concat(acceptedFiles));
  }, []);

  const handleRemoveAll = () => {
    setFiles([]);
  };

  const _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_6__["useDropzone"])({
    onDrop: handleDrop
  }),
        getRootProps = _useDropzone.getRootProps,
        getInputProps = _useDropzone.getInputProps,
        isDragActive = _useDropzone.isDragActive;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])({
      [classes.dropZone]: true,
      [classes.dragActive]: isDragActive
    })
  }, getRootProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", Object.assign({}, getInputProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: "Select file",
    className: classes.image,
    src: "/images/undraw_add_file2_gvbb.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
    gutterBottom: true,
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "Select files"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
    className: classes.info,
    color: "textSecondary",
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Drop files here or click ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    underline: "always",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "browse"), ' ', "thorough your machine"))), files.length > 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7___default.a, {
    options: {
      suppressScrollX: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["List"], {
    className: classes.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, files.map((file, i) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["ListItem"], {
    divider: i < files.length - 1,
    key: uuid_v1__WEBPACK_IMPORTED_MODULE_5___default()(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["ListItemText"], {
    primary: file.name,
    primaryTypographyProps: {
      variant: 'h5'
    },
    secondary: Object(utils_bytesToSize__WEBPACK_IMPORTED_MODULE_12__["default"])(file.size),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
    title: "More options",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    edge: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    onClick: handleRemoveAll,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, "Remove all"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    color: "secondary",
    size: "small",
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, "Upload files"))));
};

FilesDropzone.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (FilesDropzone);

/***/ }),

/***/ "./src/components/FilesDropzone/index.js":
/*!***********************************************!*\
  !*** ./src/components/FilesDropzone/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilesDropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesDropzone */ "./src/components/FilesDropzone/FilesDropzone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FilesDropzone__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/GenericMoreButton/GenericMoreButton.js":
/*!***************************************************************!*\
  !*** ./src/components/GenericMoreButton/GenericMoreButton.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/GetApp */ "./node_modules/@material-ui/icons/GetApp.js");
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/FileCopy */ "./node_modules/@material-ui/icons/FileCopy.js");
/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Print__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Print */ "./node_modules/@material-ui/icons/Print.js");
/* harmony import */ var _material_ui_icons_Print__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Print__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_PictureAsPdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/PictureAsPdf */ "./node_modules/@material-ui/icons/PictureAsPdf.js");
/* harmony import */ var _material_ui_icons_PictureAsPdf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PictureAsPdf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ArchiveOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ArchiveOutlined */ "./node_modules/@material-ui/icons/ArchiveOutlined.js");
/* harmony import */ var _material_ui_icons_ArchiveOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArchiveOutlined__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/GenericMoreButton/GenericMoreButton.js";










const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({}));

const GenericMoreButton = props => {
  const classes = useStyles();
  const moreRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        openMenu = _useState2[0],
        setOpenMenu = _useState2[1];

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: "More options",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], Object.assign({}, props, {
    onClick: handleMenuOpen,
    ref: moreRef,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    anchorEl: moreRef.current,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    classes: {
      paper: classes.menu
    },
    onClose: handleMenuClose,
    open: openMenu,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: "Import",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: "Copy to clipboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_PictureAsPdf__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: "Export as PDF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Print__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: "Print",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ArchiveOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: "Achive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }))));
};

GenericMoreButton.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(GenericMoreButton));

/***/ }),

/***/ "./src/components/GenericMoreButton/index.js":
/*!***************************************************!*\
  !*** ./src/components/GenericMoreButton/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GenericMoreButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenericMoreButton */ "./src/components/GenericMoreButton/GenericMoreButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _GenericMoreButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/GoogleAnalytics/GoogleAnalytics.js":
/*!***********************************************************!*\
  !*** ./src/components/GoogleAnalytics/GoogleAnalytics.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/GoogleAnalytics/GoogleAnalytics.js";

/* eslint-disable react/no-danger */

 // eslint-disable-next-line no-undef

const GA_MEASUREMENT_ID = Object({"NODE_ENV":"development","PUBLIC_URL":""}).REACT_APP_GA_MEASUREMENT_ID;

const GoogleAnalytics = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=".concat(GA_MEASUREMENT_ID),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "\n          window.dataLayer = window.dataLayer || [];\n\n          function gtag() {\n            dataLayer.push(arguments);\n          }\n\n          gtag('js', new Date());\n          gtag('config', '".concat(GA_MEASUREMENT_ID, "');\n        ")));
};

/* harmony default export */ __webpack_exports__["default"] = (GoogleAnalytics);

/***/ }),

/***/ "./src/components/GoogleAnalytics/index.js":
/*!*************************************************!*\
  !*** ./src/components/GoogleAnalytics/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoogleAnalytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoogleAnalytics */ "./src/components/GoogleAnalytics/GoogleAnalytics.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _GoogleAnalytics__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Label/Label.js":
/*!***************************************!*\
  !*** ./src/components/Label/Label.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/Label/Label.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    flexShrink: 0,
    borderRadius: theme.shape.borderRadius,
    lineHeight: '10px',
    fontSize: '10px',
    height: 20,
    minWidth: 20,
    whiteSpace: 'nowrap',
    padding: theme.spacing(0.5, 1)
  },
  rounded: {
    borderRadius: 10,
    padding: theme.spacing(0.5)
  }
}));

const Label = props => {
  const className = props.className,
        variant = props.variant,
        color = props.color,
        shape = props.shape,
        children = props.children,
        style = props.style,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "variant", "color", "shape", "children", "style"]);

  const classes = useStyles();
  const rootClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])({
    [classes.root]: true,
    [classes.rounded]: shape === 'rounded'
  }, className);

  const finalStyle = _objectSpread({}, style);

  if (variant === 'contained') {
    finalStyle.backgroundColor = color;
    finalStyle.color = '#FFF';
  } else {
    finalStyle.border = "1px solid ".concat(color);
    finalStyle.color = color;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], Object.assign({}, rest, {
    className: rootClassName,
    style: finalStyle,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), children);
};

Label.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  shape: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['square', 'rounded']),
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['contained', 'outlined'])
};
Label.defaultProps = {
  style: {},
  color: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].grey[600],
  variant: 'contained',
  shape: 'square'
};
/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./src/components/Label/index.js":
/*!***************************************!*\
  !*** ./src/components/Label/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Label */ "./src/components/Label/Label.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Label__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Markdown/Markdown.js":
/*!*********************************************!*\
  !*** ./src/components/Markdown/Markdown.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown/with-html */ "./node_modules/react-markdown/with-html.js");
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/Markdown/Markdown.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  root: {
    '& h1': _objectSpread({}, theme.typography.h1, {
      marginBottom: theme.spacing(1)
    }),
    '& h2': _objectSpread({}, theme.typography.h2, {
      marginBottom: theme.spacing(1)
    }),
    '& h3': _objectSpread({}, theme.typography.h3, {
      marginBottom: theme.spacing(1)
    }),
    '& h4': _objectSpread({}, theme.typography.h4, {
      marginBottom: theme.spacing(1)
    }),
    '& h5': _objectSpread({}, theme.typography.h5, {
      marginBottom: theme.spacing(1)
    }),
    '& h6': _objectSpread({}, theme.typography.h6, {
      marginBottom: theme.spacing(1)
    }),
    '& p': _objectSpread({}, theme.typography.subtitle1, {
      marginBottom: theme.spacing(2)
    }),
    '& ul': {
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(2)
    },
    '& ol': {
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(2)
    },
    '& li': _objectSpread({}, theme.typography.subtitle1, {
      marginBottom: theme.spacing(1)
    }),
    '& hr': {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["colors"].grey[300],
      border: 0,
      height: 1
    },
    '& a': {
      color: theme.palette.link,
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  }
}));

const Markdown = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    prismjs__WEBPACK_IMPORTED_MODULE_5___default.a.highlightAll();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_6___default.a, Object.assign({}, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  })));
};

Markdown.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Markdown);

/***/ }),

/***/ "./src/components/Markdown/index.js":
/*!******************************************!*\
  !*** ./src/components/Markdown/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Markdown */ "./src/components/Markdown/Markdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Markdown__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Navigation/Navigation.js":
/*!*************************************************!*\
  !*** ./src/components/Navigation/Navigation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var utils_useRouter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/useRouter */ "./src/utils/useRouter.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "./src/components/Navigation/components/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/Navigation/Navigation.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/no-multi-comp */








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  root: {
    marginBottom: theme.spacing(3)
  }
}));

const NavigationList = props => {
  const pages = props.pages,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["pages"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, pages.reduce((items, page) => reduceChildRoutes(_objectSpread({
    items,
    page
  }, rest)), []));
};

NavigationList.propTypes = {
  depth: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  pages: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array
};

const reduceChildRoutes = props => {
  const router = props.router,
        items = props.items,
        page = props.page,
        depth = props.depth;

  if (page.children) {
    const open = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["matchPath"])(router.location.pathname, {
      path: page.href,
      exact: false
    });
    items.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["NavigationListItem"], {
      depth: depth,
      icon: page.icon,
      key: page.title,
      label: page.label,
      open: Boolean(open),
      title: page.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavigationList, {
      depth: depth + 1,
      pages: page.children,
      router: router,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    })));
  } else {
    items.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["NavigationListItem"], {
      depth: depth,
      href: page.href,
      icon: page.icon,
      key: page.title,
      label: page.label,
      title: page.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: undefined
    }));
  }

  return items;
};

const Navigation = props => {
  const title = props.title,
        pages = props.pages,
        className = props.className,
        Component = props.component,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["title", "pages", "className", "component"]);

  const classes = useStyles();
  const router = Object(utils_useRouter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavigationList, {
    depth: 0,
    pages: pages,
    router: router,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }));
};

Navigation.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  component: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  pages: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
Navigation.defaultProps = {
  component: 'nav'
};
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./src/components/Navigation/components/NavigationListItem/NavigationListItem.js":
/*!***************************************************************************************!*\
  !*** ./src/components/Navigation/components/NavigationListItem/NavigationListItem.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/Navigation/components/NavigationListItem/NavigationListItem.js";

/* eslint-disable react/display-name */








const CustomRouterLink = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  ref: ref,
  style: {
    flexGrow: 1
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], Object.assign({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}))));
const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_7__["colors"].blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%'
  },
  buttonLeaf: {
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_7__["colors"].blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  icon: {
    color: theme.palette.icon,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  expandIcon: {
    marginLeft: 'auto',
    height: 16,
    width: 16
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto'
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

const NavigationListItem = props => {
  const title = props.title,
        href = props.href,
        depth = props.depth,
        children = props.children,
        Icon = props.icon,
        className = props.className,
        openProp = props.open,
        Label = props.label,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["title", "href", "depth", "children", "icon", "className", "open", "label"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(openProp),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        open = _useState2[0],
        setOpen = _useState2[1];

  const handleToggle = () => {
    setOpen(open => !open);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = {
    paddingLeft
  };

  if (children) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItem"], Object.assign({}, rest, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.item, className),
      disableGutters: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      className: classes.button,
      onClick: handleToggle,
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: undefined
    }, Icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Icon, {
      className: classes.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: undefined
    }), title, open ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.expandIcon,
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: undefined
    }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: classes.expandIcon,
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
      in: open,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: undefined
    }, children));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItem"], Object.assign({}, rest, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.itemLeaf, className),
      disableGutters: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      activeClassName: classes.active,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.buttonLeaf, "depth-".concat(depth)),
      component: CustomRouterLink,
      exact: true,
      style: style,
      to: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: undefined
    }, Icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Icon, {
      className: classes.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: undefined
    }), title, Label && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: classes.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: undefined
    }))));
  }
};

NavigationListItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  depth: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  open: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired
};
NavigationListItem.defaultProps = {
  depth: 0,
  open: false
};
/* harmony default export */ __webpack_exports__["default"] = (NavigationListItem);

/***/ }),

/***/ "./src/components/Navigation/components/NavigationListItem/index.js":
/*!**************************************************************************!*\
  !*** ./src/components/Navigation/components/NavigationListItem/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationListItem */ "./src/components/Navigation/components/NavigationListItem/NavigationListItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NavigationListItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Navigation/components/index.js":
/*!*******************************************************!*\
  !*** ./src/components/Navigation/components/index.js ***!
  \*******************************************************/
/*! exports provided: NavigationListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationListItem */ "./src/components/Navigation/components/NavigationListItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationListItem", function() { return _NavigationListItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Navigation/index.js":
/*!********************************************!*\
  !*** ./src/components/Navigation/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation */ "./src/components/Navigation/Navigation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Navigation__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/NotificationsPopover/NotificationsPopover.js":
/*!*********************************************************************!*\
  !*** ./src/components/NotificationsPopover/NotificationsPopover.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/components/NotificationsPopover/components/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/NotificationsPopover/NotificationsPopover.js";






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(() => ({
  root: {
    width: 350,
    maxWidth: '100%'
  },
  actions: {
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["colors"].grey[50],
    justifyContent: 'center'
  }
}));

const NotificationsPopover = props => {
  const notifications = props.notifications,
        anchorEl = props.anchorEl,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["notifications", "anchorEl"]);

  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Popover"], Object.assign({}, rest, {
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], {
    title: "Notifications",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), notifications.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["NotificationList"], {
    notifications: notifications,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["EmptyList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CardActions"], {
    className: classes.actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    size: "small",
    to: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "See all"))));
};

NotificationsPopover.propTypes = {
  anchorEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  notifications: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NotificationsPopover);

/***/ }),

/***/ "./src/components/NotificationsPopover/components/EmptyList/EmptyList.js":
/*!*******************************************************************************!*\
  !*** ./src/components/NotificationsPopover/components/EmptyList/EmptyList.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/NotificationsPopover/components/EmptyList/EmptyList.js";





const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(3)
  },
  image: {
    height: 240,
    backgroundImage: 'url("/images/undraw_empty_xct9.svg")',
    backgroundPositionX: 'right',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}));

const EmptyList = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "There's nothing here..."));
};

EmptyList.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (EmptyList);

/***/ }),

/***/ "./src/components/NotificationsPopover/components/EmptyList/index.js":
/*!***************************************************************************!*\
  !*** ./src/components/NotificationsPopover/components/EmptyList/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmptyList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyList */ "./src/components/NotificationsPopover/components/EmptyList/EmptyList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _EmptyList__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/NotificationsPopover/components/NotificationList/NotificationList.js":
/*!*********************************************************************************************!*\
  !*** ./src/components/NotificationsPopover/components/NotificationList/NotificationList.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "./node_modules/@material-ui/icons/ArrowForward.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Payment */ "./node_modules/@material-ui/icons/Payment.js");
/* harmony import */ var _material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_PeopleOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/PeopleOutlined */ "./node_modules/@material-ui/icons/PeopleOutlined.js");
/* harmony import */ var _material_ui_icons_PeopleOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PeopleOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Code */ "./node_modules/@material-ui/icons/Code.js");
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Store */ "./node_modules/@material-ui/icons/Store.js");
/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var utils_gradients__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! utils/gradients */ "./src/utils/gradients.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/NotificationsPopover/components/NotificationList/NotificationList.js";













const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  root: {},
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.background.default
    }
  },
  avatarBlue: {
    backgroundImage: utils_gradients__WEBPACK_IMPORTED_MODULE_13__["default"].blue
  },
  avatarGreen: {
    backgroundImage: utils_gradients__WEBPACK_IMPORTED_MODULE_13__["default"].green
  },
  avatarOrange: {
    backgroundImage: utils_gradients__WEBPACK_IMPORTED_MODULE_13__["default"].orange
  },
  avatarIndigo: {
    backgroundImage: utils_gradients__WEBPACK_IMPORTED_MODULE_13__["default"].indigo
  },
  arrowForwardIcon: {
    color: theme.palette.icon
  }
}));

const NotificationList = props => {
  const notifications = props.notifications,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["notifications", "className"]);

  const classes = useStyles();
  const avatars = {
    order: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Avatar"], {
      className: classes.avatarBlue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    })),
    user: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Avatar"], {
      className: classes.avatarOrange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_PeopleOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    })),
    project: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Avatar"], {
      className: classes.avatarGreen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    })),
    feature: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Avatar"], {
      className: classes.avatarIndigo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }))
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["List"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    disablePadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), notifications.map((notification, i) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
    className: classes.listItem,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    divider: i < notifications.length - 1,
    key: notification.id,
    to: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItemAvatar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, avatars[notification.type]), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItemText"], {
    primary: notification.title,
    primaryTypographyProps: {
      variant: 'body1'
    },
    secondary: moment__WEBPACK_IMPORTED_MODULE_5___default()(notification.created_at).fromNow(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.arrowForwardIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }))));
};

NotificationList.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  notifications: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NotificationList);

/***/ }),

/***/ "./src/components/NotificationsPopover/components/NotificationList/index.js":
/*!**********************************************************************************!*\
  !*** ./src/components/NotificationsPopover/components/NotificationList/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationList */ "./src/components/NotificationsPopover/components/NotificationList/NotificationList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NotificationList__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/NotificationsPopover/components/index.js":
/*!*****************************************************************!*\
  !*** ./src/components/NotificationsPopover/components/index.js ***!
  \*****************************************************************/
/*! exports provided: NotificationList, EmptyList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationList */ "./src/components/NotificationsPopover/components/NotificationList/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationList", function() { return _NotificationList__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _EmptyList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyList */ "./src/components/NotificationsPopover/components/EmptyList/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyList", function() { return _EmptyList__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/components/NotificationsPopover/index.js":
/*!******************************************************!*\
  !*** ./src/components/NotificationsPopover/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationsPopover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationsPopover */ "./src/components/NotificationsPopover/NotificationsPopover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NotificationsPopover__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Page/Page.js":
/*!*************************************!*\
  !*** ./src/components/Page/Page.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_useRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/useRouter */ "./src/utils/useRouter.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/Page/Page.js";

/* eslint-disable no-undef */




const NODE_ENV = "development";
const GA_MEASUREMENT_ID = Object({"NODE_ENV":"development","PUBLIC_URL":""}).REACT_APP_GA_MEASUREMENT_ID;

const Page = props => {
  const title = props.title,
        children = props.children,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["title", "children"]);

  const router = Object(utils_useRouter__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (NODE_ENV !== 'production') {
      return;
    }

    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: router.location.pathname,
        page_name: title
      });
    }
  }, [title, router]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, title)), children);
};

Page.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/components/Page/index.js":
/*!**************************************!*\
  !*** ./src/components/Page/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ "./src/components/Page/Page.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Page__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Paginate/Paginate.js":
/*!*********************************************!*\
  !*** ./src/components/Paginate/Paginate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/index.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/Paginate/Paginate.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: _objectSpread({}, theme.typography.button, {
    listStyle: 'none',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center'
  }),
  active: {},
  activeLink: {},
  break: {},
  breakLink: {},
  disabled: {},
  next: {
    marginLeft: theme.spacing(1)
  },
  nextLink: {
    padding: '6px 16px',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].blueGrey[50]
    }
  },
  page: {},
  pageLink: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(1),
    outline: 'none',
    cursor: 'pointer',
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'block',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].blueGrey[50],
      color: theme.palette.text.primary
    },
    '&$activeLink': {
      backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].blueGrey[50],
      color: theme.palette.text.primary
    }
  },
  previous: {
    marginRight: theme.spacing(1)
  },
  previousLink: {
    padding: '6px 16px',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].blueGrey[50]
    }
  }
}));

const Paginate = props => {
  const pageCount = props.pageCount,
        pageRangeDisplayed = props.pageRangeDisplayed,
        onPageChange = props.onPageChange,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["pageCount", "pageRangeDisplayed", "onPageChange", "className"]);

  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_paginate__WEBPACK_IMPORTED_MODULE_7___default.a, Object.assign({
    activeClassName: classes.active,
    activeLinkClassName: classes.activeLink,
    breakClassName: classes.break,
    breakLabel: "...",
    breakLinkClassName: classes.breakLink,
    containerClassName: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    disabledClassName: classes.disabled,
    marginPagesDisplayed: 2,
    nextClassName: classes.next,
    nextLabel: "next",
    nextLinkClassName: classes.nextLink,
    onPageChange: onPageChange,
    pageClassName: classes.page,
    pageCount: pageCount,
    pageLinkClassName: classes.pageLink,
    pageRangeDisplayed: pageRangeDisplayed,
    previousClassName: classes.previous,
    previousLabel: "previous",
    previousLinkClassName: classes.previousLink,
    subContainerClassName: "pages pagination"
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }));
};

Paginate.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  pageCount: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  pageRangeDisplayed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
};
Paginate.defaultProps = {
  onPageChange: () => {},
  pageRangeDisplayed: 5
};
/* harmony default export */ __webpack_exports__["default"] = (Paginate);

/***/ }),

/***/ "./src/components/Paginate/index.js":
/*!******************************************!*\
  !*** ./src/components/Paginate/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Paginate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paginate */ "./src/components/Paginate/Paginate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Paginate__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/PostCard/PostCard.js":
/*!*********************************************!*\
  !*** ./src/components/PostCard/PostCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AccessTime */ "./node_modules/@material-ui/icons/AccessTime.js");
/* harmony import */ var _material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "./src/components/PostCard/components/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/PostCard/PostCard.js";









const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  root: {},
  subheader: {
    display: 'flex',
    alignItems: 'center'
  },
  accessTimeIcon: {
    color: theme.palette.text.secondary,
    fontSize: '14px',
    height: 14,
    width: 14,
    marginRight: 6
  },
  content: {
    paddingTop: 0
  },
  message: {
    marginBottom: theme.spacing(2)
  },
  mediaArea: {
    marginBottom: theme.spacing(2)
  },
  media: {
    height: 400,
    backgroundPosition: 'initial'
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const PostCard = props => {
  const post = props.post,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["post", "className"]);

  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
    avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Avatar"], {
      alt: "Person",
      className: classes.avatar,
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      src: post.author.avatar,
      to: "/profile/1/timeline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: undefined
    }),
    disableTypography: true,
    subheader: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.subheader,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: classes.accessTimeIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
      variant: "body2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: undefined
    }, moment__WEBPACK_IMPORTED_MODULE_5___default()(post.created_at).fromNow())),
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      color: "textPrimary",
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      to: "/profile/1/timeline",
      variant: "h6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    }, post.author.name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardContent"], {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    className: classes.message,
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, post.message), post.media && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardActionArea"], {
    className: classes.mediaArea,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardMedia"], {
    className: classes.media,
    image: post.media,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["Reactions"], {
    className: classes.reactions,
    post: post,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }), post.comments && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.comments,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, post.comments.map(comment => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["CommentBubble"], {
    comment: comment,
    key: comment.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["CommentForm"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  })));
};

PostCard.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./src/components/PostCard/components/CommentBubble/CommentBubble.js":
/*!***************************************************************************!*\
  !*** ./src/components/PostCard/components/CommentBubble/CommentBubble.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/PostCard/components/CommentBubble/CommentBubble.js";







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    marginBottom: theme.spacing(2)
  },
  bubble: {
    flexGrow: 1,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default
  },
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  time: {
    marginLeft: 'auto'
  },
  message: {
    marginTop: theme.spacing(1)
  }
}));

const CommentBubble = props => {
  const comment = props.comment,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["comment", "className"]);

  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Avatar"], {
    alt: "Person",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    src: comment.author.avatar,
    to: "/profile/1/timeline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.bubble,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    color: "textPrimary",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: "/profile/1/timeline",
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, comment.author.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    className: classes.time,
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.created_at).fromNow())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    className: classes.message,
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, comment.message)));
};

CommentBubble.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  comment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentBubble);

/***/ }),

/***/ "./src/components/PostCard/components/CommentBubble/index.js":
/*!*******************************************************************!*\
  !*** ./src/components/PostCard/components/CommentBubble/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommentBubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentBubble */ "./src/components/PostCard/components/CommentBubble/CommentBubble.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CommentBubble__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/PostCard/components/CommentForm/CommentForm.js":
/*!***********************************************************************!*\
  !*** ./src/components/PostCard/components/CommentForm/CommentForm.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AddPhotoAlternate */ "./node_modules/@material-ui/icons/AddPhotoAlternate.js");
/* harmony import */ var _material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/AttachFile */ "./node_modules/@material-ui/icons/AttachFile.js");
/* harmony import */ var _material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/PostCard/components/CommentForm/CommentForm.js";








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  paper: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5, 2)
  },
  input: {
    width: '100%'
  },
  divider: {
    width: 1,
    height: 24
  },
  fileInput: {
    display: 'none'
  }
}));

const CommentForm = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();
  const fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

  const sender = {
    avatar: '/images/avatars/avatar_11.png'
  };

  const handleChange = event => {
    event.persist();
    setValue(event.target.value);
  };

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
    alt: "Person",
    src: sender.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
    className: classes.paper,
    elevation: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    className: classes.input,
    disableUnderline: true,
    onChange: handleChange,
    placeholder: "Leave a message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
    title: "Send",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    color: value.length > 0 ? 'primary' : 'default',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
    title: "Attach image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    edge: "end",
    onClick: handleAttach,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
    title: "Attach file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    edge: "end",
    onClick: handleAttach,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: classes.fileInput,
    ref: fileInputRef,
    type: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }));
};

CommentForm.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

/***/ }),

/***/ "./src/components/PostCard/components/CommentForm/index.js":
/*!*****************************************************************!*\
  !*** ./src/components/PostCard/components/CommentForm/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentForm */ "./src/components/PostCard/components/CommentForm/CommentForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CommentForm__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/PostCard/components/Reactions/Reactions.js":
/*!*******************************************************************!*\
  !*** ./src/components/PostCard/components/Reactions/Reactions.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "./node_modules/@material-ui/icons/FavoriteBorder.js");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Share */ "./node_modules/@material-ui/icons/Share.js");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/PostCard/components/Reactions/Reactions.js";








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  likeButton: {},
  likedButton: {
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].red[600]
  },
  shareButton: {
    marginLeft: 'auto'
  },
  shareIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Reactions = props => {
  const post = props.post,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["post", "className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(post.liked),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        liked = _useState2[0],
        setLiked = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(post.likes),
        _useState4 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        likes = _useState4[0],
        setLikes = _useState4[1];

  const handleLike = () => {
    setLiked(true);
    setLikes(likes => likes + 1);
  };

  const handleUnlike = () => {
    setLiked(false);
    setLikes(likes => likes - 1);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), liked ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
    title: "Unlike",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    className: classes.likedButton,
    onClick: handleUnlike,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
    title: "Like",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    className: classes.likeButton,
    onClick: handleLike,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    color: "textSecondary",
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, likes), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: classes.shareButton,
    size: "small",
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.shareIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), "Share"));
};

Reactions.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Reactions);

/***/ }),

/***/ "./src/components/PostCard/components/Reactions/index.js":
/*!***************************************************************!*\
  !*** ./src/components/PostCard/components/Reactions/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reactions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reactions */ "./src/components/PostCard/components/Reactions/Reactions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Reactions__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/PostCard/components/index.js":
/*!*****************************************************!*\
  !*** ./src/components/PostCard/components/index.js ***!
  \*****************************************************/
/*! exports provided: CommentBubble, CommentForm, Reactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommentBubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentBubble */ "./src/components/PostCard/components/CommentBubble/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentBubble", function() { return _CommentBubble__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentForm */ "./src/components/PostCard/components/CommentForm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentForm", function() { return _CommentForm__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Reactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reactions */ "./src/components/PostCard/components/Reactions/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reactions", function() { return _Reactions__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/components/PostCard/index.js":
/*!******************************************!*\
  !*** ./src/components/PostCard/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostCard */ "./src/components/PostCard/PostCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PostCard__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/PricingModal/PricingModal.js":
/*!*****************************************************!*\
  !*** ./src/components/PricingModal/PricingModal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/PricingModal/PricingModal.js";






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    width: 960
  },
  header: {
    maxWidth: 600,
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    maxWidth: 720,
    margin: '0 auto'
  },
  product: {
    overflow: 'unset',
    position: 'relative',
    padding: theme.spacing(5, 3),
    cursor: 'pointer',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  image: {
    borderRadius: theme.shape.borderRadius,
    position: 'absolute',
    top: -24,
    left: theme.spacing(3),
    height: 48,
    width: 48,
    fontSize: 24
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  options: {
    lineHeight: '26px'
  },
  recommended: {
    backgroundColor: theme.palette.primary.main,
    '& *': {
      color: "".concat(theme.palette.white, " !important")
    }
  },
  contact: {
    margin: theme.spacing(3, 0)
  },
  actions: {
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].grey[100],
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  startButton: {
    color: theme.palette.white,
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].green[600],
    '&:hover': {
      backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].green[900]
    }
  }
}));

const PricingModal = props => {
  const open = props.open,
        onClose = props.onClose,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["open", "onClose", "className"]);

  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Dialog"], {
    maxWidth: "lg",
    onClose: onClose,
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    align: "center",
    gutterBottom: true,
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "Start with Freelancer today. Boost up your services!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    align: "center",
    className: classes.subtitle,
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Welcome to the first platform created for freelancers and agencies for showcasing and finding the best clients in the market. 30% of our income goes into Whale Charity")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    md: 4,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
    className: classes.product,
    elevation: 1,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Product",
    className: classes.image,
    src: "/images/products/product_freelancer.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    component: "h3",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, "Freelancer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    component: "span",
    display: "inline",
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, "$5"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    component: "span",
    display: "inline",
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, "/month")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, "Max 1 user"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: classes.options,
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, "20"), " proposals/month ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, "10"), " templates ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }), "Analytics ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, "dashboard"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, "Email"), " alerts"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    md: 4,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.product, classes.recommended),
    elevation: 1,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Product",
    className: classes.image,
    src: "/images/products/product_agency--outlined.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    component: "h3",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, "Agency"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    component: "span",
    display: "inline",
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }, "$29"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    component: "span",
    display: "inline",
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, "/month")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }, "Max 3 user"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: classes.options,
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }, "20"), " proposals/month ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, "10"), " templates ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }), "Analytics ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, "dashboard"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, "Email"), " alerts"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    md: 4,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
    className: classes.product,
    elevation: 1,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Product",
    className: classes.image,
    src: "/images/products/product_enterprise.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    component: "h3",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }, "Enterprise"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    component: "span",
    display: "inline",
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }, "$259"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    component: "span",
    display: "inline",
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  }, "/month")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: undefined
  }, "Unlimited"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: classes.options,
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: undefined
  }, "All from above ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: undefined
  }, "Unlimited"), " 24/7 support ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: undefined
  }), "Personalised ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: undefined
  }, "Page"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: undefined
  }, "Advertise"), " your profile")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    align: "center",
    className: classes.contact,
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  }, "Have a larger team?", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    color: "secondary",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: undefined
  }, "Contact us"), ' ', "for information about more enterprise options.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: classes.startButton,
    onClick: onClose,
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: undefined
  }, "Start with freelancer"))));
};

PricingModal.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (PricingModal);

/***/ }),

/***/ "./src/components/PricingModal/index.js":
/*!**********************************************!*\
  !*** ./src/components/PricingModal/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PricingModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PricingModal */ "./src/components/PricingModal/PricingModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PricingModal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/ProjectCard/ProjectCard.js":
/*!***************************************************!*\
  !*** ./src/components/ProjectCard/ProjectCard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Share */ "./node_modules/@material-ui/icons/Share.js");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "./node_modules/@material-ui/icons/FavoriteBorder.js");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var utils_getInitials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/getInitials */ "./src/utils/getInitials.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components */ "./src/components/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/ProjectCard/ProjectCard.js";












const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  root: {},
  header: {
    paddingBottom: 0
  },
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  description: {
    padding: theme.spacing(2, 3, 1, 3)
  },
  tags: {
    padding: theme.spacing(0, 3, 1, 3),
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  learnMoreButton: {
    marginLeft: theme.spacing(2)
  },
  likedButton: {
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["colors"].red[600]
  },
  shareButton: {
    marginLeft: theme.spacing(1)
  },
  details: {
    padding: theme.spacing(1, 3)
  }
}));

const ProjectCard = props => {
  const project = props.project,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["project", "className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(project.liked),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        liked = _useState2[0],
        setLiked = _useState2[1];

  const handleLike = () => {
    setLiked(true);
  };

  const handleUnlike = () => {
    setLiked(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
    avatar: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
      alt: "Author",
      src: project.author.avatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    }, Object(utils_getInitials__WEBPACK_IMPORTED_MODULE_12__["default"])(project.author.name)),
    className: classes.header,
    disableTypography: true,
    subheader: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
      variant: "body2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }, "by", ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      color: "textPrimary",
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
      to: "/profile/1/timeline",
      variant: "h6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: undefined
    }, project.author.name), ' ', "| Updated: ", moment__WEBPACK_IMPORTED_MODULE_6___default()(project.updated_at).fromNow()),
    title: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      color: "textPrimary",
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
      to: "/projects/1/overview",
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: undefined
    }, project.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    colo: "textSecondary",
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "We're looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through softare.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.tags,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, project.tags.map(tag => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_13__["Label"], {
    color: tag.color,
    key: tag.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, tag.text))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    alignItems: "center",
    container: true,
    justify: "space-between",
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, "$", project.price), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, "Per Project")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, project.location), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, "Location")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, project.type), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, "Type")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, liked ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    title: "Unlike",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
    className: classes.likedButton,
    onClick: handleUnlike,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    title: "Like",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
    className: classes.likeButton,
    onClick: handleLike,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    title: "Share",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
    className: classes.shareButton,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    className: classes.learnMoreButton,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    size: "small",
    to: "/projects/1/overview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, "Learn more"))))));
};

ProjectCard.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  project: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

/***/ }),

/***/ "./src/components/ProjectCard/index.js":
/*!*********************************************!*\
  !*** ./src/components/ProjectCard/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectCard */ "./src/components/ProjectCard/ProjectCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ProjectCard__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/ReviewStars/ReviewStars.js":
/*!***************************************************!*\
  !*** ./src/components/ReviewStars/ReviewStars.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Star */ "./node_modules/@material-ui/icons/Star.js");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "./node_modules/@material-ui/icons/StarBorder.js");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/ReviewStars/ReviewStars.js";








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center'
  },
  starIcon: {
    fontSize: 18,
    height: 18,
    width: 18
  },
  starFilledIcon: {
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].amber[400]
  },
  starBorderIcon: {
    color: theme.palette.icon
  }
}));

const ReviewStars = props => {
  const value = props.value,
        starCount = props.starCount,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["value", "starCount", "className"]);

  const classes = useStyles();
  const starNodes = [];

  for (let i = 1; i <= starCount; i++) {
    const key = uuid_v1__WEBPACK_IMPORTED_MODULE_4___default()();
    const starNode = i <= value ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.starIcon, classes.starFilledIcon),
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.starIcon, classes.starBorderIcon),
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    });
    starNodes.push(starNode);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), starNodes);
};

ReviewStars.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  starCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
ReviewStars.defaultProps = {
  value: 0,
  starCount: 5
};
/* harmony default export */ __webpack_exports__["default"] = (ReviewStars);

/***/ }),

/***/ "./src/components/ReviewStars/index.js":
/*!*********************************************!*\
  !*** ./src/components/ReviewStars/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReviewStars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReviewStars */ "./src/components/ReviewStars/ReviewStars.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ReviewStars__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/RichEditor/RichEditor.js":
/*!*************************************************!*\
  !*** ./src/components/RichEditor/RichEditor.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "./src/components/RichEditor/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./src/components/RichEditor/utils/index.js");



var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/RichEditor/RichEditor.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  root: {},
  editorContainer: {
    padding: theme.spacing(2),
    minHeight: 400,
    '& .public-DraftEditorPlaceholder-root': _objectSpread({}, theme.typography.body2),
    '& .public-DraftEditorPlaceholder-hasFocus': {
      display: 'none'
    },
    '& .public-DraftEditor-content': {
      '& p': _objectSpread({}, theme.typography.body1),
      '& h1': _objectSpread({}, theme.typography.h1),
      '& h2': _objectSpread({}, theme.typography.h2),
      '& h3': _objectSpread({}, theme.typography.h3),
      '& h4': _objectSpread({}, theme.typography.h4),
      '& h5': _objectSpread({}, theme.typography.h5),
      '& h6': _objectSpread({}, theme.typography.h6),
      '& blockquote': _objectSpread({}, theme.typography.subtitle1),
      '& ul': _objectSpread({}, theme.typography.body1, {
        marginLeft: theme.spacing(4)
      }),
      '& ol': _objectSpread({}, theme.typography.body1, {
        marginLeft: theme.spacing(4)
      }),
      '& pre': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2
      }
    }
  },
  textAlignLeft: {
    textAlign: 'left'
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  textAlignRight: {
    textAlign: 'right'
  },
  textAlignJustify: {
    textAlign: 'justify'
  }
}));

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const RichEditor = props => {
  const placeholder = props.placeholder,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["placeholder", "className"]);

  const classes = useStyles();
  const editorRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(draft_js__WEBPACK_IMPORTED_MODULE_6__["EditorState"].createEmpty()),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        editorState = _useState2[0],
        setEditorState = _useState2[1];

  const handleContainerClick = () => {
    editorRef.current.focus();
  };

  const handleToolbarToggle = (type, value) => {
    if (type === 'blockType') {
      if (['left', 'center', 'right', 'justify'].includes(value)) {
        const newContentState = draft_js__WEBPACK_IMPORTED_MODULE_6__["Modifier"].setBlockData(editorState.getCurrentContent(), editorState.getSelection(), {
          'text-align': value
        });
        const newEditorState = draft_js__WEBPACK_IMPORTED_MODULE_6__["EditorState"].push(editorState, newContentState, 'change-block-data');
        setEditorState(newEditorState);
        return;
      }

      setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_6__["RichUtils"].toggleBlockType(editorState, value));
    } else {
      setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_6__["RichUtils"].toggleInlineStyle(editorState, value));
    }
  };

  const handleEditorChange = editorState => {
    setEditorState(editorState);
  };

  const handleKeyCommand = (command, editorState) => {
    const newState = draft_js__WEBPACK_IMPORTED_MODULE_6__["RichUtils"].handleKeyCommand(editorState, command);

    if (newState) {
      handleEditorChange(newState);
      return true;
    }

    return false;
  };

  const mapKeyToEditorCommand = event => {
    if (event.keyCode === 9) {
      const newEditorState = draft_js__WEBPACK_IMPORTED_MODULE_6__["RichUtils"].onTab(event, editorState, 4);

      if (newEditorState !== editorState) {
        handleEditorChange(newEditorState);
      }

      return;
    }

    return Object(draft_js__WEBPACK_IMPORTED_MODULE_6__["getDefaultKeyBinding"])(event);
  };

  function blockStyleFn(contentBlock) {
    const textAlign = contentBlock.getData().get('text-align');

    if (textAlign) {
      const className = "textAlign".concat(capitalize(textAlign));
      return classes[className];
    }

    return '';
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Paper"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["EditorToolbar"], {
    editorState: editorState,
    onToggle: handleToolbarToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.editorContainer,
    onClick: handleContainerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_6__["Editor"], {
    blockRenderMap: _utils__WEBPACK_IMPORTED_MODULE_10__["blockRenderMap"],
    blockStyleFn: blockStyleFn,
    editorState: editorState,
    handleKeyCommand: handleKeyCommand,
    keyBindingFn: mapKeyToEditorCommand,
    onChange: handleEditorChange,
    placeholder: placeholder,
    ref: editorRef,
    spellCheck: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  })));
};

RichEditor.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (RichEditor);

/***/ }),

/***/ "./src/components/RichEditor/components/EditorToolbar/EditorToolbar.js":
/*!*****************************************************************************!*\
  !*** ./src/components/RichEditor/components/EditorToolbar/EditorToolbar.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Code */ "./node_modules/@material-ui/icons/Code.js");
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/FormatListBulleted */ "./node_modules/@material-ui/icons/FormatListBulleted.js");
/* harmony import */ var _material_ui_icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/FormatListNumbered */ "./node_modules/@material-ui/icons/FormatListNumbered.js");
/* harmony import */ var _material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_FormatItalic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/FormatItalic */ "./node_modules/@material-ui/icons/FormatItalic.js");
/* harmony import */ var _material_ui_icons_FormatItalic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatItalic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_FormatBold__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/FormatBold */ "./node_modules/@material-ui/icons/FormatBold.js");
/* harmony import */ var _material_ui_icons_FormatBold__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatBold__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_FormatUnderlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/FormatUnderlined */ "./node_modules/@material-ui/icons/FormatUnderlined.js");
/* harmony import */ var _material_ui_icons_FormatUnderlined__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatUnderlined__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_FormatQuote__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/FormatQuote */ "./node_modules/@material-ui/icons/FormatQuote.js");
/* harmony import */ var _material_ui_icons_FormatQuote__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatQuote__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/FormatAlignLeft */ "./node_modules/@material-ui/icons/FormatAlignLeft.js");
/* harmony import */ var _material_ui_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/FormatAlignCenter */ "./node_modules/@material-ui/icons/FormatAlignCenter.js");
/* harmony import */ var _material_ui_icons_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_FormatAlignRight__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/FormatAlignRight */ "./node_modules/@material-ui/icons/FormatAlignRight.js");
/* harmony import */ var _material_ui_icons_FormatAlignRight__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatAlignRight__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/FormatAlignJustify */ "./node_modules/@material-ui/icons/FormatAlignJustify.js");
/* harmony import */ var _material_ui_icons_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_18__);

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/RichEditor/components/EditorToolbar/EditorToolbar.js";

/* eslint-disable react/no-multi-comp */


















const useStyles1 = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {},
  inner: {
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  }
}));
const useStyles2 = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  button: {
    padding: 0,
    width: 32,
    height: 32,
    minWidth: 32,
    color: theme.palette.icon,
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  },
  activeButton: {
    backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main
  }
}));
const BLOCK_TYPES = [{
  blockType: 'header-one',
  tooltip: 'Heading 1',
  text: 'H1'
}, {
  blockType: 'header-two',
  tooltip: 'Heading 2',
  text: 'H2'
}, {
  blockType: 'header-three',
  tooltip: 'Heading 3',
  text: 'H3'
}, {
  blockType: 'header-four',
  tooltip: 'Heading 4',
  text: 'H4'
}, {
  blockType: 'header-five',
  tooltip: 'Heading 5',
  text: 'H5'
}, {
  blockType: 'header-six',
  tooltip: 'Heading 6',
  text: 'H6'
}, {
  blockType: 'blockquote',
  tooltip: 'Blockquote',
  icon: _material_ui_icons_FormatQuote__WEBPACK_IMPORTED_MODULE_14___default.a
}, {
  blockType: 'unordered-list-item',
  tooltip: 'Unordered list',
  icon: _material_ui_icons_FormatListBulleted__WEBPACK_IMPORTED_MODULE_9___default.a
}, {
  blockType: 'ordered-list-item',
  tooltip: 'Ordered list',
  icon: _material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_10___default.a
}, {
  blockType: 'code-block',
  tooltip: 'Code Block',
  icon: _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_8___default.a
}, {
  blockType: 'left',
  tooltip: 'Align left',
  icon: _material_ui_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_15___default.a
}, {
  blockType: 'center',
  tooltip: 'Align center',
  icon: _material_ui_icons_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_16___default.a
}, {
  blockType: 'right',
  tooltip: 'Align right',
  icon: _material_ui_icons_FormatAlignRight__WEBPACK_IMPORTED_MODULE_17___default.a
}, {
  blockType: 'justify',
  tooltip: 'Justify',
  icon: _material_ui_icons_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_18___default.a
}];
const INLINE_STYLES = [{
  inlineStyle: 'BOLD',
  tooltip: 'Bold',
  icon: _material_ui_icons_FormatBold__WEBPACK_IMPORTED_MODULE_12___default.a
}, {
  inlineStyle: 'ITALIC',
  tooltip: 'Italic',
  icon: _material_ui_icons_FormatItalic__WEBPACK_IMPORTED_MODULE_11___default.a
}, {
  inlineStyle: 'UNDERLINE',
  tooltip: 'Underline',
  icon: _material_ui_icons_FormatUnderlined__WEBPACK_IMPORTED_MODULE_13___default.a
}, {
  inlineStyle: 'CODE',
  tooltip: 'Monospace',
  icon: _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_8___default.a
}];

const ButtonBase = props => {
  const active = props.active,
        tooltip = props.tooltip,
        children = props.children,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["active", "tooltip", "children"]);

  const classes = useStyles2();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
    title: tooltip,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.button, {
      [classes.activeButton]: active
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }), children));
};

ButtonBase.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

const BlockTypeButtons = props => {
  const editorState = props.editorState,
        onToggle = props.onToggle;

  const handleClick = (event, blockType) => {
    event.preventDefault();
    onToggle('blockType', blockType);
  };

  const selection = editorState.getSelection();
  const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  const blockData = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getData();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, BLOCK_TYPES.map(button => {
    let active = false;

    if (['left', 'center', 'right', 'justify'].includes(button.blockType)) {
      active = blockData.get('text-align') === button.blockType;
    } else {
      active = button.blockType === blockType;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonBase, {
      active: active,
      key: button.blockType,
      onClick: event => handleClick(event, button.blockType),
      tooltip: button.tooltip,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: undefined
    }, button.icon ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(button.icon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: undefined
    }) : button.text);
  }));
};

BlockTypeButtons.propTypes = {
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

const InlineStyleButtons = props => {
  const editorState = props.editorState,
        onToggle = props.onToggle;

  const handleClick = (event, inlineStyle) => {
    event.preventDefault();
    onToggle('inlineStyle', inlineStyle);
  };

  const currentStyle = editorState.getCurrentInlineStyle();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: undefined
  }, INLINE_STYLES.map(button => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonBase, {
    active: currentStyle.has(button.inlineStyle),
    key: button.inlineStyle,
    onClick: event => handleClick(event, button.inlineStyle),
    tooltip: button.tooltip,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }, button.icon ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(button.icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }) : button.text)));
};

InlineStyleButtons.propTypes = {
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

const EditorToolbar = props => {
  const editorState = props.editorState,
        onToggle = props.onToggle,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["editorState", "onToggle", "className"]);

  const classes = useStyles1();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlockTypeButtons, {
    editorState: editorState,
    onToggle: onToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InlineStyleButtons, {
    editorState: editorState,
    onToggle: onToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  }))));
};

EditorToolbar.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (EditorToolbar);

/***/ }),

/***/ "./src/components/RichEditor/components/EditorToolbar/index.js":
/*!*********************************************************************!*\
  !*** ./src/components/RichEditor/components/EditorToolbar/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditorToolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorToolbar */ "./src/components/RichEditor/components/EditorToolbar/EditorToolbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _EditorToolbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/RichEditor/components/index.js":
/*!*******************************************************!*\
  !*** ./src/components/RichEditor/components/index.js ***!
  \*******************************************************/
/*! exports provided: EditorToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditorToolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorToolbar */ "./src/components/RichEditor/components/EditorToolbar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorToolbar", function() { return _EditorToolbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/RichEditor/index.js":
/*!********************************************!*\
  !*** ./src/components/RichEditor/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RichEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RichEditor */ "./src/components/RichEditor/RichEditor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _RichEditor__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/RichEditor/utils/block.js":
/*!**************************************************!*\
  !*** ./src/components/RichEditor/utils/block.js ***!
  \**************************************************/
/*! exports provided: setBlockData, blockRenderMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBlockData", function() { return setBlockData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockRenderMap", function() { return blockRenderMap; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_1__);


function setBlockData(editorState, data) {
  const newContentState = draft_js__WEBPACK_IMPORTED_MODULE_1__["Modifier"].setBlockData(editorState.getCurrentContent(), editorState.getSelection(), data);
  return draft_js__WEBPACK_IMPORTED_MODULE_1__["EditorState"].push(editorState, newContentState, 'change-block-data');
}
const newBlockRenderMap = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])({
  unstyled: {
    element: 'p'
  },
  paragraph: {
    element: 'p'
  }
}); // TODO:
// 1. DraftJS uses 'div' tags inside every block.
//    When we use 'p' tag for paragraphs, we get a warning because "div" tag cannot be inside a "p" tag.

const blockRenderMap = draft_js__WEBPACK_IMPORTED_MODULE_1__["DefaultDraftBlockRenderMap"].merge(newBlockRenderMap);

/***/ }),

/***/ "./src/components/RichEditor/utils/index.js":
/*!**************************************************!*\
  !*** ./src/components/RichEditor/utils/index.js ***!
  \**************************************************/
/*! exports provided: setBlockData, blockRenderMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/components/RichEditor/utils/block.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBlockData", function() { return _block__WEBPACK_IMPORTED_MODULE_0__["setBlockData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockRenderMap", function() { return _block__WEBPACK_IMPORTED_MODULE_0__["blockRenderMap"]; });




/***/ }),

/***/ "./src/components/ScrollReset/ScrollReset.js":
/*!***************************************************!*\
  !*** ./src/components/ScrollReset/ScrollReset.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_useRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/useRouter */ "./src/utils/useRouter.js");



const ScrollReset = () => {
  const router = Object(utils_useRouter__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.scrollTo(0, 0);
  }, [router.location.pathname]);
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (ScrollReset);

/***/ }),

/***/ "./src/components/ScrollReset/index.js":
/*!*********************************************!*\
  !*** ./src/components/ScrollReset/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScrollReset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollReset */ "./src/components/ScrollReset/ScrollReset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ScrollReset__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/SearchBar/SearchBar.js":
/*!***********************************************!*\
  !*** ./src/components/SearchBar/SearchBar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "./node_modules/@material-ui/icons/FilterList.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./src/components/SearchBar/components/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/SearchBar/SearchBar.js";







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  search: {
    flexGrow: 1,
    maxWidth: 480,
    flexBasis: 480
  },
  filterButton: {
    marginLeft: 'auto'
  },
  filterIcon: {
    marginRight: theme.spacing(1)
  }
}));

const SearchBar = props => {
  const onFilter = props.onFilter,
        onSearch = props.onSearch,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["onFilter", "onSearch", "className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        openFilter = _useState2[0],
        setOpenFilter = _useState2[1];

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["Search"], {
    className: classes.search,
    onSearch: onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: classes.filterButton,
    color: "primary",
    onClick: handleFilterOpen,
    size: "small",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.filterIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }), " Show filters")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["Filter"], {
    onClose: handleFilterClose,
    onFilter: onFilter,
    open: openFilter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }));
};

SearchBar.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  onFilter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onSearch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./src/components/SearchBar/components/Filter/Filter.js":
/*!**************************************************************!*\
  !*** ./src/components/SearchBar/components/Filter/Filter.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/DeleteOutlined */ "./node_modules/@material-ui/icons/DeleteOutlined.js");
/* harmony import */ var _material_ui_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_13__);



var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/SearchBar/components/Filter/Filter.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  drawer: {
    width: 420,
    maxWidth: '100%'
  },
  header: {
    padding: theme.spacing(2, 1),
    display: 'flex',
    justifyContent: 'space-between'
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  },
  content: {
    padding: theme.spacing(0, 3),
    flexGrow: 1
  },
  contentSection: {
    padding: theme.spacing(2, 0)
  },
  contentSectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer'
  },
  contentSectionContent: {},
  formGroup: {
    padding: theme.spacing(2, 0)
  },
  fieldGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  field: {
    marginTop: 0,
    marginBottom: 0
  },
  flexGrow: {
    flexGrow: 1
  },
  addButton: {
    marginLeft: theme.spacing(1)
  },
  tags: {
    marginTop: theme.spacing(1)
  },
  minAmount: {
    marginRight: theme.spacing(3)
  },
  maxAmount: {
    marginLeft: theme.spacing(3)
  },
  radioGroup: {},
  actions: {
    padding: theme.spacing(3),
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

const Filter = props => {
  const open = props.open,
        onClose = props.onClose,
        onFilter = props.onFilter,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["open", "onClose", "onFilter", "className"]);

  const classes = useStyles();
  const initialValues = {
    paymentStatus: '',
    tag: '',
    tags: ['Full-Time'],
    amount: [1, 7],
    projectStatus: 'ended',
    customerName: '',
    customerType: 'freelancer',
    customerEmail: '',
    customerPhone: '',
    customerAge: ''
  };

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        expandProject = _useState2[0],
        setExpandProject = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
        _useState4 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        expandCustomer = _useState4[0],
        setExpandCustomer = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_objectSpread({}, initialValues)),
        _useState6 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
        values = _useState6[0],
        setValues = _useState6[1];

  const handleClear = () => {
    setValues(_objectSpread({}, initialValues));
  };

  const handleFieldChange = (event, field, value) => {
    event.persist && event.persist();
    setValues(values => _objectSpread({}, values, {
      [field]: value
    }));
  };

  const handleTagAdd = () => {
    setValues(values => {
      const newValues = _objectSpread({}, values);

      if (newValues.tag && !newValues.tags.includes(newValues.tag)) {
        newValues.tags = [...newValues.tags];
        newValues.tags.push(newValues.tag);
      }

      newValues.tag = '';
      return newValues;
    });
  };

  const handleTagDelete = tag => {
    setValues(values => {
      const newValues = _objectSpread({}, values);

      newValues.tags = newValues.tags.filter(t => t !== tag);
      return newValues;
    });
  };

  const handleToggleProject = () => {
    setExpandProject(expandProject => !expandProject);
  };

  const handleToggleCustomer = () => {
    setExpandCustomer(expandCustomer => !expandCustomer);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onFilter && onFilter(values);
  };

  const paymentStatusOptions = ['Pending', 'Canceled', 'Completed', 'Rejected'];
  const customerAgeOption = ['18 - 30', '30 - 45', '50 - 60', '60+'];
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Drawer"], {
    anchor: "right",
    classes: {
      paper: classes.drawer
    },
    onClose: onClose,
    open: open,
    variant: "temporary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: onClose,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: classes.buttonIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }), "Close")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.contentSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.contentSectionHeader,
    onClick: handleToggleProject,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, "Project"), expandProject ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
    in: expandProject,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.contentSectionContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.formGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    className: classes.field,
    fullWidth: true,
    label: "Payment status",
    margin: "dense",
    name: "paymentStatus",
    onChange: event => handleFieldChange(event, 'paymentStatus', event.target.value),
    select: true // eslint-disable-next-line react/jsx-sort-props
    ,
    SelectProps: {
      native: true
    },
    value: values.paymentStatus,
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    disabled: true,
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }), paymentStatusOptions.map(option => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    key: option,
    value: option,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }, option)))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.formGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.fieldGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.field, classes.flexGrow),
    label: "Filter Tags",
    margin: "dense",
    name: "tag",
    onChange: event => handleFieldChange(event, 'tag', event.target.value),
    value: values.tag,
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    className: classes.addButton,
    onClick: handleTagAdd,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: classes.addIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: undefined
  }), "Add")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.tags,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  }, values.tags.map(tag => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Chip"], {
    deleteIcon: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: undefined
    }),
    key: tag,
    label: tag,
    onDelete: () => handleTagDelete(tag),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.formGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    component: "p",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }, "Project amount"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.fieldGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    className: classes.minAmount,
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  }, "$", values.amount[0], "K"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Slider"], {
    className: classes.flexGrow,
    max: 20,
    min: 1,
    onChange: (event, value) => handleFieldChange(event, 'amount', value),
    value: values.amount,
    valueLabelDisplay: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    className: classes.maxAmount,
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: undefined
  }, "$", values.amount[1], "K"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.formGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    component: "p",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: undefined
  }, "Project status"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.fieldGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["RadioGroup"], {
    className: classes.radioGroup,
    name: "projectStatus",
    onChange: event => handleFieldChange(event, 'projectStatus', event.target.value),
    value: values.projectStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControlLabel"], {
    control: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Radio"], {
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: undefined
    }),
    label: "Ended",
    value: "ended",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControlLabel"], {
    control: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Radio"], {
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327
      },
      __self: undefined
    }),
    label: "On-Going",
    value: "onGoing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControlLabel"], {
    control: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Radio"], {
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: undefined
    }),
    label: "In Review",
    value: "inReview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControlLabel"], {
    control: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Radio"], {
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: undefined
    }),
    label: "Competed",
    value: "completed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: undefined
  }))))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.contentSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.contentSectionHeader,
    onClick: handleToggleCustomer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: undefined
  }, "Customer"), expandCustomer ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
    in: expandCustomer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.contentSectionContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.contentSectionContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.formGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    className: classes.field,
    fullWidth: true,
    label: "Customer name",
    margin: "dense",
    name: "customerName",
    onChange: event => handleFieldChange(event, 'customerName', event.target.value),
    value: values.customerName,
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.formGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_8__["ToggleButtonGroup"], {
    exclusive: true,
    onChange: (event, value) => value && handleFieldChange(event, 'customerType', value),
    size: "small",
    value: values.customerType,
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_8__["ToggleButton"], {
    color: "primary",
    value: "projectOwner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: undefined
  }, "Project owner"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_8__["ToggleButton"], {
    value: "freelancer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: undefined
  }, "Freelancer"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.formGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    className: classes.field,
    fullWidth: true,
    label: "Email address",
    margin: "dense",
    name: "customerEmail",
    onChange: event => handleFieldChange(event, 'customerEmail', event.target.value),
    value: values.customerEmail,
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.formGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    className: classes.field,
    fullWidth: true,
    label: "Phone number",
    margin: "dense",
    name: "customerPhone",
    onChange: event => handleFieldChange(event, 'customerPhone', event.target.value),
    value: values.customerPhone,
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.formGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    className: classes.field,
    fullWidth: true,
    label: "Age",
    margin: "dense",
    name: "customerAge",
    onChange: event => handleFieldChange(event, 'customerAge', event.target.value),
    select: true // eslint-disable-next-line react/jsx-sort-props
    ,
    SelectProps: {
      native: true
    },
    value: values.customerAge,
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    disabled: true,
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: undefined
  }), customerAgeOption.map(option => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    key: option,
    value: option,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: undefined
  }, option))))))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    fullWidth: true,
    onClick: handleClear,
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classes.buttonIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: undefined
  }), "Clear"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    color: "primary",
    fullWidth: true,
    type: "submit",
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: undefined
  }, "Apply filters"))));
};

Filter.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onFilter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./src/components/SearchBar/components/Filter/index.js":
/*!*************************************************************!*\
  !*** ./src/components/SearchBar/components/Filter/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./src/components/SearchBar/components/Filter/Filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Filter__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/SearchBar/components/Search/Search.js":
/*!**************************************************************!*\
  !*** ./src/components/SearchBar/components/Search/Search.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/SearchBar/components/Search/Search.js";






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  search: {
    flexGrow: 1,
    height: 42,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.icon
  },
  searchInput: {
    flexGrow: 1
  },
  searchButton: {
    marginLeft: theme.spacing(2)
  }
}));

const Search = props => {
  const onSearch = props.onSearch,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["onSearch", "className"]);

  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.search,
    elevation: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.searchIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    className: classes.searchInput,
    disableUnderline: true,
    placeholder: "Search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    className: classes.searchButton,
    onClick: onSearch,
    size: "large",
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Search"));
};

Search.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onSearch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/components/SearchBar/components/Search/index.js":
/*!*************************************************************!*\
  !*** ./src/components/SearchBar/components/Search/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search */ "./src/components/SearchBar/components/Search/Search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Search__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/SearchBar/components/index.js":
/*!******************************************************!*\
  !*** ./src/components/SearchBar/components/index.js ***!
  \******************************************************/
/*! exports provided: Filter, Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./src/components/SearchBar/components/Filter/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _Filter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search */ "./src/components/SearchBar/components/Search/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/components/SearchBar/index.js":
/*!*******************************************!*\
  !*** ./src/components/SearchBar/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBar */ "./src/components/SearchBar/SearchBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SearchBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/StackAvatars/StackAvatars.js":
/*!*****************************************************!*\
  !*** ./src/components/StackAvatars/StackAvatars.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/StackAvatars/StackAvatars.js";






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    paddingLeft: 20
  },
  avatar: {
    border: "3px solid ".concat(theme.palette.white),
    marginLeft: -20,
    '&:hover': {
      zIndex: 2
    }
  },
  more: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    fontSize: 14,
    fontWeight: theme.typography.fontWeightMedium
  }
}));

const StackAvatars = props => {
  const avatars = props.avatars,
        limit = props.limit,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["avatars", "limit", "className"]);

  const classes = useStyles();
  const avatarNodes = avatars.slice(0, limit).map(item => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
    key: uuid_v1__WEBPACK_IMPORTED_MODULE_4___default()(),
    title: "View",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
    className: classes.avatar,
    src: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })));

  if (avatars.length > limit) {
    avatarNodes.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
      key: uuid_v1__WEBPACK_IMPORTED_MODULE_4___default()(),
      title: "View",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.avatar, classes.more),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, "+", avatars.length - limit)));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), avatarNodes);
};

StackAvatars.propTypes = {
  avatars: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
StackAvatars.defaultProps = {
  limit: 3
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(StackAvatars));

/***/ }),

/***/ "./src/components/StackAvatars/index.js":
/*!**********************************************!*\
  !*** ./src/components/StackAvatars/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StackAvatars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StackAvatars */ "./src/components/StackAvatars/StackAvatars.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _StackAvatars__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/StatusBullet/StatusBullet.js":
/*!*****************************************************!*\
  !*** ./src/components/StatusBullet/StatusBullet.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/StatusBullet/StatusBullet.js";





const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    display: 'inline-block',
    borderRadius: '50%',
    flexGrow: 0,
    flexShrink: 0
  },
  small: {
    height: theme.spacing(1),
    width: theme.spacing(1)
  },
  medium: {
    height: theme.spacing(2),
    width: theme.spacing(2)
  },
  large: {
    height: theme.spacing(3),
    width: theme.spacing(3)
  },
  default: {
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["colors"].grey[50]
  },
  primary: {
    backgroundColor: theme.palette.primary.main
  },
  info: {
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["colors"].lightBlue[600]
  },
  warning: {
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["colors"].orange[900]
  },
  error: {
    backgroundColor: theme.palette.error.main
  },
  success: {
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["colors"].green[600]
  }
}));

const StatusBullet = props => {
  const className = props.className,
        size = props.size,
        color = props.color,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className", "size", "color"]);

  const classes = useStyles();
  const rootClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])({
    [classes.root]: true,
    [classes[size]]: size,
    [classes[color]]: color
  }, className);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", Object.assign({}, rest, {
    className: rootClassName //
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }));
};

StatusBullet.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['default', 'primary', 'info', 'success', 'warning', 'error']),
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['small', 'medium', 'large'])
};
StatusBullet.defaultProps = {
  size: 'medium',
  color: 'default'
};
/* harmony default export */ __webpack_exports__["default"] = (StatusBullet);

/***/ }),

/***/ "./src/components/StatusBullet/index.js":
/*!**********************************************!*\
  !*** ./src/components/StatusBullet/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatusBullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatusBullet */ "./src/components/StatusBullet/StatusBullet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _StatusBullet__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/TableEditBar/TableEditBar.js":
/*!*****************************************************!*\
  !*** ./src/components/TableEditBar/TableEditBar.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/DeleteOutline */ "./node_modules/@material-ui/icons/DeleteOutline.js");
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/components/TableEditBar/TableEditBar.js";








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

const TableEditBar = props => {
  const selected = props.selected,
        className = props.className,
        onMarkPaid = props.onMarkPaid,
        onMarkUnpaid = props.onMarkUnpaid,
        onDelete = props.onDelete,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["selected", "className", "onMarkPaid", "onMarkUnpaid", "onDelete"]);

  const classes = useStyles();
  const open = selected.length > 0;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Drawer"], {
    anchor: "bottom",
    open: open // eslint-disable-next-line react/jsx-sort-props
    ,
    PaperProps: {
      elevation: 1
    },
    variant: "persistent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    alignItems: "center",
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Hidden"], {
    smDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    md: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    color: "textSecondary",
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, selected.length, " selected"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: onMarkPaid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.buttonIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), "Mark Paid"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: onMarkUnpaid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.buttonIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), "Mark Unpaid"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: onDelete,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.buttonIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }), "Delete"))))));
};

TableEditBar.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onMarkPaid: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onMarkUnpaid: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TableEditBar);

/***/ }),

/***/ "./src/components/TableEditBar/index.js":
/*!**********************************************!*\
  !*** ./src/components/TableEditBar/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableEditBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableEditBar */ "./src/components/TableEditBar/TableEditBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TableEditBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: AddPost, Alert, AuthGuard, CodeBlock, CookiesNotification, FilesDropzone, GenericMoreButton, GoogleAnalytics, Label, Markdown, Navigation, NotificationsPopover, Page, Paginate, PostCard, PricingModal, ProjectCard, ReviewStars, RichEditor, ScrollReset, SearchBar, StackAvatars, StatusBullet, TableEditBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPost */ "./src/components/AddPost/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddPost", function() { return _AddPost__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert */ "./src/components/Alert/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _Alert__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _AuthGuard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthGuard */ "./src/components/AuthGuard/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _AuthGuard__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CodeBlock */ "./src/components/CodeBlock/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeBlock", function() { return _CodeBlock__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _CookiesNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CookiesNotification */ "./src/components/CookiesNotification/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookiesNotification", function() { return _CookiesNotification__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _FilesDropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FilesDropzone */ "./src/components/FilesDropzone/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesDropzone", function() { return _FilesDropzone__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _GenericMoreButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GenericMoreButton */ "./src/components/GenericMoreButton/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenericMoreButton", function() { return _GenericMoreButton__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _GoogleAnalytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GoogleAnalytics */ "./src/components/GoogleAnalytics/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalytics", function() { return _GoogleAnalytics__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Label */ "./src/components/Label/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Markdown */ "./src/components/Markdown/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Markdown", function() { return _Markdown__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Navigation */ "./src/components/Navigation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _Navigation__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _NotificationsPopover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NotificationsPopover */ "./src/components/NotificationsPopover/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationsPopover", function() { return _NotificationsPopover__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Page */ "./src/components/Page/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _Page__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _Paginate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Paginate */ "./src/components/Paginate/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paginate", function() { return _Paginate__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PostCard */ "./src/components/PostCard/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostCard", function() { return _PostCard__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _PricingModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PricingModal */ "./src/components/PricingModal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PricingModal", function() { return _PricingModal__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ProjectCard */ "./src/components/ProjectCard/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectCard", function() { return _ProjectCard__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _ReviewStars__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ReviewStars */ "./src/components/ReviewStars/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewStars", function() { return _ReviewStars__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _RichEditor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./RichEditor */ "./src/components/RichEditor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichEditor", function() { return _RichEditor__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _ScrollReset__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ScrollReset */ "./src/components/ScrollReset/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollReset", function() { return _ScrollReset__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SearchBar */ "./src/components/SearchBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBar", function() { return _SearchBar__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _StackAvatars__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./StackAvatars */ "./src/components/StackAvatars/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StackAvatars", function() { return _StackAvatars__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _StatusBullet__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./StatusBullet */ "./src/components/StatusBullet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusBullet", function() { return _StatusBullet__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _TableEditBar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./TableEditBar */ "./src/components/TableEditBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableEditBar", function() { return _TableEditBar__WEBPACK_IMPORTED_MODULE_23__["default"]; });


























/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/layouts/Auth/Auth.js":
/*!**********************************!*\
  !*** ./src/layouts/Auth/Auth.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/layouts/Auth/components/index.js");
var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/layouts/Auth/Auth.js";






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  content: {
    height: '100%',
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  }
}));

const Auth = props => {
  const route = props.route;
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Topbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["LinearProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["renderRoutes"])(route.routes))));
};

Auth.propTypes = {
  route: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./src/layouts/Auth/components/Topbar/Topbar.js":
/*!******************************************************!*\
  !*** ./src/layouts/Auth/components/Topbar/Topbar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/layouts/Auth/components/Topbar/Topbar.js";






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(() => ({
  root: {
    boxShadow: 'none'
  }
}));

const Topbar = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["AppBar"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Logo" //src="/images/logos/logo--white.svg"
    ,
    src: "/images/logos/travelsafelogo.png",
    height: "40px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }))));
};

Topbar.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Topbar);

/***/ }),

/***/ "./src/layouts/Auth/components/Topbar/index.js":
/*!*****************************************************!*\
  !*** ./src/layouts/Auth/components/Topbar/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topbar */ "./src/layouts/Auth/components/Topbar/Topbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Topbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/Auth/components/index.js":
/*!**********************************************!*\
  !*** ./src/layouts/Auth/components/index.js ***!
  \**********************************************/
/*! exports provided: Topbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topbar */ "./src/layouts/Auth/components/Topbar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Topbar", function() { return _Topbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/Auth/index.js":
/*!***********************************!*\
  !*** ./src/layouts/Auth/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth */ "./src/layouts/Auth/Auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Auth__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/Dashboard/Dashboard.js":
/*!********************************************!*\
  !*** ./src/layouts/Dashboard/Dashboard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/layouts/Dashboard/components/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/layouts/Dashboard/Dashboard.js";






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(() => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  topBar: {
    zIndex: 2,
    position: 'relative'
  },
  container: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  navBar: {
    zIndex: 3,
    width: 256,
    minWidth: 256,
    flex: '0 0 auto'
  },
  content: {
    overflowY: 'auto',
    flex: '1 1 auto'
  }
}));

const Dashboard = props => {
  const route = props.route;
  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        openNavBarMobile = _useState2[0],
        setOpenNavBarMobile = _useState2[1];

  const handleNavBarMobileOpen = () => {
    setOpenNavBarMobile(true);
  };

  const handleNavBarMobileClose = () => {
    setOpenNavBarMobile(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["TopBar"], {
    className: classes.topBar,
    onOpenNavBarMobile: handleNavBarMobileOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["NavBar"], {
    className: classes.navBar,
    onMobileClose: handleNavBarMobileClose,
    openMobile: openNavBarMobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["LinearProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__["renderRoutes"])(route.routes)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["ChatBar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }));
};

Dashboard.propTypes = {
  route: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/layouts/Dashboard/components/ChatBar/ChatBar.js":
/*!*************************************************************!*\
  !*** ./src/layouts/Dashboard/components/ChatBar/ChatBar.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_PeopleOutline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/PeopleOutline */ "./node_modules/@material-ui/icons/PeopleOutline.js");
/* harmony import */ var _material_ui_icons_PeopleOutline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PeopleOutline__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/axios */ "./src/utils/axios.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components */ "./src/components/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/layouts/Dashboard/components/ChatBar/ChatBar.js";










const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  drawer: {
    width: 280
  },
  root: {
    backgroundColor: theme.palette.white
  },
  list: {
    padding: theme.spacing(1, 3)
  },
  listItemText: {
    marginRight: theme.spacing(1)
  },
  lastActivity: {
    whiteSpace: 'nowrap'
  },
  fab: {
    position: 'fixed',
    bottom: 32,
    right: 32,
    zIndex: theme.zIndex.drawer - 100
  }
}));

const ChatBar = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        open = _useState2[0],
        setOpen = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
        _useState4 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        data = _useState4[0],
        setData = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let mounted = true;

    const fetchData = () => {
      utils_axios__WEBPACK_IMPORTED_MODULE_10__["default"].get('/api/chat/activity').then(response => {
        if (mounted) {
          setData(response.data);
        }
      });
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!data) {
    return null;
  }

  const onlineConnections = data.connections.filter(connection => connection.active).length;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Drawer"], {
    anchor: "right",
    classes: {
      paper: classes.drawer
    },
    elevation: 1,
    onClose: handleClose,
    open: open,
    variant: "temporary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }), data.groups.map(group => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["List"], {
    className: classes.list,
    key: group.id,
    subheader: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListSubheader"], {
      disableGutters: true,
      disableSticky: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: undefined
    }, group.name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, data.connections.filter(connection => group.id === connection.group).map(connection => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    disableGutters: true,
    key: connection.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItemAvatar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
    alt: "Person",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    src: connection.avatar,
    to: "/profile/1/timeline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItemText"], {
    className: classes.listItemText,
    disableTypography: true,
    primary: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
      display: "block",
      noWrap: true,
      to: "/profile/1/timeline",
      variant: "h6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: undefined
    }, connection.name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }), connection.active ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_11__["StatusBullet"], {
    color: "success",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    className: classes.lastActivity,
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, moment__WEBPACK_IMPORTED_MODULE_5___default()(connection.lastActivity).fromNow()))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.fab, {
      [classes.shiftFab]: open
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Badge"], {
    badgeContent: onlineConnections,
    color: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Fab"], {
    color: "primary",
    onClick: handleOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_PeopleOutline__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  })))));
};

ChatBar.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ChatBar);

/***/ }),

/***/ "./src/layouts/Dashboard/components/ChatBar/index.js":
/*!***********************************************************!*\
  !*** ./src/layouts/Dashboard/components/ChatBar/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatBar */ "./src/layouts/Dashboard/components/ChatBar/ChatBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ChatBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/Dashboard/components/NavBar/NavBar.js":
/*!***********************************************************!*\
  !*** ./src/layouts/Dashboard/components/NavBar/NavBar.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var utils_useRouter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/useRouter */ "./src/utils/useRouter.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components */ "./src/components/index.js");
/* harmony import */ var _navigationConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigationConfig */ "./src/layouts/Dashboard/components/NavBar/navigationConfig.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/layouts/Dashboard/components/NavBar/NavBar.js";











const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    overflowY: 'auto'
  },
  content: {
    padding: theme.spacing(2)
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(2)
  },
  navigation: {
    marginTop: theme.spacing(2)
  }
}));

const NavBar = props => {
  const openMobile = props.openMobile,
        onMobileClose = props.onMobileClose,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["openMobile", "onMobileClose", "className"]);

  const classes = useStyles();
  const router = Object(utils_useRouter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const session = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.session);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (openMobile) {
      onMobileClose && onMobileClose();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [router.location.pathname]);
  const navbarContent = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.profile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Avatar"], {
    alt: "Person",
    className: classes.avatar,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    src: session.user.avatar,
    to: "/profile/1/timeline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    className: classes.name,
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, session.user.first_name, " ", session.user.last_name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, session.user.bio)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: classes.navigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, _navigationConfig__WEBPACK_IMPORTED_MODULE_10__["default"].map(list => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_9__["Navigation"], {
    component: "div",
    key: list.title,
    pages: list.pages,
    title: list.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }))));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Hidden"], {
    lgUp: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Drawer"], {
    anchor: "left",
    onClose: onMobileClose,
    open: openMobile,
    variant: "temporary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }), navbarContent))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Hidden"], {
    mdDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    elevation: 1,
    square: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }), navbarContent)));
};

NavBar.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  onMobileClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  openMobile: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/layouts/Dashboard/components/NavBar/index.js":
/*!**********************************************************!*\
  !*** ./src/layouts/Dashboard/components/NavBar/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar */ "./src/layouts/Dashboard/components/NavBar/NavBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NavBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/Dashboard/components/NavBar/navigationConfig.js":
/*!*********************************************************************!*\
  !*** ./src/layouts/Dashboard/components/NavBar/navigationConfig.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/BarChart */ "./node_modules/@material-ui/icons/BarChart.js");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/CalendarToday */ "./node_modules/@material-ui/icons/CalendarToday.js");
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ChatOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ChatOutlined */ "./node_modules/@material-ui/icons/ChatOutlined.js");
/* harmony import */ var _material_ui_icons_ChatOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChatOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Code */ "./node_modules/@material-ui/icons/Code.js");
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_DashboardOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/DashboardOutlined */ "./node_modules/@material-ui/icons/DashboardOutlined.js");
/* harmony import */ var _material_ui_icons_DashboardOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DashboardOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ErrorOutline */ "./node_modules/@material-ui/icons/ErrorOutline.js");
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_FolderOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/FolderOutlined */ "./node_modules/@material-ui/icons/FolderOutlined.js");
/* harmony import */ var _material_ui_icons_FolderOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FolderOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/HomeOutlined */ "./node_modules/@material-ui/icons/HomeOutlined.js");
/* harmony import */ var _material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ListAlt */ "./node_modules/@material-ui/icons/ListAlt.js");
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_LockOpenOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/LockOpenOutlined */ "./node_modules/@material-ui/icons/LockOpenOutlined.js");
/* harmony import */ var _material_ui_icons_LockOpenOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOpenOutlined__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/MailOutlined */ "./node_modules/@material-ui/icons/MailOutlined.js");
/* harmony import */ var _material_ui_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_PresentToAll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/PresentToAll */ "./node_modules/@material-ui/icons/PresentToAll.js");
/* harmony import */ var _material_ui_icons_PresentToAll__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PresentToAll__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_PeopleOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/PeopleOutlined */ "./node_modules/@material-ui/icons/PeopleOutlined.js");
/* harmony import */ var _material_ui_icons_PeopleOutlined__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PeopleOutlined__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_PersonOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/PersonOutlined */ "./node_modules/@material-ui/icons/PersonOutlined.js");
/* harmony import */ var _material_ui_icons_PersonOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PersonOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_ReceiptOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ReceiptOutlined */ "./node_modules/@material-ui/icons/ReceiptOutlined.js");
/* harmony import */ var _material_ui_icons_ReceiptOutlined__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ReceiptOutlined__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_SettingsOutlined__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/SettingsOutlined */ "./node_modules/@material-ui/icons/SettingsOutlined.js");
/* harmony import */ var _material_ui_icons_SettingsOutlined__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SettingsOutlined__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/ViewModule */ "./node_modules/@material-ui/icons/ViewModule.js");
/* harmony import */ var _material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components */ "./src/components/index.js");
var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/layouts/Dashboard/components/NavBar/navigationConfig.js";

/* eslint-disable react/no-multi-comp */

/* eslint-disable react/display-name */




















/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Pages',
  pages: [{
    title: 'Overview',
    href: '/overview',
    icon: _material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_9___default.a
  }, {
    title: 'Dashboards',
    href: '/dashboards',
    icon: _material_ui_icons_DashboardOutlined__WEBPACK_IMPORTED_MODULE_6___default.a,
    children: [{
      title: 'Default',
      href: '/dashboards/default'
    }, {
      title: 'Analytics',
      href: '/dashboards/analytics'
    }]
  }, {
    title: 'Management',
    href: '/management',
    icon: _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_2___default.a,
    children: [{
      title: 'Customers',
      href: '/management/customers'
    }, {
      title: 'Customer Details',
      href: '/management/customers/1/summary'
    }, {
      title: 'Projects',
      href: '/management/projects'
    }, {
      title: 'Orders',
      href: '/management/orders'
    }, {
      title: 'Order Details',
      href: '/management/orders/1'
    }]
  }, {
    title: 'Social Feed',
    href: '/social-feed',
    icon: _material_ui_icons_PeopleOutlined__WEBPACK_IMPORTED_MODULE_14___default.a
  }, {
    title: 'Profile',
    href: '/profile',
    icon: _material_ui_icons_PersonOutlined__WEBPACK_IMPORTED_MODULE_15___default.a,
    children: [{
      title: 'Timeline',
      href: '/profile/1/timeline'
    }, {
      title: 'Connections',
      href: '/profile/1/connections'
    }, {
      title: 'Projects',
      href: '/profile/1/projects'
    }, {
      title: 'Reviews',
      href: '/profile/1/reviews'
    }]
  }, {
    title: 'Project',
    href: '/projects',
    icon: _material_ui_icons_FolderOutlined__WEBPACK_IMPORTED_MODULE_8___default.a,
    children: [{
      title: 'Browse',
      href: '/projects'
    }, {
      title: 'Create',
      href: '/projects/create'
    }, {
      title: 'Overview',
      href: '/projects/1/overview'
    }, {
      title: 'Files',
      href: '/projects/1/files'
    }, {
      title: 'Activity',
      href: '/projects/1/activity'
    }, {
      title: 'Subscribers',
      href: '/projects/1/subscribers'
    }]
  }, {
    title: 'Invoice',
    href: '/invoices/1',
    icon: _material_ui_icons_ReceiptOutlined__WEBPACK_IMPORTED_MODULE_16___default.a
  }, {
    title: 'Kanban Board',
    href: '/kanban-board',
    icon: _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_10___default.a
  }, {
    title: 'Mail',
    href: '/mail',
    icon: _material_ui_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_12___default.a,
    label: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_19__["Label"], {
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["colors"].red[500],
      shape: "rounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: undefined
    }, "2")
  }, {
    title: 'Chat',
    href: '/chat',
    icon: _material_ui_icons_ChatOutlined__WEBPACK_IMPORTED_MODULE_4___default.a,
    label: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_19__["Label"], {
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["colors"].red[500],
      shape: "rounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: undefined
    }, "4")
  }, {
    title: 'Calendar',
    href: '/calendar',
    icon: _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_3___default.a,
    label: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_19__["Label"], {
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["colors"].green[500],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: undefined
    }, "New")
  }, {
    title: 'Settings',
    href: '/settings',
    icon: _material_ui_icons_SettingsOutlined__WEBPACK_IMPORTED_MODULE_17___default.a,
    children: [{
      title: 'General',
      href: '/settings/general'
    }, {
      title: 'Subscription',
      href: '/settings/subscription'
    }, {
      title: 'Notifications',
      href: '/settings/notifications'
    }, {
      title: 'Security',
      href: '/settings/security'
    }]
  }, {
    title: 'Authentication',
    href: '/auth',
    icon: _material_ui_icons_LockOpenOutlined__WEBPACK_IMPORTED_MODULE_11___default.a,
    children: [{
      title: 'Login',
      href: '/auth/login'
    }, {
      title: 'Register',
      href: '/auth/register'
    }]
  }, {
    title: 'Errors',
    href: '/errors',
    icon: _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_7___default.a,
    children: [{
      title: 'Error 401',
      href: '/errors/error-401'
    }, {
      title: 'Error 404',
      href: '/errors/error-404'
    }, {
      title: 'Error 500',
      href: '/errors/error-500'
    }]
  }]
}, {
  title: 'Support',
  pages: [{
    title: 'Presentation',
    href: '/presentation',
    icon: _material_ui_icons_PresentToAll__WEBPACK_IMPORTED_MODULE_13___default.a
  }, {
    title: 'Getting started',
    href: '/getting-started',
    icon: _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_5___default.a
  }, {
    title: 'Changelog',
    href: '/changelog',
    icon: _material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_18___default.a,
    label: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_19__["Label"], {
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["colors"].blue['500'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: undefined
    }, "v1.2.0")
  }]
}]);

/***/ }),

/***/ "./src/layouts/Dashboard/components/TopBar/TopBar.js":
/*!***********************************************************!*\
  !*** ./src/layouts/Dashboard/components/TopBar/TopBar.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_NotificationsOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/NotificationsOutlined */ "./node_modules/@material-ui/icons/NotificationsOutlined.js");
/* harmony import */ var _material_ui_icons_NotificationsOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NotificationsOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Input */ "./node_modules/@material-ui/icons/Input.js");
/* harmony import */ var _material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var utils_axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/axios */ "./src/utils/axios.js");
/* harmony import */ var utils_useRouter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! utils/useRouter */ "./src/utils/useRouter.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components */ "./src/components/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! actions */ "./src/actions/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/layouts/Dashboard/components/TopBar/TopBar.js";

/* eslint-disable no-unused-vars */
















const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  search: {
    backgroundColor: 'rgba(255,255,255, 0.1)',
    borderRadius: 4,
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: 'inherit'
  },
  searchInput: {
    flexGrow: 1,
    color: 'inherit',
    '& input::placeholder': {
      opacity: 1,
      color: 'inherit'
    }
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100
  },
  searchPopperContent: {
    marginTop: theme.spacing(1)
  },
  trialButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.white,
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["colors"].green[600],
    '&:hover': {
      backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["colors"].green[900]
    }
  },
  trialIcon: {
    marginRight: theme.spacing(1)
  },
  notificationsButton: {
    marginLeft: theme.spacing(1)
  },
  notificationsBadge: {
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["colors"].orange[600]
  },
  logoutButton: {
    marginLeft: theme.spacing(1)
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  }
}));

const TopBar = props => {
  const onOpenNavBarMobile = props.onOpenNavBarMobile,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["onOpenNavBarMobile", "className"]);

  const classes = useStyles();

  const _useRouter = Object(utils_useRouter__WEBPACK_IMPORTED_MODULE_15__["default"])(),
        history = _useRouter.history;

  const searchRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const notificationsRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        pricingModalOpen = _useState2[0],
        setPricingModalOpen = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState4 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        openSearchPopover = _useState4[0],
        setOpenSearchPopover = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
        _useState6 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        searchValue = _useState6[0],
        setSearchValue = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
        _useState8 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
        notifications = _useState8[0],
        setNotifications = _useState8[1];

  const _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState10 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
        openNotifications = _useState10[0],
        setOpenNotifications = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let mounted = true;

    const fetchNotifications = () => {
      utils_axios__WEBPACK_IMPORTED_MODULE_14__["default"].get('/api/account/notifications').then(response => {
        if (mounted) {
          setNotifications(response.data.notifications);
        }
      });
    };

    fetchNotifications();
    return () => {
      mounted = false;
    };
  }, []);

  const handleLogout = () => {
    history.push('/auth/login');
    dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_17__["logout"])());
  };

  const handlePricingOpen = () => {
    setPricingModalOpen(true);
  };

  const handlePricingClose = () => {
    setPricingModalOpen(false);
  };

  const handleNotificationsOpen = () => {
    setOpenNotifications(true);
  };

  const handleNotificationsClose = () => {
    setOpenNotifications(false);
  };

  const handleSearchChange = event => {
    setSearchValue(event.target.value);

    if (event.target.value) {
      if (!openSearchPopover) {
        setOpenSearchPopover(true);
      }
    } else {
      setOpenSearchPopover(false);
    }
  };

  const handleSearchPopverClose = () => {
    setOpenSearchPopover(false);
  };

  const popularSearches = ['Devias React Dashboard', 'Devias', 'Admin Pannel', 'Project', 'Pages'];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["AppBar"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Toolbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: "Logo",
    src: "/images/logos/travelsafelogo.png",
    height: "40px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.flexGrow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Hidden"], {
    smDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.search,
    ref: searchRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: classes.searchIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Input"], {
    className: classes.searchInput,
    disableUnderline: true,
    onChange: handleSearchChange,
    placeholder: "Search people & places",
    value: searchValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Popper"], {
    anchorEl: searchRef.current,
    className: classes.searchPopper,
    open: openSearchPopover,
    transition: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ClickAwayListener"], {
    onClickAway: handleSearchPopverClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Paper"], {
    className: classes.searchPopperContent,
    elevation: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, popularSearches.map(search => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    button: true,
    key: search,
    onClick: handleSearchPopverClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItemText"], {
    primary: search,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  })))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Hidden"], {
    mdDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
    className: classes.notificationsButton,
    color: "inherit",
    onClick: handleNotificationsOpen,
    ref: notificationsRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Badge"], {
    badgeContent: notifications.length,
    classes: {
      badge: classes.notificationsBadge
    },
    variant: "dot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_NotificationsOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    className: classes.logoutButton,
    color: "inherit",
    onClick: handleLogout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: classes.logoutIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: undefined
  }), "Sign out")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Hidden"], {
    lgUp: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
    color: "inherit",
    onClick: onOpenNavBarMobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_16__["PricingModal"], {
    onClose: handlePricingClose,
    open: pricingModalOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_16__["NotificationsPopover"], {
    anchorEl: notificationsRef.current,
    notifications: notifications,
    onClose: handleNotificationsClose,
    open: openNotifications,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: undefined
  }));
};

TopBar.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  onOpenNavBarMobile: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ }),

/***/ "./src/layouts/Dashboard/components/TopBar/index.js":
/*!**********************************************************!*\
  !*** ./src/layouts/Dashboard/components/TopBar/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBar */ "./src/layouts/Dashboard/components/TopBar/TopBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TopBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/Dashboard/components/index.js":
/*!***************************************************!*\
  !*** ./src/layouts/Dashboard/components/index.js ***!
  \***************************************************/
/*! exports provided: NavBar, TopBar, ChatBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar */ "./src/layouts/Dashboard/components/NavBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return _NavBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBar */ "./src/layouts/Dashboard/components/TopBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopBar", function() { return _TopBar__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ChatBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatBar */ "./src/layouts/Dashboard/components/ChatBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatBar", function() { return _ChatBar__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/layouts/Dashboard/index.js":
/*!****************************************!*\
  !*** ./src/layouts/Dashboard/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard */ "./src/layouts/Dashboard/Dashboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/Error/Error.js":
/*!************************************!*\
  !*** ./src/layouts/Error/Error.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/layouts/Error/Error.js";





const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
  root: {
    height: '100%'
  }
}));

const Error = props => {
  const route = props.route;
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["LinearProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["renderRoutes"])(route.routes)));
};

Error.propTypes = {
  route: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./src/layouts/Error/index.js":
/*!************************************!*\
  !*** ./src/layouts/Error/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error */ "./src/layouts/Error/Error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Error__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/mixins/chartjs.js":
/*!*******************************!*\
  !*** ./src/mixins/chartjs.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
 // ChartJS extension rounded bar chart
// https://codepen.io/jedtrow/full/ygRYgo

function draw() {
  const ctx = this._chart.ctx;
  const vm = this._view;
  let borderWidth = vm.borderWidth;
  let left;
  let right;
  let top;
  let bottom;
  let signX;
  let signY;
  let borderSkipped;
  let radius; // If radius is less than 0 or is large enough to cause drawing errors a max
  //      radius is imposed. If cornerRadius is not defined set it to 0.

  let cornerRadius = this._chart.config.options.cornerRadius;

  if (cornerRadius < 0) {
    cornerRadius = 0;
  }

  if (typeof cornerRadius === 'undefined') {
    cornerRadius = 0;
  }

  if (!vm.horizontal) {
    // bar
    left = vm.x - vm.width / 2;
    right = vm.x + vm.width / 2;
    top = vm.y;
    bottom = vm.base;
    signX = 1;
    signY = bottom > top ? 1 : -1;
    borderSkipped = vm.borderSkipped || 'bottom';
  } else {
    // horizontal bar
    left = vm.base;
    right = vm.x;
    top = vm.y - vm.height / 2;
    bottom = vm.y + vm.height / 2;
    signX = right > left ? 1 : -1;
    signY = 1;
    borderSkipped = vm.borderSkipped || 'left';
  } // Canvas doesn't allow us to stroke inside the width so we can
  // adjust the sizes to fit if we're setting a stroke on the line


  if (borderWidth) {
    // borderWidth shold be less than bar width and bar height.
    const barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
    const halfStroke = borderWidth / 2; // Adjust borderWidth when bar top position is near vm.base(zero).

    const borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
    const borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
    const borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
    const borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0); // not become a vertical line?

    if (borderLeft !== borderRight) {
      top = borderTop;
      bottom = borderBottom;
    } // not become a horizontal line?


    if (borderTop !== borderBottom) {
      left = borderLeft;
      right = borderRight;
    }
  }

  ctx.beginPath();
  ctx.fillStyle = vm.backgroundColor;
  ctx.strokeStyle = vm.borderColor;
  ctx.lineWidth = borderWidth; // Corner points, from bottom-left to bottom-right clockwise
  // | 1 2 |
  // | 0 3 |

  const corners = [[left, bottom], [left, top], [right, top], [right, bottom]]; // Find first (starting) corner with fallback to 'bottom'

  const borders = ['bottom', 'left', 'top', 'right'];
  let startCorner = borders.indexOf(borderSkipped, 0);

  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4];
  } // Draw rectangle from 'startCorner'


  let corner = cornerAt(0);
  ctx.moveTo(corner[0], corner[1]);

  for (let i = 1; i < 4; i += 1) {
    corner = cornerAt(i);
    let nextCornerId = i + 1;

    if (nextCornerId === 4) {
      nextCornerId = 0;
    }

    const width = corners[2][0] - corners[1][0];
    const height = corners[0][1] - corners[1][1];
    const x = corners[1][0];
    const y = corners[1][1];
    radius = cornerRadius; // Fix radius being too large

    if (radius > Math.abs(height) / 2) {
      radius = Math.floor(Math.abs(height) / 2);
    }

    if (radius > Math.abs(width) / 2) {
      radius = Math.floor(Math.abs(width) / 2);
    }

    if (height < 0) {
      // Negative values in a standard bar chart
      const xTl = x;
      const xTr = x + width;
      const yTl = y + height;
      const yTr = y + height;
      const xBl = x;
      const xBr = x + width;
      const yBl = y;
      const yBr = y; // Draw

      ctx.moveTo(xBl + radius, yBl);
      ctx.lineTo(xBr - radius, yBr);
      ctx.quadraticCurveTo(xBr, yBr, xBr, yBr - radius);
      ctx.lineTo(xTr, yTr + radius);
      ctx.quadraticCurveTo(xTr, yTr, xTr - radius, yTr);
      ctx.lineTo(xTl + radius, yTl);
      ctx.quadraticCurveTo(xTl, yTl, xTl, yTl + radius);
      ctx.lineTo(xBl, yBl - radius);
      ctx.quadraticCurveTo(xBl, yBl, xBl + radius, yBl);
    } else if (width < 0) {
      // Negative values in a horizontal bar chart
      const xTl = x + width;
      const xTr = x;
      const yTl = y;
      const yTr = y;
      const xBl = x + width;
      const xBr = x;
      const yBl = y + height;
      const yBr = y + height; // Draw

      ctx.moveTo(xBl + radius, yBl);
      ctx.lineTo(xBr - radius, yBr);
      ctx.quadraticCurveTo(xBr, yBr, xBr, yBr - radius);
      ctx.lineTo(xTr, yTr + radius);
      ctx.quadraticCurveTo(xTr, yTr, xTr - radius, yTr);
      ctx.lineTo(xTl + radius, yTl);
      ctx.quadraticCurveTo(xTl, yTl, xTl, yTl + radius);
      ctx.lineTo(xBl, yBl - radius);
      ctx.quadraticCurveTo(xBl, yBl, xBl + radius, yBl);
    } else {
      // Positive Value
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
    }
  }

  ctx.fill();

  if (borderWidth) {
    ctx.stroke();
  }
}

react_chartjs_2__WEBPACK_IMPORTED_MODULE_0__["Chart"].helpers.extend(react_chartjs_2__WEBPACK_IMPORTED_MODULE_0__["Chart"].elements.Rectangle.prototype, {
  draw
});

/***/ }),

/***/ "./src/mixins/moment.js":
/*!******************************!*\
  !*** ./src/mixins/moment.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

moment__WEBPACK_IMPORTED_MODULE_0___default.a.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'seconds',
    ss: '%ss',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1M',
    MM: '%dM',
    y: '1Y',
    yy: '%dY'
  }
});

/***/ }),

/***/ "./src/mixins/prismjs.js":
/*!*******************************!*\
  !*** ./src/mixins/prismjs.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prismjs_prism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismjs/prism */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs_prism__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs_prism__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs/components/prism-bash */ "./node_modules/prismjs/components/prism-bash.js");
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/prismjs/components/prism-css.js");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_diff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-diff */ "./node_modules/prismjs/components/prism-diff.js");
/* harmony import */ var prismjs_components_prism_diff__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_diff__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/components/prism-json */ "./node_modules/prismjs/components/prism-json.js");
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-jsx */ "./node_modules/prismjs/components/prism-jsx.js");
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_powershell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-powershell */ "./node_modules/prismjs/components/prism-powershell.js");
/* harmony import */ var prismjs_components_prism_powershell__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_powershell__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-sass */ "./node_modules/prismjs/components/prism-sass.js");
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-scss */ "./node_modules/prismjs/components/prism-scss.js");
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_10__);












/***/ }),

/***/ "./src/mixins/validate.js":
/*!********************************!*\
  !*** ./src/mixins/validate.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validate.js */ "./node_modules/validate.js/validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const regex = (value, options) => {
  const regExp = new RegExp(options.pattern);

  if (!regExp.test(value)) {
    return options.message;
  }
};

const checked = (value, options) => {
  if (value !== true) {
    return options.message || 'must be checked';
  }
};

validate_js__WEBPACK_IMPORTED_MODULE_1___default.a.validators = _objectSpread({}, validate_js__WEBPACK_IMPORTED_MODULE_1___default.a.validators, {
  regex,
  checked
});

/***/ }),

/***/ "./src/mock/accountMock.js":
/*!*********************************!*\
  !*** ./src/mock/accountMock.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var utils_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/mock */ "./src/utils/mock.js");




utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/account/profile').reply(200, {
  profile: {
    avatar: '/images/avatars/avatar_11.png',
    canHire: false,
    country: 'USA',
    email: 'shen.zhi@devias.io',
    firstName: 'Shen',
    isPublic: true,
    lastName: 'Zhi',
    phone: '+40 777666555',
    state: 'Alabama',
    timezone: '4:32PM (GMT-4)'
  }
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/account/statistics').reply(200, {
  statistics: {
    payout: '4,250',
    projects: '12,500',
    visitors: '230',
    watching: '5'
  }
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/account/projects').reply(200, {
  projects: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Mella Full Screen Slider',
    price: '3K - 6K',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    tags: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      text: 'Vue JS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].green[600]
    }],
    updated_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(24, 'minutes')
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/account/todos').reply(200, {
  todos: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Finish the proposal design and contract for the client ASAP',
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days'),
    done: false
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Finish the proposal design and contract for the client ASAP',
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    done: false
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Upload the files for the client @Adrian Stefan with the fonts, assets exported and all the fancy svgs',
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(2, 'days'),
    done: false
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Re-write the card component with hooks and context',
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(5, 'days'),
    done: false
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Send proposal for the fintech project',
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(5, 'days'),
    done: false
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Create todo app with react hooks just to get a better understanding of the concept',
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(7, 'days'),
    done: true
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/account/notifications').reply(200, {
  notifications: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'New order has been received',
    type: 'order',
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'hours')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'New customer is registered',
    type: 'user',
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'day')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Project has been approved',
    type: 'project',
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(3, 'days')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'New feature has been added',
    type: 'feature',
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(7, 'days')
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/account/subscription').reply(200, {
  subscription: {
    name: 'Freelancer',
    price: '5',
    currency: '$',
    proposalsLeft: 12,
    templatesLeft: 5,
    invitesLeft: 24,
    adsLeft: 10,
    hasAnalytics: true,
    hasEmailAlerts: true
  }
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/account/settings').reply(200, {
  settings: {}
});

/***/ }),

/***/ "./src/mock/calendarMock.js":
/*!**********************************!*\
  !*** ./src/mock/calendarMock.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var utils_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/mock */ "./src/utils/mock.js");




utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/calendar').reply(200, {
  draft: [],
  events: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Call Samantha',
    desc: 'Inform about new contract',
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].green['700'],
    start: moment__WEBPACK_IMPORTED_MODULE_1___default()('2019-07-01 16:55:00'),
    end: moment__WEBPACK_IMPORTED_MODULE_1___default()('2019-07-01 17:02:00')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Meet with IBM',
    desc: 'Discuss about new partnership',
    start: moment__WEBPACK_IMPORTED_MODULE_1___default()('2019-07-03 08:55:00'),
    end: moment__WEBPACK_IMPORTED_MODULE_1___default()('2019-07-04 15:02:00')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'SCRUM Planning',
    desc: 'Prepare documentation',
    allDay: true,
    start: moment__WEBPACK_IMPORTED_MODULE_1___default()('2019-07-14 16:55:00')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Beign SEM',
    desc: 'Meet with team to discuss',
    allDay: true,
    start: moment__WEBPACK_IMPORTED_MODULE_1___default()('2019-07-18 07:00:00')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Fire John',
    desc: 'Sorry, John',
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].green['700'],
    start: moment__WEBPACK_IMPORTED_MODULE_1___default()('2019-07-20 08:55:00'),
    end: moment__WEBPACK_IMPORTED_MODULE_1___default()('2019-07-20 09:30:00')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Call Alex',
    desc: 'Discuss about the new project',
    allDay: true,
    start: moment__WEBPACK_IMPORTED_MODULE_1___default()('2019-07-30 08:00:00')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Visit Samantha',
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].green['700'],
    desc: 'Get a new quote for the payment processor',
    start: moment__WEBPACK_IMPORTED_MODULE_1___default()('2019-07-30 08:00:00'),
    end: moment__WEBPACK_IMPORTED_MODULE_1___default()('2019-07-30 09:00:00')
  }]
});

/***/ }),

/***/ "./src/mock/chatMock.js":
/*!******************************!*\
  !*** ./src/mock/chatMock.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/mock */ "./src/utils/mock.js");



utils_mock__WEBPACK_IMPORTED_MODULE_2__["default"].onGet('/api/chat/conversations').reply(200, {
  conversations: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    otherUser: {
      name: 'Adam Denisov',
      avatar: '/images/avatars/avatar_7.png',
      active: true,
      lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()()
    },
    messages: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: false,
        name: 'Adam Denisov',
        avatar: '/images/avatars/avatar_7.png',
        lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()()
      },
      content: 'Hey, nice projects! I really liked the one in react. What\'s your quote on kinda similar project?',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(10, 'hours')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: true,
        name: 'Shen Zhi',
        avatar: '/images/avatars/avatar_11.png'
      },
      content: 'I would need to know more details, but my hourly rate stats at $35/hour. Thanks!',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'hours')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: false,
        name: 'Adam Denisov',
        avatar: '/images/avatars/avatar_7.png'
      },
      content: 'Well it\'s a really easy one, I\'m sure we can make it half of the price.',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(5, 'minutes')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: true,
        name: 'Shen Zhi',
        avatar: '/images/avatars/avatar_11.png'
      },
      content: 'Then why don\'t you make it if it\'s that easy? Sorry I\'m not interetes, have fantastic day Adam!',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(3, 'minutes')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: false,
        name: 'Adam Denisov',
        avatar: '/images/avatars/avatar_7.png'
      },
      content: 'Last offer, $25 per hour',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'minute')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: false,
        name: 'Adam Denisov',
        avatar: '/images/avatars/avatar_7.png'
      },
      content: '/images/projects/project_1.jpg',
      contentType: 'image',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'minute')
    }],
    unread: 0,
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'minute')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    otherUser: {
      name: 'Ekaterina Tankova',
      avatar: '/images/avatars/avatar_2.png',
      active: true,
      lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()()
    },
    messages: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: true,
        name: 'Shen Zhi',
        avatar: '/images/avatars/avatar_11.png'
      },
      content: 'Hey, would you like to collaborate?',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(6, 'minutes')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: false,
        name: 'Ekaterina Tankova',
        avatar: '/images/avatars/avatar_2.png'
      },
      content: 'I don\'t think that\'s ideal',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(5, 'minutes')
    }],
    unread: 3,
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(26, 'minutes')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    otherUser: {
      name: 'Emilee Simchenko',
      avatar: '/images/avatars/avatar_9.png',
      active: false,
      lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'minutes')
    },
    messages: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: false,
        name: 'Emilee Simchenko',
        avatar: '/images/avatars/avatar_9.png'
      },
      content: 'Hi Shen, we should submit the product today',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'hours')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: true,
        name: 'Shen Zhi',
        avatar: '/images/avatars/avatar_11.png'
      },
      content: 'Oh, totally forgot about it',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'hour').subtract(2, 'minutes')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: true,
        name: 'Shen Zhi',
        avatar: '/images/avatars/avatar_11.png'
      },
      content: 'Alright then',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'hour')
    }],
    unread: 0,
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(3, 'hours')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    otherUser: {
      name: 'Kwak Seong-Min',
      avatar: '/images/avatars/avatar_10.png',
      active: true,
      lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()()
    },
    messages: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: true,
        name: 'Shen Zhi',
        avatar: '/images/avatars/avatar_11.png'
      },
      content: 'Hi Kwak! I\'ve seen your projects and we can work together on a project. Will send you the details later.',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(3, 'days')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: false,
        name: 'Kwak Seong-Min',
        avatar: '/images/avatars/avatar_10.png'
      },
      content: 'Haha, right, we\'ll do it',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days')
    }],
    unread: 1,
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    otherUser: {
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png',
      active: false,
      lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(4, 'hours')
    },
    messages: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: true,
        name: 'Shen Zhi',
        avatar: '/images/avatars/avatar_11.png'
      },
      content: 'Did you receive my email about the brief?',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(3, 'days')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: false,
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png'
      },
      content: 'I\'m not sure, but I will check it later',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days')
    }],
    unread: 0,
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(5, 'days')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    otherUser: {
      name: 'Clarke Gillebert',
      avatar: '/images/avatars/avatar_6.png',
      active: true,
      lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()()
    },
    messages: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: false,
        name: 'Clarke Gillebert',
        avatar: '/images/avatars/avatar_6.png'
      },
      content: 'Hey Shen! I love your projects!!!',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      sender: {
        authUser: true,
        name: 'Shen Zhi',
        avatar: '/images/avatars/avatar_11.png'
      },
      content: 'Haha thank you Clarke, I\'m doing our best',
      contentType: 'text',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(3, 'days')
    }],
    unread: 0,
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(5, 'days')
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_2__["default"].onGet('/api/chat/activity').reply(200, {
  groups: [{
    id: 'clients',
    name: 'Clients'
  }, {
    id: 'friends',
    name: 'Friends'
  }],
  connections: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Ekaterina Tankova',
    avatar: '/images/avatars/avatar_2.png',
    active: false,
    lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(24, 'minutes'),
    group: 'clients'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Cao Yu',
    avatar: '/images/avatars/avatar_3.png',
    active: true,
    lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    group: 'clients'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Anje Keizer',
    avatar: '/images/avatars/avatar_5.png',
    active: false,
    lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'minutes'),
    group: 'clients'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Ava Gregoraci',
    avatar: '/images/avatars/avatar_8.png',
    active: true,
    lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    group: 'clients'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Clarke Gillebert',
    avatar: '/images/avatars/avatar_6.png',
    active: true,
    lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    group: 'friends'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Adam Denisov',
    avatar: '/images/avatars/avatar_7.png',
    active: false,
    lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(24, 'minutes'),
    group: 'friends'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Emilee Simchenko',
    avatar: '/images/avatars/avatar_9.png',
    active: true,
    lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    group: 'friends'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Kwak Seong-Min',
    avatar: '/images/avatars/avatar_10.png',
    active: true,
    lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    group: 'friends'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Shen Zhi',
    avatar: '/images/avatars/avatar_11.png',
    active: true,
    lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    group: 'friends'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Merrile Burgett',
    avatar: '/images/avatars/avatar_12.png',
    active: false,
    lastActivity: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days')
  }]
});

/***/ }),

/***/ "./src/mock/customerMock.js":
/*!**********************************!*\
  !*** ./src/mock/customerMock.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/mock */ "./src/utils/mock.js");



utils_mock__WEBPACK_IMPORTED_MODULE_2__["default"].onGet('/api/management/customers').reply(200, {
  customers: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Ekaterina Tankova',
    email: 'ekaterina.tankova@devias.io',
    avatar: '/images/avatars/avatar_2.png',
    spent: '500.00',
    currency: '$',
    type: 'Agency',
    projects: '1',
    rating: 5,
    location: 'West Virginia, USA'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Cao Yu',
    email: 'cao.yu@devias.io',
    avatar: '/images/avatars/avatar_3.png',
    spent: '300.00',
    type: 'Freelancer',
    currency: '$',
    projects: '3',
    rating: 4.3,
    location: 'Bristow'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Alexa Richardson',
    email: 'alexa.richardson@devias.io',
    avatar: '/images/avatars/avatar_4.png',
    spent: '2,600.00',
    type: 'Enterprise',
    currency: '$',
    projects: '0',
    rating: 4.5,
    location: 'Georgia, USA'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Anje Keizer',
    email: 'anje.keizer@devias.io',
    avatar: '/images/avatars/avatar_5.png',
    spent: '5,600.00',
    type: 'Enterprise',
    currency: '$',
    projects: '6',
    rating: 4,
    location: 'Ohio, USA'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Clarke Gillebert',
    email: 'clarke.gillebert@devias.io',
    avatar: '/images/avatars/avatar_6.png',
    spent: '500.00',
    type: 'Agency',
    currency: '$',
    projects: '1',
    rating: 3.5,
    location: 'Texas, USA'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Adam Denisov',
    email: 'adam.denisov@devias.io',
    avatar: '/images/avatars/avatar_7.png',
    spent: '5,230.00',
    type: 'Agency',
    currency: '$',
    projects: '0',
    rating: 3,
    location: 'California, USA'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Ava Gregoraci',
    email: 'ava.gregoraci@devias.io',
    avatar: '/images/avatars/avatar_8.png',
    spent: '300.00',
    type: 'Freelancer',
    currency: '$',
    projects: '0',
    rating: 4,
    location: 'California, USA'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Emilee Simchenko',
    email: 'emilee.simchenko@devias.io',
    avatar: '/images/avatars/avatar_9.png',
    spent: '100.00',
    type: 'Agency',
    currency: '$',
    projects: '4',
    rating: 4.5,
    location: 'Nevada, USA'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Kwak Seong-Min',
    email: 'kwak.seong.min@devias.io',
    avatar: '/images/avatars/avatar_10.png',
    spent: '1,000.00',
    type: 'Freelancer',
    currency: '$',
    projects: '2',
    rating: 5,
    location: 'Michigan, USA'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Shen Zhi',
    email: 'shen.zhi@devias.io',
    avatar: '/images/avatars/avatar_11.png',
    spent: '2,300.00',
    type: 'Agency',
    currency: '$',
    projects: '0',
    rating: 3.9,
    location: 'Utah, USA'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Merrile Burgett',
    email: 'merrile.burgett@devias.io',
    avatar: '/images/avatars/avatar_12.png',
    spent: '200.00',
    type: 'Enterprise',
    currency: '$',
    projects: '7',
    rating: 4.2,
    location: 'Utah, USA'
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_2__["default"].onGet('/api/management/customers/1/summary').reply(200, {
  summary: {
    name: 'Ekaterina Tankova',
    email: 'ekaterina@devias.io',
    phone: '+55 748 327 439',
    state: 'Alabama',
    country: 'United States',
    zipCode: '240355',
    address1: 'Street John Wick, no. 7',
    address2: 'House #25',
    iban: '4142 **** **** **** ****',
    autoCC: false,
    verified: true,
    currency: '$',
    invoices: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      type: 'paid',
      value: 10.0
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      type: 'paid',
      value: 15.0
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      type: 'due',
      value: 5
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      type: 'income',
      value: 10.0
    }],
    vat: 19,
    balance: 0,
    emails: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      description: 'Order confirmation',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(3, 'days').subtract(5, 'hours').subtract(34, 'minutes')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      description: 'Order confirmation',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(4, 'days').subtract(11, 'hours').subtract(49, 'minutes')
    }]
  }
});
utils_mock__WEBPACK_IMPORTED_MODULE_2__["default"].onGet('/api/management/customers/1/invoices').reply(200, {
  invoices: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    date: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
    paymentMethod: 'Credit Card',
    value: '5.25',
    currency: '$',
    status: 'paid'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    date: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
    paymentMethod: 'Credit Card',
    value: '5.25',
    currency: '$',
    status: 'paid'
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_2__["default"].onGet('/api/management/customers/1/logs').reply(200, {
  logs: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    status: 200,
    method: 'POST',
    route: '/api/purchase',
    desc: 'Purchase',
    IP: '84.234.243.42',
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days').subtract(2, 'minutes').subtract(56, 'seconds')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    status: 522,
    error: 'Invalid credit card',
    method: 'POST',
    route: '/api/purchase',
    desc: 'Purchase',
    IP: '84.234.243.42',
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days').subtract(2, 'minutes').subtract(56, 'seconds')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    status: 200,
    method: 'DELETE',
    route: '/api/products/d65654e/remove',
    desc: 'Cart remove',
    IP: '84.234.243.42',
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days').subtract(8, 'minutes').subtract(23, 'seconds')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    status: 200,
    method: 'GET',
    route: '/api/products/d65654e/add',
    desc: 'Cart add',
    IP: '84.234.243.42',
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days').subtract(20, 'minutes').subtract(54, 'seconds')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    status: 200,
    method: 'GET',
    route: '/api/products/c85727f/add',
    desc: 'Cart add',
    IP: '84.234.243.42',
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days').subtract(34, 'minutes').subtract(16, 'seconds')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    status: 200,
    method: 'GET',
    route: '/api/products/c85727f',
    desc: 'View product',
    IP: '84.234.243.42',
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days').subtract(54, 'minutes').subtract(30, 'seconds')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    status: 200,
    method: 'GET',
    route: '/api/products',
    desc: 'Get products',
    IP: '84.234.243.42',
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days').subtract(56, 'minutes').subtract(40, 'seconds')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    status: 200,
    method: 'POST',
    route: '/api/login',
    desc: 'Login',
    IP: '84.234.243.42',
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days').subtract(57, 'minutes').subtract(5, 'seconds')
  }]
});

/***/ }),

/***/ "./src/mock/dashboardMock.js":
/*!***********************************!*\
  !*** ./src/mock/dashboardMock.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var utils_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/mock */ "./src/utils/mock.js");




utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/dashboard/top-referrals').reply(200, {
  referrals: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].blueGrey['700'],
    name: 'GitHub',
    initials: 'GT',
    value: '53,032'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].cyan['500'],
    name: 'Twitter',
    initials: 'TW',
    value: '39,551'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].indigo[600],
    name: 'Hacker News',
    initials: 'HN',
    value: '23,150'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].red['500'],
    name: 'Stack Overflow',
    initials: 'SO',
    value: '14,093'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].orange['900'],
    name: 'Reddit.com',
    initials: 'RD',
    value: '7,251'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].blueGrey['900'],
    name: 'Dev.to',
    initials: 'DE',
    value: '5,694'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].blue['900'],
    name: 'Facebook',
    initials: 'FB',
    value: '3,643'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].blueGrey['900'],
    name: 'Medium',
    initials: 'MD',
    value: '1,654'
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/dashboard/profitable-products').reply(200, {
  products: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    type: 'freelancer_basic',
    name: 'Freelancer Basic Subscription',
    image: '/images/products/product_freelancer.svg',
    subscriptions: '13,153',
    currency: '$',
    price: '5.00',
    progress: 93
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    type: 'freelancer_extra',
    name: 'Freelancer Extra Subscription',
    image: '/images/products/product_freelancer.svg',
    subscriptions: '10,300',
    currency: '$',
    price: '15.00',
    progress: 76
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    type: 'agency_basic',
    name: 'Agency Basic Subscription',
    image: '/images/products/product_agency.svg',
    subscriptions: '5,300',
    currency: '$',
    price: '25.00',
    progress: 60
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    type: 'enterprise_basic',
    name: 'Enterprise Basic Subscription',
    image: '/images/products/product_enterprise.svg',
    subscriptions: '1,203',
    currency: '$',
    price: '205.00',
    progress: 46
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    type: 'enterprise_extra',
    name: 'Enterprise Extra Subscription',
    image: '/images/products/product_enterprise.svg',
    subscriptions: '254',
    currency: '$',
    price: '500.00',
    progress: 41
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/dashboard/customer-activity').reply(200, {
  customers: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    type: 'payment',
    description: 'Subscription Purchase',
    author: {
      name: 'Ekaterina Tankova',
      avatar: '/images/avatars/avatar_2.png'
    },
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(23, 'minutes')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    type: 'payment',
    description: 'Subscription Purchase',
    author: {
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png'
    },
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(56, 'minutes')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    type: 'payment',
    description: 'Subscription Purchase',
    author: {
      name: 'Alexa Richardson',
      avatar: '/images/avatars/avatar_4.png'
    },
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'hours')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    type: 'payment',
    description: 'Subscription Purchase',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(5, 'minutes')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    type: 'payment',
    description: 'Subscription Purchase',
    author: {
      name: 'Clarke Gillebert',
      avatar: '/images/avatars/avatar_6.png'
    },
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(5, 'minutes')
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/dashboard/earnings').reply(200, {
  earnings: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    label: 'Subscriptions',
    value: 56,
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].indigo[500]
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    label: 'Afiliate',
    value: 24,
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].indigo[300]
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    label: 'Sales',
    value: 20,
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].indigo[100]
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/dashboard/latest-orders').reply(200, {
  orders: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: 'DEV1042',
    items: 7,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Ekaterina Tankova',
      email: 'ekaterina@devias.io'
    },
    status: 'pending'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: 'DEV1041',
    items: 8,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Cao Yu',
      email: 'cao.yu@devias.io'
    },
    status: 'complete'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: 'DEV1040',
    items: 4,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Alexa Richardson',
      email: 'alexa.richardson@devias.io'
    },
    status: 'rejected'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: 'DEV1039',
    items: 1,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Anje Keizer',
      email: 'anje.keiser@devias.io'
    },
    status: 'pending'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: 'DEV1038',
    items: 5,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Clarke Gillebert',
      email: 'clarke.gillebert@devias.io'
    },
    status: 'complete'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: 'DEV1037',
    items: 2,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Merrile Burgett',
      email: 'merrile.burgett@devias.io'
    },
    status: 'complete'
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/dashboard/latest-projects').reply(200, {
  projects: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Mella Full Screen Slider',
    price: '12,500',
    currency: '$',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    tags: [{
      text: 'Angular JS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].red[600]
    }]
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Dashboard Design',
    price: '15,750',
    currency: '$',
    author: {
      name: 'Emilee Simchenko',
      avatar: '/images/avatars/avatar_9.png'
    },
    tags: [{
      text: 'HTML & CSS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].grey[600]
    }]
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Ten80 Web Design',
    price: '15,750',
    currency: '$',
    author: {
      name: 'Kwak Seong-Min',
      avatar: '/images/avatars/avatar_10.png'
    },
    tags: [{
      text: 'React JS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].indigo[600]
    }]
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Neura e-commerce UI Kit',
    price: '12,500',
    currency: '$',
    author: {
      name: 'Shen Zhi',
      avatar: '/images/avatars/avatar_11.png'
    },
    tags: [{
      text: 'Vue JS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].green[600]
    }]
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Administrator Dashboard',
    price: '15,750',
    currency: '$',
    author: {
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png'
    },
    tags: [{
      text: 'Angular JS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].red[600]
    }]
  }]
});

/***/ }),

/***/ "./src/mock/index.js":
/*!***************************!*\
  !*** ./src/mock/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accountMock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accountMock */ "./src/mock/accountMock.js");
/* empty/unused harmony star reexport *//* harmony import */ var _calendarMock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendarMock */ "./src/mock/calendarMock.js");
/* empty/unused harmony star reexport *//* harmony import */ var _chatMock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatMock */ "./src/mock/chatMock.js");
/* empty/unused harmony star reexport *//* harmony import */ var _customerMock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerMock */ "./src/mock/customerMock.js");
/* empty/unused harmony star reexport *//* harmony import */ var _mailMock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mailMock */ "./src/mock/mailMock.js");
/* empty/unused harmony star reexport *//* harmony import */ var _projectMock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectMock */ "./src/mock/projectMock.js");
/* empty/unused harmony star reexport *//* harmony import */ var _socialFeedMock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./socialFeedMock */ "./src/mock/socialFeedMock.js");
/* empty/unused harmony star reexport *//* harmony import */ var _userMock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userMock */ "./src/mock/userMock.js");
/* empty/unused harmony star reexport *//* harmony import */ var _invoiceMock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invoiceMock */ "./src/mock/invoiceMock.js");
/* empty/unused harmony star reexport *//* harmony import */ var _kanbanMock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kanbanMock */ "./src/mock/kanbanMock.js");
/* empty/unused harmony star reexport *//* harmony import */ var _taskMock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./taskMock */ "./src/mock/taskMock.js");
/* empty/unused harmony star reexport *//* harmony import */ var _orderMock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orderMock */ "./src/mock/orderMock.js");
/* empty/unused harmony star reexport *//* harmony import */ var _dashboardMock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboardMock */ "./src/mock/dashboardMock.js");
/* empty/unused harmony star reexport */













/***/ }),

/***/ "./src/mock/invoiceMock.js":
/*!*********************************!*\
  !*** ./src/mock/invoiceMock.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/mock */ "./src/utils/mock.js");



utils_mock__WEBPACK_IMPORTED_MODULE_2__["default"].onGet('/api/invoices').reply(200, {
  invoices: []
});
utils_mock__WEBPACK_IMPORTED_MODULE_2__["default"].onGet('/api/invoices/1').reply(200, {
  invoice: {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    due_date: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    issue_date: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(15, 'days'),
    ref: 'DEV-9483',
    customer: {
      name: 'Tracey Herman',
      company: 'Countdown Grey Lynn',
      nzbn: '6934656584231',
      address: '271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand'
    },
    products: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      desc: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
      value: '55.50'
    }],
    subtotal: '50.00',
    taxes: '5.50',
    total: '55.50',
    currency: '$',
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()()
  }
});

/***/ }),

/***/ "./src/mock/kanbanMock.js":
/*!********************************!*\
  !*** ./src/mock/kanbanMock.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/mock */ "./src/utils/mock.js");



utils_mock__WEBPACK_IMPORTED_MODULE_2__["default"].onGet('/api/kanban').reply(200, {
  lists: [{
    id: 'incoming',
    title: 'Incoming'
  }, {
    id: 'in_progress',
    title: 'In progress'
  }, {
    id: 'in_review',
    title: 'In review'
  }, {
    id: 'completed',
    title: 'Completed'
  }],
  tasks: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: '38',
    list: 'incoming',
    title: 'Call with sales of HubSpot',
    desc: 'Duis condimentum lacus finibus felis pellentesque, ac auctor nibh fermentum. Duis sed dui ante. Phasellus id eros tincidunt, dictum lorem vitae, pellentesque sem. Aenean eu enim sit amet mauris rhoncus mollis. Sed enim turpis, porta a felis et, luctus faucibus nisi. Phasellus et metus fermentum, ultrices arcu aliquam, facilisis justo. Cras nunc nunc, elementum sed euismod ut, maximus eget nibh. Phasellus condimentum lorem neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce sagittis pharetra eleifend. Suspendisse potenti.',
    members: ['/images/avatars/avatar_1.png', '/images/avatars/avatar_5.png', '/images/avatars/avatar_6.png'],
    files: 0,
    comments: 1,
    progress: 0,
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(7, 'days')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: '37',
    list: 'incoming',
    title: 'Interview for the Asis. Sales Manager',
    desc: 'We are looking for vue experience and of course node js strong knowledge',
    members: ['/images/avatars/avatar_2.png', '/images/avatars/avatar_3.png'],
    files: 0,
    comments: 2,
    progress: 0,
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(6, 'days')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: '39',
    list: 'incoming',
    title: 'Change the height of the top bar because it looks too chunky',
    desc: 'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
    members: ['/images/avatars/avatar_11.png'],
    files: 0,
    comments: 0,
    progress: 0,
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(5, 'days')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: '19',
    list: 'incoming',
    title: 'Integrate Stripe API',
    desc: 'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
    members: ['/images/avatars/avatar_6.png', '/images/avatars/avatar_5.png', '/images/avatars/avatar_9.png'],
    files: 2,
    comments: 1,
    progress: 0,
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(4, 'days')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: '15',
    list: 'in_progress',
    title: 'Update the customer API for payments',
    desc: 'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
    members: ['/images/avatars/avatar_10.png'],
    files: 2,
    comments: 0,
    progress: 60,
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(4, 'hours')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: '10',
    list: 'in_progress',
    title: 'Redesign the landing page',
    desc: 'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
    members: ['/images/avatars/avatar_10.png', '/images/avatars/avatar_11.png'],
    files: 0,
    comments: 2,
    progress: 76,
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(4, 'hours')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: '24',
    list: 'in_review',
    title: 'Change the height of the top bar because it looks too chunky',
    desc: 'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
    members: ['/images/avatars/avatar_6.png', '/images/avatars/avatar_4.png', '/images/avatars/avatar_2.png'],
    files: 0,
    comments: 7,
    progress: 90,
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'days')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: '21',
    list: 'in_review',
    title: 'Integrate Stripe API',
    desc: 'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
    members: ['/images/avatars/avatar_6.png', '/images/avatars/avatar_4.png', '/images/avatars/avatar_8.png', '/images/avatars/avatar_2.png'],
    files: 0,
    comments: 7,
    progress: 90,
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'days')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: '17',
    list: 'completed',
    title: 'Design Customer Management Page',
    desc: 'Change the height of the top bar because it looks too chunky',
    members: ['/images/avatars/avatar_6.png', '/images/avatars/avatar_2.png', '/images/avatars/avatar_9.png'],
    files: 3,
    comments: 3,
    progress: 100,
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(7, 'days')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: '23',
    list: 'completed',
    title: 'Integrate Messaging API',
    desc: 'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
    members: ['/images/avatars/avatar_6.png', '/images/avatars/avatar_4.png', '/images/avatars/avatar_5.png', '/images/avatars/avatar_2.png', '/images/avatars/avatar_9.png'],
    files: 1,
    comments: 0,
    progress: 100,
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(7, 'days')
  }]
});

/***/ }),

/***/ "./src/mock/mailMock.js":
/*!******************************!*\
  !*** ./src/mock/mailMock.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var utils_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/mock */ "./src/utils/mock.js");




utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/mail').reply(200, {
  emails: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    seen: true,
    favorited: true,
    labels: [{
      text: 'Business',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].blue[600]
    }, {
      text: 'Personal',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].orange[600]
    }],
    subject: 'Website redesign. Interested in collaboration',
    message: "\nHi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider\n\nInteger velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.\n\nDonec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.\n\n\nKind regards,\n\nEkaterina Tankova\n      ",
    receiver: {
      name: 'Ekaterina Tankova',
      email: 'ekaterina.tankova@devias.io',
      avatar: '/images/avatars/avatar_2.png'
    },
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()()
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    seen: false,
    favorited: false,
    labels: [],
    subject: 'Amazing work',
    message: 'Hey, nice projects! I really liked the one in react. What\'s your quote on kinda similar project?',
    receiver: {
      name: 'Adam Denisov',
      email: 'adam.denisov@devias.io',
      avatar: '/images/avatars/avatar_7.png'
    },
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()()
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    seen: false,
    favorited: false,
    subject: 'Flight reminder',
    labels: [{
      text: 'Work',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].green[600]
    }],
    message: 'Dear Shen, Your flight is coming up soon. Please don’t forget to check in for your scheduled flight.',
    receiver: {
      name: 'Clarke Gillebert',
      avatar: '/images/avatars/avatar_6.png'
    },
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()()
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    seen: true,
    favorited: true,
    labels: [],
    subject: 'Posible candidates for the position',
    message: 'My market leading client has another fantastic opportunity for an experienced Software Developer to join them on a heavily remote basis',
    receiver: {
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png'
    },
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()()
  }]
});

/***/ }),

/***/ "./src/mock/orderMock.js":
/*!*******************************!*\
  !*** ./src/mock/orderMock.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/mock */ "./src/utils/mock.js");



utils_mock__WEBPACK_IMPORTED_MODULE_2__["default"].onGet('/api/orders').reply(200, {
  orders: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(10, 'minutes'),
    customer: {
      name: 'Ekaterina Tankova'
    },
    payment: {
      ref: 'FAD103',
      method: 'CreditCard',
      total: '500.00',
      currency: '$',
      status: 'pending'
    },
    status: 'inactive'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(32, 'minutes').subtract(23, 'seconds'),
    customer: {
      name: 'Cao Yu'
    },
    payment: {
      ref: 'FAD102',
      method: 'CreditCard',
      total: '500.00',
      currency: '$',
      status: 'pending'
    },
    status: 'inactive'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(36, 'minutes').subtract(51, 'seconds'),
    customer: {
      name: 'Alexa Richardson'
    },
    payment: {
      ref: 'FAD101',
      method: 'PayPal',
      total: '500.00',
      currency: '$',
      status: 'completed'
    },
    status: 'active'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(38, 'minutes').subtract(55, 'seconds'),
    customer: {
      name: 'Anje Keizer'
    },
    payment: {
      ref: 'FAD100',
      method: 'CreditCard',
      total: '500.00',
      currency: '$',
      status: 'pending'
    },
    status: 'inactive'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(40, 'minutes').subtract(3, 'seconds'),
    customer: {
      name: 'Clarke Gillebert'
    },
    payment: {
      ref: 'FAD99',
      method: 'PayPal',
      total: '500.00',
      currency: '$',
      status: 'completed'
    },
    status: 'active'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(45, 'minutes').subtract(32, 'seconds'),
    customer: {
      name: 'Adam Denisov'
    },
    payment: {
      ref: 'FAD98',
      method: 'PayPal',
      total: '500.00',
      currency: '$',
      status: 'completed'
    },
    status: 'active'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(48, 'minutes').subtract(57, 'seconds'),
    customer: {
      name: 'Ava Gregoraci',
      avatar: '/images/avatars/avatar_8.png'
    },
    payment: {
      ref: 'FAD97',
      method: 'CreditCard',
      total: '500.00',
      currency: '$',
      status: 'pending'
    },
    status: 'inactive'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(49, 'minutes').subtract(4, 'seconds'),
    customer: {
      name: 'Emilee Simchenko'
    },
    payment: {
      ref: 'FAD96',
      method: 'CreditCard',
      total: '500.00',
      currency: '$',
      status: 'completed'
    },
    status: 'active'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(57, 'minutes').subtract(43, 'seconds'),
    customer: {
      name: 'Kwak Seong-Min'
    },
    payment: {
      ref: 'FAD95',
      method: 'PayPal',
      total: '500.00',
      currency: '$',
      status: 'rejected'
    },
    status: 'inactive'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(59, 'minutes').subtract(6, 'seconds'),
    customer: {
      name: 'Shen Zhi'
    },
    payment: {
      ref: 'FAD94',
      method: 'CreditCard',
      total: '500.00',
      currency: '$',
      status: 'canceled'
    },
    status: 'inactive'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'hour').subtract(15, 'minutes').subtract(43, 'seconds'),
    customer: {
      name: 'Merrile Burgett'
    },
    payment: {
      ref: 'FAD93',
      method: 'PayPal',
      total: '500.00',
      currency: '$',
      status: 'canceled'
    },
    status: 'inactive'
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_2__["default"].onGet('/api/orders/1').reply(200, {
  order: {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    ref: 'FAD107',
    promoCode: null,
    value: '55.25',
    currency: '$',
    status: 'canceled',
    customer: {
      name: 'Ekaterina Tankova',
      address: 'Street King William, 42456',
      city: 'Montgomery',
      country: 'United States'
    },
    items: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      name: 'Project Points',
      cuantity: 25,
      billing: 'monthly',
      status: 'completed',
      value: '50.25',
      currency: '$'
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      name: 'Freelancer Subscription',
      cuantity: 1,
      billing: 'monthly',
      status: 'completed',
      value: '5.00',
      currency: '$'
    }],
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()()
  }
});

/***/ }),

/***/ "./src/mock/projectMock.js":
/*!*********************************!*\
  !*** ./src/mock/projectMock.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var utils_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/mock */ "./src/utils/mock.js");




utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/projects').reply(200, {
  projects: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Mella Full Screen Slider',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    price: '12,500',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    status: 'In progress',
    members: 5,
    tags: [{
      text: 'Angular JS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].red[600]
    }],
    start_date: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    end_date: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    updated_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(24, 'minutes')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Dashboard Design',
    author: {
      name: 'Emilee Simchenko',
      avatar: '/images/avatars/avatar_9.png'
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    status: 'In progress',
    members: 3,
    tags: [{
      text: 'HTML & CSS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].grey[600]
    }],
    start_date: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    end_date: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    updated_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'hour')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Ten80 Web Design',
    author: {
      name: 'Kwak Seong-Min',
      avatar: '/images/avatars/avatar_10.png'
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    status: 'Completed',
    members: 8,
    tags: [{
      text: 'React JS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].indigo[600]
    }],
    start_date: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    end_date: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    updated_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(16, 'hour')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Neura e-commerce UI Kit',
    author: {
      name: 'Shen Zhi',
      avatar: '/images/avatars/avatar_11.png'
    },
    price: '12,500',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    status: 'In progress',
    members: 10,
    tags: [{
      text: 'Vue JS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].green[600]
    }],
    start_date: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    end_date: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    updated_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(3, 'days')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Administrator Dashboard',
    author: {
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png'
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    status: 'Canceled',
    members: 2,
    tags: [{
      text: 'Angular JS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].red[600]
    }, {
      text: 'HTML & CSS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].grey[600]
    }],
    start_date: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    end_date: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    updated_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(7, 'days')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Kalli UI Kit',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    status: 'Completed',
    members: 12,
    tags: [{
      text: 'Vue JS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].green[600]
    }],
    start_date: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    end_date: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    updated_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(8, 'days')
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/projects/1').reply(200, {
  project: {
    title: 'Develop a PDF Export App',
    author: {
      name: 'Emilee Simchenko',
      avatar: '/images/avatars/avatar_9.png',
      bio: 'We build beautiful functional themes for web professionals'
    },
    brief: "\n#### TL;DR\n\nThe primary aim of the product is to convert survery responses into PDF reports, these reports are generated on to what we call templates. This product is designer to work with 3rd party survery providers. The first MVP will integrate with TypeForm, because the's no direct way to convert results to PDF from the form people create in TypeForm and then ask users to fill out.\n\n#### Background information\n\nDesign files are attachedin the files tab.\n\nDevelop the web app screens for our product called \"PDFace\". Please look at the wireframes, system activity workflow and read the section above to understand what we're trying to archive.\n\nThere's not many screens we need designed, but there will be modals and various other system triggered evenets that will need to be considered.\n\nThe project has benn created in Sketch so let me know if there are any problmes opening this project and I'll try to convert into a usable file.\n\nI have attached a chat with our users most used devices.\n\n#### Goals:\n  - Maintainable Code\n  - Easy UX\n  - Readable Code\n  - No Redux\n    ",
    price: '12,500',
    currency: 'USD',
    tags: [{
      text: 'React JS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].indigo[600]
    }],
    members: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      name: 'Ekaterina Tankova',
      avatar: '/images/avatars/avatar_2.png',
      bio: 'Front End Developer'
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png',
      bio: 'UX Designer'
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png',
      bio: 'Copyright'
    }],
    files: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      name: 'example-project1.jpg',
      url: '/images/projects/project_2.jpg',
      mimeType: 'image/png',
      size: 1024 * 1024 * 3
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      name: 'docs.zip',
      url: '#',
      mimeType: 'application/zip',
      size: 1024 * 1024 * 25
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      name: 'example-project2.jpg',
      url: '/images/projects/project_1.jpg',
      mimeType: 'image/png',
      size: 1024 * 1024 * 2
    }],
    activities: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      subject: 'Project owner',
      subject_type: 'user',
      action_type: 'upload_file',
      action_desc: 'has uploaded a new file',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(23, 'minutes')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      subject: 'Adrian Stefan',
      subject_type: 'user',
      action_type: 'join_team',
      action_desc: 'joined team as a Front-End Developer',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'hours')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      subject: 'Alexandru Robert',
      action_type: 'join_team',
      action_desc: 'joined team as a Full Stack Developer',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(9, 'hours')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      subject: 'Project owner',
      subject_type: 'user',
      action_type: 'price_change',
      action_desc: 'raised the project budget',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      subject: 'Contest',
      subject_type: 'project',
      action_type: 'contest_created',
      action_desc: 'created',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(4, 'days')
    }],
    subscribers: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      name: 'Ekaterina Tankova',
      avatar: '/images/avatars/avatar_2.png',
      cover: '/images/covers/cover_1.jpg',
      common_connections: 12,
      labels: ['User Experience', 'FrontEnd development', 'HTML5', 'VueJS', 'ReactJS']
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png',
      cover: '/images/covers/cover_2.jpg',
      common_connections: 5,
      labels: ['User Interface', 'FullStack development', 'Angular', 'ExpressJS']
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      name: 'Clarke Gillebert',
      avatar: '/images/avatars/avatar_6.png',
      cover: '/images/covers/cover_2.jpg',
      common_connections: 17,
      labels: ['BackEnd development', 'Firebase', 'MongoDB', 'ExpressJS']
    }],
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(7, 'days'),
    updated_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(23, 'minutes')
  }
});

/***/ }),

/***/ "./src/mock/socialFeedMock.js":
/*!************************************!*\
  !*** ./src/mock/socialFeedMock.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/mock */ "./src/utils/mock.js");



utils_mock__WEBPACK_IMPORTED_MODULE_2__["default"].onGet('/api/social-feed').reply(200, {
  posts: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    author: {
      name: 'Kwak Seong-Min',
      avatar: '/images/avatars/avatar_10.png'
    },
    message: 'Hey guys! What\'s your favorite framework?',
    liked: true,
    likes: 1,
    comments: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      author: {
        name: 'Merrile Burgett',
        avatar: '/images/avatars/avatar_12.png'
      },
      message: 'I\'ve been using Angular for the past 3 years',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(3, 'hours')
    }],
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(16, 'minutes')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    author: {
      name: 'Shen Zhi',
      avatar: '/images/avatars/avatar_11.png'
    },
    message: 'Just made this home screen for a project, what-cha thinkin?',
    media: '/images/posts/post_1.jpg',
    liked: true,
    likes: 24,
    comments: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      author: {
        name: 'Anje Keizer',
        avatar: '/images/avatars/avatar_5.png'
      },
      message: 'Could use some more statistics, but that’s me haha',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(3, 'hours')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      author: {
        name: 'Ava Gregoraci',
        avatar: '/images/avatars/avatar_8.png'
      },
      message: 'Hmm, honestly this looks nice but I would change the shadow though',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'hours')
    }],
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(4, 'hours')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    author: {
      name: 'Shen Zhi',
      avatar: '/images/avatars/avatar_11.png'
    },
    message: 'As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.',
    liked: false,
    likes: 65,
    comments: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      author: {
        name: 'Clarke Gillebert',
        avatar: '/images/avatars/avatar_6.png'
      },
      message: 'That’s actually deep. Thanks for the design, would you consider making an interaction?',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(3, 'hours')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      author: {
        name: 'Alexa Richardson',
        avatar: '/images/avatars/avatar_4.png'
      },
      message: 'Oh... so sentimental',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'hours')
    }],
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(7, 'hours')
  }]
});

/***/ }),

/***/ "./src/mock/taskMock.js":
/*!******************************!*\
  !*** ./src/mock/taskMock.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/mock */ "./src/utils/mock.js");



utils_mock__WEBPACK_IMPORTED_MODULE_2__["default"].onGet('/api/tasks').reply(200, {
  tasks: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Update the API for the project',
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'days').add(1, 'hour'),
    members: ['/images/avatars/avatar_2.png', '/images/avatars/avatar_3.png', '/images/avatars/avatar_4.png', '/images/avatars/avatar_5.png', '/images/avatars/avatar_6.png', '/images/avatars/avatar_7.png']
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Redesign the landing page',
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()().add(2, 'day').add(1, 'hour'),
    members: ['/images/avatars/avatar_8.png', '/images/avatars/avatar_10.png', '/images/avatars/avatar_12.png']
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Solve the bug for the showState',
    deadline: moment__WEBPACK_IMPORTED_MODULE_1___default()(),
    members: ['/images/avatars/avatar_7.png']
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Release v1.0 Beta',
    deadline: null,
    members: ['/images/avatars/avatar_2.png', '/images/avatars/avatar_10.png']
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'GDPR Compliance',
    deadline: null,
    members: ['/images/avatars/avatar_5.png', '/images/avatars/avatar_2.png', '/images/avatars/avatar_6.png']
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Redesign Landing Page',
    deadline: null,
    members: ['/images/avatars/avatar_8.png']
  }]
});

/***/ }),

/***/ "./src/mock/userMock.js":
/*!******************************!*\
  !*** ./src/mock/userMock.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var utils_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/mock */ "./src/utils/mock.js");




utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/users').reply(200, {
  users: []
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/users/1/posts').reply(200, {
  posts: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    author: {
      name: 'Shen Zhi',
      avatar: '/images/avatars/avatar_11.png'
    },
    message: 'Just made this home screen for a project, what-cha thinkin?',
    media: '/images/posts/post_1.jpg',
    liked: true,
    likes: 24,
    comments: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      author: {
        name: 'Anje Keizer',
        avatar: '/images/avatars/avatar_5.png'
      },
      message: 'Could use some more statistics, but that’s me haha',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(3, 'hours')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      author: {
        name: 'Ava Gregoraci',
        avatar: '/images/avatars/avatar_8.png'
      },
      message: 'Hmm, honestly this looks nice but I would change the shadow though',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'hours')
    }],
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(4, 'hours')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    author: {
      name: 'Shen Zhi',
      avatar: '/images/avatars/avatar_11.png'
    },
    message: 'As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.',
    liked: false,
    likes: 65,
    comments: [{
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      author: {
        name: 'Clarke Gillebert',
        avatar: '/images/avatars/avatar_6.png'
      },
      message: 'That’s actually deep. Thanks for the design, would you consider making an interaction?',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(3, 'hours')
    }, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
      author: {
        name: 'Alexa Richardson',
        avatar: '/images/avatars/avatar_4.png'
      },
      message: 'It looks nice',
      created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'hours')
    }],
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(7, 'hours')
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/users/1/projects').reply(200, {
  projects: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Mella Full Screen Slider',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    price: '12,500',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    tags: [{
      text: 'Angular JS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].red[600]
    }],
    updated_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(24, 'minutes')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Dashboard Design',
    author: {
      name: 'Devias IO',
      avatar: ''
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    tags: [{
      text: 'React JS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].indigo[600]
    }],
    updated_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'hour')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    title: 'Ten80 Web Design',
    author: {
      name: 'Devias IO',
      avatar: ''
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    tags: [{
      text: 'Vue JS',
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].green[600]
    }],
    updated_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(16, 'hour')
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/users/1/reviews').reply(200, {
  reviews: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    rating: 4,
    message: 'Shen was really great during the all time session we created the project',
    reviewer: {
      name: 'Ekaterina Tankova',
      avatar: '/images/avatars/avatar_2.png'
    },
    project: {
      title: 'Mella Full Screen Slider',
      price: '5,240.00'
    },
    pricePerHour: '43.00',
    hours: 31,
    currency: '$',
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(4, 'hours')
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    rating: 5,
    reviewer: {
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png'
    },
    project: {
      title: 'Dashboard Design',
      price: '3,680.00'
    },
    pricePerHour: '38.00',
    hours: 76,
    currency: '$',
    message: 'Being the savage\'s bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale\'s back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship\'s steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.',
    created_at: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(8, 'days')
  }]
});
utils_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onGet('/api/users/1/connections').reply(200, {
  connections: [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Ekaterina Tankova',
    avatar: '/images/avatars/avatar_2.png',
    common: 12,
    status: 'connected'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Cao Yu',
    avatar: '/images/avatars/avatar_3.png',
    common: 10,
    status: 'rejected'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Alexa Richardson',
    avatar: '/images/avatars/avatar_4.png',
    common: 8,
    status: 'pending'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Adam Denisov',
    avatar: '/images/avatars/avatar_7.png',
    common: 5,
    status: 'not_connected'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()(),
    name: 'Ava Gregoraci',
    avatar: '/images/avatars/avatar_8.png',
    common: 1,
    status: 'connected'
  }]
});

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _sessionReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessionReducer */ "./src/reducers/sessionReducer.js");


const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  session: _sessionReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/sessionReducer.js":
/*!****************************************!*\
  !*** ./src/reducers/sessionReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! actions */ "./src/actions/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


const initialState = {
  /* loggedIn: true,
   user: {
     first_name: 'Shen',
     last_name: 'Zhi',
     email: 'demo@devias.io',
     avatar: '/images/avatars/avatar_11.png',
     bio: 'Brain Director',
     role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
   }
  */
  loggedIn: "",
  user: {
    role: 'ADMIN'
  },
  roles: ['ADMIN', 'USER', 'GUEST']
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions__WEBPACK_IMPORTED_MODULE_1__["SESSION_LOGIN"]:
      {
        return _objectSpread({}, state, {
          loggedIn: true,
          user: {
            first_name: 'Alba',
            last_name: 'Jessica',
            email: 'demo@devias.io',
            avatar: '/images/avatars/avatar_11.png',
            bio: 'Jalba',
            role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
            //  role: 'GUEST'

          }
        });
      }

    case actions__WEBPACK_IMPORTED_MODULE_1__["SESSION_LOGOUT"]:
      {
        return _objectSpread({}, state, {
          loggedIn: false,
          user: {
            role: 'GUEST'
          }
        });
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (sessionReducer);

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _layouts_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/Auth */ "./src/layouts/Auth/index.js");
/* harmony import */ var _layouts_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/Error */ "./src/layouts/Error/index.js");
/* harmony import */ var _layouts_Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/Dashboard */ "./src/layouts/Dashboard/index.js");
/* harmony import */ var _views_DashboardAnalytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/DashboardAnalytics */ "./src/views/DashboardAnalytics/index.js");
/* harmony import */ var _views_DashboardDefault__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/DashboardDefault */ "./src/views/DashboardDefault/index.js");
/* harmony import */ var _views_Overview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/Overview */ "./src/views/Overview/index.js");
/* harmony import */ var _views_Presentation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/Presentation */ "./src/views/Presentation/index.js");
var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/routes.js";

/* eslint-disable react/no-multi-comp */

/* eslint-disable react/display-name */









const routes = [{
  path: '/',
  exact: true,
  component: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/dashboards/default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })
}, {
  path: '/auth',
  component: _layouts_Auth__WEBPACK_IMPORTED_MODULE_2__["default"],
  routes: [{
    path: '/auth/login',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! views/Login */ "./src/views/Login/index.js")))
  }, {
    path: '/auth/register',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! views/Register */ "./src/views/Register/index.js")))
  }, {
    component: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: "/errors/error-404",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    })
  }]
}, {
  path: '/errors',
  component: _layouts_Error__WEBPACK_IMPORTED_MODULE_3__["default"],
  routes: [{
    path: '/errors/error-401',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! views/Error401 */ "./src/views/Error401/index.js")))
  }, {
    path: '/errors/error-404',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! views/Error404 */ "./src/views/Error404/index.js")))
  }, {
    path: '/errors/error-500',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! views/Error500 */ "./src/views/Error500/index.js")))
  }, {
    component: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: "/errors/error-404",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    })
  }]
}, {
  route: '*',
  component: _layouts_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"],
  routes: [{
    path: '/calendar',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(9), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! views/Calendar */ "./src/views/Calendar/index.js")))
  }, {
    path: '/changelog',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! views/Changelog */ "./src/views/Changelog/index.js")))
  }, {
    path: '/chat',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! views/Chat */ "./src/views/Chat/index.js")))
  }, {
    path: '/chat/:id',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! views/Chat */ "./src/views/Chat/index.js")))
  }, {
    path: '/dashboards/analytics',
    exact: true,
    component: _views_DashboardAnalytics__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, {
    path: '/dashboards/default',
    exact: true,
    component: _views_DashboardDefault__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, {
    path: '/invoices/:id',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! views/InvoiceDetails */ "./src/views/InvoiceDetails/index.js")))
  }, {
    path: '/kanban-board',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(7), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! views/KanbanBoard */ "./src/views/KanbanBoard/index.js")))
  }, {
    path: '/mail',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! views/Mail */ "./src/views/Mail/index.js")))
  }, {
    path: '/management/customers',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! views/CustomerManagementList */ "./src/views/CustomerManagementList/index.js")))
  }, {
    path: '/management/customers/:id',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! views/CustomerManagementDetails */ "./src/views/CustomerManagementDetails/index.js")))
  }, {
    path: '/management/customers/:id/:tab',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! views/CustomerManagementDetails */ "./src/views/CustomerManagementDetails/index.js")))
  }, {
    path: '/management/projects',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! views/ProjectManagementList */ "./src/views/ProjectManagementList/index.js")))
  }, {
    path: '/management/orders',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! views/OrderManagementList */ "./src/views/OrderManagementList/index.js")))
  }, {
    path: '/management/orders/:id',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! views/OrderManagementDetails */ "./src/views/OrderManagementDetails/index.js")))
  }, {
    path: '/overview',
    exact: true,
    component: _views_Overview__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, {
    path: '/presentation',
    exact: true,
    component: _views_Presentation__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, {
    path: '/profile/:id',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! views/Profile */ "./src/views/Profile/index.js")))
  }, {
    path: '/profile/:id/:tab',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! views/Profile */ "./src/views/Profile/index.js")))
  }, {
    path: '/projects/create',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! views/ProjectCreate */ "./src/views/ProjectCreate/index.js")))
  }, {
    path: '/projects/:id',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! views/ProjectDetails */ "./src/views/ProjectDetails/index.js")))
  }, {
    path: '/projects/:id/:tab',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! views/ProjectDetails */ "./src/views/ProjectDetails/index.js")))
  }, {
    path: '/projects',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! views/ProjectList */ "./src/views/ProjectList/index.js")))
  }, {
    path: '/settings',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! views/Settings */ "./src/views/Settings/index.js")))
  }, {
    path: '/settings/:tab',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! views/Settings */ "./src/views/Settings/index.js")))
  }, {
    path: '/social-feed',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! views/SocialFeed */ "./src/views/SocialFeed/index.js")))
  }, {
    path: '/getting-started',
    exact: true,
    component: Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.bind(null, /*! views/GettingStarted */ "./src/views/GettingStarted/index.js")))
  }, {
    component: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: "/errors/error-404",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: undefined
    })
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in projection, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/store/configureStore.js":
/*!*************************************!*\
  !*** ./src/store/configureStore.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers */ "./src/reducers/index.js");


 // import { createLogger } from 'redux-logger';

 // const loggerMiddleware = createLogger();

function configureStore(preloadedState = {}) {
  const middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]]; // loggerMiddleware

  const middlewareEnhancer = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(...enhancers); //const store = createStore(rootReducer, preloadedState, composedEnhancers);

  const globalState = localStorage.getItem('GLOBAL_STATE');
  const initialState = globalState ? JSON.parse(globalState) : undefined;
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, composedEnhancers, initialState); //const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: configureStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configureStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configureStore */ "./src/store/configureStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return _configureStore__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette */ "./src/theme/palette.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typography */ "./src/theme/typography.js");
/* harmony import */ var _overrides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overrides */ "./src/theme/overrides/index.js");




const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: _palette__WEBPACK_IMPORTED_MODULE_1__["default"],
  typography: _typography__WEBPACK_IMPORTED_MODULE_2__["default"],
  overrides: _overrides__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/theme/overrides/MuiButton.js":
/*!******************************************!*\
  !*** ./src/theme/overrides/MuiButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  contained: {
    boxShadow: '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
    backgroundColor: '#FFFFFF'
  }
});

/***/ }),

/***/ "./src/theme/overrides/MuiCardActions.js":
/*!***********************************************!*\
  !*** ./src/theme/overrides/MuiCardActions.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  root: {
    padding: '16px 24px'
  }
});

/***/ }),

/***/ "./src/theme/overrides/MuiCardContent.js":
/*!***********************************************!*\
  !*** ./src/theme/overrides/MuiCardContent.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  root: {
    padding: 24
  }
});

/***/ }),

/***/ "./src/theme/overrides/MuiCardHeader.js":
/*!**********************************************!*\
  !*** ./src/theme/overrides/MuiCardHeader.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  root: {
    padding: '16px 24px'
  }
});

/***/ }),

/***/ "./src/theme/overrides/MuiChip.js":
/*!****************************************!*\
  !*** ./src/theme/overrides/MuiChip.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  root: {
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blueGrey[50],
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blueGrey[900]
  },
  deletable: {
    '&:focus': {
      backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blueGrey[100]
    }
  }
});

/***/ }),

/***/ "./src/theme/overrides/MuiIconButton.js":
/*!**********************************************!*\
  !*** ./src/theme/overrides/MuiIconButton.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palette */ "./src/theme/palette.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  root: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].icon,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.03)'
    }
  }
});

/***/ }),

/***/ "./src/theme/overrides/MuiInputBase.js":
/*!*********************************************!*\
  !*** ./src/theme/overrides/MuiInputBase.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palette */ "./src/theme/palette.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  root: {},
  input: {
    '&::placeholder': {
      opacity: 1,
      color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.secondary
    }
  }
});

/***/ }),

/***/ "./src/theme/overrides/MuiLinearProgress.js":
/*!**************************************************!*\
  !*** ./src/theme/overrides/MuiLinearProgress.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  root: {
    borderRadius: 3,
    overflow: 'hidden'
  },
  colorPrimary: {
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blueGrey[50]
  }
});

/***/ }),

/***/ "./src/theme/overrides/MuiListItemIcon.js":
/*!************************************************!*\
  !*** ./src/theme/overrides/MuiListItemIcon.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palette */ "./src/theme/palette.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  root: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].icon,
    minWidth: 32
  }
});

/***/ }),

/***/ "./src/theme/overrides/MuiOutlinedInput.js":
/*!*************************************************!*\
  !*** ./src/theme/overrides/MuiOutlinedInput.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  root: {},
  notchedOutline: {
    borderColor: 'rgba(0,0,0,0.15)'
  }
});

/***/ }),

/***/ "./src/theme/overrides/MuiPaper.js":
/*!*****************************************!*\
  !*** ./src/theme/overrides/MuiPaper.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  root: {},
  elevation1: {
    boxShadow: '0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)'
  }
});

/***/ }),

/***/ "./src/theme/overrides/MuiTableCell.js":
/*!*********************************************!*\
  !*** ./src/theme/overrides/MuiTableCell.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../palette */ "./src/theme/palette.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../typography */ "./src/theme/typography.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ __webpack_exports__["default"] = ({
  root: _objectSpread({}, _typography__WEBPACK_IMPORTED_MODULE_2__["default"].body1, {
    borderBottom: "1px solid ".concat(_palette__WEBPACK_IMPORTED_MODULE_1__["default"].divider)
  })
});

/***/ }),

/***/ "./src/theme/overrides/MuiTableHead.js":
/*!*********************************************!*\
  !*** ./src/theme/overrides/MuiTableHead.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  root: {
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].grey[50]
  }
});

/***/ }),

/***/ "./src/theme/overrides/MuiTableRow.js":
/*!********************************************!*\
  !*** ./src/theme/overrides/MuiTableRow.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palette */ "./src/theme/palette.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  root: {
    '&$selected': {
      backgroundColor: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].background.default
    },
    '&$hover': {
      '&:hover': {
        backgroundColor: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].background.default
      }
    }
  }
});

/***/ }),

/***/ "./src/theme/overrides/MuiToggleButton.js":
/*!************************************************!*\
  !*** ./src/theme/overrides/MuiToggleButton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../palette */ "./src/theme/palette.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  root: {
    color: _palette__WEBPACK_IMPORTED_MODULE_1__["default"].icon,
    '&:hover': {
      backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].grey[100]
    },
    '&$selected': {
      backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].grey[50],
      color: _palette__WEBPACK_IMPORTED_MODULE_1__["default"].primary.main,
      '&:hover': {
        backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].grey[100]
      }
    },
    '&:first-child': {
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4
    },
    '&:last-child': {
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4
    }
  }
});

/***/ }),

/***/ "./src/theme/overrides/MuiTypography.js":
/*!**********************************************!*\
  !*** ./src/theme/overrides/MuiTypography.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  gutterBottom: {
    marginBottom: 8
  }
});

/***/ }),

/***/ "./src/theme/overrides/index.js":
/*!**************************************!*\
  !*** ./src/theme/overrides/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MuiButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MuiButton */ "./src/theme/overrides/MuiButton.js");
/* harmony import */ var _MuiCardActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MuiCardActions */ "./src/theme/overrides/MuiCardActions.js");
/* harmony import */ var _MuiCardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MuiCardContent */ "./src/theme/overrides/MuiCardContent.js");
/* harmony import */ var _MuiCardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MuiCardHeader */ "./src/theme/overrides/MuiCardHeader.js");
/* harmony import */ var _MuiChip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MuiChip */ "./src/theme/overrides/MuiChip.js");
/* harmony import */ var _MuiIconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MuiIconButton */ "./src/theme/overrides/MuiIconButton.js");
/* harmony import */ var _MuiInputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MuiInputBase */ "./src/theme/overrides/MuiInputBase.js");
/* harmony import */ var _MuiLinearProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MuiLinearProgress */ "./src/theme/overrides/MuiLinearProgress.js");
/* harmony import */ var _MuiListItemIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MuiListItemIcon */ "./src/theme/overrides/MuiListItemIcon.js");
/* harmony import */ var _MuiOutlinedInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MuiOutlinedInput */ "./src/theme/overrides/MuiOutlinedInput.js");
/* harmony import */ var _MuiPaper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MuiPaper */ "./src/theme/overrides/MuiPaper.js");
/* harmony import */ var _MuiTableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MuiTableHead */ "./src/theme/overrides/MuiTableHead.js");
/* harmony import */ var _MuiTableCell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MuiTableCell */ "./src/theme/overrides/MuiTableCell.js");
/* harmony import */ var _MuiTableRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MuiTableRow */ "./src/theme/overrides/MuiTableRow.js");
/* harmony import */ var _MuiToggleButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MuiToggleButton */ "./src/theme/overrides/MuiToggleButton.js");
/* harmony import */ var _MuiTypography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MuiTypography */ "./src/theme/overrides/MuiTypography.js");
















/* harmony default export */ __webpack_exports__["default"] = ({
  MuiButton: _MuiButton__WEBPACK_IMPORTED_MODULE_0__["default"],
  MuiCardActions: _MuiCardActions__WEBPACK_IMPORTED_MODULE_1__["default"],
  MuiCardContent: _MuiCardContent__WEBPACK_IMPORTED_MODULE_2__["default"],
  MuiCardHeader: _MuiCardHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
  MuiChip: _MuiChip__WEBPACK_IMPORTED_MODULE_4__["default"],
  MuiIconButton: _MuiIconButton__WEBPACK_IMPORTED_MODULE_5__["default"],
  MuiInputBase: _MuiInputBase__WEBPACK_IMPORTED_MODULE_6__["default"],
  MuiLinearProgress: _MuiLinearProgress__WEBPACK_IMPORTED_MODULE_7__["default"],
  MuiListItemIcon: _MuiListItemIcon__WEBPACK_IMPORTED_MODULE_8__["default"],
  MuiOutlinedInput: _MuiOutlinedInput__WEBPACK_IMPORTED_MODULE_9__["default"],
  MuiPaper: _MuiPaper__WEBPACK_IMPORTED_MODULE_10__["default"],
  MuiTableHead: _MuiTableHead__WEBPACK_IMPORTED_MODULE_11__["default"],
  MuiTableCell: _MuiTableCell__WEBPACK_IMPORTED_MODULE_12__["default"],
  MuiTableRow: _MuiTableRow__WEBPACK_IMPORTED_MODULE_13__["default"],
  MuiToggleButton: _MuiToggleButton__WEBPACK_IMPORTED_MODULE_14__["default"],
  MuiTypography: _MuiTypography__WEBPACK_IMPORTED_MODULE_15__["default"]
});

/***/ }),

/***/ "./src/theme/palette.js":
/*!******************************!*\
  !*** ./src/theme/palette.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

const white = '#FFFFFF';
const black = '#000000';
/* harmony default export */ __webpack_exports__["default"] = ({
  black,
  white,
  primary: {
    contrastText: white,
    dark: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].indigo[900],
    main: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].indigo[500],
    light: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].indigo[100]
  },
  secondary: {
    contrastText: white,
    dark: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blue[900],
    main: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blue['A400'],
    light: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blue['A400']
  },
  error: {
    contrastText: white,
    dark: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].red[900],
    main: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].red[600],
    light: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].red[400]
  },
  text: {
    primary: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blueGrey[900],
    secondary: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blueGrey[600],
    link: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blue[600]
  },
  link: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blue[800],
  icon: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blueGrey[600],
  background: {
    default: '#F4F6F8',
    paper: white
  },
  divider: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].grey[200]
});

/***/ }),

/***/ "./src/theme/typography.js":
/*!*********************************!*\
  !*** ./src/theme/typography.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette */ "./src/theme/palette.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  h1: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontWeight: 500,
    fontSize: '35px',
    letterSpacing: '-0.24px',
    lineHeight: '40px'
  },
  h2: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontWeight: 500,
    fontSize: '29px',
    letterSpacing: '-0.24px',
    lineHeight: '32px'
  },
  h3: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontWeight: 500,
    fontSize: '24px',
    letterSpacing: '-0.06px',
    lineHeight: '28px'
  },
  h4: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontWeight: 500,
    fontSize: '20px',
    letterSpacing: '-0.06px',
    lineHeight: '24px'
  },
  h5: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontWeight: 500,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '20px'
  },
  h6: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontWeight: 500,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px'
  },
  subtitle1: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '25px'
  },
  subtitle2: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.secondary,
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px'
  },
  body1: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px'
  },
  body2: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.secondary,
    fontSize: '12px',
    letterSpacing: '-0.04px',
    lineHeight: '18px'
  },
  button: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.primary,
    fontSize: '14px'
  },
  caption: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.secondary,
    fontSize: '11px',
    letterSpacing: '0.33px',
    lineHeight: '13px'
  },
  overline: {
    color: _palette__WEBPACK_IMPORTED_MODULE_0__["default"].text.secondary,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase'
  }
});

/***/ }),

/***/ "./src/utils/axios.js":
/*!****************************!*\
  !*** ./src/utils/axios.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/utils/bytesToSize.js":
/*!**********************************!*\
  !*** ./src/utils/bytesToSize.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
});

/***/ }),

/***/ "./src/utils/getInitials.js":
/*!**********************************!*\
  !*** ./src/utils/getInitials.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((name = '') => name.replace(/\s+/, ' ').split(' ').slice(0, 2).map(v => v && v[0].toUpperCase()).join(''));

/***/ }),

/***/ "./src/utils/gradients.js":
/*!********************************!*\
  !*** ./src/utils/gradients.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


const buildGradient = (start, end) => "linear-gradient(180deg, ".concat(start, " 0%, ").concat(end, " 100%)");

const grey = buildGradient(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].grey[400], _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].grey[600]);
const blue = buildGradient(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blue[700], _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].blue[900]);
const indigo = buildGradient(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].indigo[400], _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].indigo[600]);
const green = buildGradient(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].green[400], _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].green[600]);
const orange = buildGradient(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].orange[400], _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].orange[700]);
const red = buildGradient(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].red[500], _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["colors"].red[700]);
/* harmony default export */ __webpack_exports__["default"] = ({
  grey,
  blue,
  indigo,
  green,
  orange,
  red
});

/***/ }),

/***/ "./src/utils/mock.js":
/*!***************************!*\
  !*** ./src/utils/mock.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios_mock_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios-mock-adapter */ "./node_modules/axios-mock-adapter/src/index.js");
/* harmony import */ var axios_mock_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios_mock_adapter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axios */ "./src/utils/axios.js");


const instance = new axios_mock_adapter__WEBPACK_IMPORTED_MODULE_0___default.a(_axios__WEBPACK_IMPORTED_MODULE_1__["default"], {
  delayResponse: 0
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/utils/useRouter.js":
/*!********************************!*\
  !*** ./src/utils/useRouter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");


/* harmony default export */ __webpack_exports__["default"] = (() => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(react_router__WEBPACK_IMPORTED_MODULE_1__["__RouterContext"]));

/***/ }),

/***/ "./src/views/DashboardAnalytics/DashboardAnalytics.js":
/*!************************************************************!*\
  !*** ./src/views/DashboardAnalytics/DashboardAnalytics.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components */ "./src/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/views/DashboardAnalytics/components/index.js");
var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardAnalytics/DashboardAnalytics.js";





const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    '& > *': {
      height: '100%'
    }
  }
}));

const DashboardAnalytics = () => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__["Page"], {
    className: classes.root,
    title: "Analytics Dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.container,
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Overview"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 8,
    xl: 9,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["FinancialStats"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 4,
    xl: 3,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["EarningsSegmentation"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 8,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["LatestOrders"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 4,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["CustomerActivity"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 8,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["MostProfitableProducts"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 4,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["TopReferrals"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardAnalytics);

/***/ }),

/***/ "./src/views/DashboardAnalytics/components/CustomerActivity/CustomerActivity.js":
/*!**************************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/CustomerActivity/CustomerActivity.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var utils_axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/axios */ "./src/utils/axios.js");
/* harmony import */ var utils_getInitials__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/getInitials */ "./src/utils/getInitials.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardAnalytics/components/CustomerActivity/CustomerActivity.js";









const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  root: {},
  statsContainer: {
    display: 'flex'
  },
  statsItem: {
    padding: theme.spacing(3),
    flexGrow: 1,
    '&:first-of-type': {
      borderRight: "1px solid ".concat(theme.palette.divider)
    }
  },
  content: {
    padding: 0
  },
  date: {
    whiteSpace: 'nowrap'
  }
}));

const CustomerActivity = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        customers = _useState2[0],
        setCustomers = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let mounted = true;

    const fetchCustomers = () => {
      utils_axios__WEBPACK_IMPORTED_MODULE_9__["default"].get('/api/dashboard/customer-activity').then(response => {
        if (mounted) {
          setCustomers(response.data.customers);
        }
      });
    };

    fetchCustomers();
    return () => {
      mounted = false;
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
    title: "Customer Activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.statsContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.statsItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    align: "center",
    component: "h4",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "Registered"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    align: "center",
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "15,245")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.statsItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    align: "center",
    component: "h4",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "Online"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    align: "center",
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "357"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["List"], {
    disablePadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, customers.map((customer, i) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    divider: i < customers.length - 1,
    key: customer.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItemAvatar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
    alt: "Customer",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    src: customer.author.avatar,
    to: "/management/customers/1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, Object(utils_getInitials__WEBPACK_IMPORTED_MODULE_10__["default"])(customer.author.name))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItemText"], {
    disableTypography: true,
    primary: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
      to: "/management/customers/1",
      variant: "h6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: undefined
    }, customer.author.name),
    secondary: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
      variant: "body2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: undefined
    }, customer.description, " |", ' ', customer.type === 'payment' && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      color: "inherit",
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
      to: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: undefined
    }, "See invoice")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    className: classes.date,
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, moment__WEBPACK_IMPORTED_MODULE_5___default()(customer.created_at).fromNow()))))));
};

CustomerActivity.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CustomerActivity);

/***/ }),

/***/ "./src/views/DashboardAnalytics/components/CustomerActivity/index.js":
/*!***************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/CustomerActivity/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerActivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerActivity */ "./src/views/DashboardAnalytics/components/CustomerActivity/CustomerActivity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CustomerActivity__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardAnalytics/components/EarningsSegmentation/EarningsSegmentation.js":
/*!**********************************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/EarningsSegmentation/EarningsSegmentation.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var utils_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/axios */ "./src/utils/axios.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components */ "./src/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "./src/views/DashboardAnalytics/components/EarningsSegmentation/components/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardAnalytics/components/EarningsSegmentation/EarningsSegmentation.js";








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {},
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  chartContainer: {
    padding: theme.spacing(3)
  },
  chart: {
    height: 281
  },
  statsContainer: {
    display: 'flex'
  },
  statsItem: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(3, 2),
    '&:not(:last-of-type)': {
      borderRight: "1px solid ".concat(theme.palette.divider)
    }
  }
}));

const EarningsSegmentation = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        earnings = _useState2[0],
        setEarnings = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let mounted = true;

    const fetchEarnings = () => {
      utils_axios__WEBPACK_IMPORTED_MODULE_7__["default"].get('/api/dashboard/earnings').then(response => {
        if (mounted) {
          setEarnings(response.data.earnings);
        }
      });
    };

    fetchEarnings();
    return () => {
      mounted = false;
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], {
    action: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_8__["GenericMoreButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }),
    title: "Earnings Segmentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardContent"], {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.chartContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["Chart"], {
    className: classes.chart,
    data: earnings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.statsContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, earnings.map(earning => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.statsItem,
    key: earning.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    align: "center",
    component: "h6",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, earning.label), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    align: "center",
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, earning.value, "%"))))));
};

EarningsSegmentation.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (EarningsSegmentation);

/***/ }),

/***/ "./src/views/DashboardAnalytics/components/EarningsSegmentation/components/Chart/Chart.js":
/*!************************************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/EarningsSegmentation/components/Chart/Chart.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardAnalytics/components/EarningsSegmentation/components/Chart/Chart.js";





const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(() => ({
  root: {
    position: 'relative'
  }
}));

const Chart = props => {
  const dataProp = props.data,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["data", "className"]);

  const classes = useStyles();
  const theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  const data = {
    datasets: [{
      data: [],
      backgroundColor: [],
      borderWidth: 8,
      borderColor: theme.palette.white,
      hoverBorderColor: theme.palette.white
    }],
    labels: []
  };

  for (const item of dataProp) {
    data.datasets[0].data.push(item.value);
    data.datasets[0].backgroundColor.push(item.color);
    data.labels.push(item.label);
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 80,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      caretSize: 10,
      yPadding: 20,
      xPadding: 20,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary,
      callbacks: {
        label: function (tooltipItem, data) {
          const label = data['labels'][tooltipItem['index']];
          const value = data['datasets'][0]['data'][tooltipItem['index']];
          return "".concat(label, ": ").concat(value, "%");
        }
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__["Doughnut"], {
    data: data,
    options: options,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }));
};

Chart.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./src/views/DashboardAnalytics/components/EarningsSegmentation/components/Chart/index.js":
/*!************************************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/EarningsSegmentation/components/Chart/index.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart */ "./src/views/DashboardAnalytics/components/EarningsSegmentation/components/Chart/Chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Chart__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardAnalytics/components/EarningsSegmentation/components/index.js":
/*!******************************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/EarningsSegmentation/components/index.js ***!
  \******************************************************************************************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart */ "./src/views/DashboardAnalytics/components/EarningsSegmentation/components/Chart/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _Chart__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardAnalytics/components/EarningsSegmentation/index.js":
/*!*******************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/EarningsSegmentation/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EarningsSegmentation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EarningsSegmentation */ "./src/views/DashboardAnalytics/components/EarningsSegmentation/EarningsSegmentation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _EarningsSegmentation__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardAnalytics/components/FinancialStats/FinancialStats.js":
/*!**********************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/FinancialStats/FinancialStats.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components */ "./src/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./src/views/DashboardAnalytics/components/FinancialStats/components/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardAnalytics/components/FinancialStats/FinancialStats.js";








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  chart: {
    padding: theme.spacing(4, 2, 0, 2),
    height: 400
  }
}));

const FinancialStats = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  const data = {
    thisYear: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
    lastYear: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
  };
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], {
    action: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["GenericMoreButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }),
    title: "Financial Stats",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardContent"], {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["Chart"], {
    className: classes.chart,
    data: data,
    labels: labels,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })))));
};

FinancialStats.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (FinancialStats);

/***/ }),

/***/ "./src/views/DashboardAnalytics/components/FinancialStats/components/Chart/Chart.js":
/*!******************************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/FinancialStats/components/Chart/Chart.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardAnalytics/components/FinancialStats/components/Chart/Chart.js";






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(() => ({
  root: {
    position: 'relative'
  }
}));

const Chart = props => {
  const dataProp = props.data,
        labels = props.labels,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["data", "labels", "className"]);

  const classes = useStyles();
  const theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  const data = {
    datasets: [{
      label: 'This year',
      backgroundColor: theme.palette.primary.main,
      data: dataProp.thisYear
    }, {
      label: 'Last year',
      backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].grey[200],
      data: dataProp.lastYear
    }],
    labels
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cornerRadius: 20,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    scales: {
      xAxes: [{
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          padding: 20,
          fontColor: theme.palette.text.secondary
        }
      }],
      yAxes: [{
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider
        },
        ticks: {
          padding: 20,
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0,
          maxTicksLimit: 5,
          callback: value => {
            return value > 0 ? value + 'K' : value;
          }
        }
      }]
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      caretSize: 10,
      yPadding: 20,
      xPadding: 20,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary,
      callbacks: {
        title: () => {},
        label: tooltipItem => {
          let label = "This year: ".concat(tooltipItem.yLabel);

          if (tooltipItem.yLabel > 0) {
            label += 'K';
          }

          return label;
        }
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__["Bar"], {
    data: data,
    options: options,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }));
};

Chart.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  labels: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./src/views/DashboardAnalytics/components/FinancialStats/components/Chart/index.js":
/*!******************************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/FinancialStats/components/Chart/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart */ "./src/views/DashboardAnalytics/components/FinancialStats/components/Chart/Chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Chart__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardAnalytics/components/FinancialStats/components/index.js":
/*!************************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/FinancialStats/components/index.js ***!
  \************************************************************************************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart */ "./src/views/DashboardAnalytics/components/FinancialStats/components/Chart/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _Chart__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardAnalytics/components/FinancialStats/index.js":
/*!*************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/FinancialStats/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FinancialStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FinancialStats */ "./src/views/DashboardAnalytics/components/FinancialStats/FinancialStats.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FinancialStats__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardAnalytics/components/Header/Header.js":
/*!******************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/Header/Header.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _material_ui_icons_CalendarTodayOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/CalendarTodayOutlined */ "./node_modules/@material-ui/icons/CalendarTodayOutlined.js");
/* harmony import */ var _material_ui_icons_CalendarTodayOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarTodayOutlined__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardAnalytics/components/Header/Header.js";








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  root: {},
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Header = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(7, 'days')),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        startDate = _useState2[0],
        setStartDate = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(moment__WEBPACK_IMPORTED_MODULE_5___default()()),
        _useState4 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        endDate = _useState4[0],
        setEndDate = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
        _useState6 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        selectEdge = _useState6[0],
        setSelectEdge = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(moment__WEBPACK_IMPORTED_MODULE_5___default()()),
        _useState8 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
        calendarDate = _useState8[0],
        setCalendarDate = _useState8[1];

  const handleCalendarOpen = edge => {
    setSelectEdge(edge);
  };

  const handleCalendarChange = date => {
    setCalendarDate(date);
  };

  const handleCalendarClose = () => {
    setCalendarDate(moment__WEBPACK_IMPORTED_MODULE_5___default()());
    setSelectEdge(null);
  };

  const handleCalendarAccept = date => {
    setCalendarDate(moment__WEBPACK_IMPORTED_MODULE_5___default()());

    if (selectEdge === 'start') {
      setStartDate(date);

      if (moment__WEBPACK_IMPORTED_MODULE_5___default()(date).isAfter(endDate)) {
        setEndDate(date);
      }
    } else {
      setEndDate(date);

      if (moment__WEBPACK_IMPORTED_MODULE_5___default()(date).isBefore(startDate)) {
        setStartDate(date);
      }
    }

    setSelectEdge(null);
  };

  const open = Boolean(selectEdge);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    justify: "space-between",
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    lg: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    component: "h2",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "Analytics"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    component: "h1",
    gutterBottom: true,
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "Finance Overview")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    className: classes.dates,
    item: true,
    lg: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: () => handleCalendarOpen('start'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_CalendarTodayOutlined__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.calendarTodayIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }), startDate.format('DD MM YYYY')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: () => handleCalendarOpen('end'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_CalendarTodayOutlined__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.calendarTodayIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }), endDate.format('DD MM YYYY'))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["DatePicker"], {
    maxDate: moment__WEBPACK_IMPORTED_MODULE_5___default()(),
    onAccept: handleCalendarAccept,
    onChange: handleCalendarChange,
    onClose: handleCalendarClose,
    open: open,
    style: {
      display: 'none'
    } // Temporal fix to hide the input element
    ,
    value: calendarDate,
    variant: "dialog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }));
};

Header.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
Header.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/views/DashboardAnalytics/components/Header/index.js":
/*!*****************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/Header/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/views/DashboardAnalytics/components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardAnalytics/components/LatestOrders/LatestOrders.js":
/*!******************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/LatestOrders/LatestOrders.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "./node_modules/@material-ui/icons/ArrowForward.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/axios */ "./src/utils/axios.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components */ "./src/components/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardAnalytics/components/LatestOrders/LatestOrders.js";










const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  progressContainer: {
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
  actions: {
    justifyContent: 'flex-end'
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1)
  }
}));
const labelColors = {
  complete: _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["colors"].green[600],
  pending: _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["colors"].orange[600],
  rejected: _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["colors"].red[600]
};

const LatestOrders = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        orders = _useState2[0],
        setOrders = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let mounted = true;

    const fetchOrders = () => {
      utils_axios__WEBPACK_IMPORTED_MODULE_10__["default"].get('/api/dashboard/latest-orders').then(response => {
        if (mounted) {
          setOrders(response.data.orders);
        }
      });
    };

    fetchOrders();
    return () => {
      mounted = false;
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
    action: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_11__["GenericMoreButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: undefined
    }),
    title: "Latest Orders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    options: {
      suppressScrollY: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, orders && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Table"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableHead"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableRow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    sortDirection: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    enterDelay: 300,
    title: "Sort",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableSortLabel"], {
    active: true,
    direction: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "Date"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "Customer"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Items"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Total"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, "Status"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "Actions"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, orders.map(order => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableRow"], {
    hover: true,
    key: order.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, order.ref), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, order.customer.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, order.items), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    className: classes.totalCell,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, order.currency, " ", order.value), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_11__["Label"], {
    color: labelColors[order.status],
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, order.status)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    color: "primary",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    size: "small",
    to: 'management/orders/1',
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, "View"))))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardActions"], {
    className: classes.actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    color: "primary",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    size: "small",
    to: "management/orders",
    variant: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, "See all", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.arrowForwardIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }))));
};

LatestOrders.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (LatestOrders);

/***/ }),

/***/ "./src/views/DashboardAnalytics/components/LatestOrders/index.js":
/*!***********************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/LatestOrders/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LatestOrders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LatestOrders */ "./src/views/DashboardAnalytics/components/LatestOrders/LatestOrders.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _LatestOrders__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardAnalytics/components/MostProfitableProducts/MostProfitableProducts.js":
/*!**************************************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/MostProfitableProducts/MostProfitableProducts.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "./node_modules/@material-ui/icons/ArrowForward.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/axios */ "./src/utils/axios.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components */ "./src/components/index.js");
/* harmony import */ var _components_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/CircularProgress */ "./src/views/DashboardAnalytics/components/MostProfitableProducts/components/CircularProgress/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardAnalytics/components/MostProfitableProducts/MostProfitableProducts.js";











const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  root: {},
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  inner: {
    minWidth: 700
  },
  details: {
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    marginRight: theme.spacing(2),
    flexShrink: 0,
    height: 56,
    width: 56
  },
  subscriptions: {
    fontWeight: theme.typography.fontWeightMedium
  },
  price: {
    whiteSpace: 'nowrap'
  },
  value: {
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["colors"].green[600],
    fontWeight: theme.typography.fontWeightMedium
  },
  conversion: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  conversionStats: {
    whiteSpace: 'nowrap',
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1)
  }
}));

const MostProfitableProducts = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        products = _useState2[0],
        setProducts = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let mounted = true;

    const fetchProducts = () => {
      utils_axios__WEBPACK_IMPORTED_MODULE_10__["default"].get('/api/dashboard/profitable-products').then(response => {
        if (mounted) {
          setProducts(response.data.products);
        }
      });
    };

    fetchProducts();
    return () => {
      mounted = false;
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
    action: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_11__["GenericMoreButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: undefined
    }),
    title: "Most Profitable Products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Table"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, products.map(product => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableRow"], {
    hover: true,
    key: product.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: "Product",
    className: classes.image,
    src: product.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, product.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.subscriptions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, product.subscriptions), ' ', "Active")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, "Price"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    className: classes.price,
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, product.currency, product.price), ' ', "monthly")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.conversion,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.conversionStats,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    align: "right",
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, product.progress, "%"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, "Conversion Rate")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CircularProgress__WEBPACK_IMPORTED_MODULE_12__["default"], {
    value: product.progress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  })))))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardActions"], {
    className: classes.actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    color: "primary",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    size: "small",
    to: "#",
    variant: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, "See all", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.arrowForwardIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }))));
};

MostProfitableProducts.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (MostProfitableProducts);

/***/ }),

/***/ "./src/views/DashboardAnalytics/components/MostProfitableProducts/components/CircularProgress/CircularProgress.js":
/*!************************************************************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/MostProfitableProducts/components/CircularProgress/CircularProgress.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardAnalytics/components/MostProfitableProducts/components/CircularProgress/CircularProgress.js";




const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    width: 56,
    height: 56
  },
  circle1: {
    stroke: 'rgba(0,0,0,0.05)',
    fill: 'none',
    strokeWidth: 4
  },
  circle2: {
    stroke: theme.palette.primary.main,
    fill: 'none',
    strokeWidth: 4,
    animation: '$progress 1s ease-out forwards'
  },
  '@keyframes progress': {
    '0%': {
      strokeDasharray: '0 100'
    }
  }
}));

const CircularProgress = props => {
  const value = props.value,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["value", "className"]);

  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    viewBox: "0 0 36 36",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: classes.circle1,
    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
    strokeDasharray: "100, 100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: classes.circle2,
    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
    strokeDasharray: "".concat(value, ", 100"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  })));
};

CircularProgress.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CircularProgress);

/***/ }),

/***/ "./src/views/DashboardAnalytics/components/MostProfitableProducts/components/CircularProgress/index.js":
/*!*************************************************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/MostProfitableProducts/components/CircularProgress/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CircularProgress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircularProgress */ "./src/views/DashboardAnalytics/components/MostProfitableProducts/components/CircularProgress/CircularProgress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CircularProgress__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardAnalytics/components/MostProfitableProducts/index.js":
/*!*********************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/MostProfitableProducts/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MostProfitableProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MostProfitableProducts */ "./src/views/DashboardAnalytics/components/MostProfitableProducts/MostProfitableProducts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MostProfitableProducts__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardAnalytics/components/Overview/Overview.js":
/*!**********************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/Overview/Overview.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components */ "./src/components/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardAnalytics/components/Overview/Overview.js";






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {},
  content: {
    padding: 0
  },
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: "1px solid ".concat(theme.palette.divider)
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: "1px solid ".concat(theme.palette.divider)
      }
    }
  },
  valueContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginLeft: theme.spacing(1)
  }
}));

const Overview = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  const data = {
    income: '854,355.00',
    expanses: '373,250.50',
    profit: '123,532.00',
    subscriptions: '26,000'
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    alignItems: "center",
    container: true,
    justify: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    className: classes.item,
    item: true,
    md: 3,
    sm: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "h2",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "Total Income"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.valueContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "$", data.income), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    className: classes.label,
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["colors"].green[600],
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "+25%"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    className: classes.item,
    item: true,
    md: 3,
    sm: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "h2",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "Total Expanses"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.valueContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "$", data.expanses), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    className: classes.label,
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["colors"].green[600],
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "+12%"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    className: classes.item,
    item: true,
    md: 3,
    sm: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "h2",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "Net Profit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.valueContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, data.profit), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    className: classes.label,
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["colors"].red[600],
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, "-20%"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    className: classes.item,
    item: true,
    md: 3,
    sm: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "h2",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, "Active Subscriptions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.valueContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, data.subscriptions)))));
};

Overview.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Overview);

/***/ }),

/***/ "./src/views/DashboardAnalytics/components/Overview/index.js":
/*!*******************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/Overview/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Overview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overview */ "./src/views/DashboardAnalytics/components/Overview/Overview.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Overview__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardAnalytics/components/TopReferrals/TopReferrals.js":
/*!******************************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/TopReferrals/TopReferrals.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "./node_modules/@material-ui/icons/ArrowForward.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utils_axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/axios */ "./src/utils/axios.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components */ "./src/components/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardAnalytics/components/TopReferrals/TopReferrals.js";









const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flexGrow: 1,
    padding: 0
  },
  avatar: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.white
  },
  actions: {
    justifyContent: 'flex-end'
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1)
  }
}));

const TopReferrals = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        referrals = _useState2[0],
        setReferrals = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let mounted = true;

    const fetchReferrals = () => {
      utils_axios__WEBPACK_IMPORTED_MODULE_9__["default"].get('/api/dashboard/top-referrals').then(response => {
        if (mounted) {
          setReferrals(response.data.referrals);
        }
      });
    };

    fetchReferrals();
    return () => {
      mounted = false;
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
    action: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_10__["GenericMoreButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }),
    title: "Top Referrals",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardContent"], {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["List"], {
    disablePadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, referrals.map((referral, i) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
    divider: i < referrals.length - 1,
    key: referral.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItemAvatar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Avatar"], {
    className: classes.avatar,
    size: "small",
    style: {
      backgroundColor: referral.color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, referral.initials)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItemText"], {
    primary: referral.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, referral.value))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardActions"], {
    className: classes.actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    color: "primary",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    size: "small",
    to: "#",
    variant: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, "See all", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.arrowForwardIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }))));
};

TopReferrals.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (TopReferrals);

/***/ }),

/***/ "./src/views/DashboardAnalytics/components/TopReferrals/index.js":
/*!***********************************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/TopReferrals/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopReferrals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopReferrals */ "./src/views/DashboardAnalytics/components/TopReferrals/TopReferrals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TopReferrals__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardAnalytics/components/index.js":
/*!**********************************************************!*\
  !*** ./src/views/DashboardAnalytics/components/index.js ***!
  \**********************************************************/
/*! exports provided: EarningsSegmentation, FinancialStats, Header, MostProfitableProducts, Overview, TopReferrals, CustomerActivity, LatestOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EarningsSegmentation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EarningsSegmentation */ "./src/views/DashboardAnalytics/components/EarningsSegmentation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EarningsSegmentation", function() { return _EarningsSegmentation__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _FinancialStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FinancialStats */ "./src/views/DashboardAnalytics/components/FinancialStats/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinancialStats", function() { return _FinancialStats__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/views/DashboardAnalytics/components/Header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _MostProfitableProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MostProfitableProducts */ "./src/views/DashboardAnalytics/components/MostProfitableProducts/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MostProfitableProducts", function() { return _MostProfitableProducts__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Overview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Overview */ "./src/views/DashboardAnalytics/components/Overview/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overview", function() { return _Overview__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _TopReferrals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TopReferrals */ "./src/views/DashboardAnalytics/components/TopReferrals/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopReferrals", function() { return _TopReferrals__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _CustomerActivity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomerActivity */ "./src/views/DashboardAnalytics/components/CustomerActivity/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerActivity", function() { return _CustomerActivity__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _LatestOrders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LatestOrders */ "./src/views/DashboardAnalytics/components/LatestOrders/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LatestOrders", function() { return _LatestOrders__WEBPACK_IMPORTED_MODULE_7__["default"]; });










/***/ }),

/***/ "./src/views/DashboardAnalytics/index.js":
/*!***********************************************!*\
  !*** ./src/views/DashboardAnalytics/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardAnalytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardAnalytics */ "./src/views/DashboardAnalytics/DashboardAnalytics.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DashboardAnalytics__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/DashboardDefault.js":
/*!********************************************************!*\
  !*** ./src/views/DashboardDefault/DashboardDefault.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var utils_useRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/useRouter */ "./src/utils/useRouter.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components */ "./src/components/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./src/store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_components_AuthGuard_AuthGuard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/components/AuthGuard/AuthGuard */ "./src/components/AuthGuard/AuthGuard.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./src/views/DashboardDefault/components/index.js");
var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardDefault/DashboardDefault.js";









const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const DashboardDefault = () => {
  const classes = useStyles();
  const session = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.session); //console.log(session);

  Object(_src_components_AuthGuard_AuthGuard__WEBPACK_IMPORTED_MODULE_7__["default"])(session);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_4__["Page"], {
    className: classes.root,
    title: "Default Dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.container,
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 3,
    sm: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["TodaysMoney"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 3,
    sm: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["NewProjects"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 3,
    sm: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["SystemHealth"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 3,
    sm: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["RoiPerCustomer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 3,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["RealTime"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 9,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["PerformanceOverTime"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 5,
    xl: 4,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["TeamTasks"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 7,
    xl: 8,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["LatestProjects"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardDefault);

/***/ }),

/***/ "./src/views/DashboardDefault/components/Header/Header.js":
/*!****************************************************************!*\
  !*** ./src/views/DashboardDefault/components/Header/Header.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardDefault/components/Header/Header.js";





const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {},
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  startDateButton: {
    marginRight: theme.spacing(1)
  },
  endDateButton: {
    marginLeft: theme.spacing(1)
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Header = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  const data = {
    name: 'Shen Zhi'
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "h2",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "h1",
    gutterBottom: true,
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Good Morning, ", data.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Here's what's happening"));
};

Header.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
Header.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/views/DashboardDefault/components/Header/index.js":
/*!***************************************************************!*\
  !*** ./src/views/DashboardDefault/components/Header/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/views/DashboardDefault/components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/components/LatestProjects/LatestProjects.js":
/*!********************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/LatestProjects/LatestProjects.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "./node_modules/@material-ui/icons/ArrowForward.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/axios */ "./src/utils/axios.js");
/* harmony import */ var utils_getInitials__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/getInitials */ "./src/utils/getInitials.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components */ "./src/components/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardDefault/components/LatestProjects/LatestProjects.js";











const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 900
  },
  author: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(1)
  },
  tags: {
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  actions: {
    justifyContent: 'flex-end'
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1)
  }
}));

const LatestProjects = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        projects = _useState2[0],
        setProjects = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let mounted = true;

    const fetchProjects = () => {
      utils_axios__WEBPACK_IMPORTED_MODULE_10__["default"].get('/api/dashboard/latest-projects').then(response => {
        if (mounted) {
          setProjects(response.data.projects);
        }
      });
    };

    fetchProjects();
    return () => {
      mounted = false;
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
    action: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_12__["GenericMoreButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: undefined
    }),
    title: "Latest projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    options: {
      suppressScrollY: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Table"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableHead"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableRow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    sortDirection: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    enterDelay: 300,
    title: "Sort",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableSortLabel"], {
    active: true,
    direction: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "Name"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Owner"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Amount"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, "Tags"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "Actions"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, projects.map(project => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableRow"], {
    hover: true,
    key: project.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, project.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.author,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
    alt: "Author",
    className: classes.avatar,
    src: project.author.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, Object(utils_getInitials__WEBPACK_IMPORTED_MODULE_11__["default"])(project.author.name)), project.author.name)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, project.currency, project.price), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.tags,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, project.tags.map(tag => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_12__["Label"], {
    color: tag.color,
    key: tag.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, tag.text)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    color: "primary",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    size: "small",
    to: "/projects/1/overview",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, "View"))))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardActions"], {
    className: classes.actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    color: "primary",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    size: "small",
    to: "/management/projects",
    variant: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, "See all", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.arrowForwardIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }))));
};

LatestProjects.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (LatestProjects);

/***/ }),

/***/ "./src/views/DashboardDefault/components/LatestProjects/index.js":
/*!***********************************************************************!*\
  !*** ./src/views/DashboardDefault/components/LatestProjects/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LatestProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LatestProjects */ "./src/views/DashboardDefault/components/LatestProjects/LatestProjects.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _LatestProjects__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/components/NewProjects/NewProjects.js":
/*!**************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/NewProjects/NewProjects.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_FolderOpenOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/FolderOpenOutlined */ "./node_modules/@material-ui/icons/FolderOpenOutlined.js");
/* harmony import */ var _material_ui_icons_FolderOpenOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FolderOpenOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components */ "./src/components/index.js");
/* harmony import */ var utils_gradients__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/gradients */ "./src/utils/gradients.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardDefault/components/NewProjects/NewProjects.js";








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundImage: utils_gradients__WEBPACK_IMPORTED_MODULE_8__["default"].blue,
    height: 48,
    width: 48
  }
}));

const NewProjects = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  const data = {
    value: '12',
    difference: '-10%'
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "h3",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "New projects"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, data.value), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["Label"], {
    className: classes.label,
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["colors"].red[600],
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, data.difference))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Avatar"], {
    className: classes.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_FolderOpenOutlined__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })));
};

NewProjects.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (NewProjects);

/***/ }),

/***/ "./src/views/DashboardDefault/components/NewProjects/index.js":
/*!********************************************************************!*\
  !*** ./src/views/DashboardDefault/components/NewProjects/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewProjects */ "./src/views/DashboardDefault/components/NewProjects/NewProjects.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NewProjects__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/components/PerformanceOverTime/PerformanceOverTime.js":
/*!******************************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/PerformanceOverTime/PerformanceOverTime.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components */ "./src/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./src/views/DashboardDefault/components/PerformanceOverTime/components/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardDefault/components/PerformanceOverTime/PerformanceOverTime.js";








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {},
  content: {},
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      marginLeft: theme.spacing(1)
    }
  },
  inner: {
    height: 375,
    minWidth: 500
  },
  chart: {
    height: '100%'
  }
}));

const PerformanceOverTime = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  const data = {
    thisWeek: {
      data: [],
      labels: []
    },
    thisMonth: {
      data: [],
      labels: []
    },
    thisYear: {
      data: [10, 5, 11, 20, 13, 28, 18, 4, 13, 12, 13, 5],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], {
    action: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["GenericMoreButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }),
    title: "Performance Over Time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardContent"], {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["Chart"], {
    className: classes.chart,
    data: data.thisYear.data,
    labels: data.thisYear.labels,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  })))));
};

PerformanceOverTime.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (PerformanceOverTime);

/***/ }),

/***/ "./src/views/DashboardDefault/components/PerformanceOverTime/components/Chart/Chart.js":
/*!*********************************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/PerformanceOverTime/components/Chart/Chart.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardDefault/components/PerformanceOverTime/components/Chart/Chart.js";






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(() => ({
  root: {
    position: 'relative'
  }
}));

const Chart = props => {
  const className = props.className,
        dataProp = props.data,
        labels = props.labels,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className", "data", "labels"]);

  const classes = useStyles();
  const theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();

  const data = canvas => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__["fade"])(theme.palette.secondary.main, 0.2));
    gradient.addColorStop(0.9, 'rgba(255,255,255,0)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    return {
      datasets: [{
        data: dataProp,
        backgroundColor: gradient,
        borderColor: theme.palette.secondary.main,
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 3,
        pointRadius: 6,
        pointBackgroundColor: theme.palette.secondary.main
      }],
      labels
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          padding: 20,
          fontColor: theme.palette.text.secondary
        }
      }],
      yAxes: [{
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider
        },
        ticks: {
          padding: 20,
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0,
          maxTicksLimit: 7,
          callback: value => {
            return value > 0 ? value + 'K' : value;
          }
        }
      }]
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      caretSize: 10,
      yPadding: 20,
      xPadding: 20,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary,
      callbacks: {
        title: () => {},
        label: tooltipItem => {
          let label = "Income: ".concat(tooltipItem.yLabel);

          if (tooltipItem.yLabel > 0) {
            label += 'K';
          }

          return label;
        }
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__["Line"], {
    data: data,
    options: options //
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }));
};

Chart.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  labels: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./src/views/DashboardDefault/components/PerformanceOverTime/components/Chart/index.js":
/*!*********************************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/PerformanceOverTime/components/Chart/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart */ "./src/views/DashboardDefault/components/PerformanceOverTime/components/Chart/Chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Chart__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/components/PerformanceOverTime/components/index.js":
/*!***************************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/PerformanceOverTime/components/index.js ***!
  \***************************************************************************************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart */ "./src/views/DashboardDefault/components/PerformanceOverTime/components/Chart/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _Chart__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/components/PerformanceOverTime/index.js":
/*!****************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/PerformanceOverTime/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PerformanceOverTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PerformanceOverTime */ "./src/views/DashboardDefault/components/PerformanceOverTime/PerformanceOverTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PerformanceOverTime__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/components/RealTime/RealTime.js":
/*!********************************************************************!*\
  !*** ./src/views/DashboardDefault/components/RealTime/RealTime.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "./node_modules/@material-ui/icons/ArrowForward.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utils_gradients__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/gradients */ "./src/utils/gradients.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components */ "./src/views/DashboardDefault/components/RealTime/components/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardDefault/components/RealTime/RealTime.js";









const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  root: {
    backgroundImage: utils_gradients__WEBPACK_IMPORTED_MODULE_9__["default"].indigo,
    color: theme.palette.primary.contrastText
  },
  content: {
    paddingTop: 0
  },
  itemDivider: {
    borderBottomColor: 'rgba(255,255,255,0.2)'
  },
  actions: {
    paddingTop: 0,
    justifyContent: 'flex-end'
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const RealTime = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([163, 166, 161, 159, 99, 163, 173, 166, 167, 183, 176, 172]),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let mounted = true;
    setInterval(() => {
      if (mounted) {
        setData(data => {
          const newData = [...data];
          newData.shift();
          newData.push(0);
          return newData;
        });
      }

      setTimeout(() => {
        if (mounted) {
          setData(data => {
            const newData = [...data];
            const random = getRandomInt(100, 200);
            newData.pop();
            newData.push(random);
            return newData;
          });
        }
      }, 500);
    }, 2000);
    return () => {
      mounted = false;
    };
  }, []);
  const labels = data.map((value, i) => i);
  const pages = [{
    pathname: '/projects',
    views: '24'
  }, {
    pathname: '/chat',
    views: '21'
  }, {
    pathname: '/cart',
    views: '15'
  }, {
    pathname: '/cart/checkout',
    views: '8'
  }];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
    action: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
      color: "inherit",
      gutterBottom: true,
      variant: "h3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: undefined
    }, data[data.length - 1] === 0 ? data[data.length - 2] : data[data.length - 1]),
    subheader: "Page views per second",
    subheaderTypographyProps: {
      color: 'inherit'
    },
    title: "Active users",
    titleTypographyProps: {
      color: 'inherit'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardContent"], {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_10__["Chart"], {
    data: data,
    labels: labels,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, pages.map(page => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
    classes: {
      divider: classes.itemDivider
    },
    divider: true,
    key: page.pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItemText"], {
    primary: page.pathname,
    primaryTypographyProps: {
      color: 'inherit',
      variant: 'body1'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, page.views))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardActions"], {
    className: classes.actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    color: "inherit",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    size: "small",
    to: "#",
    variant: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, "See all", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.arrowForwardIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }))));
};

RealTime.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (RealTime);

/***/ }),

/***/ "./src/views/DashboardDefault/components/RealTime/components/Chart/Chart.js":
/*!**********************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/RealTime/components/Chart/Chart.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardDefault/components/RealTime/components/Chart/Chart.js";





const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(() => ({
  root: {
    position: 'relative'
  }
}));

const Chart = props => {
  const dataProp = props.data,
        labels = props.labels,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["data", "labels", "className"]);

  const classes = useStyles();
  const theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  const data = {
    datasets: [{
      label: 'Views',
      backgroundColor: 'rgba(255,255,255,0.4)',
      data: dataProp
    }],
    labels
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cornerRadius: 20,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    scales: {
      xAxes: [{
        stacked: false,
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.9,
        categoryPercentage: 1,
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      }],
      yAxes: [{
        stacked: true,
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          display: false
        }
      }]
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      caretSize: 10,
      yPadding: 20,
      xPadding: 20,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary,
      callbacks: {
        legend: () => {},
        title: () => {},
        label: tooltipItem => {
          let label = "Views: ".concat(tooltipItem.yLabel);
          return label;
        }
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__["Bar"], {
    data: data,
    options: options,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }));
};

Chart.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  labels: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./src/views/DashboardDefault/components/RealTime/components/Chart/index.js":
/*!**********************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/RealTime/components/Chart/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart */ "./src/views/DashboardDefault/components/RealTime/components/Chart/Chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Chart__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/components/RealTime/components/index.js":
/*!****************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/RealTime/components/index.js ***!
  \****************************************************************************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart */ "./src/views/DashboardDefault/components/RealTime/components/Chart/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _Chart__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/components/RealTime/index.js":
/*!*****************************************************************!*\
  !*** ./src/views/DashboardDefault/components/RealTime/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RealTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RealTime */ "./src/views/DashboardDefault/components/RealTime/RealTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _RealTime__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/components/RoiPerCustomer/RoiPerCustomer.js":
/*!********************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/RoiPerCustomer/RoiPerCustomer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AttachMoney */ "./node_modules/@material-ui/icons/AttachMoney.js");
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardDefault/components/RoiPerCustomer/RoiPerCustomer.js";






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    color: theme.palette.white,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  avatar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
    height: 48,
    width: 48
  }
}));

const RoiPerCustomer = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  const data = {
    value: '25.50',
    currency: '$'
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    color: "inherit",
    component: "h3",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Roi per customer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    color: "inherit",
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, data.currency, data.value))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Avatar"], {
    className: classes.avatar,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })));
};

RoiPerCustomer.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (RoiPerCustomer);

/***/ }),

/***/ "./src/views/DashboardDefault/components/RoiPerCustomer/index.js":
/*!***********************************************************************!*\
  !*** ./src/views/DashboardDefault/components/RoiPerCustomer/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoiPerCustomer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoiPerCustomer */ "./src/views/DashboardDefault/components/RoiPerCustomer/RoiPerCustomer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _RoiPerCustomer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/components/SystemHealth/SystemHealth.js":
/*!****************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/SystemHealth/SystemHealth.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_gradients__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/gradients */ "./src/utils/gradients.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardDefault/components/SystemHealth/SystemHealth.js";







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  content: {
    flexGrow: 1
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  progress: {
    margin: theme.spacing(0, 1),
    flexGrow: 1
  },
  avatar: {
    backgroundImage: utils_gradients__WEBPACK_IMPORTED_MODULE_7__["default"].orange,
    height: 48,
    width: 48
  }
}));

const SystemHealth = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  const data = {
    value: 97
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "h3",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "System Health"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, data.value, "%"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["LinearProgress"], {
    className: classes.progress,
    value: data.value,
    variant: "determinate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Avatar"], {
    className: classes.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })));
};

SystemHealth.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SystemHealth);

/***/ }),

/***/ "./src/views/DashboardDefault/components/SystemHealth/index.js":
/*!*********************************************************************!*\
  !*** ./src/views/DashboardDefault/components/SystemHealth/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SystemHealth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemHealth */ "./src/views/DashboardDefault/components/SystemHealth/SystemHealth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SystemHealth__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/components/TeamTasks/TeamTasks.js":
/*!**********************************************************************!*\
  !*** ./src/views/DashboardDefault/components/TeamTasks/TeamTasks.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "./node_modules/@material-ui/icons/ArrowForward.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/axios */ "./src/utils/axios.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components */ "./src/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components */ "./src/views/DashboardDefault/components/TeamTasks/components/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardDefault/components/TeamTasks/TeamTasks.js";











const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 400
  },
  actions: {
    justifyContent: 'flex-end'
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1)
  }
}));

const TeamTasks = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        tasks = _useState2[0],
        setTasks = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let mounted = true;

    const fetchTasks = () => {
      utils_axios__WEBPACK_IMPORTED_MODULE_10__["default"].get('/api/tasks').then(response => {
        if (mounted) {
          setTasks(response.data.tasks);
        }
      });
    };

    fetchTasks();
    return () => {
      mounted = false;
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
    action: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_11__["GenericMoreButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }),
    title: "Team Tasks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, tasks.map((task, i) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_12__["TaskItem"], {
    divider: i < tasks.length - 1,
    key: task.id,
    task: task,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  })))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardActions"], {
    className: classes.actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    color: "primary",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    size: "small",
    to: "/kanban-board",
    variant: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "See all", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.arrowForwardIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }))));
};

TeamTasks.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (TeamTasks);

/***/ }),

/***/ "./src/views/DashboardDefault/components/TeamTasks/components/TaskItem/TaskItem.js":
/*!*****************************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/TeamTasks/components/TaskItem/TaskItem.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/OpenInNew */ "./node_modules/@material-ui/icons/OpenInNew.js");
/* harmony import */ var _material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components */ "./src/components/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardDefault/components/TeamTasks/components/TaskItem/TaskItem.js";








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {},
  critical: {
    '& $indicator': {
      borderColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].red[600]
    }
  },
  indicator: {
    height: 12,
    width: 12,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].grey[100],
    borderRadius: '50%'
  },
  viewButton: {
    marginLeft: theme.spacing(2)
  }
}));

const TaskItem = props => {
  const task = props.task,
        className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["task", "className"]);

  const classes = useStyles();
  let deadline = 'N/A';
  let critical = false;

  if (task.deadline) {
    const now = moment__WEBPACK_IMPORTED_MODULE_4___default()();
    const deadlineMoment = moment__WEBPACK_IMPORTED_MODULE_4___default()(task.deadline);

    if (deadlineMoment.isAfter(now) && deadlineMoment.diff(now, 'day') < 3) {
      deadline = deadlineMoment.diff(now, 'day') + ' days remaining';
      critical = true;
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItem"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, {
      [classes.critical]: critical
    }, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: classes.indicator,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
    className: classes.listItemText,
    primary: task.title,
    primaryTypographyProps: {
      variant: 'h6',
      noWrap: true
    },
    secondary: deadline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_8__["StackAvatars"], {
    avatars: task.members,
    limit: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
    title: "View task",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    className: classes.viewButton,
    edge: "end",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }))));
};

TaskItem.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  task: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TaskItem);

/***/ }),

/***/ "./src/views/DashboardDefault/components/TeamTasks/components/TaskItem/index.js":
/*!**************************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/TeamTasks/components/TaskItem/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskItem */ "./src/views/DashboardDefault/components/TeamTasks/components/TaskItem/TaskItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TaskItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/components/TeamTasks/components/index.js":
/*!*****************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/TeamTasks/components/index.js ***!
  \*****************************************************************************/
/*! exports provided: TaskItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskItem */ "./src/views/DashboardDefault/components/TeamTasks/components/TaskItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskItem", function() { return _TaskItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/components/TeamTasks/index.js":
/*!******************************************************************!*\
  !*** ./src/views/DashboardDefault/components/TeamTasks/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeamTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamTasks */ "./src/views/DashboardDefault/components/TeamTasks/TeamTasks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TeamTasks__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/components/TodaysMoney/TodaysMoney.js":
/*!**************************************************************************!*\
  !*** ./src/views/DashboardDefault/components/TodaysMoney/TodaysMoney.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AttachMoney */ "./node_modules/@material-ui/icons/AttachMoney.js");
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components */ "./src/components/index.js");
/* harmony import */ var utils_gradients__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/gradients */ "./src/utils/gradients.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/DashboardDefault/components/TodaysMoney/TodaysMoney.js";








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundImage: utils_gradients__WEBPACK_IMPORTED_MODULE_8__["default"].green,
    height: 48,
    width: 48
  }
}));

const TodaysMoney = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  const data = {
    value: '24,000',
    currency: '$',
    difference: '+4.5%'
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "h3",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Todays money"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, data.currency, data.value), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["Label"], {
    className: classes.label,
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["colors"].green[600],
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, data.difference))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Avatar"], {
    className: classes.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  })));
};

TodaysMoney.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (TodaysMoney);

/***/ }),

/***/ "./src/views/DashboardDefault/components/TodaysMoney/index.js":
/*!********************************************************************!*\
  !*** ./src/views/DashboardDefault/components/TodaysMoney/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodaysMoney__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodaysMoney */ "./src/views/DashboardDefault/components/TodaysMoney/TodaysMoney.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TodaysMoney__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/DashboardDefault/components/index.js":
/*!********************************************************!*\
  !*** ./src/views/DashboardDefault/components/index.js ***!
  \********************************************************/
/*! exports provided: Header, LatestProjects, NewProjects, RoiPerCustomer, TeamTasks, TodaysMoney, SystemHealth, RealTime, PerformanceOverTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/views/DashboardDefault/components/Header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _LatestProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatestProjects */ "./src/views/DashboardDefault/components/LatestProjects/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LatestProjects", function() { return _LatestProjects__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _NewProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewProjects */ "./src/views/DashboardDefault/components/NewProjects/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewProjects", function() { return _NewProjects__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _RoiPerCustomer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RoiPerCustomer */ "./src/views/DashboardDefault/components/RoiPerCustomer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoiPerCustomer", function() { return _RoiPerCustomer__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _TeamTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TeamTasks */ "./src/views/DashboardDefault/components/TeamTasks/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamTasks", function() { return _TeamTasks__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _TodaysMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TodaysMoney */ "./src/views/DashboardDefault/components/TodaysMoney/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodaysMoney", function() { return _TodaysMoney__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _SystemHealth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SystemHealth */ "./src/views/DashboardDefault/components/SystemHealth/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SystemHealth", function() { return _SystemHealth__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _RealTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RealTime */ "./src/views/DashboardDefault/components/RealTime/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealTime", function() { return _RealTime__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _PerformanceOverTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PerformanceOverTime */ "./src/views/DashboardDefault/components/PerformanceOverTime/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerformanceOverTime", function() { return _PerformanceOverTime__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./src/views/DashboardDefault/index.js":
/*!*********************************************!*\
  !*** ./src/views/DashboardDefault/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardDefault */ "./src/views/DashboardDefault/DashboardDefault.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DashboardDefault__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Overview/Overview.js":
/*!****************************************!*\
  !*** ./src/views/Overview/Overview.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components */ "./src/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/views/Overview/components/index.js");
var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/Overview/Overview.js";




const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  statistics: {
    marginTop: theme.spacing(3)
  },
  notifications: {
    marginTop: theme.spacing(6)
  },
  projects: {
    marginTop: theme.spacing(6)
  },
  todos: {
    marginTop: theme.spacing(6)
  }
}));

const Overview = () => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    className: classes.root,
    title: "Overview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Statistics"], {
    className: classes.statistics,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Notifications"], {
    className: classes.notifications,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Projects"], {
    className: classes.projects,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Todos"], {
    className: classes.todos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Overview);

/***/ }),

/***/ "./src/views/Overview/components/Header/Header.js":
/*!********************************************************!*\
  !*** ./src/views/Overview/components/Header/Header.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/BarChart */ "./node_modules/@material-ui/icons/BarChart.js");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/Overview/components/Header/Header.js";







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {},
  summaryButton: {
    backgroundColor: theme.palette.white
  },
  barChartIcon: {
    marginRight: theme.spacing(1)
  },
  image: {
    width: '100%',
    maxHeight: 400
  }
}));

const Header = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  const session = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.session);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    alignItems: "center",
    container: true,
    justify: "space-between",
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    component: "h2",
    gutterBottom: true,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    component: "h1",
    gutterBottom: true,
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Good Morning, ", session.user.first_name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    gutterBottom: true,
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Here\u2019s what\u2019s happening with your projects today"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: classes.summaryButton,
    edge: "start",
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.barChartIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), "View summary")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Hidden"], {
    smDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Cover",
    className: classes.image,
    src: "/images/undraw_growth_analytics_8btt.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  })))));
};

Header.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/views/Overview/components/Header/index.js":
/*!*******************************************************!*\
  !*** ./src/views/Overview/components/Header/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/views/Overview/components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Overview/components/Notifications/Notifications.js":
/*!**********************************************************************!*\
  !*** ./src/views/Overview/components/Notifications/Notifications.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ArrowForwardOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ArrowForwardOutlined */ "./node_modules/@material-ui/icons/ArrowForwardOutlined.js");
/* harmony import */ var _material_ui_icons_ArrowForwardOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForwardOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_PaymentOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/PaymentOutlined */ "./node_modules/@material-ui/icons/PaymentOutlined.js");
/* harmony import */ var _material_ui_icons_PaymentOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PaymentOutlined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_MailOutlineOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/MailOutlineOutlined */ "./node_modules/@material-ui/icons/MailOutlineOutlined.js");
/* harmony import */ var _material_ui_icons_MailOutlineOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MailOutlineOutlined__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/Overview/components/Notifications/Notifications.js";










const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {},
  value: {
    fontWeight: theme.typography.fontWeightMedium
  },
  type: {
    fontWeight: theme.typography.fontWeightMedium
  }
}));

const Notifications = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  const notifications = [{
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_4___default()(),
    value: 6,
    type: 'invite',
    message: 'to send service quotes'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_4___default()(),
    value: 2,
    type: 'message',
    message: 'from clients'
  }, {
    id: uuid_v1__WEBPACK_IMPORTED_MODULE_4___default()(),
    value: 1,
    type: 'payout',
    message: 'that needs your confirmation'
  }];
  const icons = {
    invite: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }),
    message: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_MailOutlineOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    }),
    payout: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_PaymentOutlined__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    })
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, notifications.map((notification, i) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItem"], {
    divider: i < notifications.length - 1,
    key: notification.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, icons[notification.type]), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, notification.value), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: classes.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, notification.type, "s"), ' ', notification.message)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemSecondaryAction"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
    title: "View",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    edge: "end",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ArrowForwardOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }))))))));
};

Notifications.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./src/views/Overview/components/Notifications/index.js":
/*!**************************************************************!*\
  !*** ./src/views/Overview/components/Notifications/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifications */ "./src/views/Overview/components/Notifications/Notifications.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Notifications__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Overview/components/Projects/Projects.js":
/*!************************************************************!*\
  !*** ./src/views/Overview/components/Projects/Projects.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utils_axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/axios */ "./src/utils/axios.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components */ "./src/components/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/Overview/components/Projects/Projects.js";









const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  root: {},
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2)
  },
  title: {
    position: 'relative',
    '&:before': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main
    }
  },
  arrowIcon: {
    marginLeft: theme.spacing(1)
  }
}));

const Projects = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        projects = _useState2[0],
        setProjects = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let mounted = true;

    const fetchProjects = () => {
      utils_axios__WEBPACK_IMPORTED_MODULE_9__["default"].get('/api/account/projects').then(response => {
        if (mounted) {
          setProjects(response.data.projects);
        }
      });
    };

    fetchProjects();
    return () => {
      mounted = false;
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    className: classes.title,
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "Active Projects"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/profile/user/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "See all", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.arrowIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }))), projects.map(project => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_10__["ProjectCard"], {
    key: project.id,
    project: project,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  })));
};

Projects.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/views/Overview/components/Projects/index.js":
/*!*********************************************************!*\
  !*** ./src/views/Overview/components/Projects/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ "./src/views/Overview/components/Projects/Projects.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Projects__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Overview/components/Statistics/Statistics.js":
/*!****************************************************************!*\
  !*** ./src/views/Overview/components/Statistics/Statistics.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var utils_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/axios */ "./src/utils/axios.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components */ "./src/components/index.js");


var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/Overview/components/Statistics/Statistics.js";







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {},
  content: {
    padding: 0
  },
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: "1px solid ".concat(theme.palette.divider)
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: "1px solid ".concat(theme.palette.divider)
      }
    }
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  overline: {
    marginTop: theme.spacing(1)
  }
}));

const Statistics = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        statistics = _useState2[0],
        setStatistics = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let mounted = true;

    const fetchStatistics = () => {
      utils_axios__WEBPACK_IMPORTED_MODULE_7__["default"].get('/api/account/statistics').then(response => {
        if (mounted) {
          setStatistics(response.data.statistics);
        }
      });
    };

    fetchStatistics();
    return () => {
      mounted = false;
    };
  }, []);

  if (!statistics) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    alignItems: "center",
    container: true,
    justify: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    className: classes.item,
    item: true,
    md: 3,
    sm: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "$", statistics.payout), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: classes.overline,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "Next payout")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    className: classes.item,
    item: true,
    md: 3,
    sm: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "$", statistics.projects), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: classes.overline,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, "Total products")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    className: classes.item,
    item: true,
    md: 3,
    sm: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, statistics.visitors), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: classes.overline,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "Today's Visitors")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    className: classes.item,
    item: true,
    md: 3,
    sm: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.titleWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    component: "span",
    variant: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, statistics.watching), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_8__["Label"], {
    className: classes.label,
    color: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].green[600],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, "Live")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: classes.overline,
    variant: "overline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "Watching now"))));
};

Statistics.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Statistics);

/***/ }),

/***/ "./src/views/Overview/components/Statistics/index.js":
/*!***********************************************************!*\
  !*** ./src/views/Overview/components/Statistics/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Statistics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Statistics */ "./src/views/Overview/components/Statistics/Statistics.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Statistics__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Overview/components/Todos/Todos.js":
/*!******************************************************!*\
  !*** ./src/views/Overview/components/Todos/Todos.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ArchiveOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ArchiveOutlined */ "./node_modules/@material-ui/icons/ArchiveOutlined.js");
/* harmony import */ var _material_ui_icons_ArchiveOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArchiveOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var utils_axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/axios */ "./src/utils/axios.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components */ "./src/components/index.js");



var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/Overview/components/Todos/Todos.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/no-multi-comp */











const getLabel = todo => {
  if (todo.done) {
    return null;
  }

  if (moment__WEBPACK_IMPORTED_MODULE_6___default()(todo.deadline).isBefore(moment__WEBPACK_IMPORTED_MODULE_6___default()(), 'day')) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_12__["Label"], {
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["colors"].red[600],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, "Due ".concat(moment__WEBPACK_IMPORTED_MODULE_6___default()(todo.deadline).fromNow()));
  }

  if (moment__WEBPACK_IMPORTED_MODULE_6___default()(todo.deadline).isSame(moment__WEBPACK_IMPORTED_MODULE_6___default()(), 'day')) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_12__["Label"], {
      color: _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["colors"].orange[600],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, "Due today");
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_12__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Due ".concat(moment__WEBPACK_IMPORTED_MODULE_6___default()(todo.deadline).fromNow()));
};

const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  root: {},
  content: {
    padding: 0
  },
  addIcon: {
    marginRight: theme.spacing(1)
  },
  done: {
    textDecoration: 'line-through',
    color: theme.palette.text.secondary
  }
}));

const Todos = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className"]);

  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
        _useState2 = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        todos = _useState2[0],
        setTodos = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    let mounted = true;

    const fetchTodos = () => {
      utils_axios__WEBPACK_IMPORTED_MODULE_11__["default"].get('/api/account/todos').then(response => {
        if (mounted) {
          setTodos(response.data.todos);
        }
      });
    };

    fetchTodos();
    return () => {
      mounted = false;
    };
  }, []);

  const handleChange = (event, todo) => {
    event.persist();
    setTodos(todos => todos.map(t => {
      if (t.id === todo.id) {
        return _objectSpread({}, todo, {
          done: !todo.done
        });
      }

      return t;
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
    action: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      color: "primary",
      size: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.addIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: undefined
    }), "Add"),
    title: "My todos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, todos.map((todo, i) => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    divider: i < todos.length - 1,
    key: todo.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Radio"], {
    checked: todo.done,
    onClick: event => handleChange(event, todo),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ListItemText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])({
      [classes.done]: todo.done
    }),
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, todo.title)), getLabel(todo), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    title: "Archive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_ArchiveOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }))))))));
};

Todos.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Todos);

/***/ }),

/***/ "./src/views/Overview/components/Todos/index.js":
/*!******************************************************!*\
  !*** ./src/views/Overview/components/Todos/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos */ "./src/views/Overview/components/Todos/Todos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Todos__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Overview/components/index.js":
/*!************************************************!*\
  !*** ./src/views/Overview/components/index.js ***!
  \************************************************/
/*! exports provided: Header, Statistics, Notifications, Projects, Todos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/views/Overview/components/Header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Statistics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Statistics */ "./src/views/Overview/components/Statistics/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Statistics", function() { return _Statistics__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notifications */ "./src/views/Overview/components/Notifications/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notifications", function() { return _Notifications__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects */ "./src/views/Overview/components/Projects/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Todos */ "./src/views/Overview/components/Todos/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Todos", function() { return _Todos__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./src/views/Overview/index.js":
/*!*************************************!*\
  !*** ./src/views/Overview/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Overview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overview */ "./src/views/Overview/Overview.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Overview__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Presentation/Presentation.js":
/*!************************************************!*\
  !*** ./src/views/Presentation/Presentation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components */ "./src/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/views/Presentation/components/index.js");
var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/Presentation/Presentation.js";




const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({
  root: {}
}));

const Presentation = () => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    className: classes.root,
    title: "Presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["UserFlows"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PluginsSupport"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["SourceFiles"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["FAQ"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Presentation);

/***/ }),

/***/ "./src/views/Presentation/components/FAQ/FAQ.js":
/*!******************************************************!*\
  !*** ./src/views/Presentation/components/FAQ/FAQ.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ContactSupportOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ContactSupportOutlined */ "./node_modules/@material-ui/icons/ContactSupportOutlined.js");
/* harmony import */ var _material_ui_icons_ContactSupportOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ContactSupportOutlined__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/Presentation/components/FAQ/FAQ.js";







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  inner: {
    padding: theme.spacing(6, 3),
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto'
  },
  content: {
    marginTop: theme.spacing(6)
  }
}));

const FAQ = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  const faqs = [{
    title: 'What do we use for styling our components?',
    description: 'We use Material-ui\'s hooks api as we think it’s the best way of avoiding clutter.'
  }, {
    title: 'Are the design files (sketch, figma) included in the Standard Package?',
    description: 'No, we offer the design source file only to Standard Plus Sketch & Figma and Extended Package.'
  }, {
    title: 'Are you providing support for setting up my project?',
    description: 'Yes, we offer email support for all our customers & even skype meetings for our extended license customers.'
  }];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    align: "center",
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "FAQ"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["List"], {
    disablePadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, faqs.map(faq => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItem"], {
    key: uuid_v1__WEBPACK_IMPORTED_MODULE_4___default()(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ContactSupportOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
    primary: faq.title,
    primaryTypographyProps: {
      variant: 'h5'
    },
    secondary: faq.description,
    secondaryTypographyProps: {
      variant: 'body1'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  })))))));
};

FAQ.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (FAQ);

/***/ }),

/***/ "./src/views/Presentation/components/FAQ/index.js":
/*!********************************************************!*\
  !*** ./src/views/Presentation/components/FAQ/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FAQ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FAQ */ "./src/views/Presentation/components/FAQ/FAQ.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FAQ__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Presentation/components/Header/Header.js":
/*!************************************************************!*\
  !*** ./src/views/Presentation/components/Header/Header.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/Presentation/components/Header/Header.js";





const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  header: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    margin: '0 auto',
    padding: '80px 24px',
    [theme.breakpoints.up('md')]: {
      padding: '160px 24px'
    }
  },
  buttons: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
  mediaContainer: {
    margin: '0 auto',
    maxWidth: 1600,
    padding: theme.spacing(0, 2),
    overflow: 'hidden'
  },
  media: {
    width: '100%'
  },
  stats: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1)
  },
  statsInner: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    margin: '0 auto'
  }
}));

const Header = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    align: "center",
    gutterBottom: true,
    variant: "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Devias React Material Kit - PRO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    align: "center",
    component: "h2",
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "A professional kit that comes with ready-to-use Material-UI\xA9 components developed with one common goal in mind, help you build faster & beautiful applications. Each component is fully customizable, responsive and easy to integrate."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.buttons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "primary",
    component: "a",
    href: "https://themes.material-ui.com/themes/devias-kit-pro",
    target: "_blank",
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "Purchase Devias Kit"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.mediaContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Demos",
    className: classes.media,
    src: "/images/presentation/header.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.stats,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    alignItems: "center",
    className: classes.statsInner,
    container: true,
    justify: "center",
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    lg: 3,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    color: "inherit",
    gutterBottom: true,
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "30+"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    color: "inherit",
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, "Demo Pages")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    lg: 3,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    color: "inherit",
    gutterBottom: true,
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, "UX"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    color: "inherit",
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, "Complete Flows")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    lg: 3,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    color: "inherit",
    gutterBottom: true,
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, "300+"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    color: "inherit",
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, "Components")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    lg: 3,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "React",
    src: "/images/react.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    color: "inherit",
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, "React Hooks API")))));
};

Header.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/views/Presentation/components/Header/index.js":
/*!***********************************************************!*\
  !*** ./src/views/Presentation/components/Header/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/views/Presentation/components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Presentation/components/PluginsSupport/PluginsSupport.js":
/*!****************************************************************************!*\
  !*** ./src/views/Presentation/components/PluginsSupport/PluginsSupport.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/Presentation/components/PluginsSupport/PluginsSupport.js";





const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  inner: {
    padding: theme.spacing(6, 3),
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto'
  },
  media: {
    '& img': {
      width: '100%',
      height: 'auto'
    }
  }
}));

const PluginsSupport = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    alignItems: "center",
    container: true,
    justify: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    lg: 3,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    gutterBottom: true,
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Support for Plugins"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "The kit provides support for multiple third-party plugins right out of the box like Chart.js, Dropzone.js, Kanban Plugin and many more.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    className: classes.media,
    item: true,
    lg: 4,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "User flows",
    src: "/images/presentation/plugins_support.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })))));
};

PluginsSupport.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (PluginsSupport);

/***/ }),

/***/ "./src/views/Presentation/components/PluginsSupport/index.js":
/*!*******************************************************************!*\
  !*** ./src/views/Presentation/components/PluginsSupport/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PluginsSupport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginsSupport */ "./src/views/Presentation/components/PluginsSupport/PluginsSupport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PluginsSupport__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Presentation/components/SourceFiles/SourceFiles.js":
/*!**********************************************************************!*\
  !*** ./src/views/Presentation/components/SourceFiles/SourceFiles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/Presentation/components/SourceFiles/SourceFiles.js";





const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  inner: {
    padding: theme.spacing(6, 3),
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto'
  },
  media: {
    '& img': {
      width: '100%',
      height: 'auto'
    }
  }
}));

const SourceFiles = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    alignItems: "center",
    container: true,
    justify: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    lg: 3,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    gutterBottom: true,
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Source Files"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "We've included the source Sketch & Figma files so you can get creative! We designed all components with Symbols in Sketch which allows you to change the main colors as you like.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    className: classes.media,
    item: true,
    lg: 4,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "User flows",
    src: "/images/presentation/source_files.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })))));
};

SourceFiles.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SourceFiles);

/***/ }),

/***/ "./src/views/Presentation/components/SourceFiles/index.js":
/*!****************************************************************!*\
  !*** ./src/views/Presentation/components/SourceFiles/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SourceFiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SourceFiles */ "./src/views/Presentation/components/SourceFiles/SourceFiles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SourceFiles__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Presentation/components/UserFlows/UserFlows.js":
/*!******************************************************************!*\
  !*** ./src/views/Presentation/components/UserFlows/UserFlows.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/views/Presentation/components/UserFlows/UserFlows.js";





const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  inner: {
    padding: theme.spacing(6, 3),
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto'
  },
  media: {
    '& img': {
      width: '100%',
      height: 'auto'
    }
  }
}));

const UserFlows = props => {
  const className = props.className,
        rest = Object(_Users_elvishernandez_Documents_proyectos_TravelSafe_Admin_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className"]);

  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({}, rest, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    alignItems: "center",
    container: true,
    justify: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    lg: 3,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    gutterBottom: true,
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Complete User Flows"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "subtitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Not just a set of tools, the package includes the most common use cases of user flows like User Management, Second Level Layout, and many more.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    className: classes.media,
    item: true,
    lg: 4,
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "User flows",
    src: "/images/presentation/user_flows.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })))));
};

UserFlows.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (UserFlows);

/***/ }),

/***/ "./src/views/Presentation/components/UserFlows/index.js":
/*!**************************************************************!*\
  !*** ./src/views/Presentation/components/UserFlows/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserFlows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserFlows */ "./src/views/Presentation/components/UserFlows/UserFlows.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _UserFlows__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Presentation/components/index.js":
/*!****************************************************!*\
  !*** ./src/views/Presentation/components/index.js ***!
  \****************************************************/
/*! exports provided: FAQ, Header, PluginsSupport, SourceFiles, UserFlows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FAQ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FAQ */ "./src/views/Presentation/components/FAQ/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FAQ", function() { return _FAQ__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/views/Presentation/components/Header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _PluginsSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PluginsSupport */ "./src/views/Presentation/components/PluginsSupport/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginsSupport", function() { return _PluginsSupport__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _SourceFiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SourceFiles */ "./src/views/Presentation/components/SourceFiles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SourceFiles", function() { return _SourceFiles__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _UserFlows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserFlows */ "./src/views/Presentation/components/UserFlows/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserFlows", function() { return _UserFlows__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./src/views/Presentation/index.js":
/*!*****************************************!*\
  !*** ./src/views/Presentation/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Presentation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Presentation */ "./src/views/Presentation/Presentation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Presentation__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/elvishernandez/Documents/proyectos/TravelSafe-Admin/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!**********************************!*\
  !*** ./WritableStream (ignored) ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",27]]]);
//# sourceMappingURL=main.chunk.js.map