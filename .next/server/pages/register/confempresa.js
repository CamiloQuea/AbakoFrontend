"use strict";
(() => {
var exports = {};
exports.id = 868;
exports.ids = [868];
exports.modules = {

/***/ 2563:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ConfiguracionRegister)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__]);
js_cookie__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function ConfiguracionRegister() {
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        email: '',
        password: ''
    });
    const handleChange = async (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setState((prevState)=>({
                ...prevState,
                [name]: value
            })
        );
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const res = await fetch('https://api.abako.xyz/api/user/business', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                accessToken: js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get('accessToken'),
                refreshToken: js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get('refreshToken')
            },
            body: JSON.stringify(state),
            credentials: 'include'
        });
        js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].remove('accessToken');
        js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].remove('refreshToken');
        next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/login');
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSubmit,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid lg:grid-cols-3 grid-cols-1 mt-6 dark:text-white text-gray-900 gap-2 p-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Nombre de Empresa :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "xl:col-span-2 text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: handleChange,
                        className: "bg-transparent border-b-2 w-3/4 xl:text-left text-center focus:outline-none",
                        type: "text",
                        id: "name",
                        name: "name"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Ruc :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "xl:col-span-2 text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: handleChange,
                        className: " bg-transparent border-b-2 w-3/4 xl:text-left text-center focus:outline-none",
                        type: "number",
                        id: "ruc",
                        name: "ruc"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Descripcion :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "xl:col-span-2 text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: handleChange,
                        className: "bg-transparent border-b-2 w-3/4 xl:text-left text-center focus:outline-none",
                        type: "text",
                        id: "description",
                        name: "description"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "xl:col-start-2 col-start-1 grid grid-cols-2 gap-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: " bg-gray-300 hover:bg-gray-700 hover:text-gray-200 text-gray-700 p-2 rounded-md tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-300",
                        children: "Guardar"
                    })
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 8734:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9915);
/* harmony import */ var _components_Register_ConfiguracionRegister__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Register_ConfiguracionRegister__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Register_ConfiguracionRegister__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_1__.withRouter)(function confempresa({ router  }) {
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        username: router.query.username,
        password: router.query.password
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        const res = await fetch('https://api.abako.xyz/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state),
            credentials: 'include'
        });
        const resJson = await res.json() // capturo los datos que se envia desde el API en formato Json
        ;
        const accessToken = await resJson.data.accessToken; // capturo el token que se envia desde el API
        const refreshToken = await resJson.data.refreshToken; // capturo el token que se envia desde el API
        js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].set("accessToken", accessToken, {
            expires: 1 / 24,
            sameSite: 'Strict'
        }); // Seteo del cookie hacia la pagina
        js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].set("refreshToken", refreshToken, {
            expires: 1 / 24,
            sameSite: 'Strict'
        }); // Seteo del cookie hacia la pagina
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-no-repeat bg-cover bg-center relative",
            style: {
                backgroundImage: 'url(../edited2.png)'
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute bg-gradient-to-tr from-black to-gray-600 opacity-50 inset-0 z-0"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "min-h-screen grid grid-cols-2 mx-0 justify-center test2 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "justify-self-center self-center text-right p-10 sm:max-w-5xl xl:max-w-2xl z-10 hidden lg:flex",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "self-start text-gray-200",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "mb-3 brightness-90 text-5xl font-test",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/logo.png",
                                            width: "150"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "ABAKO"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " justify-self-center self-center z-10 col-span-2 lg:col-span-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-10 bg-gray-700 mx-auto rounded-2xl w-100 bg-opacity-50 test",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mb-4 justify-self-auto",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "font-semibold text-3xl text-white text-center",
                                            children: "Configuracion de Empresa"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Register_ConfiguracionRegister__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "pt-5 text-center text-gray-400 text-xs",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Copyright \xa9 Abako 2021-2022"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
}));
async function getServerSideProps({ req , res  }) {
    return {
        props: {
        }
    };
}

});

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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
var __webpack_exports__ = (__webpack_exec__(8734));
module.exports = __webpack_exports__;

})();