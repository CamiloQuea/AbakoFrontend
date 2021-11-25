"use strict";
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 9380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function navbar({ colors , name , user  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid md:grid-cols-4 grid-cols-2 my-2 w-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-start-1 text-left font-semibold text-lg text-white navbar",
                "data-text": `/${name}`,
                children: [
                    "/",
                    name
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-start-4 text-right",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `text-${colors}-700 font-semibold text-lg`,
                        children: "Bienvenido"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "hidden md:inline-block",
                        children: [
                            ", ",
                            user
                        ]
                    })
                ]
            })
        ]
    }));
};
;


/***/ }),

/***/ 7894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_icons_DarkLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3707);
/* harmony import */ var _lib_icons_OptionsIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4401);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9380);
/* harmony import */ var _lib_removeCookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1425);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4285);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_removeCookie__WEBPACK_IMPORTED_MODULE_8__, _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_11__]);
([_lib_removeCookie__WEBPACK_IMPORTED_MODULE_8__, _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












function sidebar({ children , active , color  }) {
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { resolvedTheme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
    const { 0: data1 , 1: setTodos  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>setMounted(true)
    , []);
    const { 0: activeOption , 1: setActiveOption  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(active);
    // const { data, error, mutate } = useSWR(`https://api.abako.xyz/api/user`, url => FetcherGet(url));
    // if (error) return 'Ocurrio un error:'
    // if (!data) return 'Loading'
    const getData = async ()=>{
        const response = await fetch(`https://api.abako.xyz/api/user`, {
            credentials: 'include'
        });
        const data = await response.json();
        setTodos(data.data);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getData();
    }, []);
    //TooltipFunction();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Dashboard"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex md:flex-row h-screen flex-col dark:bg-pruebaA4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border md:flex-grow-0 w-full md:w-20 flex md:flex-col flex-row fixed bottom-0 md:relative h-12 md:h-auto flex-grow overflow-y-visible bg-gray-100",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "border-b-2 md:block hidden mt-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mb-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "relative left-1/2 transform -translate-x-1/2 block w-14 h-14 rounded-full",
                                        src: "/user.png"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex md:flex-row justify-center flex-col",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "my-14 flex flex-row md:flex-col w-screen",
                                    children: [
                                        data1.rol === 'employee' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: `menu-opciones efectohover hover:border-red-700  ${activeOption == 'Inicio' ? 'border-2 border-red-700 rounded-lg md:transform-none transform -translate-y-0.5' : 'border-transparent border-2'}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                href: "/dashboard",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "p-1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_icons_OptionsIcons__WEBPACK_IMPORTED_MODULE_4__/* .IconInicio */ .XE, {
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: `menu-opciones efectohover hover:border-yellow-400 ${activeOption == 'Productos' ? 'border-2 border-yellow-400 rounded-lg md:transform-none transform -translate-y-0.5' : 'border-transparent border-2'}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                href: "/dashboard/productos",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "p-1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_icons_OptionsIcons__WEBPACK_IMPORTED_MODULE_4__/* .IconProductos */ .LW, {
                                                    })
                                                })
                                            })
                                        }),
                                        data1.rol === 'employee' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: `menu-opciones efectohover hover:border-green-700 ${activeOption == 'Tiendas' ? 'border-2 border-green-800 rounded-lg md:transform-none transform -translate-y-0.5' : 'border-transparent border-2'}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                href: "/dashboard/tiendas",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "p-1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_icons_OptionsIcons__WEBPACK_IMPORTED_MODULE_4__/* .IconTiendas */ .vz, {
                                                    })
                                                })
                                            })
                                        }),
                                        data1.rol === 'employee' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: `menu-opciones efectohover hover:border-blue-700 ${activeOption == 'Config' ? 'border-2 border-blue-700 rounded-lg md:transform-none transform -translate-y-0.5' : 'border-transparent border-2'}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                href: "/dashboard/configuracion",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "p-1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_icons_OptionsIcons__WEBPACK_IMPORTED_MODULE_4__/* .IconConfiguracion */ .YC, {
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "md:flex flex-row justify-center flex-grow items-end my-10 break-normal cursor-pointer hidden",
                                onClick: ()=>{
                                    {
                                        (0,_lib_removeCookie__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
                                    }
                                    next_router__WEBPACK_IMPORTED_MODULE_9___default().push("/login");
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_icons_OptionsIcons__WEBPACK_IMPORTED_MODULE_4__/* .IconLogout */ .gt, {
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-grow flex flex-col overflow-y-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-12 flex flex-row px-6 bg-gray-100",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    colors: color,
                                    name: active,
                                    user: data1.username
                                })
                            }),
                            children
                        ]
                    })
                ]
            })
        ]
    }));
};
;

});

/***/ }),

/***/ 4285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FetcherGet)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

async function FetcherGet(url) {
    return fetch(url, {
        credentials: 'include'
    }).then((res)=>res.json()
    ).then((json)=>json.data
    );
};

});

/***/ }),

/***/ 3707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports Dark, Light */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Dark() {
    return(/*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ _jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            })
        })
    }));
}
function Light() {
    return(/*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ _jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            })
        })
    }));
}


/***/ }),

/***/ 4401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XE": () => (/* binding */ IconInicio),
/* harmony export */   "LW": () => (/* binding */ IconProductos),
/* harmony export */   "vz": () => (/* binding */ IconTiendas),
/* harmony export */   "YC": () => (/* binding */ IconConfiguracion),
/* harmony export */   "gt": () => (/* binding */ IconLogout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function IconInicio() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            })
        })
    }));
}
function IconProductos() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            })
        })
    }));
}
function IconTiendas() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
            })
        })
    }));
}
function IconConfiguracion() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                })
            ]
        })
    }));
}
function IconLogout() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            })
        })
    }));
}


/***/ }),

/***/ 1425:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ removeCookie)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

async function removeCookie() {
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove('accessToken');
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove('refreshToken');
    await fetch('https://api.abako.xyz/api/session', {
        method: 'PATCH',
        credentials: 'include'
    });
};

});

/***/ })

};
;