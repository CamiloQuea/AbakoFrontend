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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InicioEstadistica; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction InicioEstadistica() {\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('http://159.223.97.216/api/user/product', function(url) {\n        return FetcherGet(url);\n    }), data = ref.data, error = ref.error;\n    if (error) return 'error';\n    if (!data) return 'loading';\n    console.log(data);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\Inte_v3.0\\\\inte_v4.0\\\\components\\\\Dashboard\\\\Index\\\\InicioEstadistica.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Bar, {\n                data: {\n                    labels: [\n                        data.map(function(product) {\n                            return product.type;\n                        })\n                    ],\n                    datasets: [\n                        {\n                            label: 'Instrumentos',\n                            data: [\n                                12,\n                                19,\n                                8\n                            ],\n                            backgroundColor: [\n                                'rgba(255, 205, 86,0.5)',\n                                'rgba(62, 124, 23, 0.4)',\n                                'rgba(195, 106, 45, 0.6)'\n                            ]\n                        }, \n                    ]\n                },\n                options: {\n                    maintainAspectRatio: false,\n                    responsive: true\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\Inte_v3.0\\\\inte_v4.0\\\\components\\\\Dashboard\\\\Index\\\\InicioEstadistica.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                },\n                __self: this\n            })\n        })\n    }));\n};\n_s(InicioEstadistica, \"1iV1NfNGoSjYVgUAg4ZC2M23tec=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = InicioEstadistica;\nvar _c;\n$RefreshReg$(_c, \"InicioEstadistica\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhc2hib2FyZC9JbmRleC9JbmljaW9Fc3RhZGlzdGljYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlEO0FBQ3pCOztBQUVULFFBQVEsQ0FBQ0ksaUJBQWlCLEdBQUcsQ0FBQzs7SUFFekMsR0FBSyxDQUFnQkQsR0FBdUUsR0FBdkVBLCtDQUFNLENBQUMsQ0FBd0MseUNBQUNFLFFBQVEsQ0FBUkEsR0FBRztRQUFJQyxNQUFNLENBQU5BLFVBQVUsQ0FBQ0QsR0FBRztRQUFuRkUsSUFBSSxHQUFVSixHQUF1RSxDQUFyRkksSUFBSSxFQUFDQyxLQUFLLEdBQUlMLEdBQXVFLENBQWhGSyxLQUFLO0lBQ2pCLEVBQUUsRUFBQ0EsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFPO0lBQ3hCLEVBQUUsR0FBRUQsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFTO0lBQzFCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSTtJQUNoQixNQUFNO3VGQUNESSxDQUFHOzs7Ozs7OzJGQUNDWCxnREFBRztnQkFDQU8sSUFBSSxFQUFFLENBQUM7b0JBQ0hLLE1BQU0sRUFBRSxDQUFDTDt3QkFBQUEsSUFBSSxDQUFDTSxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsT0FBTzs0QkFBRSxNQUFNLENBQUxBLE9BQU8sQ0FBQ0MsSUFBSTs7b0JBQUUsQ0FBQztvQkFDM0NDLFFBQVEsRUFBRSxDQUFDO3dCQUNQLENBQUM7NEJBQ0dDLEtBQUssRUFBRSxDQUFjOzRCQUNyQlYsSUFBSSxFQUFFLENBQUM7Z0NBQUEsRUFBRTtnQ0FBRSxFQUFFO2dDQUFFLENBQUM7NEJBQUEsQ0FBQzs0QkFDakJXLGVBQWUsRUFBRSxDQUFDO2dDQUNkLENBQXdCO2dDQUN4QixDQUF3QjtnQ0FDeEIsQ0FBeUI7NEJBQzdCLENBQUM7d0JBQ0wsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBRURDLE9BQU8sRUFBRSxDQUFDO29CQUNOQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQkMsVUFBVSxFQUFFLElBQUk7Z0JBQ3BCLENBQUM7Ozs7Ozs7Ozs7QUFLakIsQ0FBQztHQWhDdUJqQixpQkFBaUI7O1FBRWhCRCwyQ0FBTTs7O0tBRlBDLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Rhc2hib2FyZC9JbmRleC9JbmljaW9Fc3RhZGlzdGljYS5qcz8xOWE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhcixQaWUsRG91Z2hudXR9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIlxyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5pY2lvRXN0YWRpc3RpY2EoKSB7XHJcblxyXG4gICAgY29uc3Qge2RhdGEsZXJyb3J9ID0gdXNlU1dSKCdodHRwOi8vMTU5LjIyMy45Ny4yMTYvYXBpL3VzZXIvcHJvZHVjdCcsdXJsID0+IEZldGNoZXJHZXQodXJsKSlcclxuICAgIGlmKGVycm9yKSByZXR1cm4gJ2Vycm9yJ1xyXG4gICAgaWYoIWRhdGEpIHJldHVybiAnbG9hZGluZydcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJhclxyXG4gICAgICAgICAgICAgICAgZGF0YT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogW2RhdGEubWFwKHByb2R1Y3Q9Pihwcm9kdWN0LnR5cGUpKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdJbnN0cnVtZW50b3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogWzEyLCAxOSwgOF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNSwgODYsMC41KScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNjIsIDEyNCwgMjMsIDAuNCknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDE5NSwgMTA2LCA0NSwgMC42KSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC8+KVxyXG59Il0sIm5hbWVzIjpbIkJhciIsIlBpZSIsIkRvdWdobnV0IiwidXNlU1dSIiwiSW5pY2lvRXN0YWRpc3RpY2EiLCJ1cmwiLCJGZXRjaGVyR2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImxhYmVscyIsIm1hcCIsInByb2R1Y3QiLCJ0eXBlIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsIm9wdGlvbnMiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicmVzcG9uc2l2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Dashboard/Index/InicioEstadistica.js\n");

/***/ })

});