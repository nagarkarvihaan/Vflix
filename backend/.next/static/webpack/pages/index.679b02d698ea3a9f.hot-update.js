"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useFetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useFetchData */ \"./hooks/useFetchData.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Loading */ \"./components/Loading.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _barrel_optimize_names_BiSolidMoviePlay_react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=BiSolidMoviePlay!=!react-icons/bi */ \"__barrel_optimize__?names=BiSolidMoviePlay!=!./node_modules/react-icons/bi/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { alldata, loading } = (0,_hooks_useFetchData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"api/getmovies\");\n    const publishedMovies = alldata.filter((ab)=>ab.status === \"publish\");\n    const draftMovies = alldata.filter((ab)=>ab.stauts === \"draft\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Movie App | Backend\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Movie website backend\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 18\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"topheadertitle flex flex-sb\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"mb-1\",\n                                        children: \"Explore all types of movies here\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-2 w-66\",\n                                        children: \" Lorem ipsum, dolor sit amet consectetur adipsicing elit. Aspernatur ut tempore earum ex dolorem iure\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: [\n                                                \"Exclusive On \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Vflix\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 53\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 32\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/img/rocket.png\",\n                                alt: \"rocket\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fourcards flex flex-sb\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"fcard\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-sb\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"fcardsvg\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiSolidMoviePlay_react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiSolidMoviePlay, {}, void 0, false, {\n                                                fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Total Movies\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-sb wh-100\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/img/chartone.svg\",\n                                            alt: \"chart\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            children: publishedMovies.length\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vihaannagarkar/Documents/vflix/backend/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 32\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"7HIOnES9aBhuTg0Nz00xzUEALwI=\", false, function() {\n    return [\n        _hooks_useFetchData__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNSO0FBQ0c7QUFDZDtBQUNBO0FBQ3FCO0FBR25DLFNBQVNNOztJQUV0QixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFLEdBQUdSLCtEQUFZQSxDQUFDO0lBQzFDLE1BQU1TLGtCQUFrQkYsUUFBUUcsTUFBTSxDQUFDQyxDQUFBQSxLQUFNQSxHQUFHQyxNQUFNLEtBQUs7SUFDM0QsTUFBTUMsY0FBY04sUUFBUUcsTUFBTSxDQUFDQyxDQUFBQSxLQUFNQSxHQUFHRyxNQUFNLEtBQUs7SUFFdkQsTUFBTUMsU0FBU2Qsc0RBQVNBO0lBR3hCLHFCQUNFOzswQkFDRSw4REFBQ0Usa0RBQUlBOztrQ0FDSCw4REFBQ2E7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7O1lBR3ZCZCx3QkFBVSw4REFBQ04sMkRBQU9BOzs7O3FDQUFNLDhEQUFDcUI7Z0JBQUlDLFdBQVU7O2tDQUN0Qyw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDs7a0RBQ0MsOERBQUNFO3dDQUFHRCxXQUFVO2tEQUFPOzs7Ozs7a0RBQ3JCLDhEQUFDRTt3Q0FBRUYsV0FBVTtrREFBWTs7Ozs7O2tEQUV2Qiw4REFBQ3BCLGtEQUFJQTt3Q0FBQ2tCLE1BQU87a0RBQUksNEVBQUNLOztnREFBTzs4REFBYSw4REFBQ0M7OERBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUVoRCw4REFBQ0M7Z0NBQUlDLEtBQUk7Z0NBQWtCQyxLQUFJOzs7Ozs7Ozs7Ozs7a0NBR2pDLDhEQUFDUjt3QkFBSUMsV0FBWTtrQ0FDZiw0RUFBQ0Q7NEJBQUlDLFdBQVk7OzhDQUNmLDhEQUFDRDtvQ0FBSUMsV0FBWTs7c0RBQ2YsOERBQUNEOzRDQUFJQyxXQUFZO3NEQUNmLDRFQUFDbkIsb0dBQWdCQTs7Ozs7Ozs7OztzREFFbkIsOERBQUMyQjtzREFBRzs7Ozs7Ozs7Ozs7OzhDQUVOLDhEQUFDVDtvQ0FBSUMsV0FBWTs7c0RBQ2YsOERBQUNLOzRDQUFJQyxLQUFNOzRDQUFvQkMsS0FBTTs7Ozs7O3NEQUNyQyw4REFBQ0U7c0RBQUl4QixnQkFBZ0J5QixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pDO0dBOUN3QjVCOztRQUVPTiwyREFBWUE7UUFJMUJDLGtEQUFTQTs7O0tBTkZLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUZldGNoRGF0YSBmcm9tIFwiQC9ob29rcy91c2VGZXRjaERhdGFcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBCaVNvbGlkTW92aWVQbGF5IH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCB7IGFsbGRhdGEsIGxvYWRpbmcgfSA9IHVzZUZldGNoRGF0YSgnYXBpL2dldG1vdmllcycpO1xuICBjb25zdCBwdWJsaXNoZWRNb3ZpZXMgPSBhbGxkYXRhLmZpbHRlcihhYiA9PiBhYi5zdGF0dXMgPT09IFwicHVibGlzaFwiKTtcbiAgY29uc3QgZHJhZnRNb3ZpZXMgPSBhbGxkYXRhLmZpbHRlcihhYiA9PiBhYi5zdGF1dHMgPT09IFwiZHJhZnRcIik7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1vdmllIEFwcCB8IEJhY2tlbmQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTW92aWUgd2Vic2l0ZSBiYWNrZW5kXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICB7bG9hZGluZyA/IDxMb2FkaW5nIC8+IDogPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BoZWFkZXJ0aXRsZSBmbGV4IGZsZXgtc2JcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTFcIj5FeHBsb3JlIGFsbCB0eXBlcyBvZiBtb3ZpZXMgaGVyZTwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yIHctNjZcIj4gTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyXG4gICAgICAgICAgICAgIGFkaXBzaWNpbmcgZWxpdC4gQXNwZXJuYXR1ciB1dCB0ZW1wb3JlIGVhcnVtIGV4IGRvbG9yZW0gaXVyZTwvcD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZiA9IFwiL1wiPjxidXR0b24+RXhjbHVzaXZlIE9uIDxzcGFuPlZmbGl4PC9zcGFuPjwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvcm9ja2V0LnBuZ1wiIGFsdD1cInJvY2tldFwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3VyY2FyZHMgZmxleCBmbGV4LXNiXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleCBmbGV4LXNiXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmY2FyZHN2Z1wiPlxuICAgICAgICAgICAgICAgIDxCaVNvbGlkTW92aWVQbGF5IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDM+VG90YWwgTW92aWVzPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXggZmxleC1zYiB3aC0xMDBcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmMgPSBcIi9pbWcvY2hhcnRvbmUuc3ZnXCIgYWx0ID0gXCJjaGFydFwiLz5cbiAgICAgICAgICAgICAgPGg0PntwdWJsaXNoZWRNb3ZpZXMubGVuZ3RofTwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj59XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRmV0Y2hEYXRhIiwidXNlUm91dGVyIiwiTG9hZGluZyIsIkhlYWQiLCJMaW5rIiwiQmlTb2xpZE1vdmllUGxheSIsIkhvbWUiLCJhbGxkYXRhIiwibG9hZGluZyIsInB1Ymxpc2hlZE1vdmllcyIsImZpbHRlciIsImFiIiwic3RhdHVzIiwiZHJhZnRNb3ZpZXMiLCJzdGF1dHMiLCJyb3V0ZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiYnV0dG9uIiwic3BhbiIsImltZyIsInNyYyIsImFsdCIsImgzIiwiaDQiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});