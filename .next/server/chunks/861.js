"use strict";
exports.id = 861;
exports.ids = [861];
exports.modules = {

/***/ 6861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ListProductos)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tiendas_newProducto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(564);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2154);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_GlobalFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7772);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Tiendas_newProducto__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([_Tiendas_newProducto__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






function ListProductos({ shop_id  }) {
    const { 0: modal , 1: setModal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: todos , 1: setTodos  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const getData = async ()=>{
        const response = await fetch(!shop_id ? `https://api.abako.xyz/api/user/product` : `https://api.abako.xyz/api/user/shop/${shop_id}/product`, {
            headers: {
                accessToken: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get('accessToken'),
                refreshToken: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get('refreshToken')
            },
            credentials: 'include'
        });
        const data = await response.json();
        setTodos(data.data);
    };
    const viewModal = ()=>{
        setModal("true");
    };
    const handleModal = ()=>{
        setModal("");
    };
    const columns = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[]
    , []);
    if (shop_id) {
        columns = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[
                {
                    Header: 'Tipo',
                    accessor: 'type'
                },
                {
                    Header: 'Marca',
                    accessor: 'brand'
                },
                {
                    Header: 'Modelo',
                    accessor: 'model'
                },
                {
                    Header: 'Precio Compra',
                    accessor: 'priceBuy'
                },
                {
                    Header: 'Precio Venta',
                    accessor: 'priceSell'
                },
                {
                    Header: 'Stock',
                    accessor: 'stock'
                }, 
            ]
        , []);
    } else {
        columns = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[
                {
                    Header: 'Tipo',
                    accessor: 'type'
                },
                {
                    Header: 'Marca',
                    accessor: 'brand'
                },
                {
                    Header: 'Modelo',
                    accessor: 'model'
                },
                {
                    Header: 'Precio Compra',
                    accessor: 'priceBuy'
                },
                {
                    Header: 'Precio Venta',
                    accessor: 'priceSell'
                },
                {
                    Header: 'Stock',
                    accessor: 'stock'
                },
                {
                    Header: 'Tienda',
                    accessor: 'shop.name'
                }
            ]
        , []);
    }
    const productsData = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[
            ...todos
        ]
    , [
        todos
    ]);
    const intance = (0,react_table__WEBPACK_IMPORTED_MODULE_4__.useTable)({
        columns,
        data: productsData,
        initialState: {
            pageIndex: 0
        }
    }, react_table__WEBPACK_IMPORTED_MODULE_4__.useGlobalFilter, react_table__WEBPACK_IMPORTED_MODULE_4__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_4__.usePagination);
    const { getTableProps , getTableBodyProps , headerGroups , rows , prepareRow , preGlobalFilteredRows , setGlobalFilter , state , page: page1 , canPreviousPage , canNextPage , pageOptions , pageCount , gotoPage , nextPage , previousPage , setPageSize , state: { pageIndex , pageSize: pageSize1  } ,  } = intance;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getData();
    }, [
        modal
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "",
            children: [
                shop_id ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: viewModal,
                                className: "p-4",
                                children: " + A\xf1adir"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-4 justify-self-end",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_GlobalFilter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    preGlobalFilteredRows: preGlobalFilteredRows,
                                    setGlobalFilter: setGlobalFilter,
                                    globalFilter: state.globalFilter
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-1",
                    children: [
                        " ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-4 justify-self-start",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_GlobalFilter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    preGlobalFilteredRows: preGlobalFilteredRows,
                                    setGlobalFilter: setGlobalFilter,
                                    globalFilter: state.globalFilter
                                })
                            ]
                        })
                    ]
                }),
                modal == "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tiendas_newProducto__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    shop_id: shop_id,
                    handleModal: handleModal
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    ...getTableProps(),
                    className: "items-center bg-transparent w-full border-collapse text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            children: headerGroups.map((headerGroup)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    ...headerGroup.getHeaderGroupProps(),
                                    children: headerGroup.headers.map((column)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                            ...column.getHeaderProps(column.getSortByToggleProps()),
                                            className: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold",
                                            children: [
                                                column.render('Header'),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: column.isSorted ? column.isSortedDesc ? "▼" : '▲' : ''
                                                })
                                            ]
                                        })
                                    )
                                })
                            )
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            ...getTableBodyProps(),
                            children: page1.length > 0 && !loading ? page1.map((row, i)=>{
                                prepareRow(row);
                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    ...row.getRowProps(),
                                    children: row.cells.map((cell)=>{
                                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            ...cell.getCellProps(),
                                            className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 ",
                                            children: cell.render('Cell')
                                        }));
                                    })
                                }));
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "loading..."
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "pagination grid grid-cols-3 px-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "justify-self-start",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "Ir a la pag.:",
                                        ' ',
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "number",
                                            defaultValue: pageIndex + 1,
                                            onChange: (e)=>{
                                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                                gotoPage(page);
                                            },
                                            style: {
                                                width: '100px'
                                            }
                                        })
                                    ]
                                }),
                                ' '
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "justify-self-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>gotoPage(0)
                                    ,
                                    disabled: !canPreviousPage,
                                    children: '<<'
                                }),
                                ' ',
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>previousPage()
                                    ,
                                    disabled: !canPreviousPage,
                                    children: '<'
                                }),
                                ' ',
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>nextPage()
                                    ,
                                    disabled: !canNextPage,
                                    children: '>'
                                }),
                                ' ',
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>gotoPage(pageCount - 1)
                                    ,
                                    disabled: !canNextPage,
                                    children: '>>'
                                }),
                                ' ',
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "Pagina",
                                        ' ',
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                            children: [
                                                pageIndex + 1,
                                                " of ",
                                                pageOptions.length
                                            ]
                                        }),
                                        ' '
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "justify-self-end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                value: pageSize1,
                                onChange: (e)=>{
                                    setPageSize(Number(e.target.value));
                                },
                                children: [
                                    10,
                                    20,
                                    30,
                                    40,
                                    50
                                ].map((pageSize)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                        value: pageSize,
                                        children: [
                                            "Mostrar ",
                                            pageSize
                                        ]
                                    }, pageSize)
                                )
                            })
                        })
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 564:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NewEmpleados)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function NewEmpleados({ handleModal , shop_id  }) {
    const { 0: employeeState , 1: setEmployeeState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    });
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setEmployeeState((prevState)=>({
                ...prevState,
                [name]: value
            })
        );
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const res = await fetch(`https://api.abako.xyz/api/user/shop/${shop_id}/product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accessToken: js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get('accessToken'),
                refreshToken: js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get('refreshToken')
            },
            body: JSON.stringify(employeeState),
            credentials: 'include'
        });
        (0,swr__WEBPACK_IMPORTED_MODULE_3__.mutate)(`https://api.abako.xyz/api/user/shop/${shop_id}/product`);
        handleModal();
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "modal open py-32 px-10 min-h-screen",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-white dark:bg-gray-100 rounded-3xl p-10 md:w-3/4 lg:w-1/2 mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "dark:text-white font-bold text-gray-600 ",
                        children: "Nuevo Producto"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: "modal-conteiner",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center mb-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "name",
                                        className: "inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600",
                                        children: "Tipo"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        id: "firts",
                                        name: "type",
                                        placeholder: "Tipo",
                                        className: "flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none",
                                        onChange: handleChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center mb-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "name",
                                        className: "inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600",
                                        children: "Marca"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        id: "last",
                                        name: "brand",
                                        placeholder: "Marca",
                                        className: "flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none",
                                        onChange: handleChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center mb-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "name",
                                        className: "inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600",
                                        children: "Modelo"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        id: "user",
                                        name: "model",
                                        placeholder: "Modelo",
                                        className: "flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none",
                                        onChange: handleChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center mb-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "name",
                                        className: "inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600",
                                        children: "Precio de Compra"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        id: "pass",
                                        name: "priceBuy",
                                        placeholder: "Precio de Compra",
                                        className: "flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none",
                                        onChange: handleChange,
                                        min: "0.00",
                                        max: "1000000.00",
                                        step: "0.01"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center mb-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "name",
                                        className: "inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600",
                                        children: "Precio de Venta"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        id: "email",
                                        name: "priceSell",
                                        placeholder: "Precio de Venta",
                                        className: "flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none",
                                        onChange: handleChange,
                                        min: "0.00",
                                        max: "1000000.00",
                                        step: "0.01"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center mb-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "name",
                                        className: "inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600",
                                        children: "Stock"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        id: "email",
                                        name: "stock",
                                        placeholder: "Stock",
                                        className: "flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none",
                                        onChange: handleChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-right mx-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "py-3 px-8 bg-green-400 text-white font-bold mx-2",
                                        type: "submit",
                                        children: "Agregar"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "py-3 px-8 bg-red-400 text-white font-bold",
                                        onClick: handleModal,
                                        children: "Cerrar"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
};

});

/***/ })

};
;