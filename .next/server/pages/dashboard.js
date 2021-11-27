"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InicioEstadistica)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7051);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4285);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__]);
_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function InicioEstadistica() {
    const { data , error  } = swr__WEBPACK_IMPORTED_MODULE_2___default()(`https://api.abako.xyz/api/user/movement`, (url)=>(0,_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(url)
    );
    if (error) return 'error';
    if (!data) return 'loading';
    function formatDate(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [
            day,
            month,
            year
        ].join('/');
    }
    function Last30Days() {
        var result = [];
        for(var i = 0; i < 30; i++){
            var d = new Date();
            d.setDate(d.getDate() - i);
            result.push(formatDate(d));
        }
        return result;
    }
    let entrada = [];
    let salida = [];
    for(let index = 0; index < 30; index++){
        entrada.push(0);
        salida.push(0);
    }
    let dates = Last30Days();
    data.forEach((movimiento)=>{
        if (movimiento.type === true) {
            const date = formatDate(movimiento.createdAt);
            dates.forEach((dia, i)=>{
                if (date === dia) {
                    entrada[i] = entrada[i] + 1;
                }
            });
        } else {
            const date = formatDate(movimiento.createdAt);
            dates.forEach((dia, i)=>{
                if (date === dia) {
                    salida[i] = salida[i] + 1;
                }
            });
        }
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "p-3 pt-0 text-white h-52",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Line, {
                data: {
                    labels: dates.reverse(),
                    datasets: [
                        {
                            label: 'Cantidad de salidas',
                            data: entrada.reverse(),
                            backgroundColor: 'rgba(255, 205, 86,0.5)',
                            borderColor: 'rgba(255, 205, 86,0.5)',
                            yAxisID: 'y'
                        },
                        {
                            label: 'Cantidad de entradas',
                            data: salida.reverse(),
                            backgroundColor: 'rgba(195, 106, 45, 0.6)',
                            borderColor: 'rgba(195, 106, 45, 0.6)',
                            yAxisID: 'y1'
                        }, 
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        legend: {
                            labels: {
                                // This more specific font property overrides the global property
                                font: {
                                    size: 14
                                },
                                color: '#cccccccc'
                            },
                            title: {
                                color: '#cccccccc'
                            }
                        }
                    }
                }
            })
        })
    }));
};

});

/***/ }),

/***/ 2303:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7051);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4285);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__]);
_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function InicioProductsMasVendidos() {
    const { data , error  } = useSWR(`https://api.abako.xyz/api/user/movement`, (url)=>FetcherGet(url)
    );
    if (error) return 'error';
    if (!data) return 'loading';
    let salida30d = [];
    function formatDate(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [
            day,
            month,
            year
        ].join('/');
    }
    function Last30Days() {
        var result = [];
        for(var i = 0; i < 30; i++){
            var d = new Date();
            d.setDate(d.getDate() - i);
            result.push(formatDate(d));
        }
        return result;
    }
    let dates = Last30Days();
    data.forEach((movimiento)=>{
        if (movimiento.type === false) {
            const date = formatDate(movimiento.createdAt);
            dates.forEach((dia)=>{
                if (date === dia) {
                    salida30d.push(movimiento);
                }
            });
        }
    });
    let dataquantity = [];
    let id = [];
    salida30d.forEach((salida)=>{
        if (!id.includes(salida.product.id)) {
            id.push(salida.id);
            dataquantity.push(0);
            salida30d.forEach((salidaBusqueda)=>{
                if (salidaBusqueda.product.id === salida.product.id) {
                    dataquantity[id.indexOf(salidaBusqueda.product.id)] = dataquantity[id.indexOf(salidaBusqueda.product.id)] + salidaBusqueda.quantity;
                }
            });
        }
    });
    let datafinal;
    dataquantity.forEach((valor, i)=>{
    });
    return(/*#__PURE__*/ _jsx(_Fragment, {
    }));
};

});

/***/ }),

/***/ 2634:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InicioProductsMenorStock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7051);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4285);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__]);
_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function InicioProductsMenorStock() {
    const { data , error  } = swr__WEBPACK_IMPORTED_MODULE_2___default()(`https://api.abako.xyz/api/user/product`, (url)=>(0,_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(url)
    );
    if (error) return 'error';
    if (!data) return 'loading';
    data.sort(function(a, b) {
        return a.stock - b.stock;
    });
    console.log(data);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "m-3 h-100 flex-grow grid grid-rows-5 justify-around gap-3",
        children: data.map((producto, i)=>i < 5 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-white p-4 border rounded-xl border-prueba grid grid-cols-3 gap-3 overflow-clip overflow-hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "absolute text-sm",
                        children: "STOCK"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "uppercase m-auto text-7xl",
                        children: producto.stock
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "uppercase m-auto",
                        children: producto.shop.name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "uppercase m-auto font-extralight truncate w-min text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: producto.type
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: producto.brand
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: producto.model
                            })
                        ]
                    })
                ]
            }, producto.id) : ''
        )
    }));
};

});

