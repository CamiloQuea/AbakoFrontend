"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/Dashboard/Index/InicioEstadistica.js":
/*!*********************************************************!*\
  !*** ./components/Dashboard/Index/InicioEstadistica.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InicioEstadistica; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction InicioEstadistica() {\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('http://159.223.97.216/api/user/movement', function(url) {\n        return FetcherGet(url);\n    }), data = ref.data, error = ref.error;\n    if (error) return 'error';\n    if (!data) return 'loading';\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\Inte_v3.0\\\\inte_v4.0\\\\components\\\\Dashboard\\\\Index\\\\InicioEstadistica.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Bar, {\n                data: {\n                    labels: data.map(function(type) {\n                        return type.product.type;\n                    }),\n                    datasets: [\n                        {\n                            label: 'Instrumentos',\n                            data: [\n                                12,\n                                19,\n                                8\n                            ],\n                            backgroundColor: [\n                                'rgba(255, 205, 86,0.5)',\n                                'rgba(62, 124, 23, 0.4)',\n                                'rgba(195, 106, 45, 0.6)'\n                            ]\n                        }, \n                    ]\n                },\n                options: {\n                    maintainAspectRatio: false,\n                    responsive: true\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\Inte_v3.0\\\\inte_v4.0\\\\components\\\\Dashboard\\\\Index\\\\InicioEstadistica.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                },\n                __self: this\n            })\n        })\n    }));\n};\n_s(InicioEstadistica, \"1iV1NfNGoSjYVgUAg4ZC2M23tec=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = InicioEstadistica;\nvar _c;\n$RefreshReg$(_c, \"InicioEstadistica\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhc2hib2FyZC9JbmRleC9JbmljaW9Fc3RhZGlzdGljYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlEO0FBQ3pCOztBQUVULFFBQVEsQ0FBQ0ksaUJBQWlCLEdBQUcsQ0FBQzs7SUFFekMsR0FBSyxDQUFnQkQsR0FBd0UsR0FBeEVBLCtDQUFNLENBQUMsQ0FBeUMsMENBQUNFLFFBQVEsQ0FBUkEsR0FBRztRQUFJQyxNQUFNLENBQU5BLFVBQVUsQ0FBQ0QsR0FBRztRQUFwRkUsSUFBSSxHQUFVSixHQUF3RSxDQUF0RkksSUFBSSxFQUFDQyxLQUFLLEdBQUlMLEdBQXdFLENBQWpGSyxLQUFLO0lBQ2pCLEVBQUUsRUFBQ0EsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFPO0lBQ3hCLEVBQUUsR0FBRUQsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFTO0lBRTFCLE1BQU07dUZBQ0RFLENBQUc7Ozs7Ozs7MkZBQ0NULGdEQUFHO2dCQUNBTyxJQUFJLEVBQUUsQ0FBQztvQkFDSEcsTUFBTSxFQUFFSCxJQUFJLENBQUNJLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxJQUFJO3dCQUFFLE1BQU1DLENBQUxELElBQUksQ0FBQ0MsT0FBTyxDQUFDRCxJQUFJOztvQkFDekNFLFFBQVEsRUFBRSxDQUFDO3dCQUNQLENBQUM7NEJBQ0dDLEtBQUssRUFBRSxDQUFjOzRCQUNyQlIsSUFBSSxFQUFFLENBQUM7Z0NBQUEsRUFBRTtnQ0FBRSxFQUFFO2dDQUFFLENBQUM7NEJBQUEsQ0FBQzs0QkFDakJTLGVBQWUsRUFBRSxDQUFDO2dDQUNkLENBQXdCO2dDQUN4QixDQUF3QjtnQ0FDeEIsQ0FBeUI7NEJBQzdCLENBQUM7d0JBQ0wsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBRURDLE9BQU8sRUFBRSxDQUFDO29CQUNOQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQkMsVUFBVSxFQUFFLElBQUk7Z0JBQ3BCLENBQUM7Ozs7Ozs7Ozs7QUFLakIsQ0FBQztHQWhDdUJmLGlCQUFpQjs7UUFFaEJELDJDQUFNOzs7S0FGUEMsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0luZGV4L0luaWNpb0VzdGFkaXN0aWNhLmpzPzE5YTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFyLFBpZSxEb3VnaG51dH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiXHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmljaW9Fc3RhZGlzdGljYSgpIHtcclxuXHJcbiAgICBjb25zdCB7ZGF0YSxlcnJvcn0gPSB1c2VTV1IoJ2h0dHA6Ly8xNTkuMjIzLjk3LjIxNi9hcGkvdXNlci9tb3ZlbWVudCcsdXJsID0+IEZldGNoZXJHZXQodXJsKSlcclxuICAgIGlmKGVycm9yKSByZXR1cm4gJ2Vycm9yJ1xyXG4gICAgaWYoIWRhdGEpIHJldHVybiAnbG9hZGluZydcclxuICAgIFxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCYXJcclxuICAgICAgICAgICAgICAgIGRhdGE9e3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IGRhdGEubWFwKHR5cGU9Pih0eXBlLnByb2R1Y3QudHlwZSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSW5zdHJ1bWVudG9zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFsxMiwgMTksIDhdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAyMDUsIDg2LDAuNSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDYyLCAxMjQsIDIzLCAwLjQpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgxOTUsIDEwNiwgNDUsIDAuNiknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIDwvPilcclxufSJdLCJuYW1lcyI6WyJCYXIiLCJQaWUiLCJEb3VnaG51dCIsInVzZVNXUiIsIkluaWNpb0VzdGFkaXN0aWNhIiwidXJsIiwiRmV0Y2hlckdldCIsImRhdGEiLCJlcnJvciIsImRpdiIsImxhYmVscyIsIm1hcCIsInR5cGUiLCJwcm9kdWN0IiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsIm9wdGlvbnMiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicmVzcG9uc2l2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Dashboard/Index/InicioEstadistica.js\n");

/***/ })

});