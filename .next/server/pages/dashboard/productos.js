"use strict";
(() => {
var exports = {};
exports.id = 918;
exports.ids = [918];
exports.modules = {

/***/ 8085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ productos),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dashboard_Productos_ListProductos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6861);
/* harmony import */ var _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7894);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4285);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Dashboard_Productos_ListProductos__WEBPACK_IMPORTED_MODULE_1__, _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__, _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Dashboard_Productos_ListProductos__WEBPACK_IMPORTED_MODULE_1__, _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__, _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






function productos() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        active: "Productos",
        color: "yellow",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex-1 md:py-5 md:px-10 p-10 mb-10",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 h-full py-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "rounded-xl shadow-md h-full border dark:border-prueba",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "inline-flex w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-14 h-14 bg-white -my-8 ml-5 mr-3 rounded-xl shadow-lg grid grid-cols-1 dark:bg-pruebaA3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-10 w-10 text-yellow-500 justify-self-center self-center",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "uppercase font-sans font-bold",
                                    children: "Productos"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Productos_ListProductos__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        })
                    ]
                })
            })
        })
    }));
};
;
async function getServerSideProps({ req , res  }) {
    /*   Verificacion Token Usuario */ const token = req.cookies.accessToken;
    const token2 = req.cookies.refreshToken;
    if (!token && !token2) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        };
    }
    return {
        props: {
        }
    };
}

});

/***/ }),

/***/ 7505:
/***/ ((module) => {

module.exports = require("@headlessui/react");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2154:
/***/ ((module) => {

module.exports = require("react-table");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 549:
/***/ ((module) => {

module.exports = require("swr");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [894,1,861], () => (__webpack_exec__(8085)));
module.exports = __webpack_exports__;

})();