/***/ }),

/***/ 1006:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inicio),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dashboard_Index_Estadisticas_InicioEstadistica__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(237);
/* harmony import */ var _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7894);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4285);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Dashboard_Tiendas_Movimientos_ListMovimientos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1145);
/* harmony import */ var _components_Dashboard_Index_Estadisticas_InicioProductsMasVendidos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2303);
/* harmony import */ var _components_Dashboard_Index_Estadisticas_InicioProductsMenorStock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2634);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Dashboard_Tiendas_Movimientos_ListMovimientos__WEBPACK_IMPORTED_MODULE_6__, _components_Dashboard_Index_Estadisticas_InicioEstadistica__WEBPACK_IMPORTED_MODULE_1__, _components_Dashboard_Index_Estadisticas_InicioProductsMenorStock__WEBPACK_IMPORTED_MODULE_8__, _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__, _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_4__, _components_Dashboard_Index_Estadisticas_InicioProductsMasVendidos__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Dashboard_Tiendas_Movimientos_ListMovimientos__WEBPACK_IMPORTED_MODULE_6__, _components_Dashboard_Index_Estadisticas_InicioEstadistica__WEBPACK_IMPORTED_MODULE_1__, _components_Dashboard_Index_Estadisticas_InicioProductsMenorStock__WEBPACK_IMPORTED_MODULE_8__, _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__, _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_4__, _components_Dashboard_Index_Estadisticas_InicioProductsMasVendidos__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









function inicio() {
    const { data , error , mutate  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(`https://api.abako.xyz/api/user`, (url)=>(0,_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(url)
    );
    if (!data) return 'Loading';
    if (data.rol === 'admin' && !data.business) next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/dashboard/configuracion');
    if (data.rol == 'employee') next_router__WEBPACK_IMPORTED_MODULE_5___default().push('dashboard/productos');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        active: "Inicio",
        color: "red",
        username: data.username,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex-1 md:py-5 md:px-10 p-10 mb-10",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-5 h-full md:gap-10 gap-12 py-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rounded-xl lg:col-span-3 shadow-md border max-h-96 dark:border-prueba",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-2 inline-flex w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-14 h-14 bg-white relative -my-8 ml-5 mr-3 rounded-xl shadow-lg grid grid-cols-1 dark:bg-pruebaA3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-10 w-10 text-red-500 justify-self-center self-center",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "uppercase font-sans font-bold",
                                        children: "Estadistica"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Index_Estadisticas_InicioEstadistica__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rounded-xl lg:row-span-2 lg:col-span-2 shadow-md h-full border dark:border-prueba flex flex-col",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-2 inline-flex w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-14 h-14 bg-white relative -my-8 ml-5 mr-3 rounded-xl shadow-lg grid grid-cols-1 dark:bg-pruebaA3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-10 w-10 text-red-500 justify-self-center self-center",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "uppercase font-sans font-bold",
                                        children: "Estadistica"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Index_Estadisticas_InicioProductsMenorStock__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rounded-xl lg:col-span-3 shadow-md h-full border dark:border-prueba",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-2 inline-flex w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-14 h-14 bg-white relative -my-8 ml-5 mr-3 rounded-xl shadow-lg grid grid-cols-1 dark:bg-pruebaA3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-10 w-10 text-red-500 justify-self-center self-center",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "uppercase font-sans font-bold",
                                        children: "Estadistica"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Index_Estadisticas_InicioEstadistica__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rounded-xl lg:col-span-5 col-span-1 shadow-md border dark:border-prueba",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-2 inline-flex w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-14 h-14 bg-white relative -my-8 ml-5 mr-3 rounded-xl shadow-lg grid grid-cols-1 dark:bg-pruebaA3",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-10 w-10 text-red-500 justify-self-center self-center",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    fillRule: "evenodd",
                                                    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
                                                    clipRule: "evenodd"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "uppercase font-sans font-bold",
                                        children: "Movimientos"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Tiendas_Movimientos_ListMovimientos__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            })
                        ]
                    })
                ]
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

/***/ 7051:
/***/ ((module) => {

module.exports = require("react-chartjs-2");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [894,1,145], () => (__webpack_exec__(1006)));
module.exports = __webpack_exports__;

})();