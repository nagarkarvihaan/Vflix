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

/***/ "./hooks/useFetchData.js":
/*!*******************************!*\
  !*** ./hooks/useFetchData.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nvar _s = $RefreshSig$();\n\n\nfunction useFetchData(apiEndpoint) {\n    _s();\n    const [alldata, setAlldata] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    const [initialLoad, setInitialLoad] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (initialLoad) {\n            setInitialLoad(false);\n            setLoading(false);\n            return;\n        }\n        setLoading(true);\n        const fetchAllData = async ()=>{\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(apiEndpoint);\n                const alldata = res.data;\n                setAlldata(alldata);\n                setLoading(false); // set loading state to false after data is fetched\n            } catch (error) {\n                console.error(\"error fetching movie data:\", error);\n                setLoading(false); // set loading state to false even if there's an error\n            }\n        };\n        // fetch movie data only if category exists\n        if (apiEndpoint) {\n            fetchAllData(); //call this function if api exists\n        }\n    }, [\n        initialLoad,\n        apiEndpoint\n    ]); // depend on ini and apiendpoint to trigger api call\n    return {\n        alldata,\n        loading\n    };\n}\n_s(useFetchData, \"f8pksYvXFglANWBOrhk5mCqteFQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFetchData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VGZXRjaERhdGEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFDaEI7QUFFMUIsU0FBU0csYUFBYUMsV0FBVzs7SUFDN0IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUUvQ0MsZ0RBQVNBLENBQUM7UUFDTixJQUFJUSxhQUFhO1lBQ2JDLGVBQWU7WUFDZkYsV0FBVztZQUNYO1FBQ0o7UUFDQUEsV0FBVztRQUVYLE1BQU1HLGVBQWU7WUFDakIsSUFBSTtnQkFDQSxNQUFNQyxNQUFNLE1BQU1WLGlEQUFTLENBQUNFO2dCQUM1QixNQUFNQyxVQUFVTyxJQUFJRSxJQUFJO2dCQUN4QlIsV0FBV0Q7Z0JBQ1hHLFdBQVcsUUFBUSxtREFBbUQ7WUFDMUUsRUFBRSxPQUFPTyxPQUFNO2dCQUNYQyxRQUFRRCxLQUFLLENBQUMsOEJBQThCQTtnQkFDNUNQLFdBQVcsUUFBUSxzREFBc0Q7WUFDN0U7UUFDSjtRQUVBLDJDQUEyQztRQUUzQyxJQUFJSixhQUFhO1lBQ2JPLGdCQUFnQixrQ0FBa0M7UUFFdEQ7SUFFSixHQUFHO1FBQUNGO1FBQWFMO0tBQVksR0FBRyxvREFBb0Q7SUFDcEYsT0FBTztRQUFDQztRQUFTRTtJQUFPO0FBQzVCO0dBbENTSjtBQW1DVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VGZXRjaERhdGEuanM/YTNlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5mdW5jdGlvbiB1c2VGZXRjaERhdGEoYXBpRW5kcG9pbnQpIHtcbiAgICBjb25zdCBbYWxsZGF0YSwgc2V0QWxsZGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2luaXRpYWxMb2FkLCBzZXRJbml0aWFsTG9hZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpbml0aWFsTG9hZCkge1xuICAgICAgICAgICAgc2V0SW5pdGlhbExvYWQoZmFsc2UpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICAgICBjb25zdCBmZXRjaEFsbERhdGEgPSBhc3luYygpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGFwaUVuZHBvaW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgc2V0QWxsZGF0YShhbGxkYXRhKTtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gc2V0IGxvYWRpbmcgc3RhdGUgdG8gZmFsc2UgYWZ0ZXIgZGF0YSBpcyBmZXRjaGVkXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yIGZldGNoaW5nIG1vdmllIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gc2V0IGxvYWRpbmcgc3RhdGUgdG8gZmFsc2UgZXZlbiBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZmV0Y2ggbW92aWUgZGF0YSBvbmx5IGlmIGNhdGVnb3J5IGV4aXN0c1xuXG4gICAgICAgIGlmIChhcGlFbmRwb2ludCkge1xuICAgICAgICAgICAgZmV0Y2hBbGxEYXRhKCk7IC8vY2FsbCB0aGlzIGZ1bmN0aW9uIGlmIGFwaSBleGlzdHNcblxuICAgICAgICB9XG5cbiAgICB9LCBbaW5pdGlhbExvYWQsIGFwaUVuZHBvaW50XSk7IC8vIGRlcGVuZCBvbiBpbmkgYW5kIGFwaWVuZHBvaW50IHRvIHRyaWdnZXIgYXBpIGNhbGxcbiAgICByZXR1cm4ge2FsbGRhdGEsIGxvYWRpbmd9O1xufVxuZXhwb3J0IGRlZmF1bHQgdXNlRmV0Y2hEYXRhOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlRmV0Y2hEYXRhIiwiYXBpRW5kcG9pbnQiLCJhbGxkYXRhIiwic2V0QWxsZGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW5pdGlhbExvYWQiLCJzZXRJbml0aWFsTG9hZCIsImZldGNoQWxsRGF0YSIsInJlcyIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useFetchData.js\n"));

/***/ })

